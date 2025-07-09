import { Icon } from '@iconify/react'
import React from 'react'

const DeleteConfirmation = ({ desc }) => {
  return (
    <div className="fixed inset-0 bg-[color:var(--color-dark)] z-40 flex items-center justify-center">
      <div className='flex-col space-y-8'>
        <div className='size-[197px] bg-[#B1ED00] rounded-full flex items-center justify-center'>

          <Icon icon="hugeicons:tick-double-01" width="100" height="100" />
        </div>
        <div className='text-[20px] text-white font-semibold text center'>

          {desc}
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation