import { Meta } from "@/lib/type/meta.type";
import { LinkMetaCard } from "./link-meta-card";

export default function PreviewList({ meta }: { meta?: Meta }) {
  return (
    <div className=" border p-4 rounded-md w-full">
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
      <div className="flex flex-col gap-2 lg:w-full">
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
