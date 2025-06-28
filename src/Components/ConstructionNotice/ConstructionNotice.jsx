
const ConstructionNotice = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-yellow-300 text-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-2 text-sm sm:text-base text-center font-semibold animate-pulse">
        🚧 This website is <span className="whitespace-nowrap">under construction</span>. Some features may not work. 🚧
      </div>
    </div>
  );
};

export default ConstructionNotice;

