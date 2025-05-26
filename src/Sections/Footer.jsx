import { social } from '../utils'

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 py-10 px-4 flex flex-col items-center shadow-inner">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl mb-6">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold tracking-wide">Dulaj Hashmika</p>
          <p className="text-xs text-gray-400">© 2025 All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
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
                className={`w-5 h-5 ${item.className || ''}`}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl">
        <p className="text-xs text-gray-400 mb-2 md:mb-0">
          Built with <span className="text-blue-400 font-medium">React</span> &amp; <span className="text-teal-400 font-medium">Tailwind CSS</span>
        </p>
        <p className="text-xs text-gray-400">
          Contact: <a href="mailto:dulajhashmia075@email.com" className="underline hover:text-white">dulajhashmia075@email.com</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer