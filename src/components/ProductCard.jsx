import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="border border-slate-300 rounded-md p-4">
        <img
          src={item.images[0]}
          alt={item.title}
          className="rounded-md shadow"
        />

        <h3
          className="text-lg mt-3 font-medium 
      text-gray-700 truncate"
        >
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm">${item.price}</p>
      </div>
    </Link>
  );
};
export default ProductCard;

// const ProductCard = ({ product }) => {
//   return (
//     <Link to={`/products/${product.id}`}>
//       <div
//         className="border border-slate-300 p-4
//             rounded-md w-fit mb-4"
//       >
//         <p className="text-lg font-medium">{product.title}</p>
//         <p>${product.price}</p>
//         <p>{product.category}</p>
//       </div>
//     </Link>
//   );
// };
// export default ProductCard;
