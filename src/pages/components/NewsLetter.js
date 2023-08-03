import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Head from 'next/head';

const NewsLetter = ()=>{
const [newsData, setNewsData] = useState([]);
const [loading, setLoading] = useState(false);
const NewsList = async (page) => {
    axios.get(`https://smca.ezrankings.in/dashboard/newsList.php`)
      .then(res => {
          const data = res.data.newsData.map((item) => {
            return {
              id: item.id,
              title: item.title,
              content: item.content,
              time: item.time,
              user: item.user,
            }
        }
      )
      setNewsData(data);
      setLoading(true);
    })
    .catch(err => {
     })
 }
 useEffect(() => {
    //setTimeout(function(){
        NewsList();
    //},5000)
   
    }, []);
    return (
        <>
        <Head>
        {loading && <script src="https://smca.ezrankings.in/dashboard/js/app.js"></script>}
        </Head>
        <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3" bis_skin_checked="1">
            <div className="intro-x flex items-center h-10" bis_skin_checked="1">
                <h2 className="text-lg font-medium truncate mr-auto">Our Newsletter</h2>
                <button data-carousel="important-notes" data-target="prev" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-left" data-lucide="chevron-left" className="lucide lucide-chevron-left w-4 h-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button data-carousel="important-notes" data-target="next" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-right" data-lucide="chevron-right" className="lucide lucide-chevron-right w-4 h-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
            <div className="mt-5 intro-x" bis_skin_checked="1">
                <div className="box zoom-in" bis_skin_checked="1">
                    <div className="tns-outer" id="important-notes-ow" bis_skin_checked="1">
                        <button type="button" data-action="stop"><span className="tns-visually-hidden">stop animation</span>stop</button>
                        <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true" bis_skin_checked="1">slide <span className="current">2</span>  of 3</div>
                        <div id="important-notes-mw" className="tns-ovh" bis_skin_checked="1">
                            <div className="tns-inner" id="important-notes-iw" bis_skin_checked="1">
                                <div className="tiny-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal news01" id="important-notes" bis_skin_checked="1">
                                    {newsData && newsData.length > 0 && newsData.map((newsI, n)=>{
                                        return(
                                            <> 
                                                <div key={n} className={n==0 ? 'p-5 tns-item tns-slide-active' : 'p-5 tns-item'} id={'important-notes-item'+n} bis_skin_checked="1" aria-hidden="true" tabIndex="-1">
                                                    <div className="text-base font-medium truncate" bis_skin_checked="1">{newsI.title}</div>
                                                    <div className="text-slate-400 mt-1" bis_skin_checked="1">{newsI.time} ago</div>
                                                    <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">{newsI.content}</div>
                                                    <div className="font-medium flex mt-5" bis_skin_checked="1">
                                                        <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                                        <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
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
export default NewsLetter;