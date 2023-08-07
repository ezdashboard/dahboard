import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import axios from 'axios';
import MobileSideBar from './components/MobileSideBar';

export default function EditReportDetail  () {
   const [bodyCsss, setBodyCss] = useState('py-5');
   const [closeIcon, setCloseIcon] = useState(false)
   const [submitBtn, setSubmitBtn] = useState({})
   const [msg, setFormStatus] = useState('')
   const [selectedFile, setSelectedFile] = useState(null);

   const [serviceStoreData, setServiceStoreData] = useState([]);

   const [inputData, setInputData] = useState({

  });
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
   const [userStoreData, setUserStoreData] = useState([]);
   const getUserData = async () => {

    axios.get(`https://smca.ezrankings.in/dashboard/usersD.php?page=`)
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
      setUserStoreData(data);
    })
    .catch(err => {
     })
 } 
const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);
const [ReportData, setReportData]= useState({});
const [projectId, setprojectId] = useState('');
const [loading, setLoading] = useState(false);
const submitCloseIcon = ()=>{
   setCloseIcon(false);
 }
const inputChangeData =(event)=> {
   const {name, value} = event.target;
     setInputData((valuePre)=>{
    return{
      ...valuePre,
      [name]:value
    }
   });
   
   }
  
const getReportData = (id)=>{
   if(id){
      axios.get(`https://smca.ezrankings.in/dashboard/getreport.php?url=${id}`)
      .then(res => {
      // setLearningData(data);
      setReportData({
        id : res.data[0]['id'] ? res.data[0]['id'] : null,
        serviceName : res.data[0]['serviceId'] ? res.data[0]['serviceId'] : null,
        userName : res.data[0]['userName'] ? res.data[0]['userName'] : null,
        serviceId : res.data[0]['serviceName'] ? res.data[0]['serviceName'] : null,
        dwlUrl: res.data[0]['dwlUrl'] ? res.data[0]['dwlUrl'] : null,
        projectUrl :  res.data[0]['projectUrl'] ? res.data[0]['projectUrl'] : null,
        planOption : res.data[0]['planOption'] ? res.data[0]['planOption'] : null,
        billingAmt : res.data[0]['billingAmt'] ? res.data[0]['billingAmt'] : null,
        startDate: res.data[0]['startDate'] ? res.data[0]['startDate'] : null,
        reportingDate :  res.data[0]['reportingDate'] ? res.data[0]['reportingDate'] : null,
        paymentStatus : res.data[0]['paymentStatus'] ? res.data[0]['paymentStatus'] : null,         
        projectStatus :  res.data[0]['projectStatus'] ? res.data[0]['projectStatus'] : null,
        userAssign : res.data[0]['userAssign'] ? res.data[0]['userAssign'] : null,
        userid : localStorage && localStorage.userid ? localStorage.userid : '' 

      })
      setInputData({        
         id : res.data[0]['id'] ? res.data[0]['id'] : null,
         serviceName : res.data[0]['serviceId'] ? res.data[0]['serviceId'] : null,
         userName : res.data[0]['userName'] ? res.data[0]['userName'] : null,
         serviceId : res.data[0]['serviceName'] ? res.data[0]['serviceName'] : null,
         dwlUrl: res.data[0]['dwlUrl'] ? res.data[0]['dwlUrl'] : null,
         projectUrl :  res.data[0]['projectUrl'] ? res.data[0]['projectUrl'] : null,
         planOption : res.data[0]['planOption'] ? res.data[0]['planOption'] : null,
         billingAmt : res.data[0]['billingAmt'] ? res.data[0]['billingAmt'] : null,
         startDate: res.data[0]['startDate'] ? res.data[0]['startDate'] : null,
         reportingDate :  res.data[0]['reportingDate'] ? res.data[0]['reportingDate'] : null,
         paymentStatus : res.data[0]['paymentStatus'] ? res.data[0]['paymentStatus'] : null,         
         projectStatus :  res.data[0]['projectStatus'] ? res.data[0]['projectStatus'] : null,
         userAssign : res.data[0]['userAssign'] ? res.data[0]['userAssign'] : null,
         userid : localStorage && localStorage.userid ? localStorage.userid : '' 
        })
      setLoading(true);
   })
   .catch(err => {
   })
   }
}
const onSubmit = (e) => {
   e.preventDefault()
   const formData = new FormData();

   setSubmitBtn({
     padding: '1rem 0rem',
     display: 'block',
     color: 'red'
   });
   if(!inputData.id){
     setFormStatus("Invalid data.")
     setCloseIcon(true);  
   }else if(!inputData.projectUrl){
      setFormStatus("Project url can not be blank.")
      setCloseIcon(true);       
    }else if(!inputData.dwlUrl){
      setFormStatus("Download url can not be blank.")
      setCloseIcon(true);    
    }else if(!inputData.serviceName){
      setFormStatus("Please select Service name.")
      setCloseIcon(true);   
    }else if(!inputData.userAssign){
      setFormStatus("Please select user.")
      setCloseIcon(true);                   
    }else if(!inputData.planOption){  
      setFormStatus("Plan opted can not be blank.")
      setCloseIcon(true); 
    }else if(!inputData.billingAmt){
      setFormStatus("Billing amount can not be blank.")
      setCloseIcon(true);  
    }else if(!inputData.startDate){
      setFormStatus("Start date can not be blank.")
      setCloseIcon(true);  
    }else if(!inputData.reportingDate){
      setFormStatus("Report date can not be blank.")
      setCloseIcon(true);  
    }else if(!inputData.paymentStatus){
      setFormStatus("Please select payment status.")
      setCloseIcon(true);  
    }else if(!inputData.projectStatus){
      setFormStatus("Please select project status.")
      setCloseIcon(true);                                          
   }else{
    //  formData.append('title', inputData.title);
    //  formData.append('serviceName', inputData.serviceName);
    //  formData.append('description', inputData.description);
    //  formData.append('id', inputData.id);
    //  if(selectedFile){
    //   formData.append('image', selectedFile);
    //  }
    //  formData.append('userid', localStorage && localStorage.userid ? localStorage.userid : '');
     axios.post(`https://smca.ezrankings.in/dashboard/edit-report.php`,inputData,{
     //   headers: {
     //   'Content-Type': 'multipart/form-data',
     //   method: 'POST',
     //   body: formData,
     // }
   })
       .then(res => {
           const data = res.data;
           if(res &&  res.data && res.data.error && res.data.error.length > 0){
               setFormStatus(res.data.error);
               setCloseIcon(true);
           }else if(res &&  res.data && res.data.status && res.data.msg.length > 0){
                   //Router.push('/thankyou')
                   setFormStatus("Update Successfully.");
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

 const getServiceData = async () => {
     axios.get(`https://smca.ezrankings.in/dashboard/services.php`)
       .then(res => {
           const data = res.data.serviceData.map((item) => {
             return {
               id: item.id,
               name: item.service_name,
               status: item.status
             }
         }
       )
       setServiceStoreData(data);
     })
     .catch(err => {
      })
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
    if(localStorage.projectId){
      setprojectId(localStorage.projectId);
    }
    getReportData(localStorage.projectId);
    getServiceData();
    getUserData();
    }, []);

 return(
    <>
     <Head>
      <meta charSet="utf-8" />
      <link href="#" rel="shortcut icon"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content=""/>
      <meta name="keywords" content=""/>
      <meta name="author" content=""/>
      <title>Edit Report Data</title>
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
     <MobileSideBar />
     <div className="flex mt-[4.7rem] md:mt-0">
      <SideBar />
      <div className="content">
        <TopHeader />
        <div className="flex items-center mt-8">
            <h2 className="intro-y text-lg font-medium mr-auto">
                Add New Report
            </h2>
        </div>
        <div className="intro-y box mt-5 add-new-report">
            <div className="border-slate-200/60 dark:border-darkmode-400">
                {/* <div className="font-medium text-base">Service List</div> */}
                  {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i className="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                <form onSubmit={onSubmit}>
                <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                    <div className="intro-y col-span-12 sm:col-span-6">
                            <label htmlFor="input-wizard-2" className="form-label">Project URL</label>
                            <input type="text" className="form-control" placeholder="www.abc.com" onChange={inputChangeData} name="projectUrl" value={inputData.projectUrl}/>
                    </div>  
                    <div className="intro-y col-span-12 sm:col-span-6">
                            <label htmlFor="input-wizard-2" className="form-label">Download Link URL</label>
                            <input type="text" className="form-control" placeholder="www.abc.com" onChange={inputChangeData} name="dwlUrl" value={inputData.dwlUrl}/>
                    </div>                                                      
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-1" className="form-label">Service Name</label>
                        <select className="form-select" onChange={inputChangeData} name="serviceName">
                        {inputData.serviceName == ReportData.serviceName && <option value={inputData.serviceName}>{inputData.serviceId}</option>}
                          {serviceStoreData && serviceStoreData.length > 0 && serviceStoreData.map((service, s)=>{
                              return(
                            <>
                            <option key={s} value={service.id} >{service.name}</option>
                            </>
                        )
                    })}
                      </select>                                
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-3" className="form-label">User List</label>
                            <select className="form-select" onChange={inputChangeData} name="userAssign">
                            {inputData.userName == ReportData.userName && <option value={inputData.userAssign} select="selected">{inputData.userName}</option>}
                            {userStoreData && userStoreData.length > 0 && userStoreData.map((usecr, u)=>{
                                return(
                                    <>
                                    <option value ={usecr.id} key={u}>{usecr.name}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>                                            
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-3" className="form-label">Plan Opted</label>
                        <input type="text" className="form-control" placeholder="123" onChange={inputChangeData} name="planOption" value={inputData.planOption}/>
                    </div>
                    
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-3" className="form-label">Billing Amount</label>
                        <input type="text" className="form-control" placeholder="$ " onChange={inputChangeData} name="billingAmt" value={inputData.billingAmt}/>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-4" className="form-label">Start Date</label>
                        <input type="date" className="form-control" placeholder="********" onChange={inputChangeData} name="startDate" value={inputData.startDate}/>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-4" className="form-label">Reporting Date</label>
                        <input type="date" className="form-control" placeholder="********" onChange={inputChangeData} name="reportingDate" value={inputData.reportingDate}/>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-4" className="form-label">Payment Status</label>
                        <select className="form-select" onChange={inputChangeData} name="paymentStatus">
                            <option value={inputData.paymentStatus} select="selected">{inputData.paymentStatus}</option>
                            <option value="Paid">Paid</option>
                            <option value="Due">Due</option>
                        </select>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6">
                        <label htmlFor="input-wizard-4" className="form-label">Project Status</label>
                            <div className="form-check" >
                                <select className="form-select" onChange={inputChangeData} name="projectStatus">
                                    <option value={inputData.projectStatus} select="selected">{inputData.projectStatus}</option>
                                    <option value="Active">Active</option>
                                    <option value="Paused">Paused</option>        
                                </select>                                    
                            </div>
                    </div>                            
                </div>
                <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                    <button className="btn btn-primary w-24 ml-2" type="submit">Update</button>
                </div>
                </form>
            </div>
        </div>
      </div>
     </div>
    </>
 )
}



