"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

function formatToArgentinePeso(value: Number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDiplayImage] = useState(product.images[0]);
  return (
    <Link className="" href={`/product/${product.slug}`}>
      <div className="rounded-md overflow-hidden fade-in">
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover rounded-md"
          width={500}
          height={500}
          //cambiar estado src
          onMouseEnter={() => setDiplayImage(product.images[1])}
          onMouseLeave={() => setDiplayImage(product.images[0])}
        />
        <div className="p-4 flex flex-col hover:font-semibold">
          {product.title}

          <span className="font-bold">
            {formatToArgentinePeso(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
};
