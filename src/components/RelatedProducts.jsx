import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const RelatedProducts = () => {
  const { relatedProducts } = useSelector((state) => state.product);

  return (
    <section className="mx-[150px] mb-[80px]">
      <h1 className="mb-[65px] text-[20px] font-semibold">Related products</h1>
      <div className="flex flex-wrap pl-[25px]">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
