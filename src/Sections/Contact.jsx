import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { question, rocket } from "../assets";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      className="w-full h-screen flex items-center justify-center px-5"
    >
      <div className="w-full max-w-6xl">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub={
            <span className="flex items-center gap-1 justify-center">
              <img
                src={question}
                alt="question"
                className="size-6 inline-block"
              />
              Have questions or ideas? Let’s talk!{" "}
              <img
                src={rocket}
                alt="rocket"
                className="size-5 inline-block ml-1"
              />
            </span>
          }
        />

        <div className="flex justify-center mt-16">
          <div className="w-full max-w-xl">
            <div className="flex-center bg-black/50 backdrop-blur-md card-border rounded-xl p-5 sm:p-8 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full mt-1 px-3 py-2 rounded border focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full mt-1 px-3 py-2 rounded border focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full mt-1 px-3 py-2 rounded border focus:outline-none"
                  />
                </div>

                <button type="submit" className="w-full">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
