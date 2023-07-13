import SideBar from "./SideBar"
import TopHeader from "./TopHeade"

const AdminDash = ()=>{
    return(
        <>
    <div className="flex mt-[4.7rem] md:mt-0">
    <SideBar/>
          <div className="content">
            <TopHeader />

          </div>  
     </div>        
        </>
    )
}

export default AdminDash