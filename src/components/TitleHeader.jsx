const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5 relative z-[1]">
      <div className="hero-badge animate-bounce">
        <p className="text-white">
          {sub}
        </p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-300 bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
