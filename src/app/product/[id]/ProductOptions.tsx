"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductOptions() {
    const router = useRouter();

    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState("Size C - Large");

    const colors = [
        {
            name: "Peach",
            imageIndex: 0,
        },
        {
            name: "Beige",
            imageIndex: 1,
        },
        {
            name: "Gray",
            imageIndex: 2,
        },
    ];

    const sizes = [
        "Size A - Small",
        "Size B - Medium",
        "Size C - Large",
    ];

    const handleColorChange = (index: number) => {
        setSelectedColor(index);

        router.replace(`?color=${index}`, {
            scroll: false,
        });
    };

    return (
        <div className="product-options">

            {/* COLOR */}

            <div className="product-color-section">

                <p className="product-option-label">
                    Color
                </p>

                <div className="product-color-options">

                    {colors.map((color, index) => (
                        <button
                            key={color.name}
                            type="button"
                            className={`product-color ${
                                selectedColor === index
                                    ? "active"
                                    : ""
                            }`}
                            style={{
                                backgroundColor:
                                    index === 0
                                        ? "#e8d1c2"
                                        : index === 1
                                        ? "#b5ae9d"
                                        : "#9d9b98",
                            }}
                            onClick={() => handleColorChange(index)}
                            aria-label={color.name}
                            title={color.name}
                        />
                    ))}

                </div>

            </div>


            {/* SIZE */}

            <div className="product-size-section">

                <div className="product-size-heading">

                    <p>
                        Size: <strong>{selectedSize}</strong>
                    </p>

                    <a href="#size-guide">
                        Find Your Size
                    </a>

                </div>


                <div className="product-size-options">

                    {sizes.map((size) => (
                        <button
                            key={size}
                            type="button"
                            className={`product-size ${
                                selectedSize === size
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}

                </div>

            </div>

        </div>
    );
}