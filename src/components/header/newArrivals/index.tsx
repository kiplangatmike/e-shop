export default function NewArrivals() {
  return (
    <section className={`flex p-4 text-white`}>
      <div
        style={{ backgroundImage: 'url("images/featured-1.jpg")' }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-1/2 items-center flex mr-5 relative"
      >
        <div className="">
          <div className="absolute bottom-10 left-10 z-40">
            <h2>New arrivals are now in!</h2>
            <button className="bg-white text-black px-3 py-2 rounded-xl">SHOW COLLECTION</button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: 'url("images/featured-2.jpg")' }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-1/4 items-center flex mr-5 relative"
      >
        <div>
          <div className="absolute bottom-10 left-10">
            <h2>Basic t-shirts $29,99</h2>
            <button className="bg-white text-black px-3 py-2 rounded-xl">MORE DETAILS</button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: 'url("images/featured-3.jpg")' }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-1/4 items-center flex relative"
      >
        <div>
          <div className="absolute bottom-10 left-10">
            <h2>Sale this summer</h2>
            <button className="bg-white text-black px-3 py-2 rounded-xl">VIEW ALL</button>
          </div>
        </div>
      </div>
    </section>
  );
}
