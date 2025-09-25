"use client";
import {
  Building2,
  ClipboardList,
  ShieldCheck,
  Users,
  Settings,
  BadgeCheck,
  Mail,
} from "lucide-react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ContactUs from "@/Components/ContactUs";
import Testimonials from "@/Components/Testimonials";

const services = [
  {
    title: "Structural Engineering",
    icon: Building2,
    items: [
      "Building Design: Comprehensive architectural and structural design services for residential, commercial, and industrial buildings.",
      "Bridge Engineering: Design, analysis, and evaluation of bridges, ensuring safety, durability, and efficiency.",
      "Seismic Analysis: Advanced seismic analysis and retrofitting solutions to protect structures against earthquakes.",
      "Foundation Design: Geotechnical investigation and design of foundations for various types of structures.",
    ],
  },
  {
    title: "Project Management",
    icon: ClipboardList,
    items: [
      "Timeline Management: Strategic planning and scheduling to ensure timely project completion.",
      "Resource Planning: Efficient allocation and management of resources to optimize project outcomes.",
      "Quality Control: Rigorous quality control processes to meet the highest industry standards.",
      "Cost Optimization: Effective cost management and optimization strategies to maximize value.",
    ],
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    items: [
      "Material Testing: Comprehensive testing of construction materials to ensure quality and compliance.",
      "Safety Inspections: Regular safety inspections and audits to maintain a safe working environment.",
      "Compliance Audits: Ensuring adherence to all relevant codes, standards, and regulations.",
      "Performance Analysis: In-depth performance analysis to ensure structures meet design specifications.",
    ],
  },
  {
    title: "Consulting Services",
    icon: Users,
    items: [
      "Technical Consultation: Expert advice and consultation on all aspects of engineering projects.",
      "Feasibility Studies: Detailed feasibility studies to assess the viability of proposed projects.",
      "Risk Assessment: Comprehensive risk assessment and mitigation strategies to minimize project risks.",
      "Design Review: Thorough review of engineering designs to ensure accuracy and efficiency.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans text-[16px] leading-[1.5]">
      <Header />

      <section
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://demo.gridgum.com/templates/bootstrap-templates/28260/images/houses1.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Our Engineering Services
          </h1>
          <p className="text-lg mt-2 max-w-2xl">
            Delivering excellence and innovation in every project, tailored to
            meet your unique engineering needs.
          </p>
        </div>
      </section>

      <main className="w-full py-12 px-4">
        <div className="flex justify-center mb-6">
          <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
            <Settings size={18} />
            <p>Our Services</p>
          </span>
        </div>

        <div className="mb-6 text-center max-w-2xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-semibold mb-2">
            Comprehensive Engineering Services
          </h1>
          <p className="text-gray-600">
            From concept to completion, we offer a full spectrum of engineering
            services tailored to your project&apos;s unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg bg-accent/10 shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-block p-3 rounded-lg bg-accent text-white">
                  <s.icon className="size-4 lg:size-6" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold">{s.title}</h2>
              </div>

              <ul className="text-gray-600 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <BadgeCheck size={28} className="mt-1 text-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <div className="flex justify-center mb-6">
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-accent/10 w-max text-center flex items-center gap-2 text-accent">
              <BadgeCheck size={18} />
              <p>Why Choose Us</p>
            </span>
          </div>
          <div className="mb-6 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-2">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-600">
              We are dedicated to providing top-tier engineering solutions that
              drive success and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="p-6 rounded-xl bg-accent/10 shadow">
              <h3 className="text-xl lg:text-2xl font-bold">Expert Team</h3>
              <p>
                Our team of certified engineers and project managers brings
                years of experience and a passion for excellence to every
                project.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/10 shadow">
              <h3 className="text-xl lg:text-2xl font-bold">
                Innovative Solutions
              </h3>
              <p>
                We leverage the latest technologies and innovative approaches to
                solve complex engineering challenges and deliver superior
                results.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/10 shadow">
              <h3 className="text-xl lg:text-2xl font-bold">Client-Centric</h3>
              <p>
                Your vision is our priority. We work closely with you to
                understand your needs and deliver customized solutions that
                exceed expectations.
              </p>
            </div>
          </div>
        </section>
        <Testimonials />
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
