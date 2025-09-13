import { useEffect, useState } from "react";
import { MyAnimate } from "./MyAnimate";
import { NavbarContent } from "./Navbar";

export default function SecondNavbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const gap = 50; // jarak minimal scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < gap) {
        // kalau perubahan scroll < gap, abaikan
        return;
      }

      if (currentScrollY > lastScrollY) {
        // scroll ke bawah
        setVisible(false);
      } else {
        // scroll ke atas
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <MyAnimate
      initial="-translate-y-full"
      animate="translate-y-0"
      state={visible}
      className={`fixed top-0 w-full z-100 bg-white/85 transition-transform duration-500 backdrop-blur-lg border-b border-b-neutral-200 `}
    >
      <NavbarContent />
    </MyAnimate>
  );
}
