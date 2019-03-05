import util from "util";
import JSZipUtils from "jszip-utils";

import { AvailableCard, UnavailableCard } from "../types";

const getBinaryContent = util.promisify(JSZipUtils.getBinaryContent);

export default async function(name: string): Promise<AvailableCard | UnavailableCard> {
  try {
    const res = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURI(name)}`);
    const result = await res.json();

    if (result.status && result.status === 404) {
      throw new Error("Card not found");
    }

    if (!result.image_uris) {
      throw new Error("No image urls");
    }

    const imageData = await getBinaryContent(result.image_uris.large);

    if (!imageData) {
      throw new Error("Image not found");
    }

    return {
      name,
      imageData,
      image: result.image_uris.large,
      thumbnail: result.image_uris.small
    };
  } catch (error) {
    if (error.message === "Card not found" || error.message === "Image not found") {
      return {
        name,
        error: error.message
      };
    }

    return {
      name,
      error: "Unexpected error"
    };
  }
}
