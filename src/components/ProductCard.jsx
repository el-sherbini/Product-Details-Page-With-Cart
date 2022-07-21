import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isDiscount] = useState(true);

  return (
    <div className="card-shadow relative mb-[25px] mr-[25px] h-[450px] w-[230px] rounded-[10px]">
      {product.discount && (
        <div className="absolute top-0 left-0 flex h-[70px] w-[70px] items-center justify-center rounded-br-[10px] bg-[#ED0182] text-[16px] font-semibold text-white">
          {product.discount}%
        </div>
      )}
      <img
        src="./assets/fav.svg"
        alt="fav"
        className="absolute right-[20px] top-[20px]"
      />

      <div className="flex w-full flex-col items-center">
        <img
          src={product.image}
          alt="product"
          className="my-[10px] h-[150px] w-[150px]"
        />

        <select className="w-[80px] rounded-[20px] bg-[#F3D5E6] py-[7px] px-[12px] text-[16px] font-medium">
          {product.quantities.map((quantity) => (
            <option key={quantity}>{quantity}</option>
          ))}
        </select>

        <span className="m-[20px] text-[14px] font-semibold">
          {product.name}
        </span>

        <div>
          <span className="mr-[10px] text-[14px] font-semibold">
            {product.finalPrice} EGP
          </span>

          {product.oldPrice && (
            <span className="text-[14px] font-semibold text-[#FF0000] line-through">
              {product.oldPrice} EGP
            </span>
          )}
        </div>

        <div className="absolute bottom-0 flex h-[60px] w-[230px] items-center justify-center rounded-[10px] bg-black text-white">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
