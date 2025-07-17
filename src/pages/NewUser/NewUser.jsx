import React, { useState } from "react";
import { userRows } from "../../components/Datas/Datas";
import RTLAlert from "../../components/RTLAlert/RTLAlert";

function NewUser({ showAlert, setShowAlert }) {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    active: "Yes",
  });
  const [lastCreatedUser, setLastCreatedUser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newUserObjData = {
      id: userRows.length + 1,
      username: formData.username,
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      address: formData.address,
      gender: formData.gender,
      active: formData.active,
    };

    setLastCreatedUser(formData.username);
    setShowAlert(true);

    userRows.push(newUserObjData);

    setFormData({
      username: "",
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      gender: "",
      active: "Yes",
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full px-4 mb-6">
        <h2 className="text-3xl font-bold text-black/80">New User</h2>
      </div>

      <div className="sm:mx-14 max-sm:mx-4 grid lg:grid-cols-10 max-lg:grid-cols-2 items-end gap-x-3">
        <form className="grid lg:grid-cols-2 max-lg:col-span-2 max-lg:mb-4 gap-4 col-span-7">
          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
              placeholder="john"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
              placeholder="john"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
              placeholder="+1 234 567"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
              placeholder="123 Main St"
            />
          </div>

          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Gender</label>
            <div className="flex items-center gap-x-4">
              <div className="inline-flex flex-row-reverse gap-x-3">
                <label>Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
              </div>
              <div className="inline-flex flex-row-reverse gap-x-3">
                <label>Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
              </div>
              <div className="inline-flex flex-row-reverse gap-x-3">
                <label>Other</label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <label className="text-gray-400 font-medium">Active</label>
            <select
              name="active"
              value={formData.active}
              onChange={handleChange}
              className="border-0 ring-1 ring-indigo-400 focus:border-b-0 rounded-md py-2 pl-3 outline-none transition-all focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </form>

        <button
          onClick={handleSubmit}
          className="text-white rounded-lg bg-indigo-700 py-3 cursor-pointer lg:col-span-2 max-lg:col-span-2"
        >
          Create
        </button>
      </div>

      {showAlert && (
        <RTLAlert
          active={showAlert}
          onClose={() => setShowAlert(false)}
          message={`User "${lastCreatedUser}" create successfully !`}
          severity="success"
        />
      )}
    </div>
  );
}

export default NewUser;
