"use client"

export const Header = () => {
  const handleScroll = (element: string) => {
    const target = document?.querySelector(element) as HTMLElement;
    window.scrollTo({
      top: target?.offsetTop,
      behavior: "smooth",
    })
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button onClick={() => handleScroll("#home")} className="nav-item">Home</button>
        <button onClick={() => handleScroll("#projects")} className="nav-item">Projects</button>
        <button onClick={() => handleScroll("#about")} className="nav-item">About</button>
        <button onClick={() => handleScroll("#contact")} className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 cursor-pointer">Contact</button>
      </nav>
    </div>
  );
};
