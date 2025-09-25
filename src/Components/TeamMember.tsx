"use client";
import { Star } from "lucide-react";

const teamMembers = [
  {
    name: "Md. Shehanur Rahman Asif",
    title: "CEO, Flicker Engineering",
    avatar: "/images/team/asif.jfif",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    name: "Jane Smith",
    title: "Project Manager, Flicker Engineering",
    avatar: "/images/team/asif.jfif",
    description:
      "Experienced project manager overseeing multiple successful initiatives across industries.",
  },
  {
    name: "Sam Wilson",
    title: "Lead Architect, Flicker Engineering",
    avatar: "/images/team/asif.jfif",
    description:
      "Lead architect designing innovative solutions for complex engineering projects.",
  },
];

export default function TeamMember() {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
      </div>

      <section className="mb-12 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-accent/10 transition overflow-hidden"
          >
            <div className="flex-shrink-0">
              <img
                className="w-full h-56 md:h-full md:w-48 object-cover "
                src={member.avatar}
                alt={member.name}
              />
            </div>
            <div className="flex flex-col justify-center p-4">
              <h5 className="mb-2 text-xl md:text-2xl font-bold text-gray-900">
                {member.name}
              </h5>
              <p className="mb-1 font-semibold text-gray-700">{member.title}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
