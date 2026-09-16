




"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle, X, ArrowRight, Loader2 } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfnWbwhjCFf4ERUNONkoEFCjHP9KD_QilCCRQ-p045H62cdKw/formResponse";

const WHATSAPP_NUMBER = "919412190210";

export function FloatingMessage() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  // Automatically open in every 90 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setOpen((current) => {
      if (current) return current;
      return true;
    });
  }, 90000);

  return () => clearInterval(interval);
}, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("entry.709070632", form.name);
      formData.append("entry.997815316", form.phone);
      formData.append("entry.745057681", form.email);
      formData.append("entry.621678844", form.service);
      formData.append("entry.293471818", form.message);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);

      const whatsappMessage = `
Hello Refinix Solutions,

I would like to discuss a project.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}

Project details:
${form.message}
      `.trim();

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");

        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });

        setSubmitted(false);
        setLoading(false);
        setOpen(false);
      }, 700);
    } catch (error) {
      console.error("Form submission failed:", error);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Start a conversation"
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-3 bg-[#e34a27] p-2 md:p-3 text-[10px] font-medium rounded-md uppercase tracking-[0.16em] text-white shadow-lg transition hover:bg-black sm:bottom-7 sm:right-7"
      >
        <MessageCircle className="h-8 w-8" />

        <span className="hidden sm:inline">Let&apos;s Talk</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Form */}
      {open && (
        <div className="fixed bottom-0 right-0 z-[120] w-full sm:bottom-6 sm:right-6 sm:max-w-md">
          <div className="max-h-[90vh] overflow-y-auto bg-[#f7f7f5] p-6 shadow-2xl sm:border sm:border-black/10 sm:p-7">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  <span className="h-px w-6 bg-[#e34a27]" />
                  Start a project
                </div>

                <h2 className="text-3xl font-medium leading-none tracking-[-0.05em]">
                  Let&apos;s build
                  <br />
                  <span className="text-[#e34a27]">something useful.</span>
                </h2>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-black/10 transition hover:bg-black hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#e34a27] text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  Taking you to WhatsApp
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  Your enquiry has been submitted. We&apos;re opening WhatsApp
                  so you can continue the conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    Name
                  </label>

                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#e34a27]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    Phone
                  </label>

                  <input
                    required
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#e34a27]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    Email
                  </label>

                  <input
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#e34a27]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    What do you need?
                  </label>

                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#e34a27]"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Other">Something else</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-[9px] uppercase tracking-[0.16em] text-neutral-500">
                    Tell us about your project
                  </label>

                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What are you trying to build or improve?"
                    className="w-full resize-none border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#e34a27]"
                  />
                </div>

                {/* Submit */}
                <button
                  disabled={loading}
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 bg-[#e34a27] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Continue to WhatsApp
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-[9px] leading-5 text-neutral-400">
                  Your information is used only to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}