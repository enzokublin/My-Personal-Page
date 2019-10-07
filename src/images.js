
import React, { useEffect, useState } from 'react';
import { Gallery, GalleryImage } from "react-gesture-gallery";


export function abaloneImagesCarousells{
    const [index, setIndex] = React.useState(0);

    const abaloneImages = [
        {
            src: "img/abalone1.png"
        },
        {
            src: "img/abalone.png"
        },
        {
            src: "img/abalone-js.png"
        },
        {
            src: "img/abalone-html.png"
        },
        {
            src: "img/abalone-css.png"
        }
    ];

    return (
        <div className="image-container">
            <Gallery
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}
            >
                {images.map(img => (
                    <GalleryImage objectFit="contain" key={img.src} src={img.src} />
                ))}
            </Gallery>
        </div>
    );
}