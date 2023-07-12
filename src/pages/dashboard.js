import React, {useState, useEffect} from 'react'
import Head from 'next/head'

// import routes from './routes';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import UserDashboard from './components/UserDashboard'
import AdminDasbboard from './components/AdminDasbboard'

 const DashBoard = ()=> {
     const [dasbboardType, setDashboardType] = useState('');
    useEffect(() => {

        if(!localStorage.userid){
            Router.push('/login');
        }else{
        if(localStorage && localStorage.length > 0 && localStorage.type){
            setDashboardType(localStorage.type);
        }
        }
        

        const timer = setTimeout(() => {
        const ctx = document.getElementById('myChart');
    
        if (ctx) {
          const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: [],
              datasets: [
                {
                  backgroundColor: ['#3498db', '#f1c40f', '#e74c3c'],
                  data: [50, 50, 50],
                },
              ],
            },
          });
        }

        'use strict';

        function applewatchgraph(box, value, _option) {
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
        
        // group 1
        applewatchgraph(document.querySelector('#group1 .graph1'), 70, {
            color: '#ff180e',
            autostart: true
        });
        applewatchgraph(document.querySelector('#group1 .graph2'), 55, {
            color: '#9bfe07',
            autostart: true
        });
        applewatchgraph(document.querySelector('#group1 .graph3'), 26, {
            color: '#09daff',
            autostart: true
        });
        
        // group 2
        var graph21 = applewatchgraph(document.querySelector('#group2 .graph1'), 70, {
                color: '#ff180e',
                autostart: false
            });
        var graph22 = applewatchgraph(document.querySelector('#group2 .graph2'), 55, {
                color: '#9bfe07',
                autostart: false
            });
        var graph23 = applewatchgraph(document.querySelector('#group2 .graph3'), 26, {
                color: '#09daff',
                autostart: false
            });
            
            if(graph21 && graph21.start){
                
                setTimeout(graph21.start, 2000);

            }
            if(graph21 && graph22.start){
                setTimeout(graph22.start, 2500);

            }
            if(graph23 && graph23.start){
                setTimeout(graph23.start, 3000);

            }

        }, 1000);
        return () => clearTimeout(timer);
      }, []);
  const [faqData, setFaqData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [readMoreClass, setReadMoreClass] = useState('hide');
  const updateContent=()=>{
   if(!readMore){
      setReadMore(true);
   }else{
      setReadMore(false);
   }
  }

  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);
  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
  return (
    <>
  <Head>
    <meta charset="utf-8" />
    <link href="#" rel="shortcut icon"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content=""/>
    <title>Reseller Dashboard</title>
    <link rel="dns-prefetch" href="//developers.google.com"/>
    <link rel="dns-prefetch" href="//maps.googleapis.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap" rel="stylesheet" crossOrigin="anonymous" defer/>
    <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet" crossOrigin="anonymous" defer/>
    <script
    // you might need to get a newer version
    src="https://kit.fontawesome.com/fbadad80a0.js"
    crossOrigin="anonymous"
    defer
  ></script>    
    <script src="http://122.160.48.132/dev/html/reseller-dashboard/js/markerclusterer.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
    <script src="http://122.160.48.132/dev/html/reseller-dashboard/js/app.js"></script>
    <script src="http://122.160.48.132/dev/html/reseller-dashboard/js/map.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>  
    <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
  </Head>
      
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar />
        <div className="content">
        <TopHeader />
        {dasbboardType && dasbboardType == 'user' && <UserDashboard />}
        {dasbboardType && dasbboardType == 'admin' && <AdminDasbboard />}
        </div>  
      </div>
    </>
  )
}


export default DashBoard;