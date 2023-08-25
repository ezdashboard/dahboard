import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios';
import SideBar from './components/SideBar';
import NewsLetter from './components/NewsLetter';
import TopHeader from './components/TopHeade';
import UserDashboard from './components/UserDashboard'
import AdminDasbboard from './components/AdminDasbboard'
import MobileSideBar from './components/MobileSideBar';

 const DashBoard = ()=> {
     const [dasbboardType, setDashboardType] = useState('');
     const [loading, setLoading] = useState(false);
     const [dashData, setDashData] = useState({
      total_price:0,
      total_project:0,
      total_keywords:0,
      total_users:0,
      project: 0,
      price: 0,
      keyword: 0      
     })
     const [pricePer, setPricePer] = useState(0);
     const [projectPer, setProjectPer] = useState(0);
     const [keywordPer, setKeywordPer] = useState(0);
     const getDashBoardData = ()=>{
      axios.get(`${process.env.API_BASE_URL}dashboard.php?user=${localStorage.userid}`)
      .then(res => {
          const getData = res.data && res.data.data && res.data.data.length > 0 && res.data.data.map((item) => {
            return {
              
              total_price: item.total_price,
              total_project: item.total_project,
              total_users: item.total_users,
              total_keywords: item.total_keywords,
              project: item.project,
              graph2: item.graph2,
              graph2_rem: item.graph2_rem,
              color: item.color,              
              price: item.price,
              keyword: item.keyword              
            }
        }
      )
      setDashData({
        total_price: getData[0].total_price,
        total_project: getData[0].total_project,
        total_users: getData[0].total_users,
        total_keywords: getData[0].total_keywords ,
        project: getData[0].project,
        price: getData[0].price,
        keyword: getData[0].keyword 
      });
      setPricePer(getData[0].price);
      setProjectPer(getData[0].project);
      setKeywordPer(getData[0].keyword);
      localStorage.setItem("price", getData[0].price);
      localStorage.setItem("project", getData[0].project);
      localStorage.setItem("keyword", getData[0].keyword); 
      localStorage.setItem("graph2", getData[0].graph2);
      localStorage.setItem("graph2_rem", getData[0].graph2_rem);
      localStorage.setItem("color", getData[0].color);      
      setLoading(true);

      // console.log(dashData, 'ttt');
    })
    .catch(err => {
     })      
     }
 
     'use strict';

     const applewatchgraph =(box, value, _option)=> {
       //console.log(value,"yash",projectPer);
      // localStorage.setItem("priceT", 70);

       if(value && value=='price'){
         value = localStorage.price;
       }
       if(value && value=='keyword'){
        value = localStorage.keyword;
      }
      if(value && value=='project'){
        value = localStorage.project;
      }             

       //console.log(value,"yash23",projectPer);

         if(box){
             var
             canvas = document.createElement('canvas'),
             context = canvas.getContext('2d'),
             boxsize = box.offsetWidth,
             option = _option || {},
             linewidth = option.linewidth || 24,
             barcolor = option.color || '#fff',
             noanimation = option.noanimation || false,
             from = option.from || 0,
             to = value,
             now = {percent: from},
             nowanimating = false,
             animateduration = 1,
             animateoptions = {ease: 'easeInOutCubic', onUpdate: onupdate, onComplete: onend};
             canvas.width = canvas.height = boxsize;
             box.appendChild(canvas);
             context.lineWidth = linewidth;
             context.lineCap = 'round';
             context.strokeStyle = barcolor;
             if (noanimation) {
                 option.autostart = true;
             }
             option.autostart ? start() : reset();
             function ready() {
                 draw(from);
             }
             function start() {
                 if (!nowanimating) {
                     now.percent = noanimation ? value : from;
                     if (now.percent == to) {
                         draw(now.percent);
                     } else {
                         nowanimating = true;
                         animateoptions.percent = to;
                         TweenMax.to(now, animateduration, animateoptions);
                     }
                 }
             }
             function onupdate() {
                 draw(now.percent);
             }
     
             function onend() {
                 nowanimating = false;
             }
     
             function draw(percent) {
                 var boxhalfsize = boxsize/2;
                 percent = Math.max(percent, 0.005);
                 context.clearRect(0, 0, boxsize, boxsize);
                 // bg
                 context.beginPath();
                 context.globalAlpha = 0.2;
                 context.arc(boxhalfsize, boxhalfsize, boxhalfsize-linewidth/2, 0, 2*Math.PI);
                 context.stroke();
                 // bar
                 context.beginPath();
                 context.arc(boxhalfsize, boxhalfsize, boxhalfsize-linewidth/2, 0-Math.PI/2, (2*Math.PI)*percent/100-Math.PI/2);
                 context.globalAlpha = 1;
                 context.stroke();
             }
             function reset() {
                 draw(from);
             }
             return {
                 start: start,
                 reset: reset
             }
         }
     }     
    useEffect(() => {
        if(!localStorage.userid){
            Router.push('/login');
        }else{
        if(localStorage && localStorage.length > 0 && localStorage.type){
            setDashboardType(localStorage.type);
            getDashBoardData();
        }
      }
       
      
        const timer = setTimeout(() => {

          applewatchgraph(document.querySelector('#group1 .graph1'), 'price', {
            color: '#ff180e',
            autostart: true
        });
        applewatchgraph(document.querySelector('#group1 .graph2'), 'keyword', {
          color: '#9bfe07',
          autostart: true
      });
      applewatchgraph(document.querySelector('#group1 .graph3'), 'project', {
          color: '#09daff',
          autostart: true
      });
    //} 
        // group 2
        let  ctx = document.getElementById("myChart");
         ctx = ctx ? ctx.getContext('2d'):'';
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: [localStorage.color,"gray"],
            datasets: [{
              backgroundColor: [
                localStorage.color,
                "#f5f5f5",
              ],
              data: [localStorage.graph2, 100-localStorage.graph2]
            }]
          }
        });
        }, 2000);
        return () => clearTimeout(timer);
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
        src="https://kit.fontawesome.com/fbadad80a0.js"
        crossOrigin="anonymous"
      ></script>    
        <script src="https://reseller.ezrankings.in//dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        
        <script src="https://reseller.ezrankings.in//dashboard/js/map.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>  
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
      </Head>
      <MobileSideBar />
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar />
        <div className="content">
        <TopHeader />
        {dasbboardType && (dasbboardType == 'user') && <UserDashboard data={dashData} />}
        {dasbboardType && (dasbboardType == 'admin' || dasbboardType == 'Manager') && <AdminDasbboard data={dashData} type={dasbboardType}/>}
        <NewsLetter />     
        </div>  
      </div>
    </>
  )
}


export default DashBoard;