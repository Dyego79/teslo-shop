"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm"
        ></div>
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 sm:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 space-y-2",
          { "translate-x-full": !isSideMenuOpen }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-6 right-4 cursor-pointer z-10"
          onClick={() => {
            closeMenu();
          }}
        />
        <div className="relative pt-12">
          <IoSearchOutline size={25} className="absolute top-14 left-2" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 transition-all delay-300"
          />
        </div>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoPersonOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Perfil</span>
        </Link>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Ordenes</span>
        </Link>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoLogInOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Ingresar</span>
        </Link>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoLogOutOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Salir</span>
        </Link>
        <div className="w-full h-px bg-gray-200 my-10"></div>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoShirtOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Productos</span>
        </Link>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoTicketOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Ordenes</span>
        </Link>
        <Link
          href={"/"}
          className="py-3 flex items-center mt-10 p-2 hover:bg-gray-200 rounded transition-all"
        >
          <IoPeopleOutline size={25} />
          <span className="ml-3 text-md font-bold uppercase">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
