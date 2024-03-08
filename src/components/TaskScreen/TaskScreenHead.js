import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { colors } from '../../global/style';

export const TaskScreenHead = () => {
  return (
    <div className='flex flex-col w-full p-2'>
      {/* Search Bar and Assign Task button */}
      <div className='flex justify-between'>
        {/* to arrange search icon inside input */}
        <div className='flex items-center relative w-1/2 p-1'>
          <input type='text' className=' flex  items-start rounded-lg shadow-lg shadow-gray-400 p-1 w-full' placeholder='Enter task keywords or employee names' ></input>
          <SearchIcon className='absolute right-2 ' />
        </div>
      </div>
      {/* Employee Task and filters */}
      <div>

      </div>
    </div>
  )
}
