import React from "react";

function LatestTransActionTbody({ profile, username, date, amount, status }) {
  const statusStyle =
    status === "Approved"
      ? "bg-green-100 text-green-700"
      : status === "Declined"
      ? "bg-red-100 text-red-700"
      : status === "Pending"
      ? "bg-blue-100 text-blue-700"
      : null;

  return (
    <tr className="mt-5">
      <td className="py-3">
        <div className="flex items-center gap-x-2">
          <img
            src={profile}
            className="w-8 h-8"
            alt="Latest TransAction Profile"
          />
          <span className="max-sm:w-10 truncate">{username}</span>
        </div>
      </td>
      <td className="py-3">
        <span>{date}</span>
      </td>
      <td className="py-3">
        <span>{`$${amount}`}</span>
      </td>
      <td className="py-3 max-sm:hidden sm:block">
        <div className={`rounded-md p-2 w-24 text-center ${statusStyle}`}>
          <span>{status}</span>
        </div>
      </td>
    </tr>
  );
}

export default LatestTransActionTbody;
