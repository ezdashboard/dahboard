import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router'


 const Login = ()=> {

  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);
  const [bodyCsss, setBodyCss] = useState('login');
  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
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
 });

  }

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
      axios.post(`https://reseller.ezrankings.in/dashboard/login.php`,inputData,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(res => {
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
                    //Router.push('/thankyou')
                    setFormStatus("");
                    //setCloseIcon(true);
                    setSubmitBtn({
                      padding: '1rem 0rem',
                      display: 'block',
                      color: '#46c737'
                    })
                    let arryStore;
                    if(data.userData){
                        arryStore = data.userData[0];
                        localStorage.clear();
                            localStorage.setItem("companyname", data.userData[0]['companyname']);
                            localStorage.setItem("title", data.userData[0]['title']);
                            localStorage.setItem("name", data.userData[0]['name']);
                            localStorage.setItem("email", data.userData[0]['email']);
                            localStorage.setItem("logo", data.userData[0]['logo']);
                            localStorage.setItem("userid", data.userData[0]['userid']);
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
      {/* <div className="container sm:px-10 login" >
        <div className="block xl:grid grid-cols-2 gap-4">
            <div className="hidden xl:flex flex-col min-h-screen">
                <a href="" className="-intro-x flex items-center pt-5">
                   <img alt="" src="https://reseller.ezrankings.in//dashboard/images/login.png" className="WTlogo"/>
                </a>
                <div className="my-auto">
                    <img alt="" className="-intro-x w-1/2 -mt-16" src="https://reseller.ezrankings.in//dashboard/images/Frame.png" />
                    <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">A few more clicks to <br /> sign in to your account.</div>
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Manage all your e-commerce accounts in one place</div>
                </div>
            </div>
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
              <form onSubmit={onSubmit}>
                  <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                      <h2 className="intro-x font-bold text-xxl xl:text-3xl text-center xl:text-left">Sign In</h2>
                      <div className="col-md-12">
                        {closeIcon  ?<span style={submitBtn}>{msg}  <span onClick={submitCloseIcon}><i className="fa fa-times" aria-hidden="true"></i></span></span>: ""}
                      </div>
                      <div className="intro-x mt-2 text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                      <div className="intro-x mt-8">
                          <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="Email" onChange={inputChangeData} value={inputData.email} name="email"/>
                          <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" onChange={inputChangeData} value={inputData.password} name="password"/>
                      </div>
                      <div className="intro-x flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm mt-4">
                          <div className="flex items-center mr-auto">
                              <input id="remember-me" type="checkbox" className="form-check-input border mr-2"/>
                              <label className="cursor-pointer select-none" htmlFor="remember-me">Remember me</label>
                          </div>
                          <a href="">Forgot Password?</a>
                      </div>
                      <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                          <button className="btn btn-primary py-3 px-4 w-full  xl:mr-3 align-top" type="submit">Login</button>
                        
                      </div>
                      <div className="intro-x mt-10 xl:mt-24 text-slate-600 dark:text-slate-500 text-center xl:text-left">
                          By signin up, yoou agree to our <a className="text-primary dark:text-slate-200" href="#">Terms and Conditions</a> & <a className="text-primary dark:text-slate-200" href="">Privacy Policy</a>
                      </div>
                  </div>
              </form>
            </div>
        </div>
      </div> */}

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