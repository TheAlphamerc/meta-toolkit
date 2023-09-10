"use client";

import { useMeta } from "@/lib/hooks/use-meta";
import { Meta } from "@/lib/type/meta.type";
import { cn } from "@/lib/utils";
import Validator from "@/lib/validator";
import cx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  type?: "small" | "large";
  variant?: "twitter" | "facebook" | "linkedin" | "google";
  className?: string;
  map: Meta;
}

/**
 * Component to display a link preview card. it uses the the useMeta hook to fetch the link preview data
 * @param {string} url - The url to preview
 */

export const LinkMetaCard: React.FC<Props> = ({
  map,
  type = "small",
  className,
  variant = "facebook",
}) => {
  // const [map, setMap] = useState({} as LinkMeta);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [siteName, setSiteName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const { getMetaMap } = useMeta();

  useEffect(() => {
    if (!map) return;

    if (map["og:image"]) {
      setImage(map["og:image"]);
    }
    if (map["og:title"]) {
      setTitle(map["og:title"]);
    } else if (map["title"]) {
      setTitle(map["title"]);
    } else {
      setTitle("No title specified");
    }
    if (map["og:description"]) {
      setDescription(map["og:description"]);
    } else {
      setDescription("No description specified");
    }
    if (map["og:site_name"]) {
      setSiteName(map["og:site_name"]);
    }
    if (map["url"]) {
      // Extract the hostname from the url
      const hostname = map["url"];
      setUrl(hostname);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  if (!Validator.hasValue(map)) {
    return (
      <div
        className={cx(
          "cursor-pointer overflow-hidden max-w-[520px] border",
          className,
          {
            flex: type === "small",
            "rounded-2xl": variant === "twitter",
            "rounded-[2px]": variant === "linkedin",
          }
        )}
      >
        <ImageView
          src={
            variant === "google"
              ? "https://placehold.co/320x100/F8F8FF/A9A9A9/png?text=No+Preview"
              : "https://placehold.co/360x150/F8F8FF/A9A9A9/png?text=No+Preview"
          }
        />
      </div>
    );
  }

  if (
    !Validator.hasValue(image) &&
    !Validator.hasValue(title) &&
    !Validator.hasValue(description)
  )
    return null;

  return (
    <>
      <div
        className={cx(
          "cursor-pointer overflow-hidden max-w-[520px]",
          className,
          {
            border: variant !== "google",
            flex: type === "small",
            "rounded-2xl": variant === "twitter",
            "rounded-[2px]": variant === "linkedin",
          }
        )}
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        {image && variant !== "google" && <ImageView src={image} />}
        <div
          className={cx("flex-grow grid gap ", {
            "p-3": !["google", "slack"].includes(variant!),
            "bg-[#1d21290a] px-[10px] py-3": variant === "facebook",
          })}
        >
          <Hostname
            hostname={url ? new URL(url).hostname : ""}
            variant={variant}
            visible={!["google", "slack", "linkedin"].includes(variant!)}
          />
          {title && (
            <h3
              className={cn(
                cx("font-semibold ", {
                  "text-[#1a0dab]": variant === "google",
                  "text-[#0f1419] font-normal": variant === "twitter",
                  "line-clamp-2 leading-5": ["linkedin", "facebook"].includes(
                    variant!
                  ),
                  truncate: !["linkedin", "facebook"].includes(variant!),
                })
              )}
            >
              {title}
            </h3>
          )}
          <Hostname
            hostname={url}
            variant={variant}
            visible={["linkedin", "google"].includes(variant!)}
          />
          {description && (
            <p
              className={cx(" text-sm theme-text-subtitle-1", {
                "text-slate-500 text-xs line-clamp-3": variant === "google",
                "text-[#536471] text-[15px]": variant === "twitter",
                "line-clamp-2": variant !== "google",
                "line-clamp-1": variant === "facebook",
                hidden: ["linkedin"].includes(variant!),
              })}
            >
              {description.substring(0, 140)}
            </p>
          )}
        </div>
      </div>
    </>
  );
  function ImageView({ src }: { src: string }) {
    return (
      <Image
        unoptimized
        width={520}
        height={150}
        src={src}
        alt={"Preview"}
        className={cx(
          " w-full border-b theme-border-default object-cover blur-0 ",
          {
            "max-w-[150px]": type === "small",
            "h-[250px]": variant !== "google" && type === "large",
          }
        )}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/360x150/F8F8FF/A9A9A9/png?text=No+Preview";
        }}
      />
    );
  }
};

function Hostname({
  hostname,
  variant,
  visible = true,
}: {
  hostname: string;
  variant: string;
  visible: boolean;
}) {
  if (!Validator.hasValue(hostname)) {
    return null;
  }
  return (
    <p
      className={cn(
        cx(" text-[0.8rem]", {
          "text-[#006621] ": variant === "google",
          "text-[#536471] text-[15px]": variant === "twitter",
          "text-[#606770] text-[12px]": variant === "facebook",
          "text-black/60 text-[12px]": variant === "linkedin",
          uppercase: ["facebook"].includes(variant),

          hidden: !visible,
        })
      )}
    >
      {hostname}
    </p>
  );
}
