<div className={`grid grid-cols-4`}>
  <div
    className={` bg-green-200 flex flex-col justify-between rounded w-[300px] h-[300px] mt-4 p-2 text-sm `}
  >
    {/* <p className="w-full bg-teal-500">{getMessage}</p> */}

    <div
      className={`flex items-center justify-center space-x-4 font-bold text-xl`}
    >
      <button className={` px-5`}>
        <MdEdit />
      </button>
      <button>
        <MdDelete />
      </button>
    </div>
  </div>
</div>;
