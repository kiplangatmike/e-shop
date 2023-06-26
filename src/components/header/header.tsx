import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";

export default function Header() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  return (
    <section
      className={`fixed z-50 bg-transparent w-full  bg-black/60 text-white `}
    >
      <header>
        <div className="flex justify-between p-4">
          <div>
            <Link href="/" legacyBehavior>
              <a>
                <h1 className="site-logo">E-Shop</h1>
              </a>
            </Link>
          </div>
          <div className="">
            <nav className={``}>
              <Link href="/products" legacyBehavior>
                <a className="mx-5">Products</a>
              </Link>
              <a href="#" className="mx-5">
                Inspiration
              </a>
              <a href="#" className="mx-5">
                Rooms
              </a>
            </nav>
          </div>
          <div className="flex gap-3">
            {searchIsOpen && (
              <form className={`search-form`}>
                <i className="icon-cancel"></i>

                <input
                  type="text"
                  name="search"
                  placeholder="Enter the product you are looking for"
                  className="text-[#333333] outline-none rounded-md px-2 py-1"
                />
              </form>
            )}
            <div>
              {!searchIsOpen ? (
                <AiOutlineSearch
                  onClick={() => setSearchIsOpen(true)}
                  size={22}
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setSearchIsOpen(false)}
                  size={22}
                />
              )}
            </div>

            <Link href="/cart" legacyBehavior>
              <AiOutlineShoppingCart size={22} />
            </Link>
            <Link href="/login" legacyBehavior>
              <AiOutlineUser size={22} />
            </Link>
            <button className="site-header__btn-menu">
              <i className="btn-hamburger">
                <span></span>
              </i>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}
