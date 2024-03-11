import React, { useState } from 'react'
import { ProfileIcon} from '../assets/HeroIcons.jsx'
import CameraUpload from '../components/CameraUpload.jsx';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = ()=> setIsLogin(prev => !prev);

  return (<>
    <div className='h-[100vh] flex justify-center m-auto items-center max-w-xs' >
        <div className='p-4 flex flex-col items-center border-b-2'>
            {isLogin ? <>
                <h5 className='text-2xl'>Login</h5>
                <form className='w-[100%] '>

                    <input className='my-6 p-2 w-full outline-blue-500' type="text" placeholder="Username *" required />

                    <input className='my-6 mt-0 p-2 w-full outline-blue-500 ' type="password" placeholder="Password *" required />

                    <button className='bg-blue-400 block w-full text-white p-1 rounded-md' type='submit' >Login</button>

                    <div className='text-center my-4 text-slate-500'>OR</div>

                    <button className='text-blue-400 block w-full bg-transparent mb-4' onClick={toggleLogin} >Signup</button>

                </form>
            </> : <>
                <h5 className='text-2xl'>Sign Up</h5>
                <form className='w-[100%] '>

                    <div className='flex flex-col relative w-[10rem] m-auto '>

                        <>
                        <div className=' h-[10rem] w-[10rem]'>
                            <ProfileIcon />
                        </div>


                        <div className=' absolute bottom-2 right-2' type="file" >
                            <CameraUpload/> 
                        </div>

                        

                        </>

                        <div className='border-0 h-1 m-[-10px] overflow-hidden p-0 absolute flex-nowrap w-1'></div>

                    </div>

                    <input className='mt-6 p-2 w-full outline-blue-500' type="text" placeholder="Name *" required />

                    <input className='mt-6 p-2 w-full outline-blue-500' type="text" placeholder="Bio *" required />

                    <input className='my-6 p-2 w-full outline-blue-500' type="text" placeholder="Username *" required />

                    <input className='my-6 mt-0 p-2 w-full outline-blue-500 ' type="password" placeholder="Password *" required />

                    <button className='bg-blue-400 block w-full text-white p-1 rounded-md' type='submit' >Sign Up</button>

                    <div className='text-center my-4 text-slate-500'>OR</div>

                    <button className='text-blue-400 block w-full bg-transparent mb-4' onClick={toggleLogin} >Login Instead!</button>

                </form>
            </>
            }
        </div>
    </div>
    
  </> 
  )
}

export default Login