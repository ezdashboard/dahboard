import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import SideBar from './components/SideBar'
import TopHeader from './components/TopHeade'
import Link from 'next/link';
import axios from 'axios';

const AddReport = ()=>{
    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    const [inputData, setInputData] = useState({
        serviceName : '',
        dwlUrl:'',
        projectUrl : '',
        planOption : '',
        billingAmt : '',
        startDate : '',
        reportingDate : '',
        paymentStatus : '',
        projectStatus : '',
        userAssign: '',
        userid :''
    });
    const [msg, setFormStatus] = useState('')
    const [userStoreData, setUserStoreData] = useState([]);
    const [serviceStoreData, setServiceStoreData] = useState([]);
    const [closeIcon, setCloseIcon] = useState(false)
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
      });
      if(!inputData.projectUrl){
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
        inputData.userid = localStorage && localStorage.userid ? localStorage.userid : '';
        axios.post(`https://smca.ezrankings.in/dashboard/add-report.php`,inputData,{
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
                      setFormStatus("Report added successfully.");
                      //localStorage.clear();
                      setInputData({
                        serviceName : '',
                        dwlUrl:'',
                        projectUrl : '',
                        planOption : '',
                        billingAmt : '',
                        startDate : '',
                        reportingDate : '',
                        paymentStatus : '',
                        projectStatus : '',
                        userAssign: ''
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
        if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
            setSideBarAccess({
                users : true
            })
        }
        getUserData();
        getServiceData();
        }, []);
    return(
        <>
        <Head>
            <meta charset="utf-8" />
            <link href="#" rel="shortcut icon"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
            <meta name="author" content=""/>
            <projecturl>Reseller Dashboard</projecturl>
            <link rel="dns-prefetch" href="//developers.google.com"/>
            <link rel="dns-prefetch" href="//maps.googleapis.com"/>
            <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet"/>
        </Head>
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
                                <option value="" select="selected">Select</option>
                                    {serviceStoreData && serviceStoreData.length > 0 && serviceStoreData.map((service, s)=>{
                                        return(
                                            <>
                                            <option value ={service.id} key={s}>{service.name}</option>
                                            </>
                                        )
                                    })}
                                </select>                                
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="input-wizard-3" className="form-label">User List</label>
                                    <select className="form-select" onChange={inputChangeData} name="userAssign">
                                    <option value="" select="selected">Select</option>
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
                                    <option value="" select="selected">Select</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Due">Due</option>
                                </select>
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="input-wizard-4" className="form-label">Project Status</label>
                                    <div className="form-check" >
                                        <select className="form-select" onChange={inputChangeData} name="projectStatus">
                                            <option value="" select="selected">Select</option>
                                            <option value="Active">Active</option>
                                            <option value="Paused">Paused</option>        
                                        </select>                                    
                                    </div>
                            </div>                            
                        </div>
                        <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                            <button className="btn btn-primary w-24 ml-2" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddReport