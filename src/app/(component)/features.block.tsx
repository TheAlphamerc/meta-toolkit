export default function Features() {
  return (
    <div className="pb-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center sm:py-8">
          <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We handle everything for you
          </p>
          <h3 className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Fast and secure, we crawl your site to preview all opengraph in your
            meta tags
          </h3>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <Checkbox />
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  What is an OGP?
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                OGP stands for Open Graph Protocol, which is a defined system to
                convey the contents of webpages on SNS. By setting Open Graph
                properly, a specified image/ title/ description is displayed
                when a web content is shared.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <Checkbox />
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  What is the image size for Open Graph?
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Use images that are at least 1080 pixels in width for best
                display on high resolution devices. Facebook recommends using
                1:1 images in your ad creatives for better performance with
                image link ads.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <Checkbox />
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  How to add OG tags in my site?
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Use a free tool such as meta-toolkit.vercel.app to generate
                opengraph tags for your website, and copy the meta tags into the
                &lt;head&gt; section tag.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <Checkbox />
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Why are Open Graph tags important?
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                People are arguably more likely to see and click shared content
                with optimized OG tags, which means more social media traffic to
                your website. They make content more eye-catching in social
                media feeds
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
  function Checkbox() {
    return (
      <div className=" absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </span>
      </div>
    );
  }
}
