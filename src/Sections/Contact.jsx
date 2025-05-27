import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { LifeLink, question, rocket } from "../assets";

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
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center">
      <div className="w-full h-full md:px-10 px-5">
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
                alt="question"
                className="size-5 inline-block ml-1"
              />
            </span>
          }
        />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-16">
          <div className="xl:col-span-5 col-span-1">
            <div className="flex-center card-border rounded-xl p-5 sm:p-8 md:p-10">
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
          <div className="xl:col-span-7 col-span-1 min-h-60 mt-8 xl:mt-0 flex items-center justify-center">
            <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden mx-auto max-w-md sm:max-w-lg md:max-w-xl xl:max-w-full justify-center flex items-center">
              <img
                src={LifeLink}
                alt=""
                className="w-auto h-60 sm:h-60 md:h-80 xl:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
