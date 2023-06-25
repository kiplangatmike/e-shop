import Link from "next/link";

export default function Header() {
  return (
    <section className={`fixed z-50 bg-white w-full`}>
      <header >
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
              <a href="#" className="mx-5">Inspiration</a>
              <a href="#" className="mx-5">Rooms</a>
              
            </nav>
          </div>
          <div className="site-header__actions">
            <button className="mx-2">
                <p>Account</p>
              </button>
            <button className={``}>
              <form className={`search-form`}>
                <i className="icon-cancel"></i>

                <input
                  type="text"
                  name="search"
                  placeholder="Enter the product you are looking for"
                />
              </form>
              <i className="icon-search"></i>
            </button>
            <Link href="/cart" legacyBehavior>
              <button className="btn-cart">
                <i className="icon-cart"></i>
                items
              </button>
            </Link>
            <Link href="/login" legacyBehavior>
              <button className="site-header__btn-avatar">
                <i className="icon-avatar"></i>
              </button>
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
