import React from 'react'

export default function ContactDeRestro() {
    return (
        <a name="contact">

            <div className="p-4 mt-20 w-full max-w-screen-lg mx-auto flex flex-col flex-wrap">
                <div className="my-4">
                    <select
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option hidden disabled selected>Select your Country</option>
                        <option>India</option>
                        <option>Nepal</option>
                        <option>China</option>
                    </select>
                </div>

                <h1 className="text-4xl mb-4">Contact</h1>

                <p className="mb-4">
                    We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggest criteria of them all — both look and taste. Do not hesitate to contact us.
                </p>

                <h3 className="text-xl font-bold text-gray-700 mb-1">
                    Catering Service, 42nd Living St, 43043 New York, NY
                </h3>

                <p className="mb-6">
                    You can also contact us by phone 00553123-2323 or email catering@catering.com.
                </p>

                <div className="opacity-90 w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-b border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="No of people"
                        className="border-b border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="datetime-local"
                        defaultValue="2025-09-09T14:30"
                        className="border-b border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Message/Special requirements"
                        className="border-b border-gray-300 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="mt-4 p-3 rounded bg-gray-300 hover:bg-gray-400 text-sm font-semibold text-black shadow-inner hover:shadow-md hover:shadow-blue-300 hover:ring-2 hover:ring-blue-300">
                        SEND MESSAGE
                    </button>
                </div>
            </div>
        </a>
    )
}
