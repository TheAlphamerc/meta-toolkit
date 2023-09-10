"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useMeta } from "@/lib/hooks/use-meta";
import Validator from "@/lib/validator";
import { cx } from "class-variance-authority";
import React, { useEffect, useState } from "react";
import { LinkMetaCard } from "../(component)/link-meta-card";
import { Meta } from "@/lib/type/meta.type";
import CodeBlock from "../(component)/code-block";
import Pattern from "../(component)/pattern";
import Features from "../(component)/features.block";
import Footer from "../(component)/footer";

export default function App() {
  const [meta, setMeta] = useState<Meta>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    if (window) {
      const query = new URLSearchParams(window?.location?.search);
      const url = query.get("url");
      if (url) {
        setUrl(url);
      }
    }
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const { getMetaMap } = useMeta();
  return (
    <section className="flex flex-col  mx-auto bg-gradient-to-b from-white via-gray-50/90 to-gray-50">
      <Pattern />
      {/* Input Bar */}
      <div className="p-4 z-0">
        <div className="flex flex-col gap-4 max-w-lg lg:max-w-3xl mx-auto w-full py-8 sm:py-12 lg:py-16 ">
          <p className="leading-7 font-mono text-center font-medium text-slate-700 -mt-1">
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
              className="bg-white"
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
          <div className="grid md:grid-cols-2 xl:grid-cols-[420px_minmax(520px,_1fr)_520px] gap-4 px-4 justify-items-center 2xl:px-10 item-start pb-20 py-8 ">
            <Code meta={meta} setMeta={setMeta} />
            <PreviewList meta={meta} />
          </div>
        )}
      </div>
      <Footer />
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
