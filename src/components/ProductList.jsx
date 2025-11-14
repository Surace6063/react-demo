import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 101,
      title: "Mechanical Mouse",
      price: 100,
      category: "electronics",
    },
    {
      id: 102,
      title: "Mechanical keyboard",
      price: 50,
      category: "electronics",
    },
    {
      id: 103,
      title: "rebook",
      price: 75,
      category: "shoes",
    },
  ];

  const popularProducts = [
    {
      id: 101,
      title: "Samsung TV",
      price: 500,
      category: "electronics",
    },
    {
      id: 102,
      title: "Dell Laptop",
      price: 100,
      category: "electronics",
    },
    {
      id: 103,
      title: "nike",
      price: 45,
      category: "shoes",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <div>
        <h1 className="text-4xl font-bold mb-4">Popular Products</h1>
        {popularProducts.map((product) => (
         <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
