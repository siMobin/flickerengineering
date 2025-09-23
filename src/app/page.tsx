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

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[16px] leading-[1.5]">
      <Header />

      <main className="w-full">
        {/* Hero */}
        <section className="grid gap-6 md:grid-cols-2 items-center hero-bg  overflow-hidden p-4 md:px-20">
          <div className="md:col-span-1 max-w-xl relative z-10 ">
            <span className="pre-tag"></span>
            <div className="tag inline-flex items-center gap-2 mb-6 px-4 py-3 rounded-full bg-accent/10 backdrop-blur-[5px] shadow">
              <CircleCheckBig className="w-5 h-5 text-accent" />
              <span className="text-sm">Professional Engineering Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
              <span>Building Tomorrow&apos;s</span>
              <br />
              <span
                className="text-4xl font-extrabold"
                style={{ color: "var(--brand-gradient-to)" }}
              >
                Infrastructure Today
              </span>
            </h1>

            <p className="text-lg text-white/85 mb-6">
              Flicker Engineering delivers cutting-edge engineering solutions
              with innovative technology and expert craftsmanship. Your vision,
              our engineering excellence.
            </p>

            <ul className="features-list grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <li>
                <span style={{ color: "var(--brand-gradient-to)" }}>
                  <CircleCheckBig />
                </span>{" "}
                Expert Engineering Team
              </li>
              <li>
                <span style={{ color: "var(--brand-gradient-to)" }}>
                  <CircleCheckBig />
                </span>{" "}
                Innovative Solutions
              </li>
              <li>
                <span style={{ color: "var(--brand-gradient-to)" }}>
                  <CircleCheckBig />
                </span>{" "}
                Quality Assurance
              </li>
              <li>
                <span style={{ color: "var(--brand-gradient-to)" }}>
                  <CircleCheckBig />
                </span>{" "}
                Timely Delivery
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="/contact" className="btn-primary">
                Get Started Today →
              </a>
              <a href="/portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>

          <div className="relative h-min">
            <div className="logo-card w-full max-w-lg  backdrop-blur-[20px]">
              <div className="badge-top-right badge-white text-center">
                100+<div className="text-xs mt-1">Projects Completed</div>
              </div>
              <div className="h-72 flex items-center justify-center">
                <img
                  src="/images/hero.png"
                  alt="Flicker Engineering"
                  className="w-full scale-117 h-auto absolute top-0 left-[-1em]"
                  loading="lazy"
                />
              </div>
              <div className="badge-bottom-left badge-white">
                10+<div className="text-xs mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mt-12 px-4">
          <div className="flex justify-center mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
              <Settings size={18} />
              <p>Our Services</p>
            </span>
          </div>

          <div className="mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold mb-2">
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

      <Footer />
    </div>
  );
}
