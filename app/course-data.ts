const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const instagram = "https://www.instagram.com/cristianeeliasmakeup";
export const whatsapp = "5566999581011";

export const img = (src: string) => `${basePath}/images/${src}`;
export const pagePath = (path: string) => `${basePath}${path}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Course = {
  slug: string;
  title: string;
  label: string;
  eyebrow: string;
  copy: string;
  href: string;
  featured?: boolean;
  image: string;
  outcome: string;
  audience: string;
  promise: string;
  highlights: string[];
  modules: string[];
  salesCopy: string;
};

export const courses: Course[] = [
  {
    slug: "maquiagem-em-10-minutos",
    title: "Maquiagem em 10 minutos",
    label: "Método autoral",
    eyebrow: "rotina elegante",
    copy: "O método autoral para criar uma make bonita, rápida e elegante mesmo em dias corridos.",
    href: "https://pay.kiwify.com.br/QBjsuRK",
    featured: true,
    image: "cristiane-makeup-pincel.jpg",
    outcome: "Uma maquiagem prática, sofisticada e possível para a sua rotina real.",
    audience:
      "Para mulheres que querem se sentir arrumadas, seguras e elegantes sem depender de produções demoradas.",
    promise:
      "Você aprende uma sequência inteligente para preparar pele, valorizar o olhar e finalizar com acabamento bonito em poucos minutos.",
    highlights: [
      "passo a passo enxuto para dias corridos",
      "técnicas profissionais simplificadas",
      "beleza natural sem excesso",
      "acabamento elegante para trabalho e compromissos"
    ],
    modules: [
      "Preparação de pele com aspecto saudável",
      "Correções leves para realçar sem pesar",
      "Olhar definido com poucos produtos",
      "Finalização rápida com presença e sofisticação"
    ],
    salesCopy:
      "Esse curso foi criado para transformar a relação com a sua própria imagem: menos tentativa, menos bagunça na necessaire e mais clareza sobre o que realmente funciona no seu rosto."
  },
  {
    slug: "curso-babyliss",
    title: "Curso Babyliss",
    label: "Finalização",
    eyebrow: "cabelo com presença",
    copy: "Aprenda a construir ondas elegantes, com acabamento sofisticado e visual de salão.",
    href: "https://kiwify.app/hSgf5jj",
    image: "cristiane-retrato-premium.jpg",
    outcome: "Ondas polidas, movimento bonito e acabamento de alto padrão em casa.",
    audience:
      "Para quem deseja dominar o babyliss sem frizz, sem marcações e com resultado mais refinado.",
    promise:
      "Você entende preparação, divisão, direção das ondas, fixação e finalização para criar um cabelo elegante de forma consistente.",
    highlights: [
      "técnica para ondas naturais ou marcadas",
      "preparação que melhora a durabilidade",
      "acabamento sem aparência pesada",
      "finalização para eventos, fotos e rotina"
    ],
    modules: [
      "Preparação térmica e escolha de produtos",
      "Divisão inteligente do cabelo",
      "Direção das ondas e acabamento",
      "Fixação, polimento e toque final"
    ],
    salesCopy:
      "Um cabelo bem finalizado muda a postura, a foto e a sensação de estar pronta. O curso organiza a técnica para que o resultado deixe de ser sorte e vire método."
  },
  {
    slug: "olhos-marcantes",
    title: "Olhos marcantes",
    label: "Olhar",
    eyebrow: "expressão sofisticada",
    copy: "Técnicas para valorizar o olhar com profundidade, definição e acabamento refinado.",
    href: "https://pay.kiwify.com.br/qqsKTLb",
    image: "cliente-close-04.jpg",
    outcome: "Um olhar mais expressivo, elegante e bem acabado, sem perder naturalidade.",
    audience:
      "Para mulheres que querem parar de errar no esfumado e aprender a destacar os olhos com segurança.",
    promise:
      "Você aprende profundidade, transição, pontos de luz e acabamento para construir olhos mais marcantes com equilíbrio.",
    highlights: [
      "esfumado com transição limpa",
      "profundidade sem manchar",
      "pontos estratégicos de iluminação",
      "acabamento sofisticado para noite e eventos"
    ],
    modules: [
      "Construção de base e transição",
      "Profundidade e definição do olhar",
      "Iluminação e acabamento",
      "Adaptação para diferentes ocasiões"
    ],
    salesCopy:
      "Olhos marcantes não precisam parecer pesados. A proposta é ensinar técnica e intenção para criar impacto com elegância, respeitando o seu formato de olho e o seu estilo."
  },
  {
    slug: "cilios-posticos",
    title: "Cílios postiços",
    label: "Continuação",
    eyebrow: "acabamento perfeito",
    copy: "Complemento da make em 10 minutos para aplicar cílios com segurança e naturalidade.",
    href: "https://kiwify.app/osZo2Dk",
    image: "cliente-evento-02.jpg",
    outcome: "Cílios aplicados com conforto, simetria e acabamento natural.",
    audience:
      "Para quem sente dificuldade em escolher, cortar, colar e encaixar os cílios sem comprometer a maquiagem.",
    promise:
      "Você aprende o processo completo para aplicar cílios postiços com mais controle, segurança e acabamento profissional.",
    highlights: [
      "escolha do modelo ideal",
      "corte e curvatura corretos",
      "quantidade e ponto certo de cola",
      "encaixe e acabamento sem desconforto"
    ],
    modules: [
      "Escolha do modelo de cílios",
      "Preparação, medição e corte",
      "Aplicação com cola e pinça",
      "Integração com delineado e máscara"
    ],
    salesCopy:
      "A aplicação de cílios costuma ser o detalhe que mais frustra. Com orientação clara, ela deixa de ser um obstáculo e passa a ser o toque final que eleva a maquiagem."
  }
];

export const courseBySlug = (slug: string) => courses.find((course) => course.slug === slug);
export const coursePath = (slug: string) => pagePath(`/cursos/${slug}/`);
