export default function Why() {
  const why = [
    {
      icon: "",
      title: "Free Shipping",
      description:
        "All purchases over $199 are eligible for free shipping via USPS First Class Mail.",
    },
    {
      icon: "",
      title: "Easy Payments",
      description:
        "All payments are processed instantly over a secure payment protocol.",
    },
    {
      icon: "",
      title: "Money-Back Guarantee",
      description:
        "If an item arrived damaged or you've changed your mind, you can send it back for a full refund.",
    },
    {
      icon: "",
      title: "Finest Quality",
      description:
        "Designed to last, each of our products has been crafted with the finest materials.",
    },
  ];
  return (
    <section className="section">
      <div className="items-center">
        <div className="text-center text-[29px]">
          <h1>Why should you choose us?</h1>
        </div>
        <div className="flex justify-around">
          {why.map((item, index) => (<ul key={index} className="justify-between"><li className="text-[#333333] text-[16px] font-semibold">{item.title}</li><li className="text-[13px] text-[]">{item.description}</li></ul>))}
        </div>
      </div>
    </section>
  );
}
