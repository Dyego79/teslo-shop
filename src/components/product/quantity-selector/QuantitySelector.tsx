"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  className?: string;
}

export const QuantitySelector = ({ quantity, className }: Props) => {
  const [count, setCount] = useState(quantity);
  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;
    setCount(count + value);
  };
  return (
    <div className="flex items-center p-2 space-x-2">
      <button
        onClick={() => {
          onQuantityChanged(-1);
        }}
      >
        <IoRemoveCircleOutline size={25} />
      </button>
      <span className="text-2xl">{count}</span>
      <button onClick={() => onQuantityChanged(+1)}>
        <IoAddCircleOutline size={25} />
      </button>
    </div>
  );
};
