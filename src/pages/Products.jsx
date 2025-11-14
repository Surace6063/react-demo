import ProductCard from "../components/ProductCard";
import { useProducts } from "../api/fetch-api";

const Products = () => {
  // fetching data using react-query
  // data -> the data returned from your api
  // isLoading -> handle loading ... toggle loading state true or false
  // isError -> handle if error is true or false
  // error -> show error message if error presents
  const { data:products, isLoading, isError, error } = useProducts()

  console.log(products)

  return (
    <div className="container my-10">
      <h1 className="text-3xl font-semibold mb-10 text-slate-700">Products</h1>

      {/* product list */}
      <div
        className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-4"
      >
        {
          isLoading ? <p>loading...</p> : 
          isError ? <p>{error.message}</p> :
          products.slice(0,10).map(item =>(
           <ProductCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};
export default Products;
