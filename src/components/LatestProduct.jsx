import ProductCard from "./ProductCard";
import { useProducts } from "../api/fetch-api";

const LatestProduct = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProducts()

  return (
    <div
      className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-4"
    >
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        products
          .slice(0, 4)
          .map((item) => <ProductCard key={item.id} item={item} />)
      )}
    </div>
  );
};
export default LatestProduct;
