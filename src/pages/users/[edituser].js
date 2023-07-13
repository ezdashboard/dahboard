// pages/posts/[id].js

import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import routes from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';


import SideBar from '../components/SideBar';
import TopHeader from '../components/TopHeade';
import axios from 'axios';

export default function Index({ userDetail }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const [bodyCsss, setBodyCss] = useState('py-5');
    const [inputData, setInputData] = useState({
        userid : userDetail[0]['userid'],
        logo : userDetail[0]['logo'],
        email : userDetail[0]['email'],
        name : userDetail[0]['name'],
        title : userDetail[0]['title'],
        type : userDetail[0]['type'],
        companyname : userDetail[0]['companyname'],
        contactno : userDetail[0]['contactno'],
        status : userDetail[0]['status'],
        location : userDetail[0]['location'],
        image : userDetail[0]['image'],
        password : ''
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
        type:'',
        userid : ''
    });

    const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);
    
    const toggleHiddenTitle = (index) => {
      if (hiddenTitleIndex === index) {
        setHiddenTitleIndex(null);
      } else {
        setHiddenTitleIndex(index);
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
      }else if(!inputData.type){
        setFormStatus("User type can not be blank.")
        setCloseIcon(true);   
      }else if(!inputData.email){
        setFormStatus("Email can not be blank.")
        setCloseIcon(true);  
      }else if(!inputData.companyname){
        setFormStatus("Company Name can not be blank.")
        setCloseIcon(true);  
      }else if(!inputData.contactno){
        setFormStatus("Phone Number can not be blank.")
        setCloseIcon(true);  
    //   }else if(!inputData.password){
    //     setFormStatus("Password can not be blank.")
    //     setCloseIcon(true);                                  
      }else{
        // inputData.userid = profileData && profileData.userid ? profileData.userid : '';
        axios.post(`https://smca.ezrankings.in/dashboard/updateUser.php`,inputData,{
          headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(res => {
              const data = res.data;
              if(res && res.data && res.data.error && res.data.error.length > 0){
                  setFormStatus(res.data.error);
                  setCloseIcon(true);
              }else if(res &&  res.data && res.data.status){
                      //Router.push('/thankyou')
                      setFormStatus("User profile updated successfully.");
                      setCloseIcon(true);
                      setSubmitBtn({
                        padding: '1rem 0rem',
                        display: 'block',
                        color: '#46c737',
                        fontSize: '20px'
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
        <title>Reseller Dashboard</title>
        <link rel="dns-prefetch" href="//developers.google.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>
        <script src="https://smca.ezrankings.in/dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="https://smca.ezrankings.in/dashboard/js/app.js"></script>
        <script src="https://smca.ezrankings.in/dashboard/js/map.js"></script>
      </Head>
    
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar logo={profileData.logo}/>
        <div className="content">
          <TopHeader title={profileData.companyname} img={profileData.image}/>
          <div className="flex items-center mt-8">
              <h2 className="intro-y text-lg font-medium mr-auto">
                  User Update
              </h2>
          </div>             
          <div className="intro-y box py-10 sm:py-20 mt-5">
              <div className="px-5">
                  <div className="font-medium text-center text-lg">Update user</div>
                  <div className="text-slate-500 text-center mt-2">To start off, please enter your username, email address and password.</div>
              </div>
              <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
                  <div className="col-md-12">
                          {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i className="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                  </div>
                  <div className="font-medium text-base">Profile Settings</div>
                    <form onSubmit={onSubmit}>
                      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                          <div className="intro-y col-span-12 sm:col-span-6">
                              <label htmlFor="input-wizard-1" className="form-label">Name*</label>
                              <input type="text" className="form-control" placeholder="abc" onChange={inputChangeData} name="name" value={inputData.name}/>
                          </div>
                          <div className="intro-y col-span-12 sm:col-span-6">
                              <label htmlFor="input-wizard-2" className="form-label">Email*</label>
                              <input type="email" className="form-control" placeholder="example@gmail.com" onChange={inputChangeData} name="email" value={inputData.email}/>
                          </div>
                          <div className="intro-y col-span-12 sm:col-span-6">
                              <label htmlFor="input-wizard-3" className="form-label">Company Name*</label>
                              <input type="text" className="form-control" placeholder="XYZ" onChange={inputChangeData} name="companyname" value={inputData.companyname}/>
                          </div>
                          <div className="intro-y col-span-12 sm:col-span-6" bis_skin_checked="1">
                              <label htmlFor="input-wizard-6" className="form-label">Department</label>
                              <select className="form-select" onChange={inputChangeData} name="type">
                                  <option value="user">User</option>
                                  <option value="manager">Manager</option>
                              </select>
                          </div>
                          <div className="intro-y col-span-12 sm:col-span-6">
                            <label htmlFor="input-wizard-3" className="form-label">Phone Number*</label>
                            <input type="number" className="form-control" placeholder="+91 " onChange={inputChangeData} name="contactno" value={inputData.contactno}/>
                          </div>
                          <div className="intro-y col-span-12 sm:col-span-6">
                              <label htmlFor="input-wizard-4" className="form-label">Password*</label>
                              <input type="password" className="form-control" placeholder="********" onChange={inputChangeData} name="password" value={inputData.password}/>
                          </div>
                          <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                              <button className="btn btn-primary w-24 ml-2" type="submit">Update</button>
                          </div>
                      </div>
                    </form>
              </div>
          </div>
        </div>
      </div>
     
    </>
  )
}


// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://smca.ezrankings.in/dashboard/usersD.php?page=1')
  
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { edituser: post.userid.toString(), },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://smca.ezrankings.in/dashboard/getuser.php?userid=${params.edituser}`)
  const userDetail = await res.json()

  // Pass post data to the page via props
  return { props: { userDetail } }
}


// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('https://smca.ezrankings.in/react-backend/blogs.php')
//     const posts = await res.json()
  
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//       params: { edituser: post.linkUrl.toString(), },
//     }))
  
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//   }
  
//   // This also gets called at build time
//   export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`https://smca.ezrankings.in/react-backend/blogCat.php?url=${params.edituser}`)
//     const dataBlogs = await res.json()
  
//     // Pass post data to the page via props
//     return { props: { dataBlogs } }
//   }