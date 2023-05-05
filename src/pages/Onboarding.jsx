import React from 'react'
// import logo from '../assets/Lookscout.png';
// import logo2 from '../assets/Lookscout2.png';
import { useState, useEffect } from "react";
import axios from 'axios';

const Onboarding = () => {
    const [theme, setTheme] = useState(null);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [logo, setLogo] = useState('')

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        axios.get('https://onboarding-page-backend2.vercel.app/api/v1/users/info').then((res) => {
            console.log(res.data.item[0].logo);
            setText(res.data.item[0].text)
            setLogo(res.data.item[0].logo)
        })
    }, [])

// https://onboarding-page-backend2.vercel.app/api/v1/users/info
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://onboarding-page-backend2.vercel.app/api/v1/users/create', {
            name: `${name}`,
            email: `${email}`
        }).then((res) => {
            console.log(res);
        })
            .catch((error) => {
                console.log(error);
            });
        setName('')
        setEmail('')
    }



    return (
        <div>


            <div class="flex flex-col min-h-screen w-screen items-center justify-center bg-gray-100 dark:bg-slate-900 dark:text-white">
                <div class="flex justify-center pb-5">
                    <h2 class="font-serif text-xl font-semibold text-gray-700 w-[90%] "><img src={theme == 'dark' ? logo : logo} alt="" /></h2>
                </div>
                <div class="flex flex-col rounded-2xl bg-white dark:bg-slate-800 px-6 shadow-2xl sm:px-14 mx-5 pt-5">
                    <div class="mx-auto w-full max-w-md pb-20 px-8 sm:px-0 mt-5">
                        <div class="relative">
                            <div class="absolute left-0 top-2 h-0.5 w-full bg-gray-200 " aria-hidden="true">
                                <div class="absolute h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                                {/* <!-- change to w-2/3 for next step --> */}
                                <div class="left absolute left-1/3 h-full w-1/3 "></div>
                                {/* <!-- change to left-1/2 for next step --> */}
                            </div>
                            <ul class="relative flex w-full justify-between">
                                <li class="text-left relative">
                                    <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">1</a>
                                    <p className='text-xs absolute -left-3 mt-1'>Account</p>
                                </li>
                                <li class="text-left relative">
                                    <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="#">2</a>
                                    <p className='text-xs absolute -left-3 mt-1'>Personal</p>
                                </li>
                                <li class="text-left relative">
                                    <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="#">3</a>
                                    <p className='text-xs absolute -left-1 mt-1'>Billing</p>
                                </li>
                                <li class="text-left relative">
                                    <a class="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="#">4</a>
                                    <p className='text-xs absolute -left-1 mt-1'>Done</p>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* Form Portion */}
                    <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div class="flex flex-wrap -mx-3 mb-6">

                            <div class="w-full px-3 mb-3">
                                <label class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="grid-password">
                                    Name
                                </label>
                                <input onChange={(e) => setName(e.target.value)} value={name} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Name" />
                            </div>
                            <div class="w-full px-3 mb-3">
                                <label class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="grid-password">
                                    Email
                                </label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="Email" />
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="grid-first-name">
                                    Password
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Password" />
                                <p class="text-xs italic">Please enter your Password.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="grid-last-name">
                                    Confirm Password
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Confirm Password" />
                                <p class="text-xs italic">Passwords need to match.</p>
                            </div>
                            <div class="flex w-full px-3 my-3">
                                <input type="checkbox" class="default:ring-2 ..." />
                                <p className='px-2'>I accept the Terms and Privacy Policy</p>
                            </div>
                            <div className='flex w-[100%] justify-end mt-5'>
                                <button className="rounded-md bg-blue-600 text-white p-2">{text} 	&gt;</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Onboarding