export default function Pattern() {
  return (
    <div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)] z-0">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="100%"
            patternTransform="translate(0 -1)"
          >
            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
      </svg>
    </div>
  );
}
