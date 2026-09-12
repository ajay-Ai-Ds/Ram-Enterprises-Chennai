import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false, stacked = false }: LogoProps) {
  // Pure inline SVG vector rendering guarantees instant loading, zero caching issues, and crisp text
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="Ram Enterprises Home"
      >
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-300 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="reIconShieldBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F2137" />
                <stop offset="60%" stopColor="#0A1829" />
                <stop offset="100%" stopColor="#06101C" />
              </linearGradient>
              <linearGradient id="reIconCopper" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E59E67" />
                <stop offset="40%" stopColor="#D08A52" />
                <stop offset="80%" stopColor="#B87333" />
                <stop offset="100%" stopColor="#8C4F1D" />
              </linearGradient>
              <linearGradient id="reIconNavyLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#627D98" />
                <stop offset="100%" stopColor="#1A3A5C" />
              </linearGradient>
            </defs>
            <path
              d="M 50 6 L 88 19 C 88 54, 73 80, 50 94 C 27 80, 12 54, 12 19 Z"
              fill="url(#reIconShieldBg)"
              stroke="url(#reIconCopper)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path
              d="M 50 13 L 81 24 C 81 50, 68 73, 50 85 C 32 73, 19 50, 19 24 Z"
              fill="none"
              stroke="url(#reIconNavyLine)"
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />
            <g stroke="url(#reIconCopper)" strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="1.5,1.5">
              <line x1="28" y1="28" x2="72" y2="72" />
              <line x1="72" y1="28" x2="28" y2="72" />
              <line x1="22" y1="42" x2="78" y2="42" />
              <line x1="26" y1="56" x2="74" y2="56" />
            </g>
            <path d="M 32 26 L 43 26 L 43 70 L 32 70 Z" fill="#FFFFFF" stroke="#0F2137" strokeWidth="0.7" />
            <path
              d="M 43 26 L 58 26 C 66 26, 71 30, 71 37 C 71 44, 66 48, 58 48 L 43 48 Z M 43 34 L 56 34 C 59 34, 61 35.5, 61 37 C 61 38.5, 59 40, 56 40 L 43 40 Z"
              fill="url(#reIconCopper)"
              stroke="#0F2137"
              strokeWidth="0.7"
            />
            <path d="M 50 46 L 62 46 L 73 70 L 61 70 L 51 49 Z" fill="url(#reIconCopper)" stroke="#0F2137" strokeWidth="0.7" />
            <polygon points="50,16 54,21 50,26 46,21" fill="url(#reIconCopper)" />
            <circle cx="50" cy="21" r="1.2" fill="#FFFFFF" />
            <circle cx="32" cy="70" r="1.6" fill="url(#reIconCopper)" />
            <circle cx="73" cy="70" r="1.6" fill="url(#reIconCopper)" />
          </svg>
        </div>
      </Link>
    );
  }

  if (stacked) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="Ram Enterprises Home"
      >
        <div className="relative h-24 w-48 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 136" className="w-full h-full">
            <defs>
              <linearGradient id={`reStackShieldBg-${light ? "light" : "dark"}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={light ? "#1A3A5C" : "#0F2137"} />
                <stop offset="60%" stopColor={light ? "#0F2137" : "#0A1829"} />
                <stop offset="100%" stopColor="#06101C" />
              </linearGradient>
              <linearGradient id={`reStackCopper-${light ? "light" : "dark"}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E59E67" />
                <stop offset="40%" stopColor="#D08A52" />
                <stop offset="80%" stopColor="#B87333" />
                <stop offset="100%" stopColor="#8C4F1D" />
              </linearGradient>
            </defs>
            <g transform="translate(89, 4) scale(0.62)">
              <path
                d="M 50 6 L 88 19 C 88 54, 73 80, 50 94 C 27 80, 12 54, 12 19 Z"
                fill={`url(#reStackShieldBg-${light ? "light" : "dark"})`}
                stroke={`url(#reStackCopper-${light ? "light" : "dark"})`}
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path d="M 32 26 L 43 26 L 43 70 L 32 70 Z" fill="#FFFFFF" stroke="#0F2137" strokeWidth="0.7" />
              <path
                d="M 43 26 L 58 26 C 66 26, 71 30, 71 37 C 71 44, 66 48, 58 48 L 43 48 Z M 43 34 L 56 34 C 59 34, 61 35.5, 61 37 C 61 38.5, 59 40, 56 40 L 43 40 Z"
                fill={`url(#reStackCopper-${light ? "light" : "dark"})`}
                stroke="#0F2137"
                strokeWidth="0.7"
              />
              <path d="M 50 46 L 62 46 L 73 70 L 61 70 L 51 49 Z" fill={`url(#reStackCopper-${light ? "light" : "dark"})`} stroke="#0F2137" strokeWidth="0.7" />
              <polygon points="50,16 54,21 50,26 46,21" fill={`url(#reStackCopper-${light ? "light" : "dark"})`} />
              <circle cx="50" cy="21" r="1.2" fill="#FFFFFF" />
            </g>
            <text
              x="120"
              y="86"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="19"
              fontWeight="900"
              letterSpacing="0.5"
              fill={light ? "#FFFFFF" : "#0F2137"}
            >
              RAM
            </text>
            <text
              x="120"
              y="103"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="11"
              fontWeight="800"
              letterSpacing="3.2"
              fill={light ? "#D08A52" : "#B87333"}
            >
              ENTERPRISES
            </text>
            <text
              x="120"
              y="119"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="1"
              fill={light ? "#D1D5DB" : "#4A4A4A"}
            >
              SAFETY NETS &amp; INVISIBLE GRILLS
            </text>
          </svg>
        </div>
      </Link>
    );
  }

  // Horizontal Full Logo (Default)
  return (
    <Link
      href="/"
      className={`flex items-center select-none group ${className}`}
      aria-label="Ram Enterprises Home"
    >
      <div className="relative h-12 sm:h-14 md:h-15 w-60 sm:w-72 md:w-80 transition-transform duration-300 group-hover:scale-[1.02]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 72" className="w-full h-full">
          <defs>
            <linearGradient id={`reHorizShieldBg-${light ? "light" : "dark"}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light ? "#1A3A5C" : "#0F2137"} />
              <stop offset="60%" stopColor={light ? "#0F2137" : "#0A1829"} />
              <stop offset="100%" stopColor="#06101C" />
            </linearGradient>
            <linearGradient id={`reHorizCopper-${light ? "light" : "dark"}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E59E67" />
              <stop offset="40%" stopColor="#D08A52" />
              <stop offset="80%" stopColor="#B87333" />
              <stop offset="100%" stopColor="#8C4F1D" />
            </linearGradient>
            <linearGradient id={`reHorizNavy-${light ? "light" : "dark"}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={light ? "#9FB3C8" : "#627D98"} />
              <stop offset="100%" stopColor={light ? "#334E68" : "#1A3A5C"} />
            </linearGradient>
          </defs>

          {/* Left Emblem */}
          <g transform="translate(4, 4) scale(0.64)">
            <path
              d="M 50 6 L 88 19 C 88 54, 73 80, 50 94 C 27 80, 12 54, 12 19 Z"
              fill={`url(#reHorizShieldBg-${light ? "light" : "dark"})`}
              stroke={`url(#reHorizCopper-${light ? "light" : "dark"})`}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path
              d="M 50 13 L 81 24 C 81 50, 68 73, 50 85 C 32 73, 19 50, 19 24 Z"
              fill="none"
              stroke={`url(#reHorizNavy-${light ? "light" : "dark"})`}
              strokeWidth="1.2"
              strokeOpacity="0.8"
            />
            <g stroke={`url(#reHorizCopper-${light ? "light" : "dark"})`} strokeWidth="0.9" strokeOpacity="0.35" strokeDasharray="1.5,1.5">
              <line x1="28" y1="28" x2="72" y2="72" />
              <line x1="72" y1="28" x2="28" y2="72" />
              <line x1="22" y1="42" x2="78" y2="42" />
              <line x1="26" y1="56" x2="74" y2="56" />
            </g>
            <path d="M 32 26 L 43 26 L 43 70 L 32 70 Z" fill="#FFFFFF" stroke="#0F2137" strokeWidth="0.7" />
            <path
              d="M 43 26 L 58 26 C 66 26, 71 30, 71 37 C 71 44, 66 48, 58 48 L 43 48 Z M 43 34 L 56 34 C 59 34, 61 35.5, 61 37 C 61 38.5, 59 40, 56 40 L 43 40 Z"
              fill={`url(#reHorizCopper-${light ? "light" : "dark"})`}
              stroke="#0F2137"
              strokeWidth="0.7"
            />
            <path d="M 50 46 L 62 46 L 73 70 L 61 70 L 51 49 Z" fill={`url(#reHorizCopper-${light ? "light" : "dark"})`} stroke="#0F2137" strokeWidth="0.7" />
            <polygon points="50,16 54,21 50,26 46,21" fill={`url(#reHorizCopper-${light ? "light" : "dark"})`} />
            <circle cx="50" cy="21" r="1.2" fill="#FFFFFF" />
            <circle cx="32" cy="70" r="1.6" fill={`url(#reHorizCopper-${light ? "light" : "dark"})`} />
            <circle cx="73" cy="70" r="1.6" fill={`url(#reHorizCopper-${light ? "light" : "dark"})`} />
          </g>

          {/* Typography */}
          <g transform="translate(76, 0)">
            <text
              x="0"
              y="32"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="23"
              fontWeight="900"
              letterSpacing="0.5"
              fill={light ? "#FFFFFF" : "#0F2137"}
            >
              RAM
            </text>

            <text
              x="0"
              y="49"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="13.5"
              fontWeight="800"
              letterSpacing="3.4"
              fill={light ? "#D08A52" : "#B87333"}
            >
              ENTERPRISES
            </text>

            <line
              x1="126"
              y1="45"
              x2="280"
              y2="45"
              stroke={light ? "#D08A52" : "#B87333"}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={light ? 0.8 : 0.65}
            />

            <text
              x="0"
              y="64"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="9"
              fontWeight="700"
              letterSpacing="1.2"
              fill={light ? "#D1D5DB" : "#4A4A4A"}
            >
              SAFETY NETS &amp; INVISIBLE GRILLS
            </text>
          </g>
        </svg>
      </div>
    </Link>
  );
}
