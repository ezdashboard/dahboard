import React from "react";
import NewsLetter from "./NewsLetter";

const AdminDasbboard=()=>{
    return(
        <>
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
            <NewsLetter />                     
        </>
    )
}
export default AdminDasbboard;