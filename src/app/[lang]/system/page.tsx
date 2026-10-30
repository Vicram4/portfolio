import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { ButtonLink, buttonStyles } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/content/profile";
import { getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { altFontTokens, altFontVariables } from "./alt-fonts";

// Página interna de la Fase 3: catálogo del sistema de diseño.
// Texto solo en español a propósito: no forma parte de la web pública.

export const metadata: Metadata = {
  title: "Sistema de diseño",
  robots: { index: false, follow: false },
};

export default async function SystemPage() {
  const locale = await getLocale();

  return (
    <div className="shell space-y-32 section-y md:space-y-48">
      <SectionHeading
        as="h1"
        index="v0.1"
        eyebrow="Interno · Fase 3"
        title={
          <>
            Sistema de diseño <em className="text-ink-muted">«Taller editorial»</em>
          </>
        }
      />

      {/* 01 — Tipografía ------------------------------------------------ */}
      <Section index="01" eyebrow="Tipografía" title="Elige una combinación">
        <div className="grid gap-6 lg:grid-cols-2">
          <FontSpecimen
            option="A"
            name="Instrument Serif · Inter Tight · JetBrains Mono"
            note="Editorial clásica. El contraste serif + mono expresa «diseño + código»."
          />
          <FontSpecimen
            option="B"
            name="Bricolage Grotesque · Geist · Geist Mono"
            note="Grotesca contemporánea. Más técnica y directa, menos editorial."
            className={altFontVariables}
            style={altFontTokens}
            displayClass="font-semibold"
          />
        </div>
      </Section>

      {/* 02 — Escala ----------------------------------------------------- */}
      <Section index="02" eyebrow="Escala tipográfica" title="Tamaños fluidos">
        <dl className="divide-y divide-ink/10 border-y border-ink/10">
          <ScaleRow name="display" spec="56 → 176 px · Instrument Serif">
            <span className="font-display text-display">Víctor</span>
          </ScaleRow>
          <ScaleRow name="headline" spec="40 → 96 px · Instrument Serif">
            <span className="font-display text-headline">Proyectos</span>
          </ScaleRow>
          <ScaleRow name="title" spec="28 → 44 px · Instrument Serif">
            <span className="font-display text-title">Café Sinnoh</span>
          </ScaleRow>
          <ScaleRow name="lead" spec="18 → 22 px · Inter Tight">
            <span className="text-lead">Párrafo introductorio de una sección o proyecto.</span>
          </ScaleRow>
          <ScaleRow name="base" spec="16 px · Inter Tight">
            <span>Texto de lectura para descripciones, decisiones y detalles técnicos.</span>
          </ScaleRow>
          <ScaleRow name="label" spec="12 px · JetBrains Mono · mayúsculas">
            <span className="label">Next.js · TypeScript · 2026</span>
          </ScaleRow>
        </dl>
      </Section>

      {/* 03 — Color ------------------------------------------------------ */}
      <Section index="03" eyebrow="Color" title="Crema, tinta y naranja">
        <ul className="grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3 lg:grid-cols-6">
          {colors.map((color) => (
            <li key={color.token} className="bg-paper">
              <div className={cn("h-28 border-b border-ink/10", color.swatch)} />
              <div className="space-y-1 p-4">
                <p className="font-medium">{color.token}</p>
                <p className="label text-ink-muted">{color.hex}</p>
                <p className="label text-ink-muted">{color.contrast}</p>
                <p className="pt-2 text-sm text-ink-muted">{color.use}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 04 — Retícula --------------------------------------------------- */}
      <Section index="04" eyebrow="Retícula" title="12 columnas, 4 en móvil">
        <div className="grid-editorial">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={cn(
                "flex h-32 items-end bg-accent/15 p-2 label text-accent-ink",
                i >= 4 && "hidden md:flex",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-ink-muted">
          Ancho máximo de 1440 px con márgenes laterales fluidos (20 → 48 px). Las composiciones
          pueden romper la simetría ocupando columnas distintas, sin perder el orden.
        </p>
      </Section>

      {/* 05 — Componentes ------------------------------------------------ */}
      <Section index="05" eyebrow="Componentes" title="Piezas base">
        <div className="space-y-16">
          <Demo name="ButtonLink · primary / secondary">
            <ButtonLink href={href(locale, "projects")}>Ver proyectos</ButtonLink>
            <ButtonLink href={href(locale, "contact")} variant="secondary">
              Contactar
            </ButtonLink>
            <button type="button" className={buttonStyles("primary")}>
              &lt;button&gt; con buttonStyles()
            </button>
          </Demo>

          <Demo name="TextLink · interno / externo">
            <TextLink href={href(locale, "about")}>Enlace interno</TextLink>
            <TextLink
              href="https://nextjs.org"
              external
              newTabHint="(se abre en una pestaña nueva)"
            >
              Enlace externo
            </TextLink>
          </Demo>

          <Demo name="Tag">
            <Tag>Next.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Tailwind CSS</Tag>
          </Demo>

          <Demo name="SectionHeading">
            <div className="w-full">
              <SectionHeading index="01" eyebrow="Proyectos" title="Trabajo seleccionado" />
            </div>
          </Demo>
        </div>
      </Section>

      {/* 06 — Movimiento ------------------------------------------------- */}
      <Section index="06" eyebrow="Movimiento" title="Sutil y con intención">
        <p className="mb-10 max-w-2xl text-ink-muted">
          Haz scroll: los bloques aparecen al entrar en pantalla, solo con CSS. Si el sistema tiene
          activado «reducir movimiento», se muestran sin animación. Curvas:{" "}
          <code>ease-out-expo</code> para entradas, <code>ease-in-out-quart</code> para
          transiciones.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {["Idea", "Diseño", "Desarrollo"].map((step, i) => (
            <div key={step} className="reveal border border-ink/15 p-6">
              <p className="label text-accent-ink">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-16 font-display text-title">{step}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

const colors = [
  { token: "paper", hex: "#F3EEE6", contrast: "Fondo", swatch: "bg-paper", use: "Fondo principal" },
  {
    token: "paper-deep",
    hex: "#E9E2D6",
    contrast: "Fondo",
    swatch: "bg-paper-deep",
    use: "Paneles y zonas destacadas",
  },
  {
    token: "ink",
    hex: "#151412",
    contrast: "15.9 : 1",
    swatch: "bg-ink",
    use: "Texto y estructura",
  },
  {
    token: "ink-muted",
    hex: "#5C574F",
    contrast: "6.2 : 1",
    swatch: "bg-ink-muted",
    use: "Texto secundario",
  },
  {
    token: "accent",
    hex: "#FF5A1F",
    contrast: "2.7 : 1",
    swatch: "bg-accent",
    use: "Gráficos, fondos, texto muy grande",
  },
  {
    token: "accent-ink",
    hex: "#B5400F",
    contrast: "4.9 : 1",
    swatch: "bg-accent-ink",
    use: "Naranja para texto pequeño",
  },
];

function Section({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-12">
      <SectionHeading index={index} eyebrow={eyebrow} title={title} />
      {children}
    </section>
  );
}

function FontSpecimen({
  option,
  name,
  note,
  className,
  style,
  displayClass,
}: {
  option: string;
  name: string;
  note: string;
  className?: string;
  style?: CSSProperties;
  displayClass?: string;
}) {
  return (
    <article
      className={cn("border border-ink/15 bg-paper p-6 font-sans md:p-10", className)}
      style={style}
    >
      <p className="flex justify-between gap-4 label text-ink-muted">
        <span className="text-accent-ink">Opción {option}</span>
        <span className="text-right">{name}</span>
      </p>

      <p
        className={cn(
          "mt-12 font-display text-[clamp(3rem,2rem+4vw,6rem)] leading-[0.9]",
          displayClass,
        )}
      >
        {profile.name}
      </p>
      <p className={cn("mt-6 font-display text-title text-balance", displayClass)}>
        Diseño <em>y</em> código, de la idea a la publicación.
      </p>
      <p className="mt-6 max-w-md text-ink-muted">
        Texto de muestra. Desarrollo web full stack con criterio visual: interfaces cuidadas, código
        mantenible y atención al detalle.
      </p>
      <p className="mt-8 label">Next.js · TypeScript · Tailwind CSS — 2026</p>
      <p className="mt-2 font-mono text-sm text-ink-muted">0123456789 ¿¡ÁÉÍÓÚÑ!? → ↗</p>

      <p className="mt-10 border-t border-ink/10 pt-4 text-sm text-ink-muted">{note}</p>
    </article>
  );
}

function ScaleRow({ name, spec, children }: { name: string; spec: string; children: ReactNode }) {
  return (
    <div className="grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:items-baseline">
      <dt className="space-y-1">
        <p className="font-medium">text-{name}</p>
        <p className="label text-ink-muted">{spec}</p>
      </dt>
      <dd className="min-w-0 break-words">{children}</dd>
    </div>
  );
}

function Demo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="space-y-6">
      <p className="label text-ink-muted">{name}</p>
      <div className="flex flex-wrap items-center gap-6">{children}</div>
    </div>
  );
}
