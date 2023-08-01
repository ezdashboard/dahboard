import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import SideBar from './components/SideBar'
import TopHeader from './components/TopHeade'
import Link from 'next/link';
import axios from 'axios';

const AddResource = ()=>{
    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    const [inputData, setInputData] = useState({
        serviceName : '',
        title:'',
        image : '',
        description : '',
        userid :''
    });
    const [msg, setFormStatus] = useState('')
    const [serviceStoreData, setServiceStoreData] = useState([]);
    const [closeIcon, setCloseIcon] = useState(false)
    const [submitBtn, setSubmitBtn] = useState({})
    const [selectedFile, setSelectedFile] = useState(null);

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
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   const logoData = {
    //     userid : localStorage.userid ? localStorage.userid : ''
    //   }
    //   if(logoData && logoData.userid){
    //     if (selectedFile) {
    //       const formData = new FormData();
    //       formData.append('image', selectedFile);
    //       formData.append('userid', logoData.userid);
    //       try {
    //         console.log('Imageccc uploaded successfully.',formData);

    //         const response = await fetch('https://smca.ezrankings.in/dashboard/upload.php', {
    //           method: 'POST',
    //           body: formData,
    //         })
    //         //  .then(res => {
    //             if (response.ok) {
    //                 const getData = await response.json();
    //                 //setResponseMessage(data.filename);
    //                 console.log('Image uploaded successfully.');
    //                 console.log('Image uploaded successfully.',getData);
    //                 localStorage.setItem('logo', getData.filename);
    //                 setProfileData({
    //                   logo : getData.filename,
    //                   image : localStorage.image ? localStorage.image : ''
    //                 })
      
    //               } else {
    //                 console.log('Image upload failed.');
    //               }
    //         // });
    

    //       } catch (error) {
    //         console.error('Error uploading image:', error);
    //       }
    //     }
    // }
    // };    
    const onSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData();

      setSubmitBtn({
        padding: '1rem 0rem',
        display: 'block',
        color: 'red'
      });
      if(!inputData.title){
        setFormStatus("Title can not be blank.")
        setCloseIcon(true);    
      }else if(!inputData.serviceName){
        setFormStatus("Please select Service name.")
        setCloseIcon(true);   
      }else if(!inputData.description){
        setFormStatus("Description can not be blank.")
        setCloseIcon(true);                   
      }else if(!selectedFile){  
        setFormStatus("Featured Image can not be blank.")
        setCloseIcon(true);                                          
      }else{
        formData.append('title', inputData.title);
        formData.append('serviceName', inputData.serviceName);
        formData.append('description', inputData.description);
        formData.append('image', selectedFile);
        formData.append('userid', localStorage && localStorage.userid ? localStorage.userid : '');
        axios.post(`https://smca.ezrankings.in/dashboard/add-learning.php`,formData,{
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
                      setInputData({
                        serviceName : '',
                        title:'',
                        image : '',
                        description : ''
                        
                      });
                      setFormStatus("Submit Successfully.");
                      //localStorage.clear();
                    //   localStorage.setItem('name', inputData.name);
                    //   localStorage.setItem('title', inputData.title);
                    //   localStorage.setItem('companyname', inputData.companyname);
                    //   localStorage.setItem('contactno', inputData.contactno);
                    //   localStorage.setItem('about', inputData.about);
                    //   localStorage.setItem('location', inputData.location);
                    //   setProfileData({
                    //     companyname : inputData.companyname,
                    //     title : inputData.title,
                    //     name : inputData.name,     
                    //     contactno : inputData.contactno ? inputData.contactno : '',
                    //     about : inputData.about ? inputData.about : '',
                    //     location : inputData.location ? inputData.location : '',

                    // });

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
        // inputData.userid = localStorage && localStorage.userid ? localStorage.userid : '';
      //   axios.post(`https://smca.ezrankings.in/dashboard/add-report.php`,{
      //     method: 'POST',
      //     body: formData,
      // })
      //     .then(res => {
      //         const data = res.data;
      //         if(res &&  res.data && res.data.error && res.data.error.length > 0){
      //             setFormStatus(res.data.error);
      //             setCloseIcon(true);
      //         }else if(res &&  res.data && res.data.msg && res.data.msg.length > 0){
      //                 //Router.push('/thankyou')
      //                 setFormStatus("Report added successfully.");
      //                 //localStorage.clear();
      //                 setInputData({
      //                   serviceName : '',
      //                   dwlUrl:'',
      //                   projectUrl : '',
      //                   planOption : '',
      //                   billingAmt : '',
      //                   startDate : '',
      //                   reportingDate : '',
      //                   paymentStatus : '',
      //                   projectStatus : '',
      //                   userAssign: ''
      //               });

      //                 setCloseIcon(true);
      //                 setSubmitBtn({
      //                   padding: '1rem 0rem',
      //                   display: 'block',
      //                   color: '#46c737'
      //                 })
      //               }
    
      //   })
      //   .catch(err => {
      //    })
      // try {
      //   console.log('Imageccc uploaded successfully.',formData);

      //   const response =  fetch('https://smca.ezrankings.in/dashboard/add-learning.php', {
      //     method: 'POST',
      //     body: formData,
      //   })
      //   //  .then(res => {
      //       if (response.ok) {
      //           const getData =  response.json();
      //           //setResponseMessage(data.filename);
      //           console.log('Image uploaded successfully.');
      //           console.log('Image uploaded successfully.',getData);
      //           localStorage.setItem('logo', getData.filename);
      //           setProfileData({
      //             logo : getData.filename,
      //             image : localStorage.image ? localStorage.image : ''
      //           })
  
      //         } else {
      //           console.log('Image upload failed.');
      //         }
      //   // });


      // } catch (error) {
      //   console.error('Error uploading image:', error);
      // }      
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
        if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
            setSideBarAccess({
                users : true
            })
        }
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
            <title>Reseller Resource</title>
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
                        Add New Learning Resource
                    </h2>
                </div>
                <div className="intro-y box mt-5 add-new-report">
                    <div className="border-slate-200/60 dark:border-darkmode-400">
                        <div className="font-medium text-base">Resources</div>
                        {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i className="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                        <form onSubmit={onSubmit}>                        
                        <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                            <div className="intro-y col-span-12 sm:col-span-6">
                                <label htmlFor="input-wizard-1" className="form-label">Title</label>
                                <input type="text" className="form-control" placeholder="abc" onChange={inputChangeData} name="title" value={inputData.title}/>
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-6">
                              <label htmlFor="input-wizard-4" className="form-label">Service Name</label>
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
                            <div className="intro-y col-span-12 sm:col-span-12">
                                <label htmlFor="input-wizard-2" className="form-label">Description</label>
                                <textarea type="text" rows="5" className="form-control" placeholder="Write Something Here......"onChange={inputChangeData} name="description" value={inputData.description}></textarea>
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-12">
                                <label htmlFor="input-wizard-2" className="form-label">Featured Image</label>
                                <input name="file" type="file" className="form-control" onChange={handleFileChange}/> 
                            </div>                            
                            </div>
                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                <button className="btn btn-primary w-24 ml-2">Submit</button>
                            </div>
                            </form>
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddResource