"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendContactMessage } from "@/app/[lang]/contact/actions";
import { buttonStyles } from "@/components/ui/button-link";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/cn";
import { contactTopics, type ContactField, type ContactState } from "@/lib/contact";

type Labels = Dictionary["contact"]["form"];

/** Envoltorio: «Enviar otro mensaje» vuelve a montar el formulario desde cero. */
export function ContactForm({ labels, privacyHref }: { labels: Labels; privacyHref: string }) {
  const [attempt, setAttempt] = useState(0);

  return (
    <ContactFormInner
      key={attempt}
      labels={labels}
      privacyHref={privacyHref}
      onReset={() => setAttempt((n) => n + 1)}
    />
  );
}

const initialState: ContactState = { status: "idle" };

function ContactFormInner({
  labels,
  privacyHref,
  onReset,
}: {
  labels: Labels;
  privacyHref: string;
  onReset: () => void;
}) {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Todo controlado con estado: React reinicia los campos no controlados tras
  // cada envío, y así no se pierde nada si el envío devuelve un error.
  const [values, setValues] = useState({ topic: "", name: "", email: "", message: "" });
  const update = (field: keyof typeof values) => (value: string) =>
    setValues((current) => ({ ...current, [field]: value }));
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Momento en que se mostró el formulario (antispam: tiempo mínimo de envío).
  // Se fija en el navegador tras montar; en el servidor no tendría sentido.
  const [startedAt, setStartedAt] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- valor que solo existe en el navegador
    setStartedAt(String(Date.now()));
  }, []);

  // Tras un envío con errores, el foco va al primer campo incorrecto.
  useEffect(() => {
    if (state.status !== "invalid") return;
    const first = formRef.current?.querySelector<HTMLElement>(
      '[aria-invalid="true"], [data-invalid]',
    );
    first?.focus();
  }, [state]);

  const invalid = (field: ContactField) =>
    state.status === "invalid" && state.fields.includes(field);

  if (state.status === "sent") {
    return (
      <div role="status" className="border-t border-ink/15 pt-8">
        <p className="font-display text-title">{labels.success.title}</p>
        <p className="mt-4 max-w-md text-ink-muted">{labels.success.text}</p>
        <button type="button" onClick={onReset} className={buttonStyles("secondary", "mt-8")}>
          {labels.success.again}
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-10">
      {/* Antispam: campos ocultos */}
      <input type="hidden" name="startedAt" value={startedAt} />
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label>
          {labels.honeypot}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset aria-describedby={invalid("topic") ? "topic-error" : undefined}>
        <legend className="label text-ink-muted">{labels.topic}</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {contactTopics.map((topic) => (
            <label
              key={topic}
              className="cursor-pointer border border-ink/25 px-4 py-2.5 text-sm transition-colors hover:border-ink has-checked:border-ink has-checked:bg-ink has-checked:text-paper has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink"
            >
              <input
                type="radio"
                name="topic"
                value={topic}
                checked={values.topic === topic}
                onChange={(event) => update("topic")(event.target.value)}
                data-invalid={invalid("topic") || undefined}
                className="sr-only"
              />
              {labels.topics[topic]}
            </label>
          ))}
        </div>
        <FieldError id="topic-error" show={invalid("topic")} message={labels.errors.topic} />
      </fieldset>

      <div className="grid gap-10 md:grid-cols-2">
        <TextField
          id="name"
          label={labels.name}
          value={values.name}
          onChange={update("name")}
          autoComplete="name"
          maxLength={100}
          error={invalid("name") ? labels.errors.name : undefined}
        />
        <TextField
          id="email"
          type="email"
          label={labels.email}
          value={values.email}
          onChange={update("email")}
          autoComplete="email"
          maxLength={254}
          error={invalid("email") ? labels.errors.email : undefined}
        />
      </div>

      <TextField
        id="message"
        multiline
        label={labels.message}
        placeholder={labels.messagePlaceholder}
        value={values.message}
        onChange={update("message")}
        maxLength={5000}
        error={invalid("message") ? labels.errors.message : undefined}
      />

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="privacy"
            checked={privacyAccepted}
            onChange={(event) => setPrivacyAccepted(event.target.checked)}
            aria-invalid={invalid("privacy") || undefined}
            aria-describedby={invalid("privacy") ? "privacy-error" : undefined}
            className="mt-0.5 size-4 shrink-0 accent-ink"
          />
          <span>
            {labels.privacyBefore}{" "}
            <Link href={privacyHref} className="underline underline-offset-4 hover:text-accent-ink">
              {labels.privacyLink}
            </Link>
            .
          </span>
        </label>
        <FieldError id="privacy-error" show={invalid("privacy")} message={labels.errors.privacy} />
      </div>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={pending}
          className={buttonStyles("primary", "disabled:cursor-wait disabled:opacity-60")}
        >
          {pending ? labels.sending : labels.submit}
        </button>

        {/* Mensajes generales, anunciados por los lectores de pantalla */}
        <p role="alert" className="text-sm text-accent-ink empty:hidden">
          {state.status === "invalid" && labels.errors.summary}
          {state.status === "error" && labels.errors[state.reason]}
        </p>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  multiline = false,
  type = "text",
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  multiline?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  const shared = {
    id,
    name: id,
    value,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: cn(
      // Foco visible: la línea inferior pasa a tinta y se duplica su grosor (sombra de 1px).
      "mt-3 block w-full border-b bg-transparent py-3 text-lg transition-[border-color,box-shadow] placeholder:text-ink-muted/70 focus:border-ink focus:shadow-[0_1px_0_0_var(--color-ink)] focus:outline-none",
      error ? "border-accent-ink" : "border-ink/30",
    ),
    ...rest,
  };

  return (
    <div>
      <label htmlFor={id} className="label text-ink-muted">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={6} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input {...shared} type={type} onChange={(event) => onChange(event.target.value)} />
      )}
      <FieldError id={`${id}-error`} show={Boolean(error)} message={error ?? ""} />
    </div>
  );
}

function FieldError({ id, show, message }: { id: string; show: boolean; message: string }) {
  if (!show) return null;
  return (
    <p id={id} className="mt-2 text-sm text-accent-ink">
      {message}
    </p>
  );
}
