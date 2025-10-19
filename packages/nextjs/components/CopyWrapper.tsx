"use client";

import React, { FC } from "react";
import CopyToClipboardOriginal from "react-copy-to-clipboard";

// Wrapper pour forcer TypeScript à accepter le JSX
const CopyToClipboard: FC<any> = props => {
  const AnyCopy = CopyToClipboardOriginal as unknown as React.ComponentType<any>;
  return <AnyCopy {...props} />;
};

export default CopyToClipboard;
