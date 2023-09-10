import { useState } from "react";
import { OpenService } from "../service/open-service";
import { Meta } from "../type/meta.type";

export const useMeta = (): {
  getMetaMap: (url?: string) => Promise<Meta> | null;
} => {
  const [metaMap, setMetaMap] = useState<Record<string, Meta>>({});

  const fetchData = async (url: string): Promise<Meta | undefined> => {
    try {
      const response = await OpenService.getLinkMetaData(url);

      return response["result"];
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  async function getMetaMap(url?: string): Promise<any> {
    if (!url) return Promise.resolve(null);

    // Check for the blacklist urls
    const isBlacklisted = blacklistUrls.some((blacklistUrl) =>
      url.includes(blacklistUrl)
    );

    if (isBlacklisted) {
      return Promise.resolve(null);
    }

    // Check for valid link
    const isValidLink = url.match(/^(ftp|http|https|www):\/\/[^ "]+$/);
    if (!isValidLink) {
      return Promise.resolve(null);
    }

    // Check for the map if the data is already present
    if (metaMap[url]) {
      return Promise.resolve(metaMap[url]);
    }

    // Check for the storage if the data is already present
    const storageMeta = localStorage.getItem("meta");
    if (storageMeta) {
      const storageMetaMap = JSON.parse(storageMeta) as Record<
        string,
        Meta
      >;
      if (storageMetaMap && storageMetaMap[url]) {
        return Promise.resolve(storageMetaMap[url]);
      }
    }

    const meta = await fetchData(url);

    if (meta) {
      updateLocalStorage(url, meta);
      return Promise.resolve(meta);
    }
    updateLocalStorage(url, null);

    return Promise.resolve(null);
  }

  function updateLocalStorage(url: string, meta: Meta | null) {
    // Append meta record to the existing storage
    const storageMeta = localStorage.getItem("meta");
    if (storageMeta) {
      const metaMap = JSON.parse(storageMeta) as Record<string, Meta>;
      // console.log("🚀 ~ metaMap Pre save map:", metaMap)
      const obj = Object.assign(metaMap, { [url]: meta });
      localStorage.setItem("meta", JSON.stringify(obj));
      // console.log('meta Post save map', { obj, string: JSON.stringify(obj) });
    } else {
      const obj = Object.assign({}, { [url]: meta });
      localStorage.setItem("meta", JSON.stringify(obj));
      // console.log('meta', { obj, string: JSON.stringify(obj) });
    }
    setMetaMap(metaMap);
  }

  return { getMetaMap };
};

const blacklistUrls = [
  "www.google.com",
  "api.whatsapp.com",
  "api.pensil.in",
  "livemeeting.pro",
  "pensil-social.s3",
  "googleusercontent.com",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".bmp",
  ".svg",
  ".ico",
  ".tif",
  ".tiff",
  ".psd",
  ".ai",
  ".eps",
  ".doc",
  ".docx",
  ".pdf",
  ".ppt",
  ".pptx",
  ".xls",
  ".xlsx",
  ".csv",
  ".txt",
  ".zip",
  ".rar",
  ".tar",
  ".gz",
  ".7z",
  ".mp3",
  ".mp4",
  ".avi",
  ".wmv",
  ".mov",
  ".mkv",
  ".flv",
  ".wav",
  ".ogg",
  ".ogv",
  ".oga",
  ".webm",
  ".m4a",
  ".m4v",
  ".mpg",
  ".mpeg",
  ".m2v",
  ".mpg",
  ".mpeg",
  ".m2v",
];


