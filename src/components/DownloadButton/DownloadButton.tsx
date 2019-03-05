import React from "react";
import JSZip from "jszip";

import { DownloadZipFunc } from "../../types";

interface DownloadButtonProps {
  downloadZip: DownloadZipFunc;
  zip: JSZip;
}

const DownloadButton: React.SFC<DownloadButtonProps> = ({ downloadZip, zip }) => {
  const files = Object.keys(zip.files);

  if (files.length > 0) {
    return <button onClick={downloadZip}>Download</button>;
  }

  return null;
};

export default DownloadButton;
