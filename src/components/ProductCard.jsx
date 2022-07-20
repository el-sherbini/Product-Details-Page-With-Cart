import { useState } from "react";

const ProductCard = () => {
  const [isDiscount] = useState(true);

  return (
    <div className="card-shadow relative mb-[25px] h-[370px] w-[230px] rounded-[10px]">
      {isDiscount && (
        <div className="absolute top-0 left-0 flex h-[70px] w-[70px] items-center justify-center rounded-br-[10px] bg-[#ED0182] text-[16px] font-semibold text-white">
          10%
        </div>
      )}
      <img
        src="./assets/fav.svg"
        alt="fav"
        className="absolute right-[20px] top-[20px]"
      />

      <div className="flex w-full flex-col items-center">
        <img
          src="./assets/Group 1.png"
          alt="product"
          className="my-[10px] h-[156px] w-[173px]"
        />

        <div className="w-[80px] rounded-[20px] bg-[#F3D5E6] py-[7px] px-[12px] text-[16px] font-medium">
          0.25
          <img
            src="./assets/arrow down.svg"
            alt="arrow"
            className="ml-[10px] inline-block w-[10px]"
          />
        </div>

        <span className="my-[20px] text-[14px] font-semibold">
          Vegetable Carrot Bundle
        </span>

        <div>
          <span className="mr-[10px] text-[14px] font-semibold">3.99 EGP</span>

          <span className="text-[14px] font-semibold text-[#FF0000] line-through">
            6.30 EGP
          </span>
        </div>

        <div className="absolute bottom-0 flex h-[60px] w-[230px] items-center justify-center rounded-[10px] bg-black text-white">
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
