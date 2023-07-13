import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import routes from './routes';
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import axios from 'axios';
import { Lock, Pencil, X  } from 'lucide-react';
import ProfileContent from './components/ProfileContent';


const Profile = ()=> {
const [bodyCsss, setBodyCss] = useState('py-5');
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

const [msg, setFormStatus] = useState('')
const [inputData, setInputData] = useState({
    confirm_password:"",
    new_password: "",
    password:"",
    userid :profileData && profileData.userid ? profileData.userid : ''
})
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
  if(!inputData.password){
    setFormStatus("Password can not be blank.")
    setCloseIcon(true);
  }else if(!inputData.new_password){
    setFormStatus("New password can not be blank.")
    setCloseIcon(true);
}else if(!inputData.confirm_password){
    setFormStatus("Confirm Password can not be blank.")
    setCloseIcon(true);  
}else if(inputData.new_password != inputData.confirm_password){
    setFormStatus("New Password and confirm password not same.")
    setCloseIcon(true);    
  }else{
    inputData.userid = profileData && profileData.userid ? profileData.userid : '';
    axios.post(`https://smca.ezrankings.in/dashboard/updatePass.php`,inputData,{
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
           
                  setInputData({
                    confirm_password:"",
                    password:"",
                    new_password:"",
                       userid : profileData && profileData.userid ? profileData.userid : ''
                  })
                  //Router.push('/thankyou')
                  setFormStatus("Password changed Successfully.");
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
useEffect(() => {
    setBodyCss('py-5');
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
    <script
    // you might need to get a newer version
    src="https://kit.fontawesome.com/fbadad80a0.js"
    crossOrigin="anonymous"
  ></script>
    <script src="https://smca.ezrankings.in/dashboard/js/markerclusterer.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
    <script src="https://smca.ezrankings.in/dashboard/js/app.js"></script>
    <script src="https://smca.ezrankings.in/dashboard/js/map.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>  
    <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
  </Head>
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar logo={profileData.logo}/>
        <div className="content">
          <TopHeader title={profileData.companyname} img={profileData.image}/>
            <div className="intro-y flex items-center mt-8">
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
            <ProfileContent profile={profileData} />
            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                <div className="grid grid-cols-12 gap-6 aaa">
                    <div className="intro-y box col-span-12 2xl:col-span-6">
                        <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                            <h2 className="font-medium text-base mr-auto">About Us</h2>
                        </div>
                        <div className="p-5">
                            <div className="relative flex items-center">
                                <div className="ml-4 mr-auto">
                                    <p>
                                    {profileData.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-y box lg:mt-5" bis_skin_checked="1">
                <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400" bis_skin_checked="1">
                    <h2 className="font-medium text-base mr-auto">Change Password</h2>
                </div>
                <div className="col-md-12">
                {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><X  size="16" color="#999"/></span></span>: ""}
                </div>
                <form onSubmit={onSubmit}>
                <div className="p-5" bis_skin_checked="1">
                    <div bis_skin_checked="1">
                        <label htmlFor="change-password-form-1" className="form-label">Old Password</label>
                        <input id="change-password-form-1" type="password" className="form-control" name="password" placeholder="Input text"  onChange={inputChangeData} value={inputData.password}/>
                    </div>
                    <div className="mt-3" bis_skin_checked="1">
                        <label htmlFor="change-password-form-2" className="form-label">New Password</label>
                        <input id="change-password-form-2" type="password" className="form-control" name="new_password" placeholder="Input text" onChange={inputChangeData} value={inputData.new_password}/>
                    </div>
                    <div className="mt-3" bis_skin_checked="1">
                        <label htmlFor="change-password-form-3" className="form-label">Confirm New Password</label>
                        <input id="change-password-form-3" type="password" className="form-control" name="confirm_password" placeholder="Input text" onChange={inputChangeData} value={inputData.confirm_password}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Change Password</button>
                </div>
                </form>
            </div>
             </div>
            
            </div>
        </div>
      </div>
    </>
  )
}


export default Profile;