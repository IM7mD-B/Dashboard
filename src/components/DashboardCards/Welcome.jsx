import WelcomeImage from '../../assets/images/welcome.png'
import Avatar from "../../assets/images/avatar.png"
export default function Welcome() {
    return (
        <div className="w-full bg-white mt-4 shadow-lg rounded-2xl flex flex-col h-full ">

            <div className=" bg-stone-200 justify-between px-3 flex rounded-t-sm pt-3 pb-1 ">
                <div className=''>
                    <h1 className=' font-semibold'> Welcome</h1>
                    <p className=' text-xs font-semibold text-gray-800/50'>Elzero</p>
                </div>
                <img src={WelcomeImage} alt="Welcome" className='w-35' />
            </div>
            <img src={Avatar} alt="avatar" className='size-10 -mt-5 ml-3 border-3 border-white rounded-4xl ' />

            <div className=' border-y border-gray-200 my-3  '>
                <div className='flex justify-between text-[12px] font-semibold mx-8 pt-3'>
                    <h1 className='text-center'>Osama Elzero</h1>
                    <h1 className='text-center'>80</h1>
                    <h1 className='text-center'>$8500</h1>
                </div>
                <div className='flex justify-between text-[10px] text-gray-800/50 font-semibold mx-8 pb-3 pt-2'>
                    <h1 className='text-center'>Developer</h1>
                    <h1 className='text-center ml-6'>Projects</h1>
                    <h1 className='text-center'>Earned</h1>
                </div>
            </div>

            <div className='flex justify-end  pt-3 pb-3 pr-3'>

                <a>
                    <button className='bg-blue-600 text-white rounded-sm text-[10px] 
                    font-semibold hover:bg-blue-400 py-0.5 px-2 cursor-pointer'>
                        Profile
                    </button>
                </a>
            </div>

        </div>
    )
}