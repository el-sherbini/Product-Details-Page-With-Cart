import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../store/productSlice";

const Product = () => {
  const { productName, productDescription, productImage, productQuantities } =
    useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails());
  }, []);

  return (
    <section className="mx-[150px] mt-[70px]">
      <ul className="flex text-[15px]">
        <li className="flex list-none font-semibold text-[#ED0182]">
          HOME
          <img
            src="./assets/arrow right.svg"
            alt="arrow"
            className="mx-[16px]"
          />
        </li>

        <li className="list-none font-medium">{productName}</li>
      </ul>

      <div className="mt-[65px] mb-[65px] flex">
        <img src={productImage} alt="product" className="h-[280px] w-[340px]" />

        <div className="ml-[30px]">
          <div className="flex">
            <div className="flex w-[560px] flex-col">
              <div className="mb-[45px] flex justify-between">
                <h1 className="w-4/5 text-[20px] font-semibold">
                  {productName}
                </h1>

                <span className="text-[20px] font-semibold">9.99 LE</span>
              </div>

              <p className="text-[15px]">
                {/* Lorem is for seeing the design because description in API is null */}
                {productDescription
                  ? productDescription
                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
              </p>

              <button className="mt-[45px] h-[60px] w-[220px] rounded-[10px] bg-[#ED0182] text-[14px] text-white">
                Add
              </button>
            </div>

            <select className=" ml-[70px]  h-[35px] w-[80px] rounded-[20px] bg-[#F3D5E6] p-1 text-center text-[16px] focus:outline-none">
              {productQuantities.map((quantity) => (
                <option key={quantity}>{quantity}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
