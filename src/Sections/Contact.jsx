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
      className="w-full h-screen flex items-center justify-center px-5 mt-20"
    >
      <div className="w-full max-w-6xl">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub={
            <span className="flex items-center gap-1 justify-center">
              <img
                src={question}
                alt="question"
                className="size-6 inline-block"
              />
              Have questions or ideas? Let's talk!{" "}
              <img
                src={rocket}
                alt="rocket"
                className="size-5 inline-block ml-1"
              />
            </span>
          }
        />

        <div className="flex justify-center mt-16">
          <div className="w-full max-w-max">
            <div className="flex-center bg-black/50 backdrop-blur-md card-border rounded-xl p-5 sm:p-8 md:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col items-center text-sm"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                  <div className="w-full">
                    <label className="text-white/70" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-white/70" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 w-[350px] md:w-[700px]">
                  <label className="text-white/70" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2.5 w-56 rounded-full transition"
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
      </div>
    </section>
  );
};

export default Contact;
