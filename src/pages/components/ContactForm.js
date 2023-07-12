import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Router from 'next/router'

const ContactForm = () => {
  const [closeIcon, setCloseIcon] = useState(false)
  const [msg, setFormStatus] = useState('')
  const [inputData, setInputData] = useState({
    name:"",
    email:"",
    type: 2,
    message:""
  })
  const [submitBtn, setSubmitBtn] = useState({})
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
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitBtn({
      padding: '1rem 0rem',
      display: 'block',
      color: 'red'
    })
    if(!inputData.name){
      setFormStatus("Name can not be blank.");
      setCloseIcon(true);
    }else if(!inputData.email){
      setFormStatus("Email can not be blank.")
      setCloseIcon(true);
    }else if(!inputData.message){
      setFormStatus("Message can not be blank.")
      setCloseIcon(true);

    }else{
      axios.post(`https://smca.ezrankings.in/react-backend/contacts.php`,inputData,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(res => {
            const data = res.data;
            if(data){
              setInputData({
                name:"",
                email:"",
                message:""
              })
              Router.push('/thankyou')
              setFormStatus("Submit Successfully.");
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
    }
  }
  return (
        <>

          <form onSubmit={onSubmit} className="form-inline">
             <div className="row">
             <div className="col-md-12">
                {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i class="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                </div>
                <div className="col-md-6">
                   <div className="form-group">
                      <input type="text" className="form-control contactForm" onChange={inputChangeData} value={inputData.name} name="name" placeholder="Name"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="form-group">
                      <input type="email" className="form-control contactForm" onChange={inputChangeData} value={inputData.email} name="email" placeholder="Email"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="form-group">
                      <input type="text" className="form-control contactForm"  onChange={inputChangeData} value={inputData.message} name="message"  placeholder="Message"/>
                   </div>
                </div>
                <div className="col-md-6">
                   <div className="form-group mt-2">
                   <button className="btn-border2" type="submit">Send</button>
                   </div>
                </div>
             </div>
          </form>
          </>
  )
}
export default ContactForm
