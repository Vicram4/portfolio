import type { Dictionary } from "./es";

const en: Dictionary = {
  metadata: {
    description:
      "Full stack developer with a background in marketing. I build websites and apps that work well and communicate better.",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    languageSwitcher: "Language",
    opensInNewTab: "(opens in a new tab)",
  },
  menu: {
    open: "Menu",
    close: "Close",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  home: {
    intro:
      "Full stack developer with a background in marketing. I build websites and apps that work well and communicate better.",
    availability: "Open to full-time roles and freelance projects",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    featured: {
      eyebrow: "Featured projects",
      title: "Selected work",
      viewAll: "View all projects",
    },
    services: {
      eyebrow: "What I do",
      title: "How I can help",
      example: "Example",
    },
    process: {
      eyebrow: "My process",
      title: "From idea to launch",
      steps: [
        {
          title: "Idea",
          text: "I understand the goal, the audience and the problem before writing a single line of code.",
        },
        {
          title: "Design",
          text: "Structure, identity and interface, shaped around the people who use them and what they need to achieve.",
        },
        {
          title: "Development",
          text: "Maintainable, tested and secure code. I use AI as a tool: I lead, decide and review every piece.",
        },
        {
          title: "Launch",
          text: "Deployment, performance, SEO and accessibility. And afterwards, maintenance and improvements.",
        },
      ],
    },
    closing: {
      title: "Got a project or a job offer?",
      highlight: "Let’s talk",
      cta: "Contact me",
    },
  },
  project: {
    year: "Year",
    kind: "Type",
    role: "Role",
    duration: "Duration",
    stack: "Stack",
    links: "Links",
    live: "Live demo",
    maintenance: "Demo under maintenance",
    repo: "Code on GitHub",
    viewCase: "View case study",
    caseStudy: "Case study",
  },
  projects: {
    eyebrow: "Projects",
    title: "Designed and built end to end",
    moreComing: "More projects on the way.",
    backToAll: "All projects",
    sections: {
      goal: "Goal",
      challenge: "The challenge",
      features: "Features",
      decisions: "Technical decisions",
      stack: "Technologies",
      gallery: "Gallery",
      credits: "How I built it",
    },
  },
  copyEmail: {
    copy: "Copy",
    copied: "Copied",
    copiedAnnouncement: "Email copied to clipboard",
  },
  about: {
    eyebrow: "About",
    title: "A developer with a business mindset",
    intro: [
      "I’m Víctor Ramos, a full stack developer based in Madrid. I came to programming from marketing: I first trained in Marketing and Advertising and worked analysing data and managing social media; then I studied Web Application Development and made the move into development.",
      "That mix shapes how I work. I don’t just build websites and apps that work: I also think about who they’re for, what they need to communicate and how to tell whether they succeed. My time as an SAP integrator also taught me how systems work inside real companies.",
      "Today I work as a freelance web developer and keep learning: I’m studying Computer Engineering at the UOC.",
    ],
    approach: {
      eyebrow: "My approach",
      title: "How I see the work",
      items: [
        {
          title: "Product before code",
          text: "I start with the goal and the people who will use it. The technology comes afterwards, in service of that.",
        },
        {
          title: "The quality you don’t see",
          text: "Accessibility, performance, security and tests: what keeps a project working well over time.",
        },
        {
          title: "AI as a tool, my own judgement",
          text: "I use AI to move faster, but every decision and every piece goes through my review before I sign it off.",
        },
      ],
    },
    path: {
      eyebrow: "Background",
      title: "Experience and education",
      experience: "Experience",
      education: "Education",
      present: "Present",
      ongoing: "Ongoing",
    },
    skills: {
      eyebrow: "Technologies",
      title: "What I work with",
      note: "Only what my real projects and jobs back up. The list grows with every new project.",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell me what you have in mind",
    intro:
      "A job offer, a web project or just a question: write to me and I’ll get back to you as soon as I can.",
    channels: "Direct channels",
    location: "Location",
    form: {
      title: "Form",
      topic: "What would you like to talk about?",
      topics: {
        job: "Job offer",
        project: "Web project",
        other: "Other",
      },
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me the essentials: what you need, timelines, links…",
      privacyBefore: "I have read and accept the",
      privacyLink: "privacy policy",
      honeypot: "Leave this field empty",
      submit: "Send message",
      sending: "Sending…",
      errors: {
        topic: "Choose a topic.",
        name: "Enter your name (between 2 and 100 characters).",
        email: "Enter a valid email address.",
        message: "Your message must be between 10 and 5,000 characters.",
        privacy: "Please accept the privacy policy so I can reply to you.",
        tooFast: "That was a bit too fast. Wait a few seconds and try again.",
        server: "Your message couldn’t be sent. Please try again or email me directly.",
        summary: "Please check the highlighted fields.",
      },
      success: {
        title: "Message sent!",
        text: "Thanks for getting in touch. I’ll reply as soon as I can to the email you provided.",
        again: "Send another message",
      },
    },
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: October 2026",
    sections: [
      {
        title: "Data controller",
        text: "Víctor Ramos Berzosa. Contact: victorramos.devs@gmail.com.",
      },
      {
        title: "What data I collect",
        text: "Only what you send through the contact form: your name, your email, the topic and your message.",
      },
      {
        title: "What I use it for",
        text: "Solely to read and reply to your message. I don’t use it for advertising and I don’t share it with third parties.",
      },
      {
        title: "Legal basis",
        text: "Your consent, given by ticking the box on the form (Article 6(1)(a) GDPR). You can withdraw it at any time.",
      },
      {
        title: "Who else processes it",
        text: "Your message is delivered to my inbox through Resend, Inc. (United States), which acts as a data processor for that delivery only. The site is hosted by Vercel Inc. (United States), which may process technical connection data, such as your IP address, to serve and protect the site. Both provide the safeguards required by the GDPR for international transfers.",
      },
      {
        title: "How long I keep it",
        text: "For as long as needed to handle your enquiry and for twelve months at most, unless it leads to a professional relationship.",
      },
      {
        title: "Your rights",
        text: "You can request access, rectification, erasure, objection, restriction or portability of your data by writing to victorramos.devs@gmail.com. If you believe your rights have not been respected, you can file a complaint with the Spanish Data Protection Agency (aepd.es).",
      },
      {
        title: "Cookies",
        text: "This site only uses one technical cookie to remember your chosen language. It uses no analytics or advertising cookies.",
      },
    ],
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
    backHome: "Back to home",
  },
};

export default en;
