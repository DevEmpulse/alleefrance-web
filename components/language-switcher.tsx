"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function LanguageSwitcher({ isScrolled, isMobile }: { isScrolled?: boolean, isMobile?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false);
    if (nextLocale === locale) return;
    
    if (!pathname) return;
    
    const pathParts = pathname.split("/");
    if (pathParts.length > 1 && ["es", "en", "fr"].includes(pathParts[1])) {
      pathParts[1] = nextLocale;
      const newPath = pathParts.join("/");
      router.push(newPath);
    } else {
      router.push(`/${nextLocale}`);
    }
  };

  const textColorClass = isMobile 
    ? "text-[#2563EB]" 
    : isScrolled 
      ? "text-gray-800 hover:text-[#2563EB]" 
      : "text-white hover:text-blue-300";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 font-medium text-sm transition-colors cursor-pointer py-1.5 px-2 rounded-md ${
          isMobile ? "hover:bg-blue-50" : "hover:bg-white/10"
        } ${textColorClass}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            isMobile ? "left-0 top-full mt-1" : "right-0 top-full mt-2"
          } w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleLocaleChange(l.code)}
                className={`w-full text-left px-4 py-2 text-sm cursor-pointer transition-colors ${
                  locale === l.code
                    ? "bg-blue-50 text-[#2563EB] font-bold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium"
                }`}
                role="menuitem"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
