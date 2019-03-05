import util from "util";
import JSZipUtils from "jszip-utils";

import { AvailableCard, UnavailableCard } from "../types";

const getBinaryContent = util.promisify(JSZipUtils.getBinaryContent);

export default async function(name: string): Promise<AvailableCard | UnavailableCard> {
  try {
    const result = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURI(name)}`).then((r) => r.json());

    if (result.object !== "card") {
      throw new Error("Card not found");
    }

    let imageData;
    let image;
    let thumbnail;

    if (result.prints_search_uri) {
      const printings = await fetch(result.prints_search_uri).then((r) => r.json());

      if (printings.object !== "list") {
        throw new Error("Printings not found");
      }

      const oldest = printings.data[printings.data.length - 1];

      imageData = await getBinaryContent(oldest.image_uris.normal);
      image = oldest.image_uris.large;
      thumbnail = oldest.image_uris.small;
    } else {
      imageData = await getBinaryContent(result.image_uris.large);
      image = result.image_uris.large;
      thumbnail = result.image_uris.small;
    }

    if (!imageData) {
      throw new Error("Image not found");
    }

    return {
      name,
      image,
      imageData,
      thumbnail
    };
  } catch (error) {
    switch (error.message) {
      case "Card not found":
      case "Image not found":
      case "Printings not found":
        return {
          name,
          error: error.message
        };
      default:
        return {
          name,
          error: "Unexpected error"
        };
    }
  }
}
