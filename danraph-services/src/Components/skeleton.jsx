import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageWithSkeleton = ({ src, alt, className, skeletonSize = 42, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block", verticalAlign: "top" }}>
      {!loaded && (
        <Skeleton
          height={skeletonSize}
          width={skeletonSize}
          circle={className?.includes("rounded-full")}
          style={{ display: "block" }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ display: "block", ...(loaded ? {} : { display: "none" }) }}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;