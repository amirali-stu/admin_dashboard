import React from "react";

function UserDetails(props) {
  return (
    <>
      {props ? (
        <div className="p-8 rounded-md shadow-primer mb-4">
          <div className="flex items-center gap-x-8 mb-4">
            <img
              src={props.avatar || "/images/profile/Admin-Profile.png"}
              alt={`${props.username} avatar`}
              className="w-24 h-24 object-cover rounded"
            />
            <span className="text-lg font-semibold">{props.username}</span>
          </div>

          <div className="flex items-center gap-x-10">
            <ul className="*:font-medium text-black">
              <li>ID:</li>
              <li>Name:</li>
              <li>Price:</li>
              <li>Active:</li>
              <li>In Stock:</li>
            </ul>
            <ul className="*:text-gray-400">
              <li>{props.id}</li>
              <li>{props.username}</li>
              <li>{props.transaction}</li>
              <li>{props.active ? "Yes" : "No"}</li>
              <li>{props.inStock ? "Yes" : "No"}</li>
            </ul>
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

export default UserDetails;
