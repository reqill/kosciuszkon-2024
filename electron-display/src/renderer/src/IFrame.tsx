import React from 'react';

interface IFrameData {
  url?: string;
  width?: string;
  height?: string;
  show: boolean;
}

// Functional component definition
const IFrame: React.FC<IFrameData> = ({ url, width = '400px', height = '400px', show }) => {
  if (!url) {
    return null;
  }
  return (
    <iframe
      src={url}
      width={width}
      height={height}
      style={{ objectFit: 'contain', opacity: show ? 1 : 0 }}
    />
  );
};

export default IFrame;
