import Image from "next/image";
import { MdPayments } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";

export default function Why() {
  const why = [
    {
      icon: <FaShippingFast size={25} />,
      title: "Free Shipping",
      description:
        "All purchases over $199 are eligible for free shipping via USPS First Class Mail.",
    },
    {
      icon: <MdPayments size={25} />,
      title: "Easy Payments",
      description:
        "All payments are processed instantly over a secure payment protocol.",
    },
    {
      icon: <MdGppGood size={25} />,
      title: "Money-Back Guarantee",
      description:
        "If an item arrived damaged or you've changed your mind, you can send it back for a full refund.",
    },
    {
      icon: <MdSystemSecurityUpdateGood size={25} />,
      title: "Finest Quality",
      description:
        "Designed to last, each of our products has been crafted with the finest materials.",
    },
  ];
  return (
    <section className="section m-5">
      <div className="items-center">
        <div className="text-center text-[29px] mb-6 text-[#333333] font-semibold">
          <h1>Why should you choose us?</h1>
        </div>
        <div className="flex justify-around">
          {why.map((item, index) => (
            <ul key={index} className="justify-between">
              <i className="">{item.icon}</i>
              <li className="text-[#333333] text-[16px] font-semibold mt-5 mb-2">
                {item.title}
              </li>
              <li className="text-[13px] max-w-[250px]">{item.description}</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
