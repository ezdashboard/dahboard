import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import routes from './routes';
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import axios from 'axios';
import MobileSideBar from './components/MobileSideBar';

import Router from 'next/router'
import { Users, LogOut, Newspaper,Search, Lightbulb, BookMarked, Home, Sparkles, Image  } from 'lucide-react';
import { useRouter } from "next/router";

 const UpdateProfile = ()=> {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgLoad, setImgLoad] = useState(false);
    const [logoLoad, setLogoLoad] = useState(false);
    const handleFileChange = (event) => {
      //console.log('vikasss', event.target.files[0]);
      
      if( event.target.files[0].size > 2024000){
        alert('Please select less than 1 mb file upload');
      }else{
        setSelectedFile(event.target.files[0]);
      }
    };
    const [loginStatus, setLoginStatus] = useState(true);

    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    const router = useRouter();

    const onLogOut=()=>{
        localStorage.clear();
        setLoginStatus(false);
        Router.push('/');
    }
    const [bodyCsss, setBodyCss] = useState('py-5');
    const [inputData, setInputData] = useState({
        companyname : '',
        title : '',
        name : '',
        email : '',
        contactno : '',
        about : '',
        location : '',
        image : '',
        logo : '',
        userid :''
    })
    const [profileData, setProfileData] = useState({
        companyname : '',
        title : '',
        name : '',
        email : '',
        contactno : '',
        about : '',
        location : '',
        image : '',
        logo : '',
        userid : ''
    });
    const handleSubmit = async (event) => {
      
        event.preventDefault();
        const logoData = {
          userid : localStorage.userid ? localStorage.userid : ''
        }
        if(logoData && logoData.userid){
          if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('userid', logoData.userid);
            setLogoLoad(true);
            try {
              console.log('Imageccc uploaded successfully.',formData);

              const response = await fetch('https://reseller.ezrankings.in//dashboard/upload.php', {
                method: 'POST',
                body: formData,
              })
              //  .then(res => {
                  if (response.ok) {
                      const getData = await response.json();
                      //setResponseMessage(data.filename);
                      console.log('Image uploaded successfully.');
                      console.log('Image uploaded successfully.',getData);
                      localStorage.setItem('logo', getData.filename);
                      setProfileData({
                        logo : getData.filename,
                        image : localStorage.image ? localStorage.image : ''
                      })
        
                    } else {
                      console.log('Image upload failed.');
                    }
              // });
      

            } catch (error) {
              console.error('Error uploading image:', error);
            }
            setLogoLoad(false);
          }
      }
      };

      const handleImageSubmit = async (event) => {
        event.preventDefault();
        const imageData = {
          userid : localStorage.userid ? localStorage.userid : ''
        }
        if(imageData && imageData.userid){
        if (selectedFile) {
          const formData = new FormData();
          formData.append('image', selectedFile);
          formData.append('userid', imageData.userid);
          setImgLoad(true);
          try {
            console.log('Imageccc uploaded successfully.',formData);
            const response = await fetch(`https://reseller.ezrankings.in//dashboard/image.php`, {
              method: 'POST',
              body: formData,
            })
            //  .then(res => {
                if (response.ok) {
                    const getData = await response.json();
                    //setResponseMessage(data.filename);
                    console.log('Image uploaded successfully.');
                    // console.log('Image uploaded successfully.',getData);
                    localStorage.setItem('image', getData.filename);
                    setProfileData({
                      image : getData.filename,
                      logo : localStorage.logo ? localStorage.logo : '',
                      companyname : localStorage.companyname,
                      title : localStorage.title,
                      name : localStorage.name,     
                      contactno : localStorage.contactno ? localStorage.contactno : '',
                      about : localStorage.about ? localStorage.about : '',
                      location : localStorage.location ? localStorage.location : '',
                      email : localStorage.email,
                      userid : localStorage.userid
                  });
                    //setImgLoad(false);
                  } else {
                    console.log('Image upload failed.');
                  }
            // });
    

          } catch (error) {
            console.error('Error uploading image:', error);
          }
          setImgLoad(false);
        }
      }
      };  
    
    const [closeIcon, setCloseIcon] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    useEffect(() => {
        if(localStorage.title && localStorage.email && localStorage.logo && localStorage.companyname && localStorage.userid && localStorage.name){
            setProfileData({
                companyname : localStorage.companyname,
                title : localStorage.title,
                name : localStorage.name,
                email : localStorage.email,
                contactno : localStorage.contactno ? localStorage.contactno : '',
                about : localStorage.about ? localStorage.about : '',
                location : localStorage.location ? localStorage.location : '',
                image : localStorage.image ? localStorage.image : '',
                logo : localStorage.logo,
                userid : localStorage.userid
            });
            setInputData({
                companyname : localStorage.companyname,
                title : localStorage.title,
                name : localStorage.name,
                email : localStorage.email,
                contactno : localStorage.contactno ? localStorage.contactno : '',
                about : localStorage.about ? localStorage.about : '',
                location : localStorage.location ? localStorage.location : '',
                image : localStorage.image ? localStorage.image : '',
                logo : localStorage.logo,
                userid : localStorage.userid
            });
        }
        }, []);
    const [msg, setFormStatus] = useState('')

    const [submitBtn, setSubmitBtn] = useState({})
    const inputChangeData =(event)=> {
    
      const {name, value} = event.target;
      setInputData((valuePre)=>{
     return{
       ...valuePre,
       [name]:value
     }
    });
    
    }
    const submitCloseIcon = ()=>{
      setCloseIcon(false);
    }
    const onSubmit = (e) => {
      e.preventDefault()
      setSubmitBtn({
        padding: '1rem 0rem',
        display: 'block',
        color: 'red'
      })
      if(inputData && inputData.email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputData.email));
    
      }
      if(!inputData.name){
        setFormStatus("Name can not be blank.")
        setCloseIcon(true);
      }else if(!inputData.title){
        setFormStatus("Title can not be blank.")
        setCloseIcon(true);   
      }else{
        inputData.userid = profileData && profileData.userid ? profileData.userid : '';
        axios.post(`https://reseller.ezrankings.in//dashboard/updateProfile.php`,inputData,{
          headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(res => {
              const data = res.data;
              if(res &&  res.data && res.data.error && res.data.error.length > 0){
                  setFormStatus(res.data.error);
                  setCloseIcon(true);
              }else if(res &&  res.data && res.data.msg && res.data.msg.length > 0){
                      //Router.push('/thankyou')
                      setFormStatus("Update Successfully.");
                      //localStorage.clear();
                      localStorage.setItem('name', inputData.name);
                      localStorage.setItem('title', inputData.title);
                      localStorage.setItem('companyname', inputData.companyname);
                      localStorage.setItem('contactno', inputData.contactno);
                      localStorage.setItem('about', inputData.about);
                      localStorage.setItem('location', inputData.location);
                      setProfileData({
                        companyname : inputData.companyname,
                        title : inputData.title,
                        name : inputData.name,     
                        contactno : inputData.contactno ? inputData.contactno : '',
                        about : inputData.about ? inputData.about : '',
                        location : inputData.location ? inputData.location : '',
                        email : localStorage.email,
                        image : localStorage.image ? localStorage.image : '',
                        logo : localStorage.logo?localStorage.logo:'',
                        userid : localStorage.userid
                    });

                      setCloseIcon(true);
                      setSubmitBtn({
                        padding: '1rem 0rem',
                        display: 'block',
                        color: '#46c737'
                      })
                    }
              
    
        })
        .catch(err => {
         })
      }
    }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link href="#" rel="shortcut icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <title>Reseller Profile update</title>
        <link rel="dns-prefetch" href="//developers.google.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>
        <script src="https://reseller.ezrankings.in//dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="https://reseller.ezrankings.in//dashboard/js/app.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>  
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
      </Head>
      <MobileSideBar />
      <div className="flex mt-[4.7rem] md:mt-0">
      <nav className="side-nav">
        <Link href="#" className="intro-x flex items-center pl-5 pt-4"><img alt="" src={profileData.logo} /></Link>
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
            <li>
            <Link href="#" onClick={onLogOut} className="side-menu"><div className="side-menu__icon">
            <LogOut size={16}/>
            </div>
                <div className="side-menu__title">SignOut</div>
            </Link>
            </li>
        </ul>
      </nav>
        <div className="content">
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
              <div className="intro-x dropdown">
                  <div className="dropdown-toggle rounded-full overflow-hidden shadow-lg image-fit zoom-in">
                      <Link href="/profile"><img alt="" src={profileData.image} /></Link>
                  </div>
              </div>
          </div>
          <div className="intro-y flex items-center mt-8">
          </div>
          <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                  <div className="intro-y box mt-5 lg:mt-0">
                      <div className="relative items-center p-5">
                          <div className="avatar-upload">
                              <div className="avatar-preview">
                                  <img alt="" className="rounded-full pro-img" src={profileData.image} />
                                  </div>
                              </div>
                          </div>
                      <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                              <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                                  <h2 className="font-medium text-base mr-auto">Profile</h2>
                              <div className="text-right">
                                  </div>
                              </div>
                          <a className="flex items-center mt-5" href="">
                              <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Name: {profileData.name}
                          </a>
                          <a className="flex items-center mt-5" href="">
                              <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Title: {profileData.title}
                          </a>
                              <a className="flex items-center mt-5" href="">
                              <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Phone: {profileData.contactno}
                          </a>
                          <a className="flex items-center mt-5" href="">
                              <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Mail: {profileData.email}
                          </a>
                              <a className="flex items-center mt-5" href="">
                              <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Company Name: {profileData.companyname}
                          </a>
                          <a className="flex items-center mt-5" href="">
                              <i data-lucide="lock" className="w-4 h-4 mr-2"></i>Location: {profileData.location}
                          </a>
                          
                      </div>
                  </div>
              </div>
              <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
              <div className="intro-y box lg:mt-5" bis_skin_checked="1">
                      <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400" bis_skin_checked="1">
                          <h2 className="font-medium text-base mr-auto">Display Information</h2>
                      </div>
                      <div className="col-md-12">
                          {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i className="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                      </div>
                  
                      <div className="p-5" bis_skin_checked="1">
                          <div className="flex flex-col-reverse xl:flex-row flex-col" bis_skin_checked="1">
                              <form onSubmit={onSubmit}>
                                  <div className="flex-1 mt-6 xl:mt-0" bis_skin_checked="1">
                                      <div className="grid grid-cols-12 gap-x-5" bis_skin_checked="1">
                                          <div className="col-span-12 xxl:col-span-6" bis_skin_checked="1">
                                              <div bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-1" className="form-label">Display Name</label>
                                              <input type="text" className="form-control" placeholder="Input text" onChange={inputChangeData} name="name" value={inputData.name} />
                                              </div>
                                          </div>
                                          <div className="col-span-12 xxl:col-span-6" bis_skin_checked="1">
                                              <div bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-1" className="form-label">Title</label>
                                              <input type="text" className="form-control" placeholder="Input text" onChange={inputChangeData} value={inputData.title} name="title"/>
                                              </div>
                                          </div>
                                          <div className="col-span-12 xxl:col-span-6" bis_skin_checked="1">
                                              <div className="mt-3" bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-4" className="form-label">Phone Number</label>
                                                  <input type="text" className="form-control" placeholder="Input text" onChange={inputChangeData} value={inputData.contactno} name="contactno" />
                                              </div>
                                          </div>
                                          <div className="col-span-12 xxl:col-span-6" bis_skin_checked="1">
                                              <div className="mt-3" bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-4" className="form-label">Mail</label>
                                                  <input type="text" className="form-control" placeholder="Input text" onChange={inputChangeData} value={inputData.email} name="email" readOnly/>
                                              </div>
                                          </div>
                                          
                                          <div className="col-span-12 xxl:col-span-6" bis_skin_checked="1">
                                              <div className="mt-3" bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-4" className="form-label">Company Name</label>
                                                  <input type="text" className="form-control" placeholder="Input text" onChange={inputChangeData} value={inputData.companyname} name="companyname"/>
                                              </div>
                                          </div>
                                          
                                          <div className="col-span-12" bis_skin_checked="1">
                                              <div className="mt-3" bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-5" className="form-label">Location</label>
                                                  <textarea className="form-control" placeholder="Adress" onChange={inputChangeData}  name="location" defaultValue={inputData.location}></textarea>
                                              </div>
                                          </div>
                                          <div className="col-span-12" bis_skin_checked="1">
                                              <div className="mt-3" bis_skin_checked="1">
                                                  <label htmlFor="update-profile-form-5" className="form-label">About</label>
                                                  <textarea className="form-control" placeholder="Adress" onChange={inputChangeData}  name="about" defaultValue={inputData.about}></textarea>
                                              </div>
                                          </div>                           
                                      </div>
                                      <button type="submit" className="btn btn-primary w-20 mt-3">Save</button>
                                  </div>
                              </form>
                              <div className="w-52 mx-auto xl:mr-0 xl:ml-6" bis_skin_checked="1">
                              <form onSubmit={handleImageSubmit}>
                                  <div className="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5" bis_skin_checked="1">
                                      <div className="relative image-fit cursor-pointer zoom-in mx-auto" bis_skin_checked="1">
                                          <img className="rounded-md" alt="#" src={profileData.image}/>
                                          <input type="file" className="w-full h-full top-0 left-0 absolute opacity-0" onChange={handleFileChange} />
                                      </div>
                                      <div className="mx-auto cursor-pointer relative mt-5" bis_skin_checked="1">
                                      { !imgLoad &&
                                        <button type="submit" className="btn btn-primary w-full">Change Photo</button>}
                                      { imgLoad &&
                                        <button type="button" className="btn btn-primary w-full">Uploading Photo...</button>}
                                      </div>
                                  </div>
                                  </form>
                                  <div className="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5" bis_skin_checked="1">
                                  <form onSubmit={handleSubmit}>
                                      <div className="relative image-fit cursor-pointer zoom-in mx-auto" bis_skin_checked="1">
                                          <img className="rounded-md" alt="#" src={profileData.logo}/>
                                          <input type="file" className="w-full h-full top-0 left-0 absolute opacity-0" onChange={handleFileChange} />
                                      </div>

                                      <div className="mx-auto cursor-pointer relative mt-5" bis_skin_checked="1">
                                      {!logoLoad && <button type="submit" className="btn btn-primary w-full">Change Logo</button>}
                                      {logoLoad && <button type="button" className="btn btn-primary w-full">Uploading Logo...</button>}

                                      </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default UpdateProfile;