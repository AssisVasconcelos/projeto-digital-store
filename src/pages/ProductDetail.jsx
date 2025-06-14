import { Button } from "primereact/button";

const ProductDetail = ({ match }) => {
  const productId = match.params.id;
  const product = {
    id: productId,
    name: "Produto 1",
    description: "Descrição detalhada do produto...",
    price: "R$ 100",
    image: "/assets/product1.jpg",
  };

  return (
    <div className="product-detail p-p-4">
      <img src={product.image} alt={product.name} className="p-mb-3" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button label="Adicionar ao Carrinho" icon="pi pi-shopping-cart" />
    </div>
  );
};

export default ProductDetail;
