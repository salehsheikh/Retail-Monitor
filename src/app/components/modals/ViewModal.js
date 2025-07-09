"use client";

import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

const ViewModal = ({ user, onClose, closeViewModal }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    console.log("User deleted:", user);
    setShowDeleteModal(false);
    onClose();
  };
  return (
    <>
      <div className="fixed 2xl:inset-y-48 inset-y-0 inset-x-0 bg-[color:var(--color-dark)] z-40 flex items-center justify-center">
        <div className="bg-[color:var(--color-darkest)] rounded-[20px] p-[45px] w-[90%] max-w-[677px] text-white space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                value={user?.name?.split(" ")[0] || ""}
                placeholder="First Name"
                className="w-full md:w-[278px] h-[50px] border border-[#B1ED00] opacity-50 rounded-[10px] bg-transparent px-3 mt-1"
                readOnly
              />
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                value={user?.name?.split(" ")[1] || ""}
                placeholder="Last Name"
                className="w-full md:w-[278px] h-[50px] border border-[#B1ED00] opacity-50 rounded-[10px] bg-transparent px-3 mt-1"
                readOnly
              />
            </div>
          </div>


          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={user?.email}
              placeholder="Email"
              className="w-full h-[50px] border border-[#B1ED00] opacity-50 rounded-[10px] bg-transparent px-3 mt-1"
              readOnly
            />
          </div>

          <div>
            <label className="text-sm font-medium">Role</label>
            <input
              type="text"
              value={user?.role}
              placeholder="Role"
              className="w-full h-[50px] border border-[#B1ED00] opacity-50 rounded-[10px] bg-transparent px-3 mt-1"
              readOnly
            />
          </div>

          <div>
            <label className="text-sm font-medium">Joining Date</label>
            <input
              type="text"
              value={user?.joiningDate}
              placeholder="Joining Date"
              className="w-full h-[50px] border border-[#B1ED00] opacity-50 rounded-[10px] bg-transparent px-3 mt-1"
              readOnly
            />
          </div>

          <div className="flex-col sm:flex-row space-y-2 justify-between  gap-[45px] gap- pt-4">
            <button
              onClick={onClose}
              className=" bg-transparent cursor-pointer border border-white/50 py-3.5 text-white/50 text-lg rounded-xl w-full flex items-center justify-center"
            >
              Back
            </button>
            <button
              onClick={handleDelete}
              className=" bg-[#B1ED00] cursor-pointer  py-3.5 text-[#0D0D0D] text-lg rounded-xl w-full flex items-center justify-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          closeViewModal={closeViewModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};


export default ViewModal;
