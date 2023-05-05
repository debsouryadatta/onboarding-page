import React from 'react'
import { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const admin = () => {
  const [users, setUsers] = useState([])
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://onboarding-page-backend2.vercel.app/api/v1/users/get').then((res) => {
      console.log(res.data.user);
      setUsers(res.data.user);
    })
  }, [])

  const updateFunc = () => {
    axios.patch('https://onboarding-page-backend2.vercel.app/api/v1/users/update', item).then((res) => {
      console.log(res.data);
    })
      .catch((error) => {
        console.log(error);
      });
      navigate('/')
  }


  return (
    <div className=''>

      {/* Update Section */}
      <div className="flex items-center justify-center">
        <div
          className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2
              className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Dashboard
            </h2>
            <form onSubmit={updateFunc} action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    for=""
                    className="text-base font-medium text-gray-900 dark:text-gray-200">
                    Update Text on button
                  </label>
                  <div className="mt-2.5">
                    <input
                      onChange={e => setItem({ ...item, text: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      placeholder="Update" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      for=""
                      className="text-base font-medium text-gray-900 dark:text-gray-200">
                      Update Logo
                    </label>
                  </div>
                  <div className="mt-2.5">
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => setItem({ ...item, logo: base64 })} />
                  </div>
                </div>
                <div>
                  <button
                    type="button" onClick={updateFunc}
                    className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                    Update
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="ml-2 h-4 w-4">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>



      {/* Table Section */}

      <section className="container px-4 mx-auto py-4 w-[50%]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Users
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div
                className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table
                  className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((user) => {
                      return <>
                        <tr>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div
                                  className="text-sm font-medium text-gray-900 dark:text-white">
                                  {user.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 dark:text-white">
                              {user.email}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default admin