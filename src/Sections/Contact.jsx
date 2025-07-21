import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { question, rocket } from "../assets";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-5 py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub={
            <span className="flex items-center gap-1 justify-center">
              <img src={question} alt="question" className="size-6" />
              Have questions or ideas? Let's talk!
              <img src={rocket} alt="rocket" className="size-5 ml-1" />
            </span>
          }
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-20 justify-between items-start">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-4xl font-bold">Let's Hear From You</h1>
            <p className="mt-14 text-gray-300">
              Fill out the form and we'll get back to you as soon as possible.
              We're excited to collaborate!
            </p>

            <p className="mt-4 text-gray-300">
              Whether you're looking to discuss a new project, explore potential
              partnerships, or simply want to share your thoughts, I'm here to
              listen. Great conversations lead to even greater outcomes.
            </p>

            <p className="mt-4 text-gray-300">
              I typically respond within 24 hours. Feel free to share details
              about your project, timeline, or specific requirements. The more
              information you provide, the better I can assist you.
            </p>
          </div>

          {/* Form Section */}
          <div className="flex-1 bg-black/50 backdrop-blur-md border border-[#101a2b] rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-sm"
            >
              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="text-white/70 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 p-3 rounded border border-[#101a2b] bg-transparent text-white outline-none focus:border-[#22d3ee] transition"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="text-white/70 block mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 p-3 rounded border border-[#101a2b] bg-transparent text-white outline-none focus:border-[#22d3ee] transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-white/70 block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 rounded border border-[#101a2b] bg-transparent text-white outline-none resize-none focus:border-[#22d3ee] transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 mt-2 bg-[#101a2b]/90 hover:bg-[#101a2b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2.5 px-6 rounded-full transition"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <svg
                    className="mt-0.5"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                      fill="#fff"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
