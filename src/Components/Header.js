import {  FaShoppingCart,FaSearch  } from "react-icons/fa";
import { useContext } from "react";
import Context from "./Context";
import "./styles/Header.css";
const Header = ({onCartClick}) => {
  const { cart } = useContext(Context);
  
  
  return (
    <>
      <nav>
        <h1>Books Store</h1>
        <div className="search"><input type="search" placeholder="Search"/><span><FaSearch/></span></div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          <li><span  onClick={onCartClick}><FaShoppingCart /> {cart.length}</span></li>
        </ul>
     
      </nav>
    </>
  );
};
export default Header;
