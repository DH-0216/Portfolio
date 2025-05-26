import { logo } from '../assets'
import { social } from '../utils'

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 py-10 px-4 flex flex-col items-center shadow-inner justify-between gap-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl mb-6 ">
        <div className="flex flex-col md:items-start text-center md:text-left">
          <img src={logo} alt="" className="w-35 h-35 object-contain " />
          <p className="text-lg font-semibold tracking-wide">Dulaj Hashmika</p>
          <p className="text-xs text-gray-400">© 2025 All rights reserved.</p>
          <p className="text-xs text-gray-400 mb-2 md:mb-0 mt-5">
            Built with <span className="text-blue-400 font-medium">React</span>{" "}
            &amp;{" "}
            <span className="text-teal-400 font-medium">Tailwind CSS</span>
          </p>
        </div>

        <div className="flex items-center space-x-4 flex-col gap-10 mt-10">
          <div className='flex flex-wrap justify-center gap-4'>
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
          <p className="text-xs text-gray-400">
            Contact:{" "}
            <a
              href="mailto:dulajhashmia075@email.com"
              className="underline hover:text-[#F8F8FF]"
            >
              dulajhashmia075@email.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer