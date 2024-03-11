import React, { useState } from 'react'
import { ProfileIcon} from '../assets/HeroIcons.jsx'
import CameraUpload from '../components/CameraUpload.jsx';
import { useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from '../utils/validators.js';
import PasswordInput from '../components/PasswordInputEye.jsx';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = ()=> setIsLogin(prev => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",usernameValidator);
    const password = useStrongPassword();

  return (<>
    <div className='h-[100vh] flex justify-center m-auto items-center max-w-xs' >
        <div className='p-4 flex flex-col items-center border-b-2'>
            {isLogin ? <>
                <h5 className='text-2xl'>Login</h5>
                <form className='w-[100%] border-t-2 mt-4'>

                    <input className='my-6 p-2 w-full rounded outline-none
                    focus:ring-blue-500 focus:border-blue-500 focus:ring-1' type="text" placeholder="Username *" required value={username.value} onChange={username.changeHandler} />

                    <input className='my-6 mt-0 p-2 w-full rounded outline-none
                    focus:ring-blue-500 focus:border-blue-500 focus:ring-1 ' type="password" placeholder="Password *" required value={password.value} onChange={password.changeHandler} />

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

                    <div className="border-t-2 mt-2 pt-2" >
                    <input className='mt-2 p-2 w-full rounded outline-none
                    focus:ring-blue-500 focus:border-blue-500 focus:ring-1' type="text" placeholder="Name *" required value={name.value} onChange={name.changeHandler} />

                    <input className='mt-6 p-2 w-full rounded outline-none
                    focus:ring-blue-500 focus:border-blue-500 focus:ring-1' type="text" placeholder="Bio *" required value={bio.value} onChange={bio.changeHandler} />

                    <input className='my-6 p-2 w-full rounded outline-none
                    focus:ring-blue-500 focus:border-blue-500 focus:ring-1' type="text" placeholder="Username *" required value={username.value} onChange={username.changeHandler} />

                    {
                        username.error && (
                            <div className='text-red-600 relative bottom-5 ml-2 text-sm'>{username.error}</div>
                        )
                    }


                    <PasswordInput/>

                    <button className='bg-blue-400 block w-full text-white p-1 rounded-md' type='submit' >Sign Up</button>

                    <div className='text-center my-4 text-slate-500'>OR</div>

                    <button className='text-blue-400 block w-full bg-transparent mb-4' onClick={toggleLogin} >Login Instead!</button>
                    </div>
                </form>
            </>
            }
        </div>
    </div>
    
  </> 
  )
}

export default Login