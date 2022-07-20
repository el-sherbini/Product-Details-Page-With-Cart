import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <section className="mx-[150px] mb-[70px]">
      <h1 className="mb-[65px] text-[20px] font-semibold">Related products</h1>
      <div className="flex flex-wrap justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default RelatedProducts;
