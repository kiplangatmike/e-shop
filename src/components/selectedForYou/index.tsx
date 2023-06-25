import { AiOutlineHeart } from 'react-icons/ai';
import Image from "next/image";

import photo from "../../../public/images/slide-1.jpg";
import photo1 from "../../../public/images/product-1.jpg";
import photo2 from "../../../public/images/product-2.jpg";
import photo3 from "../../../public/images/product-3.jpg";
import photo4 from "../../../public/images/product-4.jpg";
import photo5 from "../../../public/images/product-5.jpg";

export default function Selected() {
  const images = [
    { image: photo1, title: "African Print", price: "Rwf 15,000" },
    { image: photo2, title: "African Print", price: "Rwf 20,000" },
    { image: photo3, title: "West African Vibes", price: "Rwf 18,000" },
    { image: photo4, title: "African Print", price: "Rwf 15,000" },
    { image: photo5, title: "Bohemian Summer", price: "Rwf 25,000" },
  ];
  return (
    <section className='mt-20'>
      <div>
        <div>
          <h1 className="mx-5 my-10 text-[29px] text-[#333333] text-center font-semibold">Selected just for you</h1>
        </div>
        <div className="flex ">
          {images.map((image, index) => (
            <div className="relative w-[263px] mx-5" key={index}>
              <Image src={image.image} alt="t-shirt" className="h-[300px] object-cover"></Image>
              <p className='text-[16px] my-[9px]'>{image.title}</p>
              <p className='text-[17px] font-semibold'>{image.price}</p>
              <div className='absolute top-3 right-3'><AiOutlineHeart size={25} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
