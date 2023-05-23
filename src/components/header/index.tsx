import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import useOnClickOutside from "react-cool-onclickoutside";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { RootState } from "../../store/index";
import { type } from "os";
import "../../assests/CSS/main.scss"

type HeaderType = {
  isErrorPage?: boolean;
};

export default function Header({ isErrorPage }: HeaderType) {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }
    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header>
      <div>
        <Link href={""}>
          <a>
            <h1>
              <Logo />
              E-shop
            </h1>
          </a>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`}
        >
          <Link href="/products">
            <a>Products</a>
          </Link>
          <a href="#">Inspiration</a>
          <a href="#">Rooms</a>
          <button className="site-nav__btn">
            <p>Account</p>
          </button>
        </nav>
        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? "search-form--active" : ""
            }`}
          >
            <form className={`search-form`}>
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              ></i>
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            ></i>
          </button>
          <Link href="/cart">
            <button className="button-cart">
                <i className="icon-cart"></i>
                {cartItems.length > 0 && <span className="btn-cart__count">{cartItems.length}</span>}
            </button>
          </Link>
          <Link href="/login">
            <button
                onClick={() => setIsMenuOpen(true)}
                className="site-header__btn-menu"

            >
                <i className="btn-hamburger"><span>wow</span></i>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
