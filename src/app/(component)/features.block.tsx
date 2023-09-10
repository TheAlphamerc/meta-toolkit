export default function Features() {
  return (
    <div className="sm:py-10 pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <Checkbox />
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  What is an Open Graph
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Open Graph allows websites to provide rich media content when
                shared on social platforms like Facebook, Twitter, LinkedIn, and
                more. By utilizing Open Graph tags in your HTML code, you can
                control how information from your website appears when it&apos;s
                shared across various social media channels.
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
