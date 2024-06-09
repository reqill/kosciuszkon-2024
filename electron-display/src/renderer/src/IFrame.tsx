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
  return <img src={url} width={width} height={height} style={{ objectFit: 'contian' }} />;
};

export default IFrame;
