import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// function to fetch all products
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"], // use for caching, must be unique
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      return response.data;
    },
    // staleTime: 2 * 60 * 1000  // cache refresh after every 2 min
  });
};

// function to fetch single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return response.data;
    },
  });
};
