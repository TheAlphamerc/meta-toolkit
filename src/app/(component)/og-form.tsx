import { Input } from "@/components/ui/input";
import CodeBlock from "./code-block";
import { Meta } from "@/lib/type/meta.type";
import { Textarea } from "@/components/ui/textarea";

export default function OGForm({
  meta,
  setMeta,
}: {
  meta?: Meta;
  setMeta: React.Dispatch<React.SetStateAction<Meta | undefined>>;
}) {
  if (!meta) return null;
  return (
    <div className="mx-auto pb-4 xl:col-span-2 w-full">
      <div className="grid xl:grid-cols-2 gap-4">
        <div>
          <div className="bg-white  overflow-hidden sm:rounded-lg border h-full">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                OpenGraph
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Open Graph tags that are you using in your site
              </p>
            </div>

            {/* Form */}
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 flex flex-col sm:flex-row sm:px-6 gap-2 sm:gap-4 items-start">
                  <dt className="text-sm font-medium text-gray-500 flex items-center w-20 pt-4">
                    Title
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex-1 ">
                    <Input
                      defaultValue={meta?.title}
                      onChange={(e) => {
                        setMeta({
                          ...meta,
                          title: e.target.value,
                          "og:title": e.target.value,
                        });
                      }}
                      placeholder="Title"
                    />
                    <div className="pt-2">
                      <div className="text-xs text-gray-400 float-right">
                        {meta?.title?.length}
                      </div>
                      <div className="text-xs text-gray-400">
                        <b>Recommended length:</b> 60 characters
                      </div>
                    </div>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 flex flex-col sm:flex-row sm:px-6 gap-2 sm:gap-4 sm:items-start">
                  <dt className="text-sm font-medium text-gray-500 flex items-center w-20 pt-4">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex-1 ">
                    <Textarea
                      defaultValue={meta?.description}
                      rows={7}
                      onChange={(e) => {
                        setMeta({
                          ...meta,
                          description: e.target.value,
                          "og:description": e.target.value,
                          "twitter:description": e.target.value,
                        });
                      }}
                    />

                    <div className="pt-2">
                      <div className="text-xs text-gray-400 float-right">
                        {meta?.description?.length}
                      </div>
                      <div className="text-xs text-gray-400">
                        <b>Recommended length:</b> 150 - 160 characters
                      </div>
                    </div>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 flex flex-col sm:flex-row sm:px-6 gap-2 sm:gap-4 sm:items-start">
                  <dt className="text-sm font-medium text-gray-500 flex items-center w-20 pt-2">
                    Image
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex-1 ">
                    <Input
                      defaultValue={meta["og:image"]}
                      className="w-full"
                      onChange={(e) => {
                        setMeta({
                          ...meta,
                          "og:image": e.target.value,
                          "twitter:image": e.target.value,
                        });
                      }}
                      placeholder="Image Url"
                    />
                    <div className="text-xs text-gray-400 pt-2">
                      <b>Recommended dimension:</b> 1200 x 630 pixels
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <CodeBlock meta={meta} />
      </div>
    </div>
  );
}
