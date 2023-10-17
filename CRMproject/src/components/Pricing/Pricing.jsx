import React from 'react';
import {Link} from 'react-router-dom';

export default function Pricing() {
    return(
        <div className='mx-auto w-full max-w-5xl p-8'>
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Find the perfect subscription to meet your unique requirements.
                    </h2>
                    <p className="mt-5 text-gray-600">
                        Looking for a subscription that your unique needs? Look no further. With our platfrom, You can find perfect subscription plan that caters to your specific requirement.
                    </p>
                   
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-green-800 dark:border-green-700 grid grid-cols-2 mt-5 ">
                    <div className="md:mb-0 bg-white p-10 justify-items-start ">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://th.bing.com/th/id/OIP.VCmOiSEuyTWF2XRktrV1QQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                className="mr-3 h-16"
                                alt="Logo"
                            
                            />
                             <h1 class="text-black font-sm white">For Individual
                             </h1>
                             <h2></h2>
                            
                            
                        </Link>
                        
                             <h3 class="text-black font-sm"> Password management for one type of device that is easy to use and is reliable,secure, and easy to use.</h3>

                             <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-black mt-3">$599</span></div>
                    <button
                    onClick={() => getstarted()}
                    className="bg-transparent hover:bg-white text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full mt-2 "
                    style={{ backgroundColor: "green" }}>Get Started</button>
                </div>
               <div class="ml-8 mt-3"> <h2 className="mb-6 text-sm font-semibold text-white uppercase">What's include</h2>
                            <ul className="text-white font-medium list-disc">
                                <li>
                                        unlimited password
                                </li>
                                <li>
                                        1 user Account
                                </li>
                                <li>
                                       Access on 1 Device Type
                                </li>
                                <li>
                                       Save and Autofill password
                                </li>
                                <li>
                                       One-to-One sharig
                                </li>
                                <li>
                                       password Generator
                                </li>
                                <li>
                                       Security Dashboart
                                </li>
                                <li>
                                       Dark web morniting
                                </li>
                                <li>
                                       passwordless login
                                </li>
                            </ul></div>
            
            </div>
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-green-800 dark:border-green-700 grid grid-cols-2 mt-5 ">
                    <div className="md:mb-0 bg-white p-10 justify-items-start ">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://th.bing.com/th/id/OIP.VCmOiSEuyTWF2XRktrV1QQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                className="mr-3 h-16"
                                alt="Logo"
                            
                            />
                             <h1 class="text-black font-sm white">For Enterprice
                             </h1>
                             <h2></h2>
                            
                            
                        </Link>
                        
                             <h3 class="text-black font-sm"> A full range of business feature as well service customized to your large business needs.</h3>

                             <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-black mt-3">$999</span></div>
                    <button
                    onClick={() => getstarted()}
                    className="bg-transparent hover:bg-white text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full mt-2 "
                    style={{ backgroundColor: "green" }}>Get Started</button>
                </div>
               <div class="ml-8 mt-3"> <h2 className="mb-6 text-sm font-semibold text-white uppercase">What's include</h2>
                            <ul className="text-white font-medium list-disc">
                                <li>
                                        unlimited password
                                </li>
                                <li>
                                        50 user Account
                                </li>
                                <li>
                                       Access on All Device Type
                                </li>
                                <li>
                                       1 Gb Encrypted
                                </li>
                                <li>
                                       one-to-many sharing
                                </li>
                                <li>
                                        password Generator
                                </li>
                                <li>
                                       Security Dashboart
                                </li>
                                <li>
                                       Dark web morniting
                                </li>
                                <li>
                                       passwordless login
                                </li>  
                                
                            </ul></div>
            
            </div>
            <div className="bg-black border-y mt-2 grid grid-cols-3">
            <div className="p-4 py-6 lg:py-15 col-span-3">
                <div class="relative h-5 w-30 ">
                    <div class="absolute top-0 right-0 ">
            <button  onClick={() => gotowebGuard()}
                    className="bg-transparent hover:bg-white text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full justify-items-end "
                    style={{ backgroundColor: "green" }}>see more pricing</button></div></div>
                <h1 class="text-white font-bold">Get know about all product's pricing</h1>
                <h2 class="text-white font-sm"><p>our platform offers a range of subscription plans that are tailored to your unique requirements, allowing you to find the perfect fit for you.</p></h2>
               
                </div>
                </div>
                    
    </div>
    );
}