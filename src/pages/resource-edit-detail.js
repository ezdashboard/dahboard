import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import axios from 'axios';
import Router from 'next/router'
import MobileSideBar from './components/MobileSideBar';

export default function ResourceDetail  (){
   const [bodyCsss, setBodyCss] = useState('py-5');
   const [closeIcon, setCloseIcon] = useState(false)
   const [submitBtn, setSubmitBtn] = useState({})
   const [msg, setFormStatus] = useState('')
   const [selectedFile, setSelectedFile] = useState(null);
   const [modalCss, setModalCss] = useState('modal');
   const [styyyyy,setStyleCss] = useState('');
   const [delteId, setDeleteId] = useState(0);
   const setModalCssFun =(id)=>{
     setModalCss('modal show overflow-y-auto modal-overlap deleteModal');
     setDeleteId(id);
     setStyleCss('');
   }
   const setModalCssCloseFun =()=>{
     setStyleCss('none');
     setModalCss('');
     setDeleteId();
   }
   const [serviceStoreData, setServiceStoreData] = useState([]);

   const [inputData, setInputData] = useState({
      serviceName : '',
      id:null,
      serviceId:null,
      title:'',
      image : '',
      description : '',
      userid :''
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

const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);
const [resourceData, setResourceData]= useState({
   id : null,
   image: '',
   title : '',
   description : '',
   date:'',
   serviceName : ''
});
const [resourceId, setResourceId] = useState('');
const [loading, setLoading] = useState(false);
const submitCloseIcon = ()=>{
   setCloseIcon(false);
 }
const userDeleted = async (userId) => {
  setModalCssCloseFun();

  axios.get(`${process.env.API_BASE_URL}userDelete.php?userid=${userId}`)
  .then(res => {
      if(res && res.data && res.data.status){
        const updatedUserStoreData = userStoreData.filter((user) => user.id !== userId);
        setUserStoreData(updatedUserStoreData);
        alert('Deleted successfully.');
      }
})
.catch(err => {
 })
};
const inputChangeData =(event)=> {
   const {name, value} = event.target;
     setInputData((valuePre)=>{
    return{
      ...valuePre,
      [name]:value
    }
   });
   
   }
const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };   
const getResourceData = (id)=>{
   if(id){
      axios.get(`${process.env.API_BASE_URL}getlearning.php?url=${id}`)
      .then(res => {
         const data = res.data.map((item) => {
            return {
            id: item.id,
            serviceName: item.serviceName,
            title: item.title,
            description: item.description,
            image: item.image,
            url:item.id,
            create_at: item.create_at          
            }
      }
      )
      // setLearningData(data);
      setResourceData({
         id : res.data[0]['id'] ? res.data[0]['id'] : null,
         serviceId : res.data[0]['serviceId'] ? res.data[0]['serviceId'] : null,
         image: res.data[0]['image'] ? res.data[0]['image'] : null,
         title : res.data[0]['title'] ? res.data[0]['title'] : null,
         description : res.data[0]['description'] ? res.data[0]['description'] : null,
         date : res.data[0]['date'] ? res.data[0]['date'] : null,
         serviceName : res.data[0]['serviceName'] ? res.data[0]['serviceName'] : null
      })
      setInputData({
         id : res.data[0]['id'] ? res.data[0]['id'] : null,
         serviceId : res.data[0]['serviceId'] ? res.data[0]['serviceId'] : null,
         serviceName : res.data[0]['serviceName'] ? res.data[0]['serviceName'] : null,
         title: res.data[0]['title'] ? res.data[0]['title'] : null,
         image :  res.data[0]['image'] ? res.data[0]['image'] : null,
         description : res.data[0]['description'] ? res.data[0]['description'] : null,
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
   }else if(!inputData.title){
      setFormStatus("Title can not be blank.")
      setCloseIcon(true);       
   }else if(!inputData.serviceName){
     setFormStatus("Please select Service name.")
     setCloseIcon(true);   
   }else if(!inputData.description){
     setFormStatus("Description can not be blank.")
     setCloseIcon(true);                   
   }else if(!selectedFile && !inputData.image){  
     setFormStatus("Featured Image can not be blank.")
     setCloseIcon(true);                                          
   }else{
     formData.append('title', inputData.title);
     formData.append('serviceName', inputData.serviceName);
     formData.append('description', inputData.description);
     formData.append('id', inputData.id);
     if(selectedFile){
      formData.append('image', selectedFile);
     }
     formData.append('userid', localStorage && localStorage.userid ? localStorage.userid : '');
     axios.post(`${process.env.API_BASE_URL}edit-learning.php`,formData,{
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
     // inputData.userid = localStorage && localStorage.userid ? localStorage.userid : '';
   //   axios.post(`https://reseller.ezrankings.in/dashboard/add-report.php`,{
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

   //   const response =  fetch('https://reseller.ezrankings.in/dashboard/add-learning.php', {
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
const deleteData = async (userId)=>{
  // localStorage.removeItem("resourceId");
  // if(!localStorage.resourceId){
  //     localStorage.setItem("resourceId", redir);
  //     if(toRedir == 'detail'){
  //       Router.push('/resource-detail');
  //     }else if(toRedir == 'edit'){
  //       Router.push('/resource-edit-detail');
  //     }
  // }
  setModalCssCloseFun();
  axios.get(`${process.env.API_BASE_URL}leariningDelte.php?dlt=${resourceId}`)
  .then(res => {
    if(res && res.data && res.data.status){
        localStorage.removeItem("resourceId");
        alert('delete Successfuuly.');
        Router.push('/learning-resources');
    }
  // setServiceStoreData(data);
})
.catch(err => {
 })
}
 const getServiceData = async () => {
     axios.get(`${process.env.API_BASE_URL}services.php`)
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
    if(localStorage.resourceId){
      setResourceId(localStorage.resourceId);
    }
    getResourceData(localStorage.resourceId);
    getServiceData();
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
      <title>Edit Learning Resource</title>
      <link rel="dns-prefetch" href="//developers.google.com"/>
      <link rel="dns-prefetch" href="//maps.googleapis.com"/>
      <script
      // you might need to get a newer version
      src="https://kit.fontawesome.com/fbadad80a0.js"
      crossOrigin="anonymous"
    ></script>
      <script src="https://reseller.ezrankings.in/dashboard/js/markerclusterer.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
      <script src="https://reseller.ezrankings.in/dashboard/js/app.js"></script>
      <script src="https://reseller.ezrankings.in/dashboard/js/map.js"></script>
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
                       Edit Learning Resource
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
                              <label htmlFor="input-wizard-4" className="form-label">Service Name{}</label>
                              <select className="form-select" onChange={inputChangeData} name="serviceName">
                               {inputData.serviceName == resourceData.serviceName && <option value={inputData.serviceName}>{inputData.serviceId}</option>}
                                 {serviceStoreData && serviceStoreData.length > 0 && serviceStoreData.map((service, s)=>{
                                     return(
                                    <>
                                    <option key={s} value={service.id} >{service.name}</option>
                                    </>
                                )
                            })}
                              </select> 
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-12">
                                <label htmlFor="input-wizard-2" className="form-label">Description</label>
                                <textarea type="text" rows="12" className="form-control" placeholder="Write Something Here......"onChange={inputChangeData} name="description" value={inputData.description}></textarea>
                            </div>
                            <div className="intro-y col-span-12 sm:col-span-12">
                                <label htmlFor="input-wizard-2" className="form-label">Featured Image</label>
                                <img src={inputData.image} /><br />
                                <input name="file" type="file" className="form-control" onChange={handleFileChange}/> 
                            </div>                            
                            </div>

                            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                                <a className="delete-btn" onClick={()=>{
                                        setModalCssFun(inputData.id)
                                      }}>Delete</a>
                                <button className="btn btn-primary w-24 ml-2">Update</button>
                            </div>
                            </form>
                     </div>
                </div>
                <div id="delete-confirmation-modal" style={{display:styyyyy}}className={modalCss} tabIndex="-1" aria-hidden="true">
                  <div className="modal-dialog">
                      <div className="modal-content">
                          <div className="modal-body p-0">
                              <div className="p-5 text-center">
                                  <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                  <div className="text-3xl mt-5">Are you sure?</div>
                                  <div className="text-slate-500 mt-2">
                                      Do you really want to delete these records? 
                                      <br />
                                      This process cannot be undone.
                                  </div>
                              </div>
                              <div className="px-5 pb-8 text-center">
                                  <button type="button" onClick={setModalCssCloseFun} className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                  <a href="#" onClick={()=>deleteData(delteId)} className="btn btn-danger w-24">Delete</a>
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



