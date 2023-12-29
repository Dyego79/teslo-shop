"use client";
import Link from "../../../../node_modules/next/link";
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex py-8 px-5 justify-between items-center w-full h-10 md:mb-6 sticky top-0 z-10 bg-white">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>{" "}
          <span> | Shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          className="uppercase m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="uppercase m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="uppercase m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kid"
        >
          Niños
        </Link>
      </div>
      {/* SEARCH, CART, MENU */}
      <div className="flex space-x-3 items-center">
        <Link href="/search">
          <IoSearchOutline className="w-6 h-6" />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <span className="-top-2 -right-1 text-xs font-bold absolute flex items-center justify-center p-2 w-4 h-4 rounded-full bg-blue-600 text-slate-200">
              5
            </span>
            <IoCartOutline className="w-6 h-6" />
          </div>
        </Link>
        <button
          className="uppercase text-sm font-bold hover:bg-slate-100 rounded-md p-2"
          onClick={() => {
            openMenu();
          }}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
