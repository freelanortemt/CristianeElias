import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseBySlug, courses, img } from "../../course-data";
import CourseLanding from "./CourseLanding";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courseBySlug(slug);

  if (!course) {
    return {};
  }

  return {
    title: `${course.title} | Cristiane Elias`,
    description: course.promise,
    openGraph: {
      title: `${course.title} | Cristiane Elias`,
      description: course.promise,
      images: [img(course.image)]
    }
  };
}

export default async function CoursePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseLanding course={course} />;
}
