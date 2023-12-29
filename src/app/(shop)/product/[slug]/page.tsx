import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";

function formatToArgentinePeso(value: Number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
}

interface Props {
  params: {
    slug: string;
  };
}
export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-0 md:mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-0 md:px-0 lg:px-10 xl:px-28">
      {/*SLIDESHOW*/}
      <div className="col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-2 ">
        {/*MOBILE SLIDESHOW*/}
        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className="md:hidden"
        />
        {/*DESKTOP SLIDESHOW*/}
        <ProductSlideshow
          className="hidden md:block"
          images={product.images}
          title={product.title}
        />
      </div>
      {/**DETALLE */}
      <div className="px-5 md:px-0">
        <h1 className={`{${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{formatToArgentinePeso(product.price)}</p>
        {/**SELECTOR DE TALLE */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSize={product.sizes}
        />
        {/**SELECTOR CANTIDAD */}
        <QuantitySelector quantity={1} />
        {/**BOTÓN */}
        <button className="btn-primary my-5">Añadir al Carrtio</button>
        <h3 className="text-slate-600 text-sm uppercase font-bold my-5 mb-2">
          Descripción
        </h3>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}
