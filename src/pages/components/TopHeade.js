import React, { useState, useEffect } from "react";
import { Bell  , Search } from 'lucide-react';
import Link from 'next/link';

const TopHeader =(props)=>{
const [img, setImage] = useState('');

useEffect(() => {
    if(localStorage && localStorage.image){
        setImage(localStorage.image);
    }
    }, []);
    return (
        <>
        <div className="top-bar">
            <nav className="-intro-x mr-auto hidden sm:flex">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Welcome to {'Reseller dashboard.'}</li>
                </ol>
            </nav>
            <div className="intro-x relative mr-3 sm:mr-6">
                <Link className="notification sm:hidden" href="#">
                    <Search  className="search__icon dark:text-slate-500"/>
                </Link>
            </div>
            <div className="intro-x dropdown mr-auto sm:mr-6">
                <div className="dropdown-toggle notification notification--bullet cursor-pointer">
                    <Bell className="notification__icon dark:text-slate-500 far fa-bell"/>
                </div>
            </div>
            <div className="intro-x dropdown w-8 h-8">
                <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                    <img alt="" src={img} />
                </div>
            </div>
        </div>
        </>
    )
}

export default TopHeader;