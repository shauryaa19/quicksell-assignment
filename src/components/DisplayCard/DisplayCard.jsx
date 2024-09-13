import React from 'react'

const DisplayCard = ({ setGroupingOption, setSortOption }) => {

    const handleGroupingChange = (e) => {
        setGroupingOption(e.target.value);
    };
    
      // Event handler for sorting select
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    }

  return (
    <>
      <div className="absolute w-64 h-28 border rounded-lg bg-gray-100 flex items-center justify-center">
        <div className="w-full flex flex-col gap-2">
            <div className="flex justify-around">
            <span className="font-medium text-gray-400">Grouping</span>
            <select className="border border-gray-300 rounded px-2" name="group" id="group" onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
            </select>
            </div>
            <div className="flex justify-around">
            <span className="font-medium text-gray-400">Ordering</span>
            <select  className="border border-gray-300 rounded px-2" name="order" id="order"  onChange={handleSortChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default DisplayCard
