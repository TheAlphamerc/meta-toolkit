import { Meta } from "@/lib/type/meta.type";

export default function CodeBlock({ meta }: { meta: Meta }) {
  return (
    <div className="bg-gray-900 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex">
        <div className="text-lg leading-6 font-medium text-white flex-grow">
          Code
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const text = document.getElementById("code")?.innerText;
            console.log(text);
            navigator.clipboard.writeText(text || "");
            // alert("Copied to clipboard");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            ></path>
          </svg>
        </button>
      </div>
      <code className="border-t border-gray-600">
        <div>
          <div
            id="code"
            className="bg-gray-700  px-4  py-4  whitespace-nowrap  text-sm  overflow-auto  text-green-300  "
          >
            <span className="text-gray-400">&lt;!-- HTML Meta Tags --&gt;</span>
            <br />
            <span className="text-gray-200">&lt;</span>
            <span className="text-blue-200">title</span>
            <span className="text-gray-200">&gt;</span>
            {meta.title}
            <span className="text-gray-200">&lt;/</span>
            <span className="text-blue-200">title</span>
            <span className="text-gray-200">&gt;</span>
            <br />
            <Meta
              propertyName="name"
              property="description"
              content={meta.description}
            />
            <Meta property="image" content={meta["og:image"]} />
            <br />

            <span className="text-gray-400">
              &lt;!-- Facebook Meta Tags --&gt;
            </span>
            <br />
            <Meta property="og:url" content={meta["og:url"]} />
            <Meta property="og:type" content={meta["og:type"]} />
            <Meta property="og:title" content={meta["og:title"]} />
            <Meta property="og:description" content={meta["og:description"]} />
            <Meta property="og:image" content={meta["og:image"]} />
            <br />

            <span className="text-gray-400">
              &lt;!-- Twitter Meta Tags --&gt;
            </span>
            <br />
            <Meta
              propertyName="name"
              property="twitter:card"
              content={meta["twitter:card"]}
            />
            <Meta property="twitter:domain" content={meta["twitter:domain"]} />
            <Meta property="twitter:url" content={meta["twitter:url"]} />
            <Meta
              propertyName="name"
              property="twitter:title"
              content={meta["twitter:title"]}
            />
            <Meta
              propertyName="name"
              property="twitter:description"
              content={meta["twitter:description"]}
            />
            <Meta
              propertyName="name"
              property="twitter:image"
              content={meta["twitter:image"]}
            />
            <br />
            <span className="text-gray-400">
              &lt;!-- Meta Tags Generated with Meta tool --&gt;
            </span>
          </div>
        </div>
      </code>
    </div>
  );
}

function Meta({
  tag = "meta",
  property,
  content,
  propertyName = "property",
}: {
  tag?: string;
  property: string;
  propertyName?: string;
  content?: string;
}) {
  return (
    <span>
      <span className="text-gray-200">&lt;</span>
      <span className="text-blue-200">{tag}</span>
      {/* PROPERTY */}
      <span className="">
        <span className="text-blue-200">&nbsp;{propertyName}</span>
        <span className="text-green-200">=&quot;</span>
        <span className="text-green-300">{property}</span>
        <span className="text-green-200">&quot;</span>
      </span>

      {/* CONTENT */}
      <span className="">
        <span className="text-blue-200">&nbsp;content</span>
        <span className="text-green-200">=&quot;</span>
        <span className="text-green-300">{content}</span>
        <span className="text-green-200">&quot;</span>
      </span>
      <span className="text-gray-200">&gt;</span>
      <br />
    </span>
  );
}
