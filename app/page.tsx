"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { coursePath, courses, img, instagram, whatsappLink } from "./course-data";

const navItems = [
  ["Atelier", "#sobre"],
  ["Serviços", "#servicos"],
  ["Cursos", "#cursos"],
  ["Galeria", "#galeria"],
  ["Contato", "#contato"]
];

const services = [
  {
    title: "Maquiagem social profissional",
    copy: "Produção elegante para eventos, fotos, formaturas, celebrações e momentos especiais.",
    detail: "Pele sofisticada, olhar definido e acabamento confortável."
  },
  {
    title: "Auto maquiagem",
    copy: "Técnicas práticas, adaptadas à sua rotina, pele, estilo e objetivos de imagem.",
    detail: "Autonomia para se sentir pronta em menos tempo."
  },
  {
    title: "Consultoria corporativa",
    copy: "Imagem pessoal elegante e padronizada para profissionais, equipes e marcas.",
    detail: "Presença alinhada ao posicionamento da empresa."
  },
  {
    title: "Design de sobrancelhas",
    copy: "Design, henna, brow lamination e reconstrução para harmonizar o olhar.",
    detail: "Naturalidade, estrutura e expressão."
  },
  {
    title: "Hydra gloss",
    copy: "Tratamento para lábios com aparência cuidada, viço e acabamento delicado.",
    detail: "Brilho, hidratação e acabamento refinado."
  },
  {
    title: "Produção para eventos",
    copy: "Beleza completa para ocasiões em que presença, confiança e sofisticação importam.",
    detail: "Experiência exclusiva do preparo ao resultado."
  }
];

const gallery = [
  {
    src: "cliente-soft-glam-01.jpg",
    title: "Soft glam social",
    tag: "Pele luminosa",
    position: "center 36%"
  },
  {
    src: "cliente-evento-02.jpg",
    title: "Evento elegante",
    tag: "Olhar esfumado",
    position: "center 38%"
  },
  {
    src: "cliente-editorial-03.jpg",
    title: "Beleza editorial",
    tag: "Presença natural",
    position: "center 34%"
  },
  {
    src: "cliente-close-04.jpg",
    title: "Detalhe de técnica",
    tag: "Acabamento premium",
    position: "center 42%"
  },
  {
    src: "cliente-day-glow-05.jpg",
    title: "Day glow",
    tag: "Leveza sofisticada",
    position: "center 38%"
  },
  {
    src: "cliente-natural-06.jpg",
    title: "Natural chic",
    tag: "Imagem pessoal",
    position: "center 35%"
  }
];

const testimonials = [
  {
    quote:
      "A maquiagem ficou elegante, confortável e durou o evento inteiro. Me senti bonita sem perder minha identidade.",
    author: "Cliente de maquiagem social"
  },
  {
    quote:
      "O curso mudou minha rotina. Agora consigo me arrumar rápido e com acabamento profissional para o trabalho.",
    author: "Aluna de auto maquiagem"
  },
  {
    quote:
      "Atendimento sofisticado, pontual e muito humano. A Cristiane entende o que combina com cada pessoa.",
    author: "Cliente de consultoria"
  }
];

const faqs = [
  [
    "Como faço para agendar um horário?",
    "O agendamento é feito pelo WhatsApp. Você informa a data desejada, o tipo de serviço e recebe as orientações para confirmar seu horário."
  ],
  [
    "O método Maquiagem em 10 Minutos é para iniciantes?",
    "Sim. Ele foi criado para a rotina real da mulher e pode ser adaptado para iniciantes, profissionais e quem já se maquia, mas quer mais praticidade."
  ],
  [
    "Você atende empresas e equipes?",
    "Sim. A consultoria de maquiagem corporativa ajuda equipes a criarem uma imagem elegante, padronizada e coerente com o posicionamento da empresa."
  ],
  [
    "Quais serviços de sobrancelha estão disponíveis?",
    "Design de sobrancelhas, henna, brow lamination e reconstrução, sempre com foco em harmonia, naturalidade e acabamento sofisticado."
  ]
];

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.21, 0.78, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.28], ["0%", "5%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.22], ["0%", "-4%"]);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen overflow-hidden bg-porcelain text-coffee">
      <Header />

      <section id="inicio" className="relative overflow-hidden pt-[92px] md:min-h-screen md:pt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,164,107,0.18),transparent_31%),linear-gradient(135deg,#F7F3EE_0%,#E8D8C8_48%,#F7F3EE_100%)]" />
        <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(75,53,42,.32)_1px,transparent_1px),linear-gradient(90deg,rgba(75,53,42,.22)_1px,transparent_1px)] [background-size:76px_76px]" />

        <div className="relative mx-auto grid w-[min(1180px,calc(100%-24px))] gap-5 pb-9 pt-3 md:min-h-screen md:grid-cols-[.92fr_1.08fr] md:items-center md:gap-16 md:py-24">
          <motion.div style={{ y: heroTextY }} className="order-2 z-10 md:order-1">
            <motion.p
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/48 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-clay backdrop-blur-xl md:mb-5 md:gap-3 md:px-4 md:text-xs"
            >
              <span className="h-px w-6 bg-gradient-to-r from-gold to-terracotta md:w-8" />
              BELEZA SOFISTICADA | SINOP - MT
            </motion.p>

            <motion.h1
              initial={{ opacity: 1, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="font-display text-[clamp(3.2rem,16vw,8.4rem)] leading-[0.82] tracking-[-0.035em] text-coffee"
            >
              Cristiane
              <span className="block">Elias</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-6 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 md:mt-8 md:flex md:gap-3"
            >
              <PremiumButton
                href={whatsappLink("Oi, Cristiane! Quero agendar uma consultoria de beleza.")}
                label="Agendar experiência"
              />
              <PremiumButton href={instagram} label="Instagram" variant="instagram" />
            </motion.div>

            <motion.p
              initial={{ opacity: 1, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-coffee/72 md:mt-7 md:text-xl md:leading-9"
            >
              Maquiagem elegante para mulheres que vivem dias reais. Com 18 anos de experiência,
              Cristiane une técnica profissional, atendimento humanizado e o método Maquiagem em
              10 Minutos para realçar sua beleza natural sem exageros.
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.36 }}
              className="mt-5 grid max-w-xl grid-cols-3 gap-2 md:mt-8"
            >
              {[
                ["18+", "anos"],
                ["10", "minutos"],
                ["5★", "experiência"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-luxe border border-white/55 bg-white/50 p-3 shadow-soft backdrop-blur-xl md:p-4">
                  <strong className="font-display text-3xl leading-none md:text-4xl">{value}</strong>
                  <span className="mt-1 block text-[0.62rem] font-black uppercase tracking-[0.16em] text-coffee/54 md:text-xs">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y: heroImageY }} className="relative order-1 min-h-[430px] md:order-2 md:min-h-[760px]">
            <div className="absolute inset-0 overflow-hidden rounded-luxe shadow-luxe">
              <img
                src={img("cristiane-retrato-premium.jpg")}
                alt="Cristiane Elias, consultora de beleza"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/44 via-transparent to-transparent md:bg-gradient-to-t md:from-ink/34 md:via-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 1, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.48 }}
              className="absolute bottom-5 left-[-34px] hidden w-80 rounded-luxe border border-white/35 bg-ink/52 p-5 text-porcelain shadow-soft backdrop-blur-2xl md:block"
            >
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-terracotta md:text-xs">
                assinatura
              </span>
              <p className="mt-2 font-display text-2xl leading-[0.98]">
                Técnica, presença e beleza natural.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-coffee/10 bg-white/45 py-3 backdrop-blur-xl md:py-4">
        <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] snap-x gap-3 overflow-x-auto md:grid md:grid-cols-4">
          {["Atendimento exclusivo", "Método autoral", "Imagem corporativa", "Beleza para eventos"].map(
            (item) => (
              <div key={item} className="min-w-[205px] snap-start rounded-luxe border border-coffee/10 bg-porcelain/70 px-4 py-3 text-sm font-bold text-coffee/70 md:min-w-0 md:px-5 md:py-4">
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <Section id="sobre" eyebrow="Atelier de beleza" title="Uma assinatura profissional que une técnica, presença e atendimento exclusivo.">
        <div className="grid gap-4 md:grid-cols-[1.05fr_.95fr] md:items-stretch">
          <Reveal>
            <div className="h-full rounded-luxe border border-coffee/10 bg-white/62 p-6 shadow-soft backdrop-blur-xl md:p-10">
              <p className="text-lg leading-8 text-coffee/72 md:text-xl md:leading-9">
                Cristiane Elias é consultora de beleza em Sinop - MT, especialista em maquiagem
                prática e elegante, criadora do método “Maquiagem em 10 Minutos” e referência em
                técnicas profissionais adaptadas para a rotina real da mulher.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "18 anos na área da beleza",
                  "Atendimento humanizado e exclusivo",
                  "Foco em realçar a beleza natural",
                  "Técnicas para rotina, eventos e empresas"
                ].map((item) => (
                  <div key={item} className="rounded-luxe border border-gold/25 bg-champagne/35 p-4 text-sm font-bold text-coffee/74">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-luxe bg-coffee p-6 text-porcelain shadow-luxe md:min-h-[520px] md:p-10">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:54px_54px]" />
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-gold">assinatura</p>
                <h3 className="mt-5 font-display text-5xl leading-[0.9] md:text-7xl">
                  Beleza natural, acabamento de alto padrão.
                </h3>
              </div>
              <div className="relative mt-10 grid gap-3">
                {[
                  "Maquiagem social profissional",
                  "Auto maquiagem e cursos",
                  "Sobrancelhas, henna e brow lamination",
                  "Consultoria de imagem corporativa"
                ].map((item) => (
                  <div key={item} className="rounded-luxe border border-white/12 bg-white/8 px-4 py-3 text-sm font-bold text-porcelain/78">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="servicos" eyebrow="Serviços premium" title="Soluções completas para beleza pessoal, social e corporativa." copy="Atendimentos pensados para mulheres, profissionais e empresas que desejam uma imagem elegante, prática e impecável.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="group h-full rounded-luxe border border-coffee/10 bg-white/55 p-6 shadow-soft backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-terracotta/35 hover:shadow-luxe">
                <span className="mb-8 block h-px w-12 bg-gradient-to-r from-gold to-terracotta transition duration-500 group-hover:w-20" />
                <h3 className="font-display text-3xl leading-none">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-coffee/68">{service.copy}</p>
                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-terracotta">
                  {service.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-coffee py-14 text-porcelain md:py-28">
        <div className="absolute inset-0 opacity-30">
          <img src={img("cliente-evento-02.jpg")} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-coffee via-coffee/86 to-coffee/40" />
        <div className="relative mx-auto grid w-[min(1180px,calc(100%-28px))] gap-10 md:grid-cols-[.95fr_1.05fr] md:items-center">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">Método autoral</p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.94]">
              Maquiagem em 10 Minutos para uma rotina mais confiante.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-luxe border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-9">
              <p className="text-lg leading-8 text-porcelain/78">
                Um método criado para mulheres que querem se arrumar com rapidez, elegância e
                consciência do próprio rosto, sem depender de produções pesadas.
              </p>
              <div className="mt-8 grid gap-3">
                {["Técnicas profissionais simplificadas", "Produtos e acabamentos adequados", "Beleza natural, presença e praticidade"].map(
                  (item) => (
                    <div key={item} className="rounded-luxe border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="cursos" eyebrow="Cursos online" title="Aprenda técnicas profissionais para se maquiar com segurança e elegância." copy="Escolha o curso ideal para sua rotina e acesse conteúdos objetivos, práticos e pensados para mulheres que querem autonomia na própria beleza.">
        <div className="grid gap-4 lg:grid-cols-4">
          {courses.map((course, index) => (
            <Reveal key={course.title} delay={index * 0.05}>
              <article
                className={`flex min-h-[360px] flex-col justify-between rounded-luxe border p-6 shadow-soft transition duration-500 hover:-translate-y-2 ${
                  course.featured
                    ? "border-coffee/10 bg-coffee text-porcelain"
                    : "border-coffee/10 bg-white/58 text-coffee backdrop-blur-xl"
                }`}
              >
                <div>
                  <span className={`rounded-full px-3 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.18em] ${course.featured ? "bg-white/12 text-gold" : "bg-terracotta/10 text-terracotta"}`}>
                    {course.label}
                  </span>
                  <h3 className="mt-8 font-display text-4xl leading-none">{course.title}</h3>
                  <p className={`mt-5 text-sm leading-7 ${course.featured ? "text-porcelain/72" : "text-coffee/68"}`}>
                    {course.copy}
                  </p>
                </div>
                <PremiumButton
                  href={coursePath(course.slug)}
                  label="Saiba mais"
                  className="mt-8 w-full"
                  variant={course.featured ? "light" : "primary"}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="galeria" eyebrow="Portfólio" title="Resultados reais com acabamento editorial e beleza atemporal." copy="Fotos de clientes e produções que mostram pele, olhos, sobrancelhas, acabamento e presença com naturalidade sofisticada.">
        <ResultsShowcase />
      </Section>

      <section className="bg-white/45 py-14 md:py-28">
        <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-terracotta">Prova social</p>
              <h2 className="mt-4 font-display text-[clamp(2.35rem,6vw,5.2rem)] leading-[0.98]">
                Experiências que valorizam beleza, confiança e acolhimento.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.07}>
                <article className="h-full rounded-luxe border border-coffee/10 bg-porcelain/78 p-6 shadow-soft backdrop-blur-xl">
                  <div className="text-gold">★★★★★</div>
                  <blockquote className="mt-6 text-lg font-semibold leading-8 text-coffee/84">
                    “{testimonial.quote}”
                  </blockquote>
                  <cite className="mt-8 block text-sm font-extrabold not-italic uppercase tracking-[0.16em] text-terracotta">
                    {testimonial.author}
                  </cite>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section id="faq" eyebrow="Perguntas frequentes" title="Tudo claro antes do seu atendimento.">
        <div className="grid gap-3">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} delay={index * 0.04}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full rounded-luxe border border-coffee/10 bg-white/58 p-5 text-left shadow-soft backdrop-blur-xl"
                aria-expanded={openFaq === index}
              >
                <span className="flex items-center justify-between gap-6 font-display text-2xl">
                  {question}
                  <span className="text-terracotta">{openFaq === index ? "−" : "+"}</span>
                </span>
                <motion.p
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden pt-0 text-sm leading-7 text-coffee/68"
                >
                  <span className="block pt-5">{answer}</span>
                </motion.p>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <section id="contato" className="relative overflow-hidden bg-coffee py-14 text-porcelain md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img src={img("cliente-natural-06.jpg")} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-coffee via-coffee/92 to-coffee/68" />
        <div className="relative mx-auto grid w-[min(1180px,calc(100%-28px))] gap-8 md:grid-cols-[.92fr_1.08fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">Contato</p>
            <h2 className="mt-4 font-display text-[clamp(2.55rem,7vw,6rem)] leading-[0.95]">
              Agende sua experiência de beleza.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-porcelain/72">
              Mulheres que desejam se sentir mais bonitas, confiantes e bem cuidadas no dia a dia
              ou em ocasiões especiais, além de profissionais e empresas que buscam imagem pessoal
              elegante e padronizada.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <Footer currentYear={currentYear} />
      <FloatingWhatsApp />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <nav className="mx-auto flex min-h-[68px] w-[min(1180px,calc(100%-24px))] items-center justify-between rounded-luxe border border-white/55 bg-porcelain/94 px-4 shadow-soft backdrop-blur-2xl md:px-5">
        <a
          href="#inicio"
          aria-label="Cristiane Elias"
          className="group inline-flex min-w-0 items-center gap-2 rounded-luxe border border-coffee/10 bg-white/86 p-1 pr-3 shadow-[0_10px_28px_rgba(75,53,42,0.08)] backdrop-blur-xl transition hover:border-gold/45"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[7px] bg-terracotta shadow-soft ring-1 ring-gold/35 md:h-12 md:w-12">
            <img
              src={img("ce-header-premium.png")}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-[1.1rem] text-coffee md:text-[1.35rem]">
              Cristiane Elias
            </span>
            <span className="mt-1 block truncate text-[0.47rem] font-bold uppercase tracking-[0.1em] text-terracotta md:text-[0.56rem] md:tracking-[0.14em]">
              Maquiadora profissional
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-coffee/70 transition hover:bg-champagne/60 hover:text-coffee">
              {label}
            </a>
          ))}
        </div>
        <a
          href={whatsappLink("Oi, Cristiane! Quero agendar um atendimento.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-luxe bg-terracotta px-5 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coffee md:inline-flex"
        >
          Agendar
        </a>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-11 w-11 place-items-center rounded-luxe border border-coffee/10 bg-white/48 text-sm font-black text-coffee/70 shadow-soft transition hover:-translate-y-0.5 hover:border-terracotta/35 hover:text-terracotta lg:grid"
          aria-label="Instagram Cristiane Elias"
        >
          IG
        </a>
        <details className="relative md:hidden">
          <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-luxe border border-coffee/10 bg-white/55 text-2xl">
            ≡
          </summary>
          <div className="absolute right-0 mt-3 grid w-56 gap-1 rounded-luxe border border-coffee/10 bg-porcelain/95 p-3 shadow-luxe backdrop-blur-2xl">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-luxe px-4 py-3 text-sm font-bold text-coffee/76">
                {label}
              </a>
            ))}
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="rounded-luxe border border-terracotta/20 bg-white/70 px-4 py-3 text-sm font-black text-terracotta">
              Instagram
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  copy,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  copy?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-28">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <Reveal>
          <div className="mb-8 grid gap-4 md:mb-14 md:grid-cols-[1.05fr_.95fr] md:items-end md:gap-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-terracotta">{eyebrow}</p>
              <h2 className="mt-4 font-display text-[clamp(2.35rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.01em]">
                {title}
              </h2>
            </div>
            {copy ? <p className="text-base leading-8 text-coffee/66 md:text-lg">{copy}</p> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function PremiumButton({
  href,
  label,
  variant = "primary",
  className = ""
}: {
  href: string;
  label: string;
  variant?: "primary" | "ghost" | "light" | "instagram";
  className?: string;
}) {
  const styles = {
    primary: "bg-terracotta text-white shadow-soft hover:bg-coffee before:from-white/0 before:via-white/30 before:to-white/0",
    ghost: "border border-coffee/12 bg-white/58 text-coffee backdrop-blur-xl hover:bg-champagne/60 before:from-white/0 before:via-gold/25 before:to-white/0",
    light: "bg-porcelain text-coffee hover:bg-white before:from-white/0 before:via-gold/25 before:to-white/0",
    instagram: "border border-terracotta/20 bg-white/62 text-terracotta backdrop-blur-xl hover:border-terracotta/45 hover:bg-white before:from-white/0 before:via-terracotta/15 before:to-white/0"
  }[variant];

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-luxe px-6 text-sm font-extrabold transition duration-300 before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:-skew-x-12 before:bg-gradient-to-r before:opacity-0 before:transition before:duration-700 hover:-translate-y-0.5 hover:before:left-[120%] hover:before:opacity-100 ${styles} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {label}
        <span className="transition duration-300 group-hover:translate-x-1">↗</span>
      </span>
    </a>
  );
}

function ResultsShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = gallery[active];
  const goTo = (index: number) => setActive((index + gallery.length) % gallery.length);
  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);
  const progress = `${((active + 1) / gallery.length) * 100}%`;

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % gallery.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <Reveal>
      <div
        className="overflow-hidden rounded-luxe border border-coffee/10 bg-white/64 p-3 shadow-luxe backdrop-blur-xl md:grid md:grid-cols-[1.04fr_.96fr] md:gap-4 md:p-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        <div className="relative overflow-hidden rounded-luxe bg-coffee">
          <div className="relative aspect-[3/4] max-h-[650px] min-h-[430px] overflow-hidden md:aspect-[4/5] md:min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${current.src}-background`}
                src={img(current.src)}
                alt=""
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 0.55, scale: 1.12 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.68, ease: [0.22, 0.76, 0.2, 1] }}
                className="absolute inset-0 h-full w-full object-cover blur-2xl"
                style={{ objectPosition: current.position }}
                loading={active === 0 ? "eager" : "lazy"}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-coffee/18 via-coffee/4 to-coffee/46" />
            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={img(current.src)}
                alt={`${current.title} - ${current.tag}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -58) next();
                  if (info.offset.x > 58) previous();
                }}
                initial={{ opacity: 0, x: 18, scale: 0.985, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -18, scale: 0.99, filter: "blur(10px)" }}
                transition={{ duration: 0.58, ease: [0.22, 0.76, 0.2, 1] }}
                className="absolute inset-0 h-full w-full cursor-grab object-contain px-1 py-1 active:cursor-grabbing md:px-0 md:py-0"
                loading={active === 0 ? "eager" : "lazy"}
              />
            </AnimatePresence>

            <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-3 md:left-5 md:right-5 md:top-5">
              <span className="rounded-full border border-white/16 bg-ink/42 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-gold shadow-soft backdrop-blur-2xl">
                Portfólio real
              </span>
              <span className="rounded-full border border-white/16 bg-ink/42 px-3 py-2 text-[0.68rem] font-black text-porcelain/78 shadow-soft backdrop-blur-2xl">
                {String(active + 1).padStart(2, "0")}/{String(gallery.length).padStart(2, "0")}
              </span>
            </div>

            <div className="absolute inset-x-3 bottom-3 rounded-luxe border border-white/18 bg-ink/46 p-4 text-porcelain shadow-soft backdrop-blur-2xl md:inset-x-5 md:bottom-5 md:p-6">
              <motion.div
                key={`${current.src}-caption`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.44 }}
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-gold">{current.tag}</p>
                <h3 className="mt-2 font-display text-4xl leading-none md:text-6xl">{current.title}</h3>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-t border-white/10 bg-coffee px-3 py-3 md:px-5 md:py-4">
            <button
              type="button"
              onClick={previous}
              aria-label="Resultado anterior"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/16 bg-white/8 text-2xl text-porcelain transition hover:bg-white/16"
            >
              ‹
            </button>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/12">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold to-terracotta"
                animate={{ width: progress }}
                transition={{ duration: 0.45, ease: [0.22, 0.76, 0.2, 1] }}
              />
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo resultado"
              className="grid h-12 w-12 place-items-center rounded-full bg-terracotta text-2xl text-white shadow-soft transition hover:bg-gold hover:text-coffee"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-4 md:mt-0 md:flex md:flex-col md:justify-between">
          <div className="rounded-luxe border border-coffee/10 bg-porcelain/82 p-4 md:p-6">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-terracotta">Selecione um resultado</p>
            <p className="mt-3 text-sm leading-6 text-coffee/62 md:text-base md:leading-7">
              Toque em uma produção para ver o acabamento em destaque. O carrossel também avança
              sozinho e aceita arrastar para os lados no celular.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 md:mt-4 md:grid-cols-2 md:gap-3">
            {gallery.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => {
                  setPaused(true);
                  goTo(index);
                }}
                aria-label={`Ver resultado ${item.title}`}
                aria-pressed={active === index}
                className={`group relative aspect-[4/5] overflow-hidden rounded-luxe border text-left shadow-soft transition duration-500 md:aspect-[16/12] ${
                  active === index
                    ? "border-terracotta/70 ring-2 ring-terracotta/18"
                    : "border-white/60 opacity-76 hover:opacity-100"
                }`}
              >
                <img
                  src={img(item.src)}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: item.position }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-85 transition group-hover:opacity-70" />
                <div className="absolute inset-x-1.5 bottom-1.5 md:inset-x-2 md:bottom-2">
                  <span className="inline-flex rounded-full bg-porcelain/88 px-2 py-1 text-[0.5rem] font-black uppercase tracking-[0.1em] text-coffee md:text-[0.58rem]">
                    {item.tag}
                  </span>
                </div>
                {active === index ? (
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(200,164,107,0.24)]" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    mensagem: ""
  });

  const update = (field: keyof typeof form, value: string) => setForm((state) => ({ ...state, [field]: value }));

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Oi, Cristiane! Quero agendar um atendimento.",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.telefone}`,
      `Serviço: ${form.servico}`,
      `Mensagem: ${form.mensagem}`
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener");
  };

  return (
    <form onSubmit={submit} className="rounded-luxe border border-white/15 bg-white/10 p-5 shadow-luxe backdrop-blur-2xl md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nome" value={form.nome} onChange={(value) => update("nome", value)} required />
        <Field label="WhatsApp" value={form.telefone} onChange={(value) => update("telefone", value)} required />
      </div>
      <Field label="Serviço desejado" value={form.servico} onChange={(value) => update("servico", value)} required className="mt-4" />
      <label className="mt-4 grid gap-2 text-sm font-bold text-porcelain/82">
        Mensagem
        <textarea
          required
          value={form.mensagem}
          onChange={(event) => update("mensagem", event.target.value)}
          placeholder="Conte a data, ocasião ou objetivo do atendimento"
          className="min-h-32 rounded-luxe border border-white/15 bg-white/12 p-4 text-base text-porcelain outline-none transition placeholder:text-porcelain/42 focus:border-gold"
        />
      </label>
      <button className="mt-5 min-h-14 w-full rounded-luxe bg-terracotta px-6 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-gold hover:text-coffee">
        Enviar pelo WhatsApp
      </button>
      <p className="mt-4 text-center text-xs leading-5 text-porcelain/52">
        WhatsApp: (66) 99958-1011 · Instagram: @cristianeeliasmakeup
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  className = ""
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-porcelain/82 ${className}`}>
      {label}
      <input
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-14 rounded-luxe border border-white/15 bg-white/12 px-4 text-base text-porcelain outline-none transition placeholder:text-porcelain/42 focus:border-gold"
        placeholder={label}
      />
    </label>
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href={whatsappLink("Oi, Cristiane! Quero falar sobre um atendimento.")}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1FAF61] text-xl font-black text-white shadow-luxe transition duration-300 hover:-translate-y-1 md:h-auto md:w-auto md:px-5 md:py-4 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
      }`}
      aria-label="Chamar no WhatsApp"
    >
      <span className="md:hidden">↗</span>
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}

function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="bg-ink py-12 text-porcelain">
      <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <img src={img("cristiane-elias-logo-transparent.png")} alt="Cristiane Elias" className="h-16 w-60 object-contain object-left brightness-125" />
          <p className="mt-5 max-w-md text-sm leading-7 text-porcelain/62">
            Consultora de beleza em Sinop - MT, especialista em maquiagem prática, elegante e
            personalizada para mulheres, profissionais e empresas.
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl">Navegação</h3>
          <div className="mt-4 grid gap-2 text-sm text-porcelain/62">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-gold">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl">Contato</h3>
          <div className="mt-4 grid gap-2 text-sm text-porcelain/62">
            <a href={whatsappLink("Oi, Cristiane! Quero agendar um atendimento.")} className="transition hover:text-gold">
              (66) 99958-1011
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">
              @cristianeeliasmakeup
            </a>
            <span>Sinop - MT</span>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-porcelain/44 md:col-span-3">
          © {currentYear} Cristiane Elias. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
