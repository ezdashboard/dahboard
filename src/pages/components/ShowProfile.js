import React from 'react';
import Link from 'next/link';

const ShowProfile =(props)=>{
    console.log(props,'t1');
    return(
        <>
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                <div className="intro-y box mt-5 lg:mt-0">
                    <div className="relative items-center p-5">
                        <div className="avatar-upload">
                            <div className="avatar-preview">
                                <img alt="" className="rounded-full pro-img" src={props && props.data && props.data.profileData.image ? props.data.profileData.image : ''} />
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
                            <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Name: {props && props.data && props.data.profileData.name ? props.data.profileData.name : ''}
                        </Link>
                        <Link className="flex items-center mt-5" href="#">
                                <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Title: {props && props.data && props.data.profileData.title ? props.data.profileData.title : ''}
                        </Link>
                        <Link className="flex items-center mt-5" href="#">
                            <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Phone: {props && props.data && props.data.profileData.contactno ? props.data.profileData.contactno : ''}
                        </Link>
                        <Link className="flex items-center mt-5" href="#">
                            <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Mail: {props && props.data && props.data.profileData.email ? props.data.profileData.email : ''}
                        </Link>
                        <Link className="flex items-center mt-5" href="#">
                            <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Location: {props && props.data && props.data.profileData.location ? props.data.profileData.location : ''}
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
                            <h5>Company Name: {props && props.data && props.data.profileData.companyname ? props.data.profileData.companyname : ''}</h5>
                            <div className="avatar-preview">
                                <img alt="" className="rounded-full pro-img comp-logo" src={props && props.data && props.data.profileData.logo ? props.data.profileData.logo : ''} />
                            </div>
                        </Link>
                    </div>
                </div>   
            </div>        
        </>
    )
}
export default ShowProfile;