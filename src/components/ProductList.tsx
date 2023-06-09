import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

interface dataType {
  id: string;
  name: string;
  price: number;
  imgurl: string;
  product: any;
}

export default function ProductList() {
  const [product, setProduct] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    setLoading(true);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/latest-products`
    );
    setProduct(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="bg-white">
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center pb-10 text-[#3B0B01] text-3xl sm:text-4xl font-medium">
            Latest Products
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {product.slice(0, 8).map((item, key) => (
              <Link
                key={key}
                to={`/product-details/${item.id}`}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={item.imgurl}
                    alt=""
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-center text-gray-700">
                  {item.name}
                </h3>
                <p className="mt-1 text-lg font-medium text-center text-gray-900">
                  GHC{item.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
