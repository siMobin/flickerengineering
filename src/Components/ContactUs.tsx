import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CircleCheckBig } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" }); // Clear form
    } catch (err: unknown) {
      let errorMessage = "Something went wrong. Please try again.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Side Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <p className="text-gray-500 text-sm mb-6">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="+880-XXX-XXXXXXX"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry"
                value={form.subject}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project requirements..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully! We&apos;ll get back to you soon.
              </p>
            )}
            {error && (
              <p className="text-red-600 text-sm mt-2">Error: {error}</p>
            )}
          </form>
        </div>

        {/* Right Side Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-500 text-sm">
            We&apos;re here to help you with your engineering needs. Contact us
            through any of the methods below, and our team will respond
            promptly.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4 flex gap-3">
              <MapPin className="text-accent w-5 h-5 mt-1" />
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-sm text-gray-500">
                  74/1-B, Malibagh Chowdhurypara, Malibadh, Dhaka-1219, Dhaka,
                  Bangladesh
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4 flex gap-3">
              <Phone className="text-accent w-5 h-5 mt-1" />
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p className="text-sm text-gray-500">
                  <Link href="tel:+88 01682-70 8000">+88 01682-70 8000</Link>
                  <br />
                  <Link href="tel:+88 01711-98 9282">+88 01711-98 9282</Link>
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-3">
              <div className="inline-flex gap-3">
                <Mail className="text-accent w-5 h-5 mt-1" />
                <h4 className="font-semibold">Email Address</h4>
              </div>
              <div>
                <Link
                  href="mailto:flicker.engineering.architect@gmail.com"
                  className="text-sm text-gray-500 text-wrap"
                >
                  flicker.engineering.architect@gmail.com
                </Link>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4 flex gap-3">
              <Clock className="text-accent w-5 h-5 mt-1" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <span className="text-sm text-gray-500">
                  <p>Saturday - Thursday: 9:00 AM - 6:00 PM</p>
                  {/* <br /> */}
                  <p className="text-red-500 italic">Friday: Closed</p>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-bg text-white rounded-lg p-6 grid sm:grid-cols-2 gap-4">
            <span className="font-bold text-xl col-span-full">
              Why Choose Flicker Engineering?
            </span>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig size={16} /> 24/7 Customer Support
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig size={16} /> Expert Engineering Team
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig size={16} /> Quality Guaranteed
            </p>
            <p className="inline-flex items-center gap-2">
              <CircleCheckBig size={16} /> Competitive Pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
