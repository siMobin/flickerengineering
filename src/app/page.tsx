"use client";
import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Building2,
  ClipboardList,
  ShieldCheck,
  Users,
  Settings,
  BadgeCheck,
  ArrowUpRight,
  Contact,
  Mail,
  CircleCheckBig,
} from "lucide-react";
import Link from "next/link";
import ProjectsSection from "../Components/ProjectsSection";
import ContactUs from "@/Components/ContactUs";
import Slider from "@/Components/Slider";
import MapEmbed from "@/Components/MapEmbed";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[16px] leading-[1.5]">
      <Header />

      {/* Hero */}
      <Slider />

      <main className="w-full">
        {/* Services */}
        <section className="mt-12 px-4">
          <div className="flex justify-center mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
              <Settings size={18} />
              <p>Our Services</p>
            </span>
          </div>

          <div className="mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              Comprehensive Engineering Services
            </h2>
            <p className="text-gray-600">
              From concept to completion, we offer a full spectrum of
              engineering services tailored to your project&apos;s unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Structural Engineering",
                icon: Building2,
                items: [
                  "Building Design",
                  "Bridge Engineering",
                  "Seismic Analysis",
                  "Foundation Design",
                ],
              },
              {
                title: "Project Management",
                icon: ClipboardList,
                items: [
                  "Timeline Management",
                  "Resource Planning",
                  "Quality Control",
                  "Cost Optimization",
                ],
              },
              {
                title: "Quality Assurance",
                icon: ShieldCheck,
                items: [
                  "Material Testing",
                  "Safety Inspections",
                  "Compliance Audits",
                  "Performance Analysis",
                ],
              },
              {
                title: "Consulting Services",
                icon: Users,
                items: [
                  "Technical Consultation",
                  "Feasibility Studies",
                  "Risk Assessment",
                  "Design Review",
                ],
              },
            ].map((s) => (
              <div
                key={s.title}
                className="p-4 rounded-xl transition-all duration-300 hover:shadow-lg bg-accent/10 shadow"
              >
                <div className="text-center">
                  <div className="mb- inline-block p-3 rounded-lg bg-accent text-white">
                    <s.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                </div>

                <ul className="text-gray-600 space-y-2 mb-6">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" />
                      <BadgeCheck size={16} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="/services"
                  className="inline-flex items-center text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: "var(--accent)" }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        <ProjectsSection />
      </main>
      <div className="flex justify-center mb-6 mt-4">
        <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
          <Mail size={18} />
          <p>Contact Us</p>
        </span>
      </div>

      <div className="mb-6 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Let&apos;s Discuss Your{" "}
          <span className="text-accent">Next Project</span>
        </h2>
        <p className="text-gray-600">
          Ready to bring your engineering vision to life? Get in touch with our
          expert team for a free consultation and personalized solution.
        </p>
      </div>
      <ContactUs />

      <div className="h-48 md:h-64 lg:h-96">
        <MapEmbed />
      </div>
      <Footer />
    </div>
  );
}
