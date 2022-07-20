import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <section className="mx-[150px] mb-[80px]">
      <h1 className="mb-[65px] text-[20px] font-semibold">Related products</h1>
      <div className="flex flex-wrap justify-between px-[30px]">
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
