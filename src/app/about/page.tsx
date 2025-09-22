"use client";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {
  Building2,
  Users,
  Calendar,
  Target,
  Eye,
  CircleCheckBig,
  Sparkle,
} from "lucide-react";

export default function About() {
  const stats = [
    { icon: Calendar, value: "10+", label: "Years of Experience" },
    { icon: Building2, value: "100+", label: "Projects Completed" },
    { icon: Users, value: "60+", label: "Happy Clients" },
  ];

  const missionVision = [
    {
      icon: Target,
      title: "Our Mission",
      text: "At Flicker Engineering, our mission is to provide innovative engineering solutions that empower our clients to achieve their goals. We are committed to excellence, integrity, and customer satisfaction.",
      points: [
        "Deliver innovative engineering solutions",
        "Foster a culture of collaboration and continuous improvement",
        "Uphold the highest standards of integrity and professionalism",
      ],
    },
    {
      icon: Eye,
      title: "Our Vision",
      text: "Our vision is to become a global leader in engineering services by driving innovation, sustainability, and creating long-lasting client relationships.",
      points: [
        "Pioneer in engineering innovations",
        "Build sustainable and scalable solutions",
        "Create long-term partnerships built on trust",
      ],
    },
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project, ensuring the highest quality standards and innovative solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in working closely with our clients, fostering strong partnerships and open communication.",
    },
    {
      icon: CircleCheckBig,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards and transparency in all our business practices.",
    },
    {
      icon: Sparkle,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and innovative approaches to solve complex engineering challenges.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 hero-bg text-center text-white px-6 md:px-20">
          <h1 className="text-6xl font-bold mb-4 max-w-4xl mx-auto">
            About Flicker Engineering
          </h1>
          <p className="max-w-4xl mx-auto">
            Flicker Engineering is a leading provider of innovative engineering
            solutions. Our team of experts is dedicated to delivering
            high-quality services that meet the unique needs of each client.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-xl mx-auto">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="mini-card">
                <Icon />
                <span>{value}</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-6 px-6 md:px-20 py-16 bg-gray-50 text-gray-700">
          {missionVision.map(({ icon: Icon, title, text, points }, i) => (
            <div key={i} className="mission-vision">
              <h1 className="inline-flex items-center gap-2 mb-4 text-3xl font-semibold">
                <Icon size={40} className="icon" />
                {title}
              </h1>
              <p>{text}</p>
              <ul className="mt-4 space-y-2">
                {points.map((point, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CircleCheckBig className="text-green-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Core Values */}
        <div className="mb-6 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-2">Our Core Values</h2>
          <p className="text-gray-600">
            The principles that guide our work and define our commitment to
            excellence
          </p>
        </div>

        <section className="core-values px-6 md:px-20 pb-16">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map(({ icon: Icon, title, description }, i) => (
                <div key={i} className="mini-card">
                  <Icon className="icon" />
                  <span>{title}</span>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
