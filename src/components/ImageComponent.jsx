/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ src, alt, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <div style={{ width: "100%", height: "400px" }}>
          <Blurhash
            hash={hash}
            width={1000}
            height={400}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        hash={hash}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
    </>
  );
};

export default ImageComponent;
