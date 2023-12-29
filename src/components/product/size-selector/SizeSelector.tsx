import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  availableSize: Size[];
}

export const SizeSelector = ({ selectedSize, availableSize }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-3">Talles Disponibles</h3>
      <div className="flex gap-x-2">
        {availableSize.map((size, k) => (
          <button
            key={size}
            className={clsx(
              "hover:bg-blue-500 border  hover:text-white text-md font-semibold p-2 rounded-md w-12 flex justify-center",
              { "bg-blue-500 border-0 text-white": size === selectedSize }
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
