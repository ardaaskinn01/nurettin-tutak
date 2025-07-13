const TopContactBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-200 py-1 px-4 text-xs sm:text-[12px] text-neutral-900 border-b border-gray-200 z-40">
      <div className="container mx-auto">
        <div className="flex justify-center items-center whitespace-nowrap overflow-x-auto hide-scrollbar">
          <span className="inline-block">
            Nurettin Tutak: +90 (546) 768 99 92
          </span>
          <span className="mx-2">|</span>
          <span className="inline-block">
            Ümit Güleç: +90 (534) 285 83 56
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;