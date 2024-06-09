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
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px 0' }}>
      <img src={url} width="100%" height="100%" style={{ border: 'none' }} />
    </div>
  );
};

export default IFrame;
