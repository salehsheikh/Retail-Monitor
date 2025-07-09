import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import DeleteConfirmation from './DeleteConfirmation';
import { useRouter } from 'next/navigation';

const DeleteModal = ({ onClose, closeViewModal }) => {
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const router = useRouter();

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmationModal(true);
    setTimeout(() => {
      setShowDeleteConfirmationModal(false);
      onClose();           // Closes DeleteModal
      closeViewModal();    // Closes ViewModal
      router.push("/users");
    }, 1500);
  };

  const handleConfirmDeletes = () => {
    console.log("User deleted:", user);
    setShowDeleteConfirmationModal(false);
    onClose();
  };
  return (
    <>
      <div className="fixed 2xl:inset-y-47 inset-y-0 inset-x-0 bg-[color:var(--color-dark)] z-40 flex items-center justify-center">

        <div className='bg-black max-w-[579px] w-full rounded-[20px]'>
          <div className='px-[13px] flex justify-between'>
            <p className='text-[#A0D300] text-[32px] font-semibold leading-10'>
              Delete User
            </p>
            <Icon
              onClick={onClose}
              icon="gridicons:cross" width="41" height="43" className='text-[#A0D300] cursor-pointer' />
          </div>
          <div className='text-[32px] font-semibold leading-10 text-center text-white px-[13px] py-[62px]'>
            Are you sure you want to Delete this User?
          </div>
          <div className="flex justify-between  gap-[45px] gap- px-[39px] pb-[77px]">
            <button
              onClick={onClose}
              className=" bg-transparent cursor-pointer border border-white/50 py-3.5 text-white/50 text-lg rounded-xl w-full flex items-center justify-center"
            >
              Back
            </button>
            <button
              onClick={handleDeleteConfirmation}

              className=" bg-[#B1ED00] cursor-pointer  py-3.5 text-[#0D0D0D] text-lg rounded-xl w-full flex items-center justify-center"
            >
              Delete
            </button>
          </div>

        </div>
      </div>
      {showDeleteConfirmationModal && (
        <DeleteConfirmation
          desc="User deleted Successfully!"
          onClose={() => setShowDeleteConfirmationModal(false)}
          onConfirm={handleConfirmDeletes}
        />
      )}
    </>
  )
}

export default DeleteModal