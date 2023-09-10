import { Pattern2 } from "./pattern";

export default function Footer() {
  return (
    <div className="bg-white/10  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
      <OSSSection />
    </div>
  );
}
function OSSSection() {
  return (
    <Pattern2>
      <div
        // className="mt-20 border-t border-gray-200 py-20"
        className="pt-20 bg-gradient-to-b from-white/10 via-transparent to-transparent"
      >
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="mx-auto max-w-md text-center sm:max-w-xl">
            <h2 className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight">
              Proudly open-source
            </h2>
            <p className="mt-5 text-gray-600 sm:text-lg">
              Our source code is available on GitHub - feel free to read,
              review, or contribute to it however you want!
            </p>
          </div>
          <div className="flex items-center justify-center py-10">
            <a
              href="https://github.com/TheAlphamerc/meta-toolkit"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center">
                <div className="flex h-10 items-center space-x-2 rounded-md border border-gray-600 bg-gray-800 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <p className="font-medium text-white">Github</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="border-t p-4 max-w-5xl m-auto text-muted-foreground text-xs">
          © 2023 Toolkit{" "}
        </div>
      </div>
    </Pattern2>
  );
}
