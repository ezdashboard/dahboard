import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import Link from 'next/link';
import axios from 'axios';
import MobileSideBar from './components/MobileSideBar';

const Adduser=()=>{
    const [showManager, setShowManager] = useState(false)
    const [managerStoreData, setManagerStoreData] = useState([]);
    const [inputData, setInputData] = useState({
        companyname : '',
        title : '',
        name : '',
        email : '',
        mangerId: '',
        contactno : '',
        about : '',
        location : '',
        type : '',
        updatedBy : '',
        userid :''
    });
    const [profileData, setProfileData] = useState({
        companyname : '',
        title : '',
        name : '',
        email : '',
        mangerId: '',
        contactno : '',
        about : '',
        location : '',
        image : '',
        logo : '',
        type:'',
        updatedBy : '',
        userid : ''
    });
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
                updatedBy : localStorage && localStorage.tokenAuth ? localStorage.tokenAuth : '',
                userid : localStorage.userid
            });
        }
        }, []);
    const [msg, setFormStatus] = useState('')
    const [submitBtn, setSubmitBtn] = useState({})
    const inputChangeData =(event)=> {
    const {name, value} = event.target;
    if(name && name=="type" && value && value =="user"){
      setShowManager(true);
    }else if(name && name=="type" && (!value || value !="user")){
      setShowManager(false);
    }
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
    const getManagerData = async (userid) => {

      axios.get(`${process.env.API_BASE_URL}managerList.php?userid=${userid}`)
        .then(res => {
            const data = res.data.map((item) => {
              return {
                id: item.userid,
                name: item.name,
                email: item.email,
                contactno: item.contactno,
                companyname: item.companyname,
                title: item.title,
                logo: item.logo,
                type: item.type,
                status: item.status == '1' ? 'Active' : 'Inactive',
                image: item.image
              }
          }
        )
        setManagerStoreData(data);
      })
      .catch(err => {
       })
   }  
    const onSubmit = (e) => {
      e.preventDefault()
      setSubmitBtn({
        padding: '1rem 0rem',
        display: 'block',
        color: 'red'
      });
      if(inputData && inputData.email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputData.email));
    
      }
      if(!inputData.name){
        setFormStatus("Name can not be blank.")
        setCloseIcon(true);
      }else if(!inputData.type){
        setFormStatus("Please select user type.")
        setCloseIcon(true);   
      }else if(inputData.type && inputData.type == 'user' && !inputData.mangerId){
        setFormStatus("Please select manager.")
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
      }else if(!inputData.password){
        setFormStatus("Password can not be blank.")
        setCloseIcon(true);                                  
      }else{
        inputData.userid = profileData && profileData.userid ? profileData.userid : '';
        inputData.updatedBy = profileData && profileData.updatedBy ? profileData.updatedBy : '' 
        axios.post(`${process.env.API_BASE_URL}adduser.php`,inputData,{
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
                      setFormStatus("User added successfully.");
                      //localStorage.clear();
                      setInputData({
                        companyname : '',
                        name : '',
                        email : '',
                        mangerId:'',
                        contactno : '',
                        type:'',
                        password : ''
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
    useEffect(() => {
      if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
          getManagerData(localStorage.userid);
      }
      }, []);
    return (
        <> 
        <Head>
          <meta charSet="utf-8" />
          <link href="#" rel="shortcut icon"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>Reseller Add User</title>
          <link rel="dns-prefetch" href="//developers.google.com"/>
          <link rel="dns-prefetch" href="//maps.googleapis.com"/>
          <script src="https://reseller.ezrankings.in/dashboard/js/markerclusterer.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
          <script src="https://reseller.ezrankings.in/dashboard/js/app.js"></script>
        </Head>
        <MobileSideBar />
        <div className="flex mt-[4.7rem] md:mt-0">
          <SideBar logo={profileData.logo}/>
          <div className="content">
            <TopHeader title={profileData.companyname} img={profileData.image}/>
            <div className="flex items-center mt-8">
                <h2 className="intro-y text-lg font-medium mr-auto">
                    User Add
                </h2>
            </div>             
            <div className="intro-y box py-10 sm:py-20 mt-5">
                <div className="px-5">
                    <div className="font-medium text-center text-lg">Add new user</div>
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
                                <label htmlFor="input-wizard-6" className="form-label">Role</label>
                                <select className="form-select" onChange={inputChangeData} name="type">
                                    <option value="">Select</option>
                                    <option value="user">User</option>
                                    <option value="Manager">Manager</option>
                                </select>
                            </div>
                            {
                              showManager && 
                            <div className="intro-y col-span-12 sm:col-span-6" bis_skin_checked="1">
                            <label htmlFor="input-wizard-6" className="form-label">Assign Manager</label>
                            <select className="form-select" onChange={inputChangeData} name="mangerId">
                                <option value={inputData.mangerId}>Select</option>
                                {managerStoreData && managerStoreData.length > 0 && managerStoreData.map((mang, m)=>{
                                  return(
                                   <option value={mang.id} key={m}>{mang.name}</option>
                                  )
                                })}
                            </select>
                            </div> 
                            }
                            <div className="intro-y col-span-12 sm:col-span-6">
                              <label htmlFor="input-wizard-3" className="form-label">Phone Number*</label>
                              <input type="number" className="form-control" placeholder="+91 " onChange={inputChangeData} name="contactno" value={inputData.contactno}/>
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="input-wizard-4" className="form-label">Password*</label>
                                <input type="password" className="form-control" placeholder="********" onChange={inputChangeData} name="password" value={inputData.password}/>
                            </div>
                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                <button className="btn btn-primary w-24 ml-2" type="submit">Submit</button>
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
export default Adduser;