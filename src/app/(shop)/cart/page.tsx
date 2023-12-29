import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoBagRemove, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];

export default function PageCart() {
  //redirect("/empty");
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 justify-center items-center mb-72 gap-x-4">
      <div className="flex flex-col lg:col-span-2">
        <Title className="" title={"Carrito"} />
        <div className="gird grid-cols-1 sm:grid-cols-2 gap-10">
          {/**CARRITO */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más Productos</span>
            <Link href={"/"} className="underline mb-5">
              Continua comprando
            </Link>
          </div>
          {/* PRODUCTOS EN EL CARRITO */}
          {productsInCart.map((p, k) => (
            <div key={k} className="flex space-x-2 mb-5 items-center">
              <Image
                src={`/products/${p.images[0]}`}
                alt={p.title}
                height={50}
                width={50}
              />
              <div className="flex items-center">
                <QuantitySelector quantity={5} />
              </div>
              <span className=" mr-11">{p.title}</span>
              <span className="flex-1"></span>
              <span className="w-12 ml-5">$ {p.price}</span>
              <button>
                <IoTrashOutline size={18} className="ml-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/**CHECKOUT RESUMEN ORDEN */}
      <div className="bg-slate-200 rounded-md shadow-md p-7 ">
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
            href={"/checkout/address"}
          >
            TERMINAR COMPRA
          </Link>
        </div>
      </div>
    </div>
  );
}
