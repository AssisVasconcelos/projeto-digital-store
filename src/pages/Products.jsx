import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Products = () => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");

  const products = [
    {
      id: 1,
      name: "Produto 1",
      price: "R$ 100",
      image: "/assets/product1.jpg",
    },
    {
      id: 2,
      name: "Produto 2",
      price: "R$ 200",
      image: "/assets/product2.jpg",
    },
    // Adicione mais produtos conforme necessário
  ];

  const sortOptions = [
    { label: "Ordenar por Nome", value: "name" },
    { label: "Ordenar por Preço", value: "price" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    } else if (sort === "price") {
      return (
        parseFloat(a.price.replace("R$ ", "").replace(",", ".")) -
        parseFloat(b.price.replace("R$ ", "").replace(",", "."))
      );
    }
    return 0;
  });

  return (
    <div className="products p-p-4">
      <div className="p-d-flex p-ai-center p-mb-3">
        <InputText
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Buscar produtos..."
          className="p-inputtext-sm p-mr-3"
        />
        <Dropdown
          value={sort}
          options={sortOptions}
          onChange={(e) => setSort(e.value)}
          placeholder="Ordenar por"
          className="p-dropdown-sm"
        />
      </div>

      <div className="product-list p-d-flex p-flex-wrap p-jc-start">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
