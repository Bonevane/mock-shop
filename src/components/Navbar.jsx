import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-logo">🛍️ FreshCart</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart <span className="cart-count">({totalItems})</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
