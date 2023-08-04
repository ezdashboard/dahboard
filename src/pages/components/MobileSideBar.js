import Link from "next/link";
import React, { useState,useEffect } from "react";
import Router from 'next/router'

const MobileSideBar=()=>{
    const [logoImg, setLogoImg] = useState('');
    const [loginStatus, setLoginStatus] = useState(true);
    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    const onLogOut=()=>{
        localStorage.clear();
        setLoginStatus(false);
        Router.push('/');
    }
    const closeNav=()=> {
        document.getElementById("mySidenav").style.width = "0";
      }
    const openNav= ()=> {
    document.getElementById("mySidenav").style.width = "250px";
    }
    useEffect(() => {
    if(!localStorage.userid){
        Router.push('/');
    }else{
        if(localStorage && localStorage.logo){
            setLogoImg(localStorage.logo);
        }
    if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
        setSideBarAccess({
            users : true
        })
    }
    }
    }, []);      
    return(
        <>
        <div className="sider-menu">
            <div className="side-logo">
                <Link href="/dashboard"><img alt="" src={logoImg} /></Link>
            </div>
            <div id="mySidenav" className="sidenav">
                <Link href="#" className="closebtn" onClick={closeNav}>&times;</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/projectList">Project details & Reports</Link>
                <Link href="/reseller-benefits">Reseller Benefits</Link>
                <Link href="/learning-resources">Learning Resources</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/users">Users</Link>
                <Link href="#"  onClick={onLogOut}>Signout</Link>
            </div>
            <span onClick={openNav}>&#9776;</span>
        </div>        
        </>
    )
}
export default MobileSideBar