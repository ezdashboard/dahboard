import React from "react";
import { Bell  , Search } from 'lucide-react';

const TopHeader =(props)=>{
    return (
        <>
        <div className="top-bar">
            <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Welcome to {'Reseller dashboard.'}</li>
                </ol>
            </nav>
            <div className="intro-x relative mr-3 sm:mr-6">
                {/* <div className="search hidden sm:block">
                    <input type="text" className="search__input form-control border-transparent" placeholder="Search..." />
                    <Search  className="search__icon dark:text-slate-500"/>
                </div> */}
                <a className="notification sm:hidden" href="">
                <Search  className="search__icon dark:text-slate-500"/>
                </a>
            </div>
            <div className="intro-x dropdown mr-auto sm:mr-6">
                <div className="dropdown-toggle notification notification--bullet cursor-pointer">
                    <Bell className="notification__icon dark:text-slate-500 far fa-bell"/>
                </div>
            </div>
            <div className="intro-x dropdown w-8 h-8">
                <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                    <img alt="" src={props.img ? props.img :'https://smca.ezrankings.in/dashboard/images/profile-3.jpg'} />
                </div>
            </div>
        </div>
        </>
    )
}

export default TopHeader;