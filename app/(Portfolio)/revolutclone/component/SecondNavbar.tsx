import { useEffect, useState } from "react";
import { MyAnimate } from "./MyAnimate";

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
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-500 `}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">Logo</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </MyAnimate>
  );
}
