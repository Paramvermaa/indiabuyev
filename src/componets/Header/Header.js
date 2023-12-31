import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
// import { Context } from "../../Utils/Content";
import "./Header.scss";
// import Cart from "../Cart/Cart";
import Search from "./Search/Search";
function Header() {
  // const { cartCount } = useContext(Context);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`mainHeader ${scrolled ? "stickyHeader" : ""}`}>
        <div className="headerContent">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            <p>
              IndiaBuy<span>Ev</span>
            </p>
          </div>
          <div className="right">
            <TbSearch />
            <AiOutlineHeart />
            {/* <span className="cartIcon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span> */}
          </div>
        </div>
      </header>
      {/* {showCart && <Cart setShowCart={setShowCart} />} */}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
}
export default Header;
