import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {

  const [products,setProducts] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState("")

  useEffect(() => {
    //fetching api
    const fetchProducts = async () => {
      setIsLoading(true)
      setError("")
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        // console.log(response.data);
        setProducts(response.data)   // set prodcut list recived from api to products state
      } catch (error) {
        console.log(error);
        setError("Error fetching data!")  // set error message to error state if error occurs
      }finally{
        setIsLoading(false) // always execute
      }
    };

    fetchProducts()
  },[]);

  // console.log(products)

  // if(isLoading) return <p>loading....</p>
  // if(error) return <p>{error}</p>

  return (
    <div className="container my-10">
      <h1 className="text-3xl font-semibold mb-10 text-slate-700">Products</h1>

      {/* product list */}
      <div className="grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 gap-4">
        {
          isLoading ? <p>loading...</p> : 
          error ? <p>{error}</p> :
          products?.map(item =>(
           <ProductCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};
export default ProductPage;
