import React from 'react';

interface IFrameData {
  url?: string;
  width?: string;
  height?: string;
}

// Functional component definition
const IFrame: React.FC<IFrameData> = ({ url, width = '400px', height = '400px' }) => {
  if (!url) {
    return null;
  }
  return <iframe src={url} width={width} height={height} style={{ objectFit: 'contain' }} />;
};

export default IFrame;
