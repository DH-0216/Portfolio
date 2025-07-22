const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5 relative z-[1]">
      <div className="hero-badge ">
        <p className="text-[#EEF7FF]">{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold mt-1 md:text-5xl text-3xl text-center bg-gradient-to-r from-[#888888] via-[#aaaaaa] to-[#cccccc] bg-clip-text text-transparent">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
