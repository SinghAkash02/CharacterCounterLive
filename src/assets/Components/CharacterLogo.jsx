export default function CharacterLogo() {
  return (
    <svg
      className="logo-svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5.5C14.5 3.8 9.8 5 7.2 8.4C4.6 11.8 4.6 16.2 7.2 19.6C9.8 23 14.5 24.2 18 22.5"
        stroke="url(#grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <rect x="16.5" y="9" width="2" height="10" rx="1" fill="url(#grad)" />
      <rect x="20.5" y="11" width="2" height="8" rx="1" fill="url(#grad)" />

      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="28" y2="28">
          <stop stopColor="#CFA9FF" />
          <stop offset="1" stopColor="#FFB000" />
        </linearGradient>
      </defs>
    </svg>
  );
}
