import React from 'react'

const Manager = () => {
    const showPassword = () => {
        alert("Show the password")
    }
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-pink-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">  {/* this is background color theam taken from bg-ibelick  */}
            </div>

            <div className="mycontainer">

                <div className="text-center font-bold text-2xl">
                    <h1>
                        <span className="text-green-700">&lt;</span>
                        Pass
                        <span className="text-green-700">OP/&gt;</span>
                    </h1>
                    <p className='text-green-900 text-lg'>Your secure password manager</p>
                </div>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />

                    <div className="flex gap-8  justify-between w-full">
                        <input placeholder='Enter Username' className='border border-green-500 w-full py-1 px-2 rounded-full' type="text" />

                        <div className="relative">
                            <input placeholder='Enter Password' className='border border-green-500 w-full py-1 px-2  rounded-full' type="text" />
                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img className='p-1' width={30} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>

                    <button className="flex justify-center items-center rounded-full gap-3 px-8 py-2 w-fit bg-green-500 hover:bg-orange-300 border-2 border-green-900">
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>Add Password</button>


                </div>
            </div>
        </>
    )
}

export default Manager
