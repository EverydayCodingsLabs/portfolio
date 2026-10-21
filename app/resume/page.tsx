import type { Metadata } from "next";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";
import WorkExperienceItem from "../components/work-experience-item";
import { resumeData } from "../config/resume";

export const metadata: Metadata = {
  metadataBase: new URL("https://everydaycodings.com"),
  title: "Resume",
  description:
    "A summary of Kumar Saksham's work across AI-focused backend systems, financial data products, folklore archives, and freelance engineering.",
  keywords: [
    "Kumar Saksham Resume",
    "Full Stack Developer Resume",
    "Web Developer CV",
    "React Developer Resume",
    "Software Engineer Resume",
    "Work Experience",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    type: "article",
    url: `https://everydaycodings.com/resume`,
    title: "Kumar Saksham’s Resume",
    siteName: "Kumar Saksham's Portfolio",
    description:
      "Detailed resume of Kumar Saksham, AI-focused Backend Engineer, with work experience, projects, and educational background.",
    images: [
      {
        url: `https://cdn.everydaycodings.com/open-graph/business-card.png`,
        width: 1200,
        height: 630,
        alt: "Kumar Saksham's Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Saksham's Resume",
    description:
      "Check out Kumar Saksham’s resume, showcasing AI-focused backend, finance, folklore archive, and freelance engineering work.",
    images: ["https://cdn.everydaycodings.com/open-graph/business-card.png"],
    creator: "@everydaycodings",
    creatorId: "@everydaycodings",
    site: "@everydaycodings",
    siteId: "@everydaycodings",
  },
};

export default function WorkPage() {
  return (
    <section>
      <div className="flex">
        <h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
          My Resume 📝
        </h1>
      </div>

      {/* Work Section */}
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-2xl mb-4">Work Experience</h2>
        {resumeData.workExperience.map((job, index) => (
          <WorkExperienceItem key={index} job={job} />
        ))}
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Education Section */}
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-2xl mb-4">Education</h2>
        {resumeData.education.map((edu, index) => (
          <EducationItem key={index} edu={edu} />
        ))}
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      {/* Volunteering Section */}
      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-2xl mb-4">Volunteering</h2>
        {resumeData.volunteering.map((volunteer, index) => (
          <VolunteeringItem key={index} volunteer={volunteer} />
        ))}
      </div>
    </section>
  );
}
