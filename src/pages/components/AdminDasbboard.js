import NewsLetter from "./NewsLetter";
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link';
import { X} from 'lucide-react';


const AdminDasbboard=(props)=>{
    //console.log('vikasBPccL', props);

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
const [newsData, setNewsData] = useState([]);
const [closeIcon, setCloseIcon] = useState(false)
const [msg, setFormStatus] = useState('')
const [inputData, setInputData] = useState({
    content:"",
    title:"",
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
const NewsList = async (page) => {

    axios.get(`https://smca.ezrankings.in/dashboard/newsList.php`)
      .then(res => {
          const data = res.data.newsData.map((item) => {
            return {
              id: item.id,
              content: item.content,
              time: item.time,
              user: item.user,
            }
        }
      )
      setNewsData(data);
    })
    .catch(err => {
     })
 }
const onSubmit = (e) => {
  e.preventDefault()
  if(!inputData.title){
    setSubmitBtn({
        padding: '1rem 0rem',
        display: 'block',
        color: 'red'
      })
    setFormStatus("Title can not be blank.")
    setCloseIcon(true);   
  }else if(!inputData.content){
    setSubmitBtn({
        padding: '1rem 0rem',
        display: 'block',
        color: 'red'
      })
    setFormStatus("Content can not be blank.")
    setCloseIcon(true);   
  }
  else{
    inputData.userid = profileData && profileData.userid ? profileData.userid : '';
    axios.post(`https://smca.ezrankings.in/dashboard/addNews.php`,inputData,{
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
                    content:"",
                    title:"",
                    userid : profileData && profileData.userid ? profileData.userid : ''
                  });
                  //Router.push('/thankyou')
                  setFormStatus("Submit Successfully.");
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
    NewsList();
    }, []);
    return(
        <>
        <div className="admin-dash mt-5">
        <Link href="/projectList">
            <div className="#">
                <div className="report-box zoom-in card" >
                        <div className="box p-5" bis_skin_checked="1">
                                <div className="flex" bis_skin_checked="1">
                                    <i className="far fa-tasks"></i>
                                </div>
                                <div className="text-3xl font-medium leading-8" bis_skin_checked="1"><b>{props && props.data && props.data.total_project ? props.data.total_project : '0'}+</b></div>
                                <div className="text-base text-slate-500 mt-1" bis_skin_checked="1">Total Projects</div>
                            </div>                       
                    </div>
            </div>
            </Link>
            <Link href="/users">
            <div className="#">
                <div className="report-box zoom-in card">
                        <div className="box p-5">
                            <div className="flex">
                                <i className="far fa-users"></i>
                            </div>
                            <div className="text-3xl font-medium leading-8"><b>{props && props.data && props.data.total_users ? props.data.total_users : '0'}+</b></div>
                            <div className="text-base text-slate-500 mt-1">Total Users</div>
                        </div>
                </div>
            </div>
            </Link>
            <Link href="/projectList">
            <div className="#">
                <div className="report-box zoom-in card">
                    <div className="box p-5">
                        <div className="flex">
                            <i className="far fa-user-times"></i>
                        </div>
                        <div className="text-3xl font-medium leading-8"><b>${props && props.data && props.data.total_price ? props.data.total_price : '0'}</b></div>
                        <div className="text-base text-slate-500 mt-1">Total Cost</div>
                    </div>
                </div>
            </div>
            </Link>
            <Link href="#">
            <div className="#">
                <div className="report-box zoom-in card">
                    <div className="box p-5">
                        <div className="flex">
                            <i className="far fa-user-times"></i>
                        </div>
                        <div className="text-3xl font-medium leading-8">50+</div>
                        <div className="text-base text-slate-500 mt-1">Pending Request</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        <div className="newsletter-box">
            <div className="intro-y box lg:mt-5" bis_skin_checked="1">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400" bis_skin_checked="1">
                <h2 className="font-medium text-base mr-auto">Add New</h2>
            </div>
            
            {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><X  size="16" color="#999"/></span></span>: ""}
            
            <div className="p-5" bis_skin_checked="1">
                <form onSubmit={onSubmit}>
                <div className="mt-3" bis_skin_checked="1">
                    <input type="text" name="title" onChange={inputChangeData}  className="form-control" placeholder="Title" value={inputData.title}/>
                </div>                    
                <div className="mt-3" bis_skin_checked="1">
                    <textarea rows="5" name="content" onChange={inputChangeData}  className="form-control" placeholder="Write Something Here...." value={inputData.content}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Save</button>
                </form>
            </div>
        </div>
        </div>
        {/* <NewsLetter />                      */}
        </>
    )
}
export default AdminDasbboard;