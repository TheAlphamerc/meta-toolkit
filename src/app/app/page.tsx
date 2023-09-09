"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { LinkMeta, useMeta } from "@/lib/hooks/use-meta";
import Validator from "@/lib/validator";
import { cx } from "class-variance-authority";
import React, { useState } from "react";
import { LinkMetaCard } from "../(component)/link-meta-card";

export default function App() {
  const [map, setMap] = useState<LinkMeta>();
  const [loading, setLoading] = useState(false);

  const { getMetaMap } = useMeta();
  return (
    <section className="flex flex-col max-w-5xl mx-auto pt-8 gap-4 p-4">
      <div className="flex flex-col gap-4 max-w-lg lg:max-w-3xl mx-auto w-full">
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
              getMetaMap(ll)?.then((data: LinkMeta | undefined) => {
                console.log(data);
                setLoading(false);
                if (!Validator.hasValue(data)) {
                  setMap({} as LinkMeta);
                  return;
                }
                setMap(data!);
              });
            } else {
              console.log("no url", ll);
            }
          }}
          className="flex items-center gap-4"
        >
          <Input required placeholder="Enter " />
          <Button variant="outline" type="submit">
            Preview
          </Button>
        </form>
      </div>

      <div className={cx("mx-auto")}>
        {(loading || map) && (
          <p className="text-muted-foreground my-6 scroll-m-20">PREVIEW</p>
        )}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center pb-40">
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
            <Skeleton className="w-full h-[420px] rounded-sm min-w-[500px]" />
          </div>
        ) : !map ? (
          <></>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center pb-40">
            <div className="flex flex-col gap-2 w-full">
              <h6 className="text-muted-foreground">Facebook</h6>
              <LinkMetaCard
                map={map!}
                variant="facebook"
                type="large"
                className="max-w-[520px]"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h6 className="text-muted-foreground">Linkedin</h6>
              <LinkMetaCard
                map={map!}
                variant="linkedin"
                type="large"
                className="max-w-[520px]"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h6 className="text-muted-foreground">Twitter</h6>
              <LinkMetaCard
                map={map!}
                variant="twitter"
                type="large"
                className="max-w-[520px]"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h6 className="text-muted-foreground">Google</h6>
              <LinkMetaCard
                map={map!}
                variant="google"
                type="large"
                className="max-w-[520px]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
