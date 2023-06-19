import { AiOutlineHeart } from 'react-icons/ai';
import Image from "next/image";

import photo from "../../../public/images/slide-1.jpg";
import photo1 from "../../../public/images/product-1.jpg";
import photo2 from "../../../public/images/product-2.jpg";
import photo3 from "../../../public/images/product-3.jpg";
import photo4 from "../../../public/images/product-4.jpg";
import photo5 from "../../../public/images/product-5.jpg";
import photo6 from "../../../public/images/product-6.jpg";
import photo7 from "../../../public/images/product-7.jpg";

export default function Selected() {
  const images = [
    { image: photo1, title: "T-Shirt Summer Vibes", price: "$89,99" },
    { image: photo2, title: "T-Shirt Summer Vibes", price: "$89,99" },
    { image: photo3, title: "T-Shirt Summer Vibes", price: "$89,99" },
    { image: photo4, title: "T-Shirt Summer Vibes", price: "$89,99" },
    { image: photo1, title: "T-Shirt Summer Vibes", price: "$89,99" },
  ];
  return (
    <section>
      <div>
        <div>
          <h1 className="text-[29px]">Selected just for you</h1>
        </div>
        <div className="flex ">
          {images.map((image, index) => (
            <div className="relative w-[263px] mx-8" key={index}>
              <Image src={image.image} alt="t-shirt" className="xxxxxx"></Image>
              <p>{image.title}</p>
              <p>{image.price}</p>
              <div className='absolute top-3 right-3'><AiOutlineHeart size={25} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
