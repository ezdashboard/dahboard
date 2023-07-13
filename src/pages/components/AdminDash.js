import SideBar from "./SideBar"
import TopHeader from "./TopHeade"

const AdminDash = ()=>{
    return(
        <>
    <div className="flex mt-[4.7rem] md:mt-0">
    <SideBar/>
          <div className="content">
            <TopHeader />
              <div className="admin-dash mt-5">
                  <div className="#">
                     <div className="report-box zoom-in card">
                              <div className="box p-5">
                                  <div className="flex">
                                      <i className="far fa-tasks"></i>
                                  </div>
                                  <div className="text-3xl font-medium leading-8"><b>200+</b></div>
                                  <div className="text-base text-slate-500 mt-1">Total Projects</div>
                              </div>
                          </div>
                  </div>
                   <div className="#">
                     <div className="report-box zoom-in card">
                              <div className="box p-5">
                                  <div className="flex">
                                      <i className="far fa-users"></i>
                                  </div>
                                  <div className="text-3xl font-medium leading-8"><b>200+</b></div>
                                  <div className="text-base text-slate-500 mt-1">Total Users</div>
                              </div>
                          </div>
                  </div>
                   <div className="#">
                       <div className="report-box zoom-in card">
                          <div className="box p-5">
                              <div className="flex">
                                 <i className="far fa-sack-dollar"></i>
                              </div>
                              <div className="text-3xl font-medium leading-8"><b>$5000</b></div>
                              <div className="text-base text-slate-500 mt-1">Total Cost</div>
                          </div>
                      </div>
                  </div>
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
              </div> 
              
              <div className="newsletter-box">
                  <div className="intro-y box lg:mt-5" bis_skin_checked="1">
                  <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400" bis_skin_checked="1">
                      <h2 className="font-medium text-base mr-auto">Add New</h2>
                  </div>
                  <div className="p-5" bis_skin_checked="1">
                      <div className="mt-3" bis_skin_checked="1">
                          <textarea id="change-password-form-3" rows="5" type="password" className="form-control" placeholder="Write Something Here...."></textarea>
                      </div>
                      <button type="button" className="btn btn-primary mt-4">Save</button>
                  </div>
              </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3" bis_skin_checked="1">
                          <div className="intro-x flex items-center h-10" bis_skin_checked="1">
                              <h2 className="text-lg font-medium truncate mr-auto">Our Newsletter</h2>
                              <button data-carousel="important-notes" data-target="prev" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="chevron-left" data-lucide="chevron-left" className="lucide lucide-chevron-left w-4 h-4"><polyline points="15 18 9 12 15 6"></polyline></svg>
                              </button>
                              <button data-carousel="important-notes" data-target="next" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" icon-name="chevron-right" data-lucide="chevron-right" className="lucide lucide-chevron-right w-4 h-4"><polyline points="9 18 15 12 9 6"></polyline></svg>
                              </button>
                          </div>
                          <div className="mt-5 intro-x" bis_skin_checked="1">
                              <div className="box zoom-in" bis_skin_checked="1">
                                  <div className="tns-outer" id="important-notes-ow" bis_skin_checked="1"><button type="button" data-action="stop"><span className="tns-visually-hidden">stop animation</span>stop</button><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true" bis_skin_checked="1">slide <span className="current">2</span>  of 3</div><div id="important-notes-mw" className="tns-ovh" bis_skin_checked="1"><div className="tns-inner" id="important-notes-iw" bis_skin_checked="1"><div className="tiny-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal news01" id="important-notes"  bis_skin_checked="1"><div className="p-5 tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1" bis_skin_checked="1">
                                          <div className="text-base font-medium truncate" bis_skin_checked="1">Lorem Ipsum is simply dummy text</div>
                                          <div className="text-slate-400 mt-1" bis_skin_checked="1">20 Hours ago</div>
                                          <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                          <div className="font-medium flex mt-5" bis_skin_checked="1">
                                              <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                              <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                          </div>
                                      </div>
                                      <div className="p-5 tns-item tns-slide-active" id="important-notes-item0" bis_skin_checked="1">
                                          <div className="text-base font-medium truncate" bis_skin_checked="1">Lorem Ipsum is simply dummy text</div>
                                          <div className="text-slate-400 mt-1" bis_skin_checked="1">20 Hours ago</div>
                                          <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                          <div className="font-medium flex mt-5" bis_skin_checked="1">
                                              <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                              <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                          </div>
                                      </div>
                                      <div className="p-5 tns-item" id="important-notes-item1" bis_skin_checked="1" aria-hidden="true" tabindex="-1">
                                          <div className="text-base font-medium truncate" bis_skin_checked="1">Lorem Ipsum is simply dummy text</div>
                                          <div className="text-slate-400 mt-1" bis_skin_checked="1">20 Hours ago</div>
                                          <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                          <div className="font-medium flex mt-5" bis_skin_checked="1">
                                              <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                              <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                          </div>
                                      </div>
                                      <div className="p-5 tns-item" id="important-notes-item2" bis_skin_checked="1" aria-hidden="true" tabindex="-1">
                                          <div className="text-base font-medium truncate" bis_skin_checked="1">Lorem Ipsum is simply dummy text</div>
                                          <div className="text-slate-400 mt-1" bis_skin_checked="1">20 Hours ago</div>
                                          <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                          <div className="font-medium flex mt-5" bis_skin_checked="1">
                                              <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                              <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                          </div>
                                      </div>
                                  <div className="p-5 tns-item tns-slide-cloned" bis_skin_checked="1" aria-hidden="true" tabindex="-1">
                                          <div className="text-base font-medium truncate" bis_skin_checked="1">Lorem Ipsum is simply dummy text</div>
                                          <div className="text-slate-400 mt-1" bis_skin_checked="1">20 Hours ago</div>
                                          <div className="text-slate-500 text-justify mt-1" bis_skin_checked="1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                          <div className="font-medium flex mt-5" bis_skin_checked="1">
                                              <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                              <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                          </div>
                                      </div></div></div></div></div>
                              </div>
                          </div>
                      </div>
          </div>  
     </div>        
        </>
    )
}

export default AdminDash