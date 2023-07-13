import React from "react";
import Link from 'next/link';
import { CreditCard, Monitor, RefreshCw, ShoppingCart, User   } from 'lucide-react';

const UserDashboard=()=>{
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
             <div className="col-span-12 xxl:col-span-9">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-8">
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="intro-y box p-5 apple-watch">
                        <div id="group1">
                            <div className="graph1"></div>
                            <div className="graph2"></div>
                            <div className="graph3"></div>
                        </div>
                        <div className="w-52 sm:w-auto mx-auto">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 blue"></div>
                            <span className="truncate">Billing - $1000</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 bg-pending rounded-full mr-3 green"></div>
                            <span className="truncate">Keywords - 300</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 bg-warning rounded-full mr-3 red"></div>
                            <span className="truncate">Projects - 100</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="intro-y box p-5 watch-display">
                        <div>
                            <canvas id="myChart"></canvas>
                        </div>
                        <div className="w-52 sm:w-auto mx-auto">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                <span className="truncate">$1000- $10,000 - Silver</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                                <span className="truncate">$10,000 to $25000 - Gold</span>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                                <span className="truncate">$25000 & Above - Diamond</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="intro-y flex items-center h-10 mt-8">
                <h2 className="text-lg font-medium truncate mr-5">Reseller Benefits</h2>
                    <Link href="" className="ml-auto flex items-center text-primary">
                        {/* <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3"></i> */}
                        <RefreshCw  className="w-4 h-4 mr-3"/>
                         Reload
                    </Link>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <Link href="#">
                        <div className="report-box zoom-in">
                            <div className="box p-5">
                                <div className="flex">
                                    {/* <i data-lucide="shopping-cart" className="report-box__icon text-primary"></i> */}
                                    <ShoppingCart className="report-box__icon text-primary"/>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6"><b>(1/10)</b></div>
                                <div className="text-base text-slate-500 mt-1">Free Website Analysis</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <Link href="#">
                        <div className="report-box zoom-in">
                            <div className="box p-5">
                                <div className="flex">
                                    {/* <i data-lucide="credit-card" className="report-box__icon text-pending"></i> */}
                                    <CreditCard className="report-box__icon text-pending" />
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6"><b>(1/10)</b></div>
                                <div className="text-base text-slate-500 mt-1">Keywords Analysis</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <Link href="#">
                        <div className="report-box zoom-in">
                            <div className="box p-5">
                                <div className="flex">
                                    {/* <i data-lucide="monitor" className="report-box__icon text-warning"></i> */}
                                    <Monitor className="report-box__icon text-warning"/>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6"><b>(1/10)</b></div>
                                <div className="text-base text-slate-500 mt-1">Free Festive Images</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <Link href="#">
                        <div className="report-box zoom-in">
                            <div className="box p-5">
                                <div className="flex">
                                    {/* <i data-lucide="user" className="report-box__icon text-success"></i> */}
                                    <User  className="report-box__icon text-success"/>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6">(1/20)</div>
                                <div className="text-base text-slate-500 mt-1">Free GMB Keywords</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div> 
        </>
    )
}

export default UserDashboard;