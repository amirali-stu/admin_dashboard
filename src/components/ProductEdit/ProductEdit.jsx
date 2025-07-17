import React from "react";

function ProductEdit(props) {
  return (
    <>
      {props ? (
        <div className="p-8 rounded-md shadow-primer flex sm:flex-row max-sm:flex-col-reverse max-sm:gap-y-4 items-center justify-between sm:mx-14 max-sm:mx-4 mb-4">
          <div>
            <form className="inline-flex flex-col gap-y-2">
              <div className="inline-flex flex-col gap-y-2">
                <label htmlFor="" className="text-xl font-medium text-gray-400">
                  Product Name
                </label>
                <input
                  type="text"
                  className="outline-0 border-0 border-b py-1 pl-3 text-gray-800"
                  placeholder={props.productName}
                />
              </div>
              <div className="inline-flex flex-col gap-y-2">
                <label htmlFor="" className="text-xl font-medium text-gray-400">
                  In Stock
                </label>
                <select className="border px-1 rounded-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="inline-flex flex-col gap-y-2">
                <label htmlFor="" className="text-xl font-medium text-gray-400">
                  Active
                </label>
                <select className="border px-1 rounded-sm">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </form>
          </div>
          <div className="flex items-center gap-y-8 flex-col">
            <img
              src="/images/profile/Admin-Profile.png"
              alt={`${props.productName} avatar`}
              className="w-24 h-24 object-cover rounded"
            />
            <button className="text-white bg-indigo-900 rounded-md py-1 text-base px-8">
              Upload (Edit)
            </button>
          </div>
        </div>
      ) : (
        <div className="text-gray-500 text-center mt-10">
          Loading product details…
        </div>
      )}
    </>
  );
}

export default ProductEdit;
