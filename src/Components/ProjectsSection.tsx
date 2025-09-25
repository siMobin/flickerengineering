import React from "react";
import projectsData from "../../private/projects.json";
import {
  ArrowBigLeft,
  ArrowLeft,
  ArrowRight,
  CircleArrowOutUpRight,
  Settings,
} from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  image: string;
  tags: string[];
  description: string;
  year: string;
  location: string;
  category: string;
}

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = React.useState("All Projects");

  const categories = [
    "All Projects",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects = projectsData.filter((project) =>
    filter === "All Projects" ? true : project.category === filter
  );

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="flex justify-center mb-6">
        <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
          <CircleArrowOutUpRight size={18} />
          <p>Our Portfolio</p>
        </span>
      </div>

      <div className="mb-6 p-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Showcasing Engineering Excellence
        </h2>
        <p className="text-gray-600">
          Explore our diverse portfolio of successful engineering projects that
          demonstrate our commitment to quality, innovation, and client
          satisfaction.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center overflow-x-auto space-x-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
                ${
                  filter === cat
                    ? "bg-accent text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project: Project, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-68 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between gap-4 items-start text-gray-500 text-sm">
                  <span>{project.year}</span>
                  <span>{project.location}</span>
                </div>
                {/* <button className="mt-6 w-full bg-accent text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Link
            href="/services"
            className="animate-shake-x inline-flex justify-center mt-12 items-center gap-2 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors duration-300 px-2 py-1 rounded-full "
          >
            See More
            <ArrowRight size={20} className="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
