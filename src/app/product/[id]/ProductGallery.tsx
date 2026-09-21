"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type ProductGalleryProps = {
    images: string[];
    productName: string;
    sale?: boolean;
};

export default function ProductGallery({
    images,
    productName,
    sale,
}: ProductGalleryProps) {
    const searchParams = useSearchParams();

    const colorParam = searchParams.get("color");

    const [activeImage, setActiveImage] = useState(
        colorParam !== null ? Number(colorParam) : 0
    );

    const [isZooming, setIsZooming] = useState(false);

    const [zoomPosition, setZoomPosition] = useState({
        x: 50,
        y: 50,
    });

    /* COLOR CHANGE */

    useEffect(() => {
        if (colorParam !== null) {
            const colorIndex = Number(colorParam);

            if (
                Number.isInteger(colorIndex) &&
                colorIndex >= 0 &&
                colorIndex < images.length
            ) {
                setActiveImage(colorIndex);
            }
        }
    }, [colorParam, images.length]);


    /* ZOOM */

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect =
            event.currentTarget.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width) * 100;

        const y =
            ((event.clientY - rect.top) / rect.height) * 100;

        setZoomPosition({
            x,
            y,
        });
    };


    return (
        <div className="product-gallery">

            {/* THUMBNAILS */}

            <div className="product-thumbnails">

                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`product-thumbnail ${
                            activeImage === index
                                ? "active"
                                : ""
                        }`}
                        onClick={() =>
                            setActiveImage(index)
                        }
                        aria-label={`View image ${index + 1}`}
                    >
                        <img
                            src={image}
                            alt={`${productName} ${index + 1}`}
                        />
                    </button>
                ))}

            </div>


            {/* MAIN IMAGE + ZOOM */}

            <div
                className="product-gallery-main"
                onMouseEnter={() =>
                    setIsZooming(true)
                }
                onMouseLeave={() =>
                    setIsZooming(false)
                }
                onMouseMove={handleMouseMove}
            >

                <div className="product-detail-image">

                    {sale && (
                        <span className="product-detail-sale">
                            SALE
                        </span>
                    )}

                    <img
                        src={images[activeImage]}
                        alt={productName}
                    />

                </div>


                {/* ZOOM PREVIEW */}

                {isZooming && (
                    <div
                        className="product-zoom-preview"
                        style={{
                            backgroundImage: `url("${images[activeImage]}")`,
                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                    />
                )}

            </div>

        </div>
    );
}