import { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

const Login = () => {

  const [state, setState] = useState('Login')
  const { setShowLogin } = useContext(AppContext)
  
  useEffect(() => {
	document.body.style.overflow = 'hidden';
	return () => {
		document.body.style.overflow = 'unset';
	}
  }, [])

  return (
	<div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
		<motion.form className='relative bg-white p-10 rounded-xl text-slate-500'
		initial={{opacity: 0.2, y: 50}}
		transition={{duration: 0.3}}
		whileInView={{opacity: 1, y: 0}}
		viewport={{once: true}}
		>
			<h1 className='text-center text-2xl text-neutral-700 font-medium mb-3'>{state}</h1>
			<p className='text-sm text-center'>Welcome back! Please sign in to continue</p>
			
			{state != 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
				<img className='' src={assets.profile_icon} width={25} alt=''/>
				<input type='text' placeholder='Full Name' required/>
			</div>}

			<div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
				<img className='' src={assets.email_icon} width={25} alt=''/>
				<input type='email' placeholder='Email Id' required/>
			</div>

			<div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
				<img className='' src={assets.lock_icon} width={25} alt=''/>
				<input type='password' placeholder='Password' required/>
			</div>
			<p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

			<button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state == 'Login' ? 'Login' : 'Create Account'}</button>

			{state == 'Login' ? <p className='mt-5 text-center'>Don&apos;t have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
			:
			<p className='mt-5 text-center'>Already have an account? <span 
			onClick={() => setState('Login')} className='text-blue-600 cursor-pointer'>Log In</span></p>}

			<img className='absolute top-5 right-5 cursor-pointer' width={15} src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)}/>
		</motion.form>
	</div>
  )
}

export default Login