
import ProductCard from "../components/ProductCard";


const Home = () => {
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

  return (
    <div className="home p-p-4">
      <h1>Bem-vindo à Drip Store</h1>
      <div className="product-list p-d-flex p-flex-wrap p-jc-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
