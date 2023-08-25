import React from 'react'
import { Lock, User,Pencil,Navigation,Mail, FileCheck ,Phone, Building,X  } from 'lucide-react';
import Link from 'next/link';

const ProfileContent = (props) =>{

    return(
        <>
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
        <div className="intro-y box mt-5 lg:mt-0">
            <div className="relative items-center p-5">
                <div className="avatar-upload">
                    <div className="avatar-preview">
                        <img alt="" className="rounded-full pro-img" src={props && props.profile && props.profile.image? props.profile.image : 'https://reseller.ezrankings.in//dashboard/images/avtar.png'} />
                    </div>
                </div>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 className="font-medium text-base mr-auto">Profile</h2>
                    <div className="text-right">
                        <h2 className="font-medium text-base mr-auto pro-det">
                        <Link href="/update-profile">Edit <i className="fas fa-pencil-alt"></i></Link>
                        </h2>
                    </div>
                </div>
                <Link className="flex items-center mt-5" href="#">
                    <User className="w-4 h-4 mr-2"/>Name: {props && props.profile && props.profile.name? props.profile.name : ''}
                </Link>
                <Link className="flex items-center mt-5" href="#">
                    <FileCheck  className="w-4 h-4 mr-2"/>Title: {props && props.profile && props.profile.title? props.profile.title : ''}
                </Link>
                <Link className="flex items-center mt-5" href="#">
                    <Phone className="w-4 h-4 mr-2"/>Phone: {props && props.profile && props.profile.contactno? props.profile.contactno : ''}
                </Link>
                <Link className="flex items-center mt-5" href="#">
                    <Mail className="w-4 h-4 mr-2"/>Mail: {props && props.profile && props.profile.email? props.profile.email : ''}
                </Link>
                <Link className="flex items-center mt-5" href="#">
                    <Navigation className="w-4 h-4 mr-2"/>Location: {props && props.profile && props.profile.location? props.profile.location : ''}
                </Link>
            </div>
        </div>
        <div className="intro-y box mt-5">
        <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">Company Profile</h2>
                <div className="text-right">
                <h2 className="font-medium text-base mr-auto pro-det"><Link href="/update-profile">Edit <i className="fas fa-pencil-alt"></i></Link></h2>
                </div>
            </div>
            <Link className="logo-ipload" href="#">
                <h5>Company Name: {props && props.profile && props.profile.companyname? props.profile.companyname : ''}</h5>
                <div className="avatar-preview">
                    <img alt="" className="rounded-full pro-img comp-logo" src={props && props.profile && props.profile.logo? props.profile.logo : 'https://reseller.ezrankings.in//dashboard/images/avtar.png'} />
                </div>
            </Link>
        </div>
        </div>   
            </div>        
        </>
    )
}

export default ProfileContent;