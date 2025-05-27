import { logo } from "../assets";
import { social } from "../utils";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 px-6 sm:px-10 mt-5 md:mt-10 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 md:gap-16  align-items-center py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-2 md:gap-10">
          {/* Logo & Info */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 sm:h-12 md:h-12 w-auto object-contain"
            />
            <p className="text-lg font-semibold tracking-wide">
              Dulaj Hashmika
            </p>
            <p className="text-xs text-gray-400">© 2025 All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-2">
              Built with{" "}
              <span className="text-blue-400 font-medium">React</span> &amp;{" "}
              <span className="text-teal-400 font-medium">Tailwind CSS</span>
            </p>
          </div>

          

          {/* Contact Info */}
          <div className="flex flex-col text-center md:text-left gap-2 py-10 md:py-10">
            <h3 className="text-sm font-bold text-white">Contact</h3>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:dulajhashmia075@email.com"
                className="underline hover:text-white"
              >
                dulajhashmia075@email.com
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Phone: <span className="hover:text-white">+94 78 434 0852</span>
            </p>
            <p className="text-sm text-gray-400">
              Location: Colombo, Sri Lanka
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-center gap-5 pt-5 md:pt-10">
            <h3 className="text-sm font-bold text-white">Reach Me On</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {social.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className={`w-5 h-5 ${item.className || ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © 2025 Dulaj Hashmika. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
