import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productRows } from "../../components/Datas/Datas";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductEdit from "../../components/ProductEdit/ProductEdit";

function Product() {
  const { productID } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getProductObj = productRows.find((pr) => pr.id == productID);
    setProductData(getProductObj);
  }, [productID]);

  return (
    <div>
      {/* Header */}
      <div className="w-full px-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium">Product</h2>
          <button className="text-white bg-green-700 rounded-md px-5 py-1 text-base">
            Create
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 max-lg:col-span-1 items-start sm:mx-14 max-sm:mx-4 gap-x-4 ">
        {/* Chart Section */}
        <div className="p-8 rounded-md shadow-primer col-span-1 mb-4">
          <div>Chart</div>
        </div>

        {/* Product Details */}
        <div>
          <ProductDetails {...productData} />
        </div>
      </div>
      <div>
        <ProductEdit {...productData} />
      </div>
    </div>
  );
}

export default Product;
