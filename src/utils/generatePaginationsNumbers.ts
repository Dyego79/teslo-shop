export const generatePaginationsNumbers = (
  currentPage: number,
  totalPages: number
) => {
  // Si el número total de páginas es 7 o menos
  //Muestro todas la páginas [1,2,3,4,5,6,7]
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  //Si la pagina actual esta ente las prieras 3 paginas
  //muestro las primeras 3, puntos suspensivos, y las ultimas 2
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]; //[1,2,3,"...",49,50]
  }

  // Si la pagina actual esta entre las ultimas 3 paginas
  //mostrar las primeras 2, puntos suspensivos,las ultimas 3 paginas
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }
  //Si la pagina actual esta en otro lugar medio
  //muestro la primer pagina, "...", la pagina acutal, paginas siguientes
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
