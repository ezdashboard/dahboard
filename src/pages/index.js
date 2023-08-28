import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Head from 'next/head'
import Router from 'next/router'

 const Login = ()=> {

  const [closeIcon, setCloseIcon] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [msg, setFormStatus] = useState('')
  const [inputData, setInputData] = useState({
    email:"",
    type: null,
    password:""
  })
  const [submitBtn, setSubmitBtn] = useState({})
  const inputChangeData =(event)=> {

    const {name, value} = event.target;
    setInputData((valuePre)=>{
   return{
     ...valuePre,
     [name]:value
   }
 })}

  useEffect(() => {
    console
    if(localStorage.userid){
        Router.push('/profile');
    }
    }, []); 
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
    if(inputData && inputData.email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(inputData.email));

    }
    if(!inputData.email){
      setFormStatus("Email can not be blank.")
      setCloseIcon(true);
    // }else if(!isValidEmail){
    //   setFormStatus("Invalid Email.")
    //   setCloseIcon(true);
  }else if(!inputData.password){
      setFormStatus("Password can not be blank.")
      setCloseIcon(true);  
    }else{
      axios.post(`${process.env.API_BASE_URL}login.php`,inputData,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
            const data = res.data;
            if(res &&  res.data && res.data.error && res.data.error.length > 0){
                setFormStatus( res.data.error);
                setCloseIcon(true);
            }else{
                if(data){
                    setInputData({
                      email:"",
                      password:""
                    })
                    setFormStatus("");
                    //setCloseIcon(true);
                    setSubmitBtn({
                      padding: '1rem 0rem',
                      display: 'block',
                      color: '#46c737'
                    })
                    if(data.userData){
                        localStorage.clear();
                        localStorage.setItem("companyname", data.userData[0]['companyname']);
                        localStorage.setItem("title", data.userData[0]['title']);
                        localStorage.setItem("name", data.userData[0]['name']);
                        localStorage.setItem("email", data.userData[0]['email']);
                        localStorage.setItem("logo", data.userData[0]['logo']);
                        localStorage.setItem("userid", data.userData[0]['userid']);
                        localStorage.setItem("tokenAuth", data.userData[0]['tokenAuth'].token);
                        localStorage.setItem("image", data.userData[0]['image']); 
                        localStorage.setItem("type", data.userData[0]['type']); 
                        localStorage.setItem("contactno", data.userData[0]['contactno']);
                        localStorage.setItem("about", data.userData[0]['about']);  
                        localStorage.setItem("location", data.userData[0]['location']);
                        Router.push('/profile')
                    }
                  }
            }

      })
      .catch(err => {
       })
    }
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link href="#" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <title>Reseller Login</title>
        <link rel="dns-prefetch" href="//developers.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet"/>
        <link href="https://reseller.ezrankings.in//dashboard/css/style.css" rel="stylesheet" />
      </Head>      
      <div className="login-page">
        <section>
          <div className="login-design">
            <div className="left">
                {/* <div className="logo-icon">
                    <img src="https://reseller.ezrankings.in//dashboard/images/avtar.png" width="100px;" />
                </div> */}
                <div className="framepic">
                    <img src="https://reseller.ezrankings.in//dashboard/images/Frame.png" width="60%" />
                    <h2>A few more clicks to sign in to your account.</h2>
                    <p>Manage all your projects in one place</p>
                </div>
            </div>
            <div className="right">
                <div className="login-form">
                    <div className="login-head">
                        <h3 className="text-center">Sign In{}</h3>
                        <div className="col-md-12">
                        {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i className="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                      </div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="intro-x mt-8">
                            <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="Email" onChange={inputChangeData} value={inputData.email} name="email"/>
                            <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" onChange={inputChangeData} value={inputData.password} name="password"/>
                        </div>
                        <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                            <div className="flex items-center mr-auto">
                                <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                                <label className="cursor-pointer select-none" htmlFor="remember-me">Remember me</label>
                            </div>
                            <a href="">Forgot Password?</a>
                        </div>
                        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                            <button className="btn btn-primary py-3 px-4 w-full  xl:mr-3 align-top">Login</button>

                        </div>
                        <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                            By signin up, you agree to our <a className="text-primary dark:text-slate-200" href="">Terms and Conditions</a> & <a className="text-primary dark:text-slate-200" href="">Privacy Policy</a>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login;