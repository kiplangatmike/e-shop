export default function Footer() {
  return (
    <section>
      <div className="flex justify-between p-4">
        <div>
          <p>E-shop</p>
          <p>
            House My Brand designs clothing for the young, the old & everyone in
            <br />
            between – but most importantly, for the fashionable
          </p>
        </div>
        <div className="flex gap-4">
          <ul>
            <li className="font-semibold">Shopping online</li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Shipping and Delivery</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li className="font-semibold">Information</li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Find a store</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Become a member</a>
            </li>
            <li>
              <a href="#">Site feedback</a>
            </li>
          </ul>
          <ul >
            <li className="font-semibold"> Privacy & Terms</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
