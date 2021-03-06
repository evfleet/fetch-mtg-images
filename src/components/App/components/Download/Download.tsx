import React from "react";
import JSZip from "jszip";

import { DownloadZipFunc } from "../../../../types";

import { Button } from "../../../../styles/shared";

interface DownloadProps {
  downloadZip: DownloadZipFunc;
  zip: JSZip;
}

const Download: React.SFC<DownloadProps> = ({ downloadZip, zip }) => {
  const files = Object.keys(zip.files);

  if (files.length > 0) {
    return <Button onClick={downloadZip}>Download</Button>;
  }

  // return null;
  return <Button onClick={downloadZip}>Download</Button>;
};

export default Download;
