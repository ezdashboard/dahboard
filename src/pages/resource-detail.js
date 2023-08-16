import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import axios from 'axios';
import MobileSideBar from './components/MobileSideBar';

export default function ResourceDetail  (){
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
         image: res.data[0]['image'] ? res.data[0]['image'] : null,
         title : res.data[0]['title'] ? res.data[0]['title'] : null,
         description : res.data[0]['description'] ? res.data[0]['description'] : null,
         date : res.data[0]['date'] ? res.data[0]['date'] : null,
         serviceName : res.data[0]['serviceName'] ? res.data[0]['serviceName'] : null
      })
      setLoading(true);
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
    if(localStorage.resourceId){
      setResourceId(localStorage.resourceId);
    }
    getResourceData(localStorage.resourceId);
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
         <title>Reseller Detail</title>
         <link rel="dns-prefetch" href="//developers.google.com"/>
         <link rel="dns-prefetch" href="//maps.googleapis.com"/>
         <script
         // you might need to get a newer version
         src="https://kit.fontawesome.com/fbadad80a0.js"
         crossOrigin="anonymous"
      ></script>
         <script src="https://reseller.ezrankings.in//dashboard/js/markerclusterer.js"></script>
         <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
         <script src="https://reseller.ezrankings.in//dashboard/js/app.js"></script>
         <script src="https://reseller.ezrankings.in//dashboard/js/map.js"></script>
         <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>  
         <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
      </Head>
      <MobileSideBar />
      <div className="flex mt-[4.7rem] md:mt-0">
         <SideBar logo={profileData.logo}/>
         <div className="content">
            <TopHeader title={profileData.companyname} img={profileData.image}/>
   { loading &&    
         <div className="intro-y news p-5 box mt-8">
                     <h2 className="intro-y font-medium text-xl sm:text-2xl">
                        {resourceData.title}
                     </h2>
                     <div className="intro-y text-slate-600 dark:text-slate-500 mt-3 text-xs sm:text-sm"> {resourceData.date} <span className="mx-1">•</span> <a className="text-primary" href="#">{resourceData.serviceName}</a> <span className="mx-1">•</span> New Blog </div>
                     <div className="intro-y mt-6">
                        <div className="image-fit resimg">
                              <img alt="#" className="rounded-md" src={resourceData.image} />
                        </div>
                     </div>
                     <div className="intro-y text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: resourceData.description}} />
         </div>}
         {!loading &&<div>
         <h1 style={{textAlign:"center",fontSize:"35px",padding:"8rem"}}>Loading....</h1>   
         </div>}
         </div>
      </div>
    </>
 )
}



