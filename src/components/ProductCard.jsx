import { useState } from "react";
import { useCart } from "../context/CartContext";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default ProductCard;
