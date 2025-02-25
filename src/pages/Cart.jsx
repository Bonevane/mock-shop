import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>
                Price: <span className="price">${item.price.toFixed(2)}</span>
              </p>
              <p>Quantity: {item.quantity}</p>
              <p>
                Total:{" "}
                <span className="price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        ))
      )}
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
