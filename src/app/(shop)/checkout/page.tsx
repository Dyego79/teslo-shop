import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { IoBagRemove, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];

export default function PageCart() {
  return (
    <>
      <Title className="" title={"Terminar Compra"} />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 items-start mb-72 gap-x-4">
        <div className="flex flex-col lg:col-span-2  ">
          <div className="gird grid-cols-1 sm:grid-cols-2 gap-10">
            {/**CARRITO */}
            <div className="flex flex-col mt-5">
              <span className="text-xl">Tus productos</span>
              <Link href={"/cart"} className="underline mb-5">
                Editar carrito
              </Link>
            </div>
            {/* PRODUCTOS EN EL CARRITO */}
            {productsInCart.map((p, k) => (
              <div key={k} className="flex mb-5 items-center">
                <Image
                  src={`/products/${p.images[0]}`}
                  alt={p.title}
                  height={50}
                  width={50}
                />

                <span className="border mr-11">{p.title}</span>
                <span className="ml-auto border">$ {p.price}</span>
                <span className="ml-5 w-40">Subtotal $ {p.price}</span>
              </div>
            ))}
          </div>
        </div>
        {/**CHECKOUT RESUMEN ORDEN */}
        <div className="bg-slate-200 rounded-md shadow-md p-7 ">
          <h2 className="text-2xl mb-2">Dirección de Entrega</h2>
          <div className="mb-3">
            <p>Diego Pérez</p>
            <p>Agote 3046</p>
            <p>Quilmes</p>
            <p>Argentina</p>
            <p>C.P. 1879</p>
            <p>Tel. 11-6060-6060</p>
          </div>
          <div className="h-px w-full bg-slate-400 my-5" />
          <h2 className="text-2xl mb-2">Resumen de Orden</h2>
          <div className="grid grid-cols-2">
            <span>Nº de Productos</span>
            <span className="text-right">3 artículos</span>
            <span className="h-px bg-slate-400 col-span-2 my-2"></span>
            <span>Sub-total</span>
            <span className="text-right">$ 100</span>
            <span>Impuestos (21%)</span>
            <span className="text-right">$ 100</span>
            <span className="h-px bg-slate-400 col-span-2 mt-5 mb-3"></span>

            <span className="fade-in text-xl font-bold">Total (21%)</span>
            <span className="fade-in text-xl font-bold text-right">$ 300</span>
          </div>
          <div className="w-full mt-8">
            <Link
              className="btn-primary flex justify-center"
              href={"/orders/123"}
            >
              COMPRAR
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
