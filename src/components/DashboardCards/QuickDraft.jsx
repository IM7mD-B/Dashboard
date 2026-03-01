export default function QuickDraft() {
  return (
    <div className="w-full px-4 bg-white shadow-lg rounded-2xl flex flex-col h-full mt-4">
      <div className=" pt-3 pb-1">
        <h1 className=" font-semibold"> Quick Draft</h1>
        <p className=" text-xs font-semibold text-gray-800/50">
          Write A Draft For Your Ideas
        </p>
      </div>
      <input 
      type="text"
       placeholder="Title"
       className=" text-xs font-medium bg-stone-200 rounded-md pl-2 w-full py-1"
        />
      <textarea
  placeholder="Your Thought"
  className="text-xs font-medium bg-stone-200 rounded-md pl-2 w-full py-1 my-3 resize-none flex-1"
/>

        <div className='flex justify-end mt-auto pb-3  '>

                <a>
                    <button className='bg-blue-600 text-white rounded-sm text-[10px] 
                    font-semibold hover:bg-blue-400 py-0.5 px-2 cursor-pointer'>
                        Save
                    </button>
                </a>
            </div>
    </div>
  );
}
