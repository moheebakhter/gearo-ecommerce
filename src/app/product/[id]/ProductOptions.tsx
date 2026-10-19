"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type ProductOptionsProps = {
    productId: string;
};

export default function ProductOptions({
    productId,
}: ProductOptionsProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const initialColor = Number(
        searchParams.get("color") ?? "0"
    );

    const [selectedColor, setSelectedColor] = useState(
        Number.isInteger(initialColor) &&
        initialColor >= 0 &&
        initialColor <= 2
            ? initialColor
            : 0
    );

    const [selectedSize, setSelectedSize] =
        useState("Size A - Small");

    const colors = [
        {
            name: "Peach",
            color: "#e8d1c2",
        },
        {
            name: "Beige",
            color: "#b5ae9d",
        },
        {
            name: "Gray",
            color: "#9d9b98",
        },
    ];

    const sizes = [
        "Size A - Small",
        "Size B - Medium",
        "Size C - Large",
    ];

    const handleColorChange = (index: number) => {

        setSelectedColor(index);

        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set("color", String(index));

        router.replace(
            `?${params.toString()}`,
            {
                scroll: false,
            }
        );
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
                                backgroundColor: color.color,
                            }}
                            onClick={() =>
                                handleColorChange(index)
                            }
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
                        Size:{" "}
                        <strong>
                            {selectedSize}
                        </strong>
                    </p>

                    <Link href={`/size-guide/${productId}`}>
                        Find Your Size
                    </Link>

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
                            onClick={() =>
                                setSelectedSize(size)
                            }
                        >
                            {size}
                        </button>

                    ))}

                </div>

            </div>

        </div>
    );
}