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
    <div className="group relative flex  bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 overflow-hidden">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className=" absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
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
          </svg>
        </div>
        <div
          className="absolute inset-0 rounded-2xl "
          // style="-webkit-mask-image: radial-gradient(180px at 188px 0px, white, transparent);"
          style={{
            maskImage:
              "radial-gradient(180px at 188px 0px, white, transparent)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          // style="-webkit-mask-image: radial-gradient(180px at 188px 0px, white, transparent);"
          style={{
            maskImage:
              "radial-gradient(180px at 188px 0px, white, transparent)",
          }}
        >
          <svg
            aria-hidden="true"
            className=" absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 "
          >
            <defs>
              <pattern
                id=":R1dihdcqla:"
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
              fill="url(#:R1dihdcqla:)"
            ></rect>
            <svg x="50%" y="22" className="overflow-visible">
              <rect stroke-width="0" width="73" height="57" x="0" y="56"></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className=" w-full">{children}</div>
    </div>
  );
}
