import Link from "next/link";

export default function Header() {
  return (
    <section>
      <header className={`flex`}>
        <div className="flex">
          <Link href="/" legacyBehavior>
            <a>
              <h1 className="site-logo">E-Shop</h1>
            </a>
          </Link>
          <nav className={``}>
            <Link href="/products" legacyBehavior>
              <a>Products</a>
            </Link>
            <a href="#">Inspiration</a>
            <a href="#">Rooms</a>
            <button className="site-nav__btn">
              <p>Account</p>
            </button>
          </nav>

          <div className="site-header__actions">
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
