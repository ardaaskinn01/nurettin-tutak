const TopContactBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-yellow-200 py-2 px-4 text-[10px] xs:text-xs sm:text-sm text-neutral-900 border-b border-gray-200 z-40">
      <div className="container mx-auto">
        <div className="flex flex-col xs:flex-row justify-center items-center gap-1 sm:gap-2">
          <span className="text-center whitespace-nowrap">
            <span className="hidden xs:inline">Hızlı Ulaşım: </span>Nurettin Tutak: +90 (546) 768 99 92
          </span>
          <span className="hidden xs:inline">|</span>
          <span className="text-center whitespace-nowrap">
            Ümit Güleç: +90 (534) 285 83 56
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;