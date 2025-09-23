"use client";
import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
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
  Calendar,
  Target,
  Eye,
  Sparkle,
} from "lucide-react";
import Link from "next/link";

import ContactUs from "@/Components/ContactUs";
import MapEmbed from "@/Components/MapEmbed";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 hero-bg text-center text-white px-6 md:px-20 ">
          <h1 className="text-6xl font-bold mb-4 max-w-4xl mx-auto">
            Let&apos;s Start Your Next Project
          </h1>
          <p className="max-w-4xl mx-auto">
            Ready to transform your engineering vision into reality? Get in
            touch with our expert team for professional consultation and
            innovative solutions.
          </p>
        </section>

        <ContactUs />

        <h1 className="text-4xl font-bold mb-4 text-center text-accent">
          We Are Here!
        </h1>
        <div className="flex items-center justify-center mb-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 contact-mini-map">
            <div>
              <div className="w-md h-60">
                <MapEmbed />
              </div>
            </div>

            <div>
              <div className="hero-bg text-white p-4 rounded-lg w-max min-w-md">
                <h1>Need Immediate Assistance?</h1>
                <div className="flex flex-col gap-3 my-4 text-left">
                  <p className="inline-flex items-center gap-2">
                    <CircleCheckBig />
                    24/7 Emergency Support
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <CircleCheckBig />
                    Free Initial Consultation
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <CircleCheckBig />
                    Quick Response Time
                  </p>
                </div>

                <button className="btn-primary">Call Now!</button>
              </div>
            </div>
          </section>
        </div>

        <div className="mb-6 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </div>
        <section className="flex justify-center">
          <div className="faq">
            <div className="faq-card">
              <h3 className="text-lg font-semibold">
                What services do you offer?
              </h3>
              <p className="text-gray-600">
                We offer a wide range of engineering services, including
                structural design, project management, and consulting.
              </p>
            </div>
            <div className="faq-card">
              <h3 className="text-lg font-semibold">
                What services do you offer?
              </h3>
              <p className="text-gray-600">
                We offer a wide range of engineering services, including
                structural design, project management, and consulting.
              </p>
            </div>
            <div className="faq-card">
              <h3 className="text-lg font-semibold">
                What services do you offer?
              </h3>
              <p className="text-gray-600">
                We offer a wide range of engineering services, including
                structural design, project management, and consulting.
              </p>
            </div>
            <div className="faq-card">
              <h3 className="text-lg font-semibold">
                What services do you offer?
              </h3>
              <p className="text-gray-600">
                We offer a wide range of engineering services, including
                structural design, project management, and consulting.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
