import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  updateProductQuantity,
  deleteProduct,
  removeProduct,
} from "../store/productSlice";

const CartElement = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    console.log(item.itemId);
    dispatch(increaseQuantity(item.itemId));
    dispatch(
      updateProductQuantity({
        itemId: item.itemId,
        quantity: +item.quantity + 1,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.itemId));
    if (+item.quantity - 1 === 0) {
      handleRemoveProduct();
    } else {
      dispatch(
        updateProductQuantity({
          itemId: item.itemId,
          quantity: +item.quantity - 1,
        })
      );
    }
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct({ itemId: item.itemId }));
    dispatch(deleteProduct(item.itemId));
  };

  return (
    <div className="flex text-[10px]">
      <img src={item.image} alt="cart element" className="h-[70px] w-[70px]" />
      <div className="flex flex-col items-center">
        <p className="text-center ">{item.productName}</p>

        <div className="mt-2 flex w-5/6 items-center justify-between">
          <span
            onClick={handleDecreaseQuantity}
            className="cursor-pointer rounded-md bg-red-700 py-1 px-2 text-white"
          >
            -
          </span>
          <span>{item.quantity}</span>
          <span
            onClick={handleIncreaseQuantity}
            className="cursor-pointer rounded-md bg-green-700 py-1 px-2 text-white"
          >
            +
          </span>
          <button
            onClick={handleRemoveProduct}
            className="rounded-md bg-red-600 p-1 text-white"
          >
            Remove
          </button>
          <p className="rounded-md border py-1 px-2">{item.amount} EGP</p>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
