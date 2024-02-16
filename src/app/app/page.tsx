"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useMeta } from "@/lib/hooks/use-meta";
import { Meta } from "@/lib/type/meta.type";
import Validator from "@/lib/validator";
import { cx } from "class-variance-authority";
import React, { useEffect, useState } from "react";
import Features from "../(component)/features.block";
import Footer from "../(component)/footer";
import OGForm from "../(component)/og-form";
import Pattern from "../(component)/pattern";
import PreviewList from "../(component)/preview-list";

export default function App() {
  const [meta, setMeta] = useState<Meta>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    if (window) {
      const query = new URLSearchParams(window.location.search);
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
    } else {
      setMeta(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const { getMetaMap } = useMeta();
  return (
    <section className="flex flex-col  mx-auto bg-gradient-to-b from-white via-gray-50/90 to-gray-50">
      <Pattern />
      {/* Input Bar */}
      <div className="pb-10 z-0 px-4">
        <div className="flex flex-col gap-8 max-w-lg lg:max-w-3xl mx-auto w-full py-8 sm:py-12 lg:py-8 ">
          <div className="lg:text-center sm:py-8">
            <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
              We handle everything for you
            </p>
            <h3 className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
              See what lies beyond the surface of a link, before you share it
              with others through our powerful link previews.
            </h3>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pb-40 px-4">
            <Skeleton className="w-full h-[620px] rounded-sm " />
            <Skeleton className="w-full h-[620px] rounded-sm " />
            <Skeleton className="w-full h-[620px] rounded-sm " />
          </div>
        ) : !meta ? (
          <Features />
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-[420px_minmax(520px,_1fr)_520px] gap-4 px-4 justify-items-center 2xl:px-10 item-start pb-20 py-8 ">
            <OGForm meta={meta} setMeta={setMeta} />
            <PreviewList meta={meta} />
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
}
