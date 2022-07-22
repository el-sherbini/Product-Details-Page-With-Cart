import { useDispatch, useSelector } from "react-redux";
import { openCart, CloseCart } from "../store/productSlice";
import CartElement from "./CartElement";

const Cart = () => {
  const dispatch = useDispatch();

  const { isCartOpen, cartItems, totalPrice, totalPriceBeforeDiscount } =
    useSelector((state) => state.product);

  return (
    <section
      className={`fixed top-0 z-50 h-screen w-80 border-l bg-white p-[10px] shadow-2xl duration-500 ease-in-out ${
        isCartOpen ? "right-0" : "right-[-320px]"
      }`}
    >
      <h1 className="mb-3 text-center text-2xl font-semibold">Cart</h1>
      <img
        src="./assets/arrow right.svg"
        alt="arrow"
        onClick={() =>
          !isCartOpen ? dispatch(openCart()) : dispatch(CloseCart())
        }
        className={`absolute left-[-23px] cursor-pointer rounded-sm border border-r-0 bg-white p-[7px] shadow-2xl ${
          !isCartOpen && "rotate-180"
        }`}
      ></img>
      {cartItems.map((item, i) => {
        return (
          <>
            <CartElement key={i} item={item} />
            <hr className="my-2" />
          </>
        );
      })}
      {totalPrice > 0 && (
        <p className="text-center text-lg">
          Total price: <span className="font-bold">{totalPrice} EGP</span>
          <span className="ml-2 font-bold text-red-600 line-through">
            {totalPriceBeforeDiscount} EGP
          </span>
        </p>
      )}
    </section>
  );
};

export default Cart;
