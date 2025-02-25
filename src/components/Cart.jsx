import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
