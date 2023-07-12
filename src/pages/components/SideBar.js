import React, { useState,useEffect } from "react";
import Link from 'next/link';
import Router from 'next/router'
import { Users, LogOut, Newspaper, Lightbulb, BookMarked, Home, Sparkles, Image  } from 'lucide-react';
import { useRouter } from "next/router";
const SideBar =(props)=>{
    const [loginStatus, setLoginStatus] = useState(true);
    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    const router = useRouter();

    const onLogOut=()=>{
        localStorage.clear();
        setLoginStatus(false);
        Router.push('/login');
    }
    useEffect(() => {
        if(!localStorage.userid){
            Router.push('/login');
        }else{
        if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
            setSideBarAccess({
                users : true
            })
        }
        }
        }, []);
    return (
        <>
          <nav className="side-nav">
            <Link href="#" className="intro-x flex items-center pl-5 pt-4"><img alt="" src={props.logo ? props.logo : 'http://122.160.48.132/dev/html/reseller-dashboard/images/logo.png'} /></Link>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    <li>
                        <Link href="/dashboard" className={router.pathname == "/dashboard" ? "side-menu side-menu--active" : "side-menu"}>
                            <div className="side-menu__icon">
                           
                            <Home size={16}/>
                            </div>
                            <div className="side-menu__title">Dashboard</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projectList" className={router.pathname == "/projectList" ? "side-menu side-menu--active" : "side-menu"}><div className="side-menu__icon">
                        
                        <BookMarked size={16}/>
                        </div>
                            <div className="side-menu__title">Project details & Reports</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/reseller-benefits" className={router.pathname == "/reseller-benefits" ? "side-menu side-menu--active" : "side-menu"}><div className="side-menu__icon">
                        
                        <Sparkles  size={16}/>
                        </div>
                            <div className="side-menu__title">Reseller Benefits</div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/learning-resources" className={router.pathname == "/learning-resources" ? "side-menu side-menu--active" : "side-menu"}><div className="side-menu__icon">
                        
                        <Lightbulb size={16}/>
                        </div>
                            <div className="side-menu__title">Learning Resources</div>
                        </Link>
                    </li>
                    <li className="side-nav__devider my-6">
                    </li>
                </ul>
                <ul className="bottom-list">
                    <li>
                    <Link href="/profile" className={router.pathname == "/profile" ? "side-menu side-menu--active" : "side-menu"}><div className="side-menu__icon">
                   
                    <Image  size={16}/>
                    </div>
                        <div className="side-menu__title">Profile</div>
                    </Link>
                    </li>
                    {   sideBarAccess.users &&  <li>
                    <Link href="/users" className={router.pathname == "/users" ? "side-menu side-menu--active" : "side-menu"}><div className="side-menu__icon">
                   
                    <Users size={16}/>
                    </div>
                        <div className="side-menu__title">Users</div>
                    </Link>
                    </li>}
                    {   sideBarAccess.users &&  <li>
                    <Link href="/newsletter" className={router.pathname == "/newsletter" ? "side-menu side-menu--active" : "side-menu"}><div className="side-menu__icon">
                   
                    <Newspaper  size={16}/>
                    </div>
                        <div className="side-menu__title">NewsLetter</div>
                    </Link>
                    </li>}                   
                    <li>
                    <Link href="#" onClick={onLogOut} className="side-menu"><div className="side-menu__icon">
                    {/* <i className="far fa-sign-out"></i> */}
                    <LogOut size={16}/>
                    </div>
                        <div className="side-menu__title">SignOut</div>
                    </Link>
                    </li>
                </ul>
          </nav>
        </>
    )
}
export default SideBar;