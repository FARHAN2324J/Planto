import plant from "../../assets/images/plant 1.png";
import { CgShoppingBag } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../../utils/ScrollTo";
import { Link } from "react-router";
import { useCartNotification } from "../../hooks/useCartNotification";

const Navbar = () => {
  return (
    <>
      <NavbarMd />
      <NavbarSm />
    </>
  );
};

export default Navbar;

const NavbarMd = () => {
  const { totalItems, isAnimating } = useCartNotification();

  return (
    <nav className="z-[9999] relative md:block hidden">
      <ul className="flex fixed justify-between border-b-1 border-[#1b2316] backdrop-blur-xl bg-gradient-to-t  from-[#1b231600] to-[#1b2316] items-center w-full px-8 py-5 shadow-lg">
        <li
          className="flex items-end gap-2 cursor-pointer "
          onClick={() => scrollToSection("Home-p")}
        >
          <img src={plant} width={30} height={30} alt="" />
          <span className="text-xl font-extrabold">Planto.</span>
        </li>
        <li className="flex items-center gap-8">
          <span
            onClick={() => scrollToSection("Home-p")}
            className="cursor-pointer li"
          >
            Home
          </span>
          <span
            onClick={() => scrollToSection("Trendy")}
            className="flex items-baseline gap-2  cursor-pointer"
          >
            Trendy
          </span>
          <span
            onClick={() => scrollToSection("More")}
            className="cursor-pointer"
          >
            More
          </span>
        </li>
        <li className="flex items-center gap-5">
          <Link to="/shop" className="relative">
            <CgShoppingBag size={24} />
            {totalItems > 0 && (
              <span
                className={`
            absolute -top-2 -right-2 bg-[#55B000] text-white rounded-full 
            w-5 h-5 flex items-center justify-center text-xs
            transition-all duration-300 ease-out
            ${isAnimating ? "scale-125" : "scale-100"}
          `}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
import { gsap } from "gsap";

const NavbarSm = () => {
  const { totalItems, isAnimating } = useCartNotification();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!menuRef.current || !menuItemsRef.current) return;

    timeline.current = gsap
      .timeline({ paused: true })
      .to(menuRef.current, {
        height: "100vh",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .fromTo(
        menuItemsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4 },
        "-=0.2"
      );

    return () => {
      timeline.current?.kill();
    };
  }, []);

  const toggleMenu = (): void => {
    if (timeline.current) {
      if (isOpen) {
        timeline.current.reverse();
      } else {
        timeline.current.play();
      }
      setIsOpen(!isOpen);
    }
  };

  const handleMenuClick = (sectionId: string): void => {
    scrollToSection(sectionId);

    if (isOpen) {
      setTimeout(() => {
        toggleMenu();
      }, 300);
    }
  };

  return (
    <nav className="z-[9999] relative md:hidden block">
      <ul className="flex fixed justify-between border-b-1 border-[#1b2316] shadow-lg backdrop-blur-xl bg-gradient-to-t from-[#1b231600] to-[#1b2316] items-baseline w-full p-5">
        <li
          className="flex items-end gap-2 cursor-pointer "
          onClick={() => handleMenuClick("Home-p")}
        >
          <img src={plant} width={30} height={30} alt="" />
          <span className="text-xl font-extrabold">Planto.</span>
        </li>
        <li onClick={toggleMenu} className="relative z-50 cursor-pointer">
          {totalItems > 0 && (
            <div
              className={`
    absolute -top-2 -right-2 bg-[#55B000] text-white rounded-full 
    w-2 h-2 flex items-center justify-center text-xs
    transition-transform duration-300 ease-out
    ${isAnimating ? "scale-150" : "scale-100"}
  `}
            ></div>
          )}
          {isOpen ? (
            <svg
              width="28"
              height="28"
              className="z-50 relative"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7L7 21"
                stroke="white"
                strokeOpacity="0.75"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M7 7L21 21"
                stroke="white"
                strokeOpacity="0.75"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="15"
              viewBox="0 0 28 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H26"
                stroke="white"
                strokeOpacity="0.75"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M14 13L26 13"
                stroke="white"
                strokeOpacity="0.75"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          )}
        </li>
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-0 bg-[#1b2316] overflow-hidden z-40"
        >
          <div className="pt-24 px-8">
            <ul ref={menuItemsRef} className="space-y-6 text-white">
              <li
                className="text-2xl font-medium opacity-0 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleMenuClick("Home-p")}
              >
                Home
              </li>
              <li
                onClick={() => handleMenuClick("Trendy")}
                className="text-2xl font-medium opacity-0 flex items-center hover:opacity-80 transition-opacity"
              >
                Trendy
              </li>
              <li
                className="text-2xl font-medium opacity-0 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleMenuClick("More")}
              >
                More
              </li>
              <li className="text-2xl font-medium opacity-0 cursor-pointer hover:opacity-80 transition-opacity">
                <Link to="/shop" className="relative flex items-baseline gap-1">
                  <span>Shop</span>
                  {totalItems > 0 && (
                    <span className="bg-[#55B000] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  );
};
