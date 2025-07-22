import React from 'react';
import { useState } from "react";

type ImageWithSkeletonProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number |string
};

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative" style={{ width, height }}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ width, height }}
      />
    </div>
  );
};

export {ImageWithSkeleton};