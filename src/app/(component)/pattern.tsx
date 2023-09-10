export default function Pattern() {
  return (
    <div className="absolute inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-50 [mask-image:linear-gradient(to_bottom,transparent,white)] z-0">
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

export function Pattern2({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative  overflow-hidden">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className=" absolute  inset-y-[-20%] h-[160%] w-full fill-black/[0.03] stroke-black/5"
          >
            <defs>
              <pattern
                id=":R5ihdcqla:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="22"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#:R5ihdcqla:)"
            ></rect>
            <svg x="50%" y="22" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
            </svg>
            <svg x="7.2%" y="79" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
            </svg>

            <svg x="20%" y="190" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
            </svg>
            <svg x="80%" y="190" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className=" w-full">{children}</div>
    </div>
  );
}
