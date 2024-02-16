import cx from "clsx";
import Image from "next/image";
import { memo } from "react";

interface ImageViewProps {
  src: string;
  type?: "small" | "large";
  variant?: "twitter" | "facebook" | "linkedin" | "google";
}
export default memo(function LinkImagePreview({
  src,
  type,
  variant,
}: ImageViewProps) {
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
});
