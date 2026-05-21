"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Course } from "../../course-data";
import { coursePath, courses, img, instagram, pagePath, whatsappLink } from "../../course-data";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.76, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CourseButton({
  href,
  label,
  variant = "primary",
  className = ""
}: {
  href: string;
  label: string;
  variant?: "primary" | "soft" | "dark";
  className?: string;
}) {
  const styles = {
    primary: "bg-terracotta text-white hover:bg-coffee before:via-white/30",
    soft: "border border-coffee/10 bg-white/62 text-coffee hover:bg-champagne/70 before:via-gold/25",
    dark: "bg-coffee text-porcelain hover:bg-ink before:via-gold/25"
  }[variant];

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-luxe px-6 text-sm font-extrabold shadow-soft transition duration-300 before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:-skew-x-12 before:bg-gradient-to-r before:from-white/0 before:to-white/0 before:opacity-0 before:transition before:duration-700 hover:-translate-y-0.5 hover:before:left-[120%] hover:before:opacity-100 ${styles} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {label}
        <span className="transition duration-300 group-hover:translate-x-1">↗</span>
      </span>
    </a>
  );
}

export default function CourseLanding({ course }: { course: Course }) {
  const relatedCourses = courses.filter((item) => item.slug !== course.slug);

  return (
    <main className="min-h-screen overflow-hidden bg-porcelain text-coffee">
      <header className="fixed inset-x-0 top-3 z-50">
        <nav className="mx-auto flex min-h-[68px] w-[min(1120px,calc(100%-24px))] items-center justify-between rounded-luxe border border-white/55 bg-porcelain/94 px-3 shadow-soft backdrop-blur-2xl md:px-5">
          <a
            href={pagePath("/")}
            aria-label="Voltar para Cristiane Elias"
            className="inline-flex min-w-0 items-center gap-2 rounded-luxe border border-coffee/10 bg-white/86 p-1 pr-3 shadow-[0_10px_28px_rgba(75,53,42,0.08)]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[7px] bg-coffee shadow-soft">
              <img src={img("cristiane-elias-logo-square-transparent.png")} alt="" className="h-9 w-9 object-contain brightness-125 contrast-125" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-display text-[1.08rem] text-coffee md:text-[1.35rem]">Cristiane Elias</span>
              <span className="mt-1 block truncate text-[0.55rem] font-black uppercase tracking-[0.18em] text-terracotta md:text-[0.62rem]">
                Cursos premium
              </span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a href={pagePath("/#cursos")} className="hidden rounded-full px-4 py-2 text-sm font-bold text-coffee/66 transition hover:bg-champagne/70 md:inline-flex">
              Cursos
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hidden h-11 w-11 place-items-center rounded-luxe border border-coffee/10 bg-white/58 text-sm font-black text-coffee/70 shadow-soft transition hover:text-terracotta sm:grid" aria-label="Instagram">
              IG
            </a>
            <CourseButton href={course.href} label="Garantir" className="min-h-11 px-4 md:hidden" />
            <CourseButton href={course.href} label="Garantir minha vaga" className="hidden md:inline-flex" />
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-[102px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(200,164,107,0.22),transparent_30%),linear-gradient(135deg,#F7F3EE_0%,#E8D8C8_52%,#F7F3EE_100%)]" />
        <div className="relative mx-auto grid w-[min(1120px,calc(100%-24px))] gap-7 pb-12 pt-4 md:min-h-[92vh] md:grid-cols-[.96fr_1.04fr] md:items-center md:gap-16 md:py-24">
          <Reveal className="order-2 md:order-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/50 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-clay backdrop-blur-xl md:text-xs">
              <span className="h-px w-6 bg-gradient-to-r from-gold to-terracotta" />
              {course.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.15rem,15vw,8rem)] leading-[0.83] tracking-[-0.035em]">
              {course.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-coffee/72 md:text-xl md:leading-9">
              {course.promise}
            </p>
            <div className="mt-7 grid gap-2 min-[420px]:grid-cols-2 md:flex md:gap-3">
              <CourseButton href={course.href} label="Garantir minha vaga" />
              <CourseButton
                href={whatsappLink(`Oi, Cristiane! Quero tirar uma dúvida sobre o curso ${course.title}.`)}
                label="Tirar dúvida"
                variant="soft"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-luxe bg-coffee shadow-luxe">
              <div className="relative h-[min(68svh,620px)] min-h-[420px] md:h-[720px]">
                <img src={img(course.image)} alt={course.title} className="absolute inset-0 h-full w-full object-cover opacity-45 blur-2xl scale-110" loading="eager" />
                <img src={img(course.image)} alt={course.title} className="absolute inset-0 h-full w-full object-contain md:object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/62 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-luxe border border-white/18 bg-ink/42 p-4 text-porcelain shadow-soft backdrop-blur-2xl md:inset-x-6 md:bottom-6 md:p-6">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-gold">{course.label}</p>
                  <p className="mt-2 font-display text-3xl leading-none md:text-5xl">{course.outcome}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-[min(1120px,calc(100%-28px))] gap-4 md:grid-cols-3">
          {course.highlights.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="h-full rounded-luxe border border-coffee/10 bg-white/62 p-5 shadow-soft backdrop-blur-xl">
                <span className="font-display text-4xl text-gold">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-sm font-extrabold uppercase leading-6 tracking-[0.14em] text-coffee/72">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white/45 py-14 md:py-24">
        <div className="mx-auto grid w-[min(1120px,calc(100%-28px))] gap-8 md:grid-cols-[.9fr_1.1fr] md:items-start">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-terracotta">para quem é</p>
            <h2 className="mt-4 font-display text-[clamp(2.7rem,8vw,5.8rem)] leading-[0.92]">
              Técnica clara para elevar sua própria imagem.
            </h2>
            <p className="mt-6 text-lg leading-8 text-coffee/72">{course.audience}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-luxe border border-coffee/10 bg-porcelain/82 p-5 shadow-luxe backdrop-blur-xl md:p-8">
              <p className="text-lg leading-8 text-coffee/74">{course.salesCopy}</p>
              <div className="mt-7 grid gap-3">
                {course.modules.map((module) => (
                  <div key={module} className="rounded-luxe border border-gold/22 bg-champagne/34 px-4 py-4 text-sm font-bold text-coffee/76">
                    {module}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-coffee py-14 text-porcelain md:py-24">
        <div className="absolute inset-0 opacity-20">
          <img src={img(course.image)} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-coffee via-coffee/92 to-coffee/68" />
        <div className="relative mx-auto grid w-[min(1120px,calc(100%-28px))] gap-8 md:grid-cols-[1fr_.8fr] md:items-center">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">convite final</p>
            <h2 className="mt-4 font-display text-[clamp(2.8rem,9vw,6rem)] leading-[0.9]">
              Entre no curso e aprenda com orientação profissional.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-porcelain/72">
              A proposta é que você saia da insegurança e tenha um caminho mais simples, elegante
              e aplicável para construir resultado de verdade.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-luxe border border-white/15 bg-white/10 p-5 shadow-luxe backdrop-blur-2xl md:p-7">
              <p className="text-sm font-bold leading-7 text-porcelain/74">
                Acesse a página de pagamento oficial e garanta sua vaga no curso {course.title}.
              </p>
              <CourseButton href={course.href} label="Garantir minha vaga" variant="primary" className="mt-6 w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1120px,calc(100%-28px))]">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-terracotta">continue explorando</p>
                <h2 className="mt-3 font-display text-4xl leading-none md:text-6xl">Outros cursos</h2>
              </div>
              <a href={pagePath("/#cursos")} className="hidden text-sm font-black uppercase tracking-[0.16em] text-terracotta md:inline-flex">
                ver todos
              </a>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {relatedCourses.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.04}>
                <a href={coursePath(item.slug)} className="group block h-full rounded-luxe border border-coffee/10 bg-white/62 p-5 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-terracotta/35">
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-terracotta">{item.label}</span>
                  <h3 className="mt-4 font-display text-3xl leading-none">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-coffee/64">{item.copy}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-porcelain">
        <div className="mx-auto flex w-[min(1120px,calc(100%-28px))] flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-porcelain/58">
            Cristiane Elias · Consultora de beleza em Sinop - MT
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-porcelain/62">
            <a href={pagePath("/")} className="transition hover:text-gold">Site principal</a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">Instagram</a>
            <a href={whatsappLink("Oi, Cristiane! Quero falar sobre os cursos.")} className="transition hover:text-gold">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
