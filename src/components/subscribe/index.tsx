import Image from "next/image";
import photo from "../../../public/images/subscribe.jpg";

export default function Subscribe() {

  return (
    <div className="my-10 relative ">
      <div className="relative">
        <Image
          src={photo}
          alt="subscribe photo"
          className="mx-auto object-cover"
        ></Image>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex ">
        <div className="absolute top-1/3 left-40 text-[30px]">
          <p className="font-bold text-white">
            Subscribe to our newsletter and receive
            <br /> exclusive offers every week
          </p>
        </div>
        
        <div className="flex absolute right-20 top-1/2 gap-5 ">
          <input
            type="text"
            className="rounded-3xl px-4 outline-none"
            placeholder="Enter Email"
          />
          <button className=" px-3 py-2 right-24 bg-[#fbb03b] rounded-3xl text-[15px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}
