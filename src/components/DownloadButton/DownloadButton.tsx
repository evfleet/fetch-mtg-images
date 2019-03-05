import React from "react";
import JSZip from "jszip";

import { DownloadZipFunc } from "../../types";

interface DownloadButtonProps {
  zip: JSZip;
  downloadZip: DownloadZipFunc;
}

const DownloadButton: React.SFC<DownloadButtonProps> = ({ zip }) => {
  const files = Object.keys(zip.files);

  if (files.length > 0) {
    return <button>Download</button>;
  }

  return null;
};

export default DownloadButton;
