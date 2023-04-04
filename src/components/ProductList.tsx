import React, { useState, useEffect } from "react";
import { db, storage } from "../utils/Firebase";
import "firebase/firestore";
import { ref, list, listAll, getDownloadURL } from "firebase/storage";

interface dataType {
  id: string;
  name: string;
  price: number;
  imgurl: string;
}

export default function ProductList() {
  const [product, setProduct] = useState<dataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("latest products").get();
      const items = snapshot.docs.map((doc: { data: () => any }) => doc.data());
      setProduct(items);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center pb-10 text-[#3B0B01] text-3xl sm:text-4xl font-medium">
          Latest Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product.map((item, key) => (
            <a key={key} href="/" className="group">
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
