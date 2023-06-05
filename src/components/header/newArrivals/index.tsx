export default function NewArrivals() {
  return (
    <section className={`flex p-4 text-white`}>
      <div
        style={{ backgroundImage: 'url("images/slide-1.jpg")' }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-1/2 items-center flex mr-5"
      >
        <div>
          <div>
            <h2>New arrivals are now in!</h2>
            <button className="bg-white text-black px-3 py-2 rounded-xl">SHOW COLLECTION</button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: 'url("images/slide-1.jpg")' }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-1/4 items-center flex mr-5"
      >
        <div>
          <div>
            <h2>Basic t-shirts $29,99</h2>
            <button className="bg-white text-black px-3 py-2 rounded-xl">MORE DETAILS</button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: 'url("images/slide-1.jpg")' }}
        className="bg-cover bg-center bg-no-repeat h-[80vh] w-1/4 items-center flex "
      >
        <div>
          <div>
            <h2>Sale this summer</h2>
            <button className="bg-white text-black px-3 py-2 rounded-xl">VIEW ALL</button>
          </div>
        </div>
      </div>
    </section>
  );
}
