import JSZipUtils from "jszip-utils";

export default function(url) {
  return new Promise((resolve, reject) => {
    JSZipUtils.getBinaryContent(url, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}
