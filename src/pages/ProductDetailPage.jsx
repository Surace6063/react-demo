import { useParams } from "react-router-dom"
import { useProduct } from "../api/fetch-api"
import { useContext} from "react"
import { CartContext } from "../context/CartContext"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/cartSlice"

const ProductDetailPage = () => {
    
  // get dispatch function to send actons to store
    const dispatch = useDispatch()

    // accessing quantity state from CartContext
    // const {quantity,increment,decrement} = useContext(CartContext)

    // accessing quantity state from cartSlice
    const {quantity} = useSelector(state => state.cart)

    // useParams() -> use to aceess dynamic URL parameters define in your route path
    const {id} = useParams()

    // fetching single product
    const {data,isLoading,isError,error} = useProduct(id)

    if (isLoading) return <p>loading...</p>
    if(isError) return <p>{error.message}</p>

    console.log(data)

  return (
    <div className="container my-16 flex gap-20 items-center">
       <div className="flex-1 rounded-md overflow-hidden shadow h-[60vh]">
         <img src={data.images[0]} alt={data.title} className="w-full h-full object-cover" />
       </div>

       {/* product details */}
       <div className="flex-1">
           <h1 className="text-4xl font-bold text-slate-800">
            {data.title}
            </h1>

            <p className="mt-3 text-gray-500 text-sm font-medium">
              {data.category.name}
            </p>

            <p className="text-2xl mt-3 text-gray-600">
              ${data.price}
            </p>

            <div className="my-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">Description</h3>
              <p className="text-gray-600 text-justify">
                {data.description}
              </p>
            </div>
             <div className="mb-3 space-x-4">
               <button onClick={ () => dispatch(increment()) } className="outline_button">+</button>
               <span>{quantity}</span>
               <button onClick={()=>dispatch(decrement())} className="outline_button">-</button>
             </div>
            <button className="primary_button">Add to cart</button>
       </div>
    </div>
  )
}
export default ProductDetailPage