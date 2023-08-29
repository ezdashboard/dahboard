import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Head from 'next/head';

const NewsLetter = (props)=>{
const [newsData, setNewsData] = useState([]);
const [styyyyy,setStyleCss] = useState('');
const [delteId, setDeleteId] = useState(0);

const Dismiss=(newId)=>{
    const updatedNewsStoreData = newsData.filter((news) => news.id !== newId);
    setNewsData(updatedNewsStoreData);
}
const [modalCss, setModalCss] = useState('modal');
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
const userDeleted = async (newId) => {
    setModalCssCloseFun();

    axios.get(`${process.env.API_BASE_URL}newsDelete.php?newsId=${newId}`)
    .then(res => {
        if(res && res.data && res.data.status){
        //   const updatedUserStoreData = newsData.filter((user) => user.id !== userId);
        //   setNewsData(updatedUserStoreData);
          const updatedNewsStoreData = newsData.filter((news) => news.id !== newId);
          setNewsData(updatedNewsStoreData);
          alert('Deleted successfully.');
        }
  })
  .catch(err => {
   })
  };
const [loading, setLoading] = useState(false);
const NewsList = async (page) => {
    axios.get(`${process.env.API_BASE_URL}newsList.php`)
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
        {loading && <script src="https://reseller.ezrankings.in/dashboard/js/app.js"></script>}
        </Head>
        <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3" bis_skin_checked="1">
            <div className="intro-x flex items-center h-10" bis_skin_checked="1">
                <h2 className="text-lg font-medium truncate mr-auto">Our Newsletter</h2>
                <button data-carousel="important-notes" data-target="prev" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-left" data-lucide="chevron-left" className="lucide lucide-chevron-left w-4 h-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button data-carousel="important-notes" data-target="next" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-right" data-lucide="chevron-right" className="lucide lucide-chevron-right w-4 h-4">
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
                                            
                                                <div key={n} className={n==0 ? 'p-5 tns-item tns-slide-active' : 'p-5 tns-item'} id={'important-notes-item'+n} bis_skin_checked="1" aria-hidden="true" tabIndex="-1">
                                                    <div className="text-base font-medium truncate" bis_skin_checked="1">{newsI.title}</div>
                                                    <div className="text-slate-400 mt-1" bis_skin_checked="1">{newsI.time} ago</div>
                                                    <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">{newsI.content}</div>
                                                    <div className="font-medium btn-fle mt-5">
                                                        
                                                    {
                                                        props && props.userType && props.userType && props.userType == 'admin' &&
                                                        <button type="button" className="btn btn-secondary py-1 px-2"onClick={()=>{
                                                            setModalCssFun(newsI.id)
                                                        }}>Delete</button>
                                                    }
                                                        <button type="button" onClick={()=>Dismiss(newsI.id)} className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                    </div>
                                                </div>
                                            
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <a href="#" onClick={()=>userDeleted(delteId)} className="btn btn-danger w-24">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}
export default NewsLetter;