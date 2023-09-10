"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useMeta } from "@/lib/hooks/use-meta";
import Validator from "@/lib/validator";
import { cx } from "class-variance-authority";
import React, { useState } from "react";
import { LinkMetaCard } from "../(component)/link-meta-card";
import { Meta } from "@/lib/type/meta.type";
import CodeBlock from "../(component)/code-block";

export default function App() {
  const [meta, setMeta] = useState<Meta>();
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(window?.location?.search);
  const url = query.get("url");

  React.useEffect(() => {
    if (url) {
      setLoading(true);
      getMetaMap(url)?.then((data: Meta | undefined) => {
        console.log(data);
        setLoading(false);
        if (!Validator.hasValue(data)) {
          setMeta({} as Meta);
          return;
        }
        setMeta(data!);
      });
    }
  }, [url]);

  const { getMetaMap } = useMeta();
  return (
    <section className="flex flex-col  mx-auto bg-gray-50">
      {/* Input Bar */}
      <div className="bg-slate-200 p-4">
        <div className="flex flex-col gap-4 max-w-lg lg:max-w-3xl mx-auto w-full py-8 sm:py-12 lg:py-16 ">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Preview, Edit, and Generate meta tags for your website.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // @ts-ignore
              console.log(e.target[0].value);
              // @ts-ignore
              const ll = e.target[0].value;
              if (ll) {
                setLoading(true);
                // Update url
                window.history.pushState({}, "", `?url=${ll}`);
                getMetaMap(ll)?.then((data: Meta | undefined) => {
                  console.log(data);
                  setLoading(false);
                  if (!Validator.hasValue(data)) {
                    setMeta({} as Meta);
                    return;
                  }
                  setMeta(data!);
                });
              } else {
                console.log("no url", ll);
              }
            }}
            className="flex items-center gap-4"
          >
            <Input
              defaultValue={url ?? ""}
              required
              type="url"
              placeholder="Enter your URL"
            />
            <Button variant="default" type="submit">
              Preview
            </Button>
          </form>
        </div>
      </div>
      <div className={cx(" mx-auto w-full ")}>
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center  pb-40">
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
          </div>
        ) : !meta ? (
          <Features />
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-[420px_minmax(520px,_1fr)_520px] gap-4 px-4 justify-items-center 2xl:px-10 item-start pb-20 py-8">
            <Code meta={meta} setMeta={setMeta} />
            <PreviewList meta={meta} />
          </div>
        )}
      </div>
    </section>
  );
}

function PreviewList({ meta }: { meta?: Meta }) {
  return (
    <div className=" border p-4 rounded-md">
      <div className="pb-4">
        <div className="font-bold">Preview</div>
        <p className="text-xs text-muted-foreground">
          How your website is displayed on search engines & social media.
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-center justify-items-center max-w-[520px]">
        <Card name="Google" />
        <Card name="Facebook" />
        <Card name="Twitter" />
        <Card name="Linkedin" />
      </div>
    </div>
  );

  function Card({ name }: { name: string }) {
    return (
      <div className="flex flex-col gap-2 lg:w-full mx-auto">
        <h6 className="text-muted-foreground">{name}</h6>
        <LinkMetaCard
          map={meta!}
          variant={name.toLowerCase() as any}
          type="large"
          className="max-w-[520px]"
        />
      </div>
    );
  }
}

function Code({
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
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
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
                <div className="bg-gray-50 px-4 py-5 flex flex-col sm:flex-row sm:px-6 gap-2 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500 flex items-center w-20">
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
                        {meta?.title?.length ?? 0}
                      </div>
                      <div className="text-xs text-gray-400">
                        <b>Recommended length:</b> 60 characters
                      </div>
                    </div>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 flex flex-col sm:flex-row sm:px-6 gap-2 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500 flex items-center w-20">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex-1 ">
                    <Textarea
                      defaultValue={meta?.description}
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
                <div className="bg-gray-50 px-4 py-5 flex flex-col sm:flex-row sm:px-6 gap-2 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500 flex items-center w-20">
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
                    <div className="text-xs text-gray-400">
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

function Features() {
  return (
    <div className="py-6 bg-white">
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
