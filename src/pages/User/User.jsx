import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userRows } from "../../components/Datas/Datas";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserEdit from "../../components/UserEdit/UserEdit";
import { Link } from "react-router-dom";

function User() {
  const { userID } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserObj = userRows.find((pr) => pr.id == userID);
    setUserData(getUserObj);
  }, [userID]);

  return (
    <div>
      {/* Header */}
      <div className="w-full px-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium">User</h2>
          <Link to="/new-user">
            <button className="text-white bg-green-700 rounded-md px-5 py-1 text-base cursor-pointer">
              Create
            </button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 max-lg:col-span-1 items-start sm:mx-14 max-sm:mx-4 gap-x-4 ">
        {/* Chart Section */}
        <div className="p-8 rounded-md shadow-primer col-span-1 mb-4">
          <div>Chart</div>
        </div>

        {/* Product Details */}
        <div>
          <UserDetails {...userData} />
        </div>
      </div>
      <div>
        <UserEdit {...userData} />
      </div>
    </div>
  );
}

export default User;
