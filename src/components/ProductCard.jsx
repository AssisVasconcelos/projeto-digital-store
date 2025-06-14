
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const ProductCard = ({ product }) => {
  return (
    <Card title={product.name} subTitle={product.price} className="p-mb-3">
      <img src={product.image} alt={product.name} className="p-mb-2" />
      <Button label="Adicionar ao Carrinho" icon="pi pi-shopping-cart" />
    </Card>
  );
};

export default ProductCard;
