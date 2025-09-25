"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company Inc.",
    quote:
      "Flicker Engineering provided exceptional service and delivered our project on time and within budget. Their team is professional, knowledgeable, and a pleasure to work with.",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Jane Smith",
    title: "Project Manager, ABC Corp.",
    quote:
      "The quality of work and attention to detail from Flicker Engineering is second to none. We are extremely satisfied with the results and look forward to future collaborations.",
    avatar: "/images/avatar2.png",
  },
  {
    name: "Sam Wilson",
    title: "Lead Architect, XYZ Firm",
    quote:
      "I highly recommend Flicker Engineering for any complex engineering project. Their innovative solutions and commitment to excellence are truly impressive.",
    avatar: "/images/avatar3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4">
      <div className="flex justify-center mb-6">
        <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
          <Star size={18} />
          <p>Client Testimonials</p>
        </span>
      </div>
      <div className="mb-6 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-600">
          We are proud to have worked with amazing clients who trust us with
          their most important projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 rounded-xl bg-accent/10 shadow text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent"
            />
            <h3 className="text-xl font-bold">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{t.title}</p>
            <p className="text-gray-600 italic">&quot;{t.quote}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}
