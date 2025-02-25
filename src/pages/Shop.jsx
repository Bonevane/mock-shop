import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({}); // Store quantities for each product

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialQuantities = {};
        data.forEach((product) => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
      });
  }, []);

  const handleQuantityChange = (id, value) => {
    if (value < 1) value = 1;
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>

              {/* Quantity Controls */}
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(product.id, quantities[product.id] - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[product.id]}
                  onChange={(e) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(e.target.value) || 1
                    )
                  }
                  min="1"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(product.id, quantities[product.id] + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product, quantities[product.id])}
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
