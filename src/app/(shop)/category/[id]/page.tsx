import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seddProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}
export default function NamePage({ params }: Props) {
  const { id } = params;
  const products = seddProducts.filter((product) => product.gender === id);
  const titleCategory: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Todos",
  };
  /* if (id === "kids") {
    notFound();
  } */
  return (
    <>
      <Title
        title={`Artículos de ${(titleCategory as any)[id]}`}
        subtitle="Todos los Productos"
        className="mb-2 uppercase"
      />
      <ProductGrid products={products} />
    </>
  );
}
