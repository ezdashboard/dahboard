import React from 'react'

const AboutContent = (props) => {

  return (
    <>
      <section className="our-mission-sec">
         <div className="container">
            <h2 clsss="mission-title">Our Mission &<br/>
               Vision & Values
            </h2>
         </div>
         <div className="container">
         {props.aboutContentData && props.aboutContentData.length > 0 && props.aboutContentData.map((abtData ,b)=>(
           <span key={b}>
              {(b+1)%2==1 ?
                <div className="row">
                <div className="col-md-6">
                <div className="content-wrap "  >
                   <h3>{abtData.title}</h3>
                   <p>{abtData.description}</p>
                </div>
             </div>
             <div className="col-md-6">
                <div className="icon-wrap"  >
                   <figure>
                      <img src={abtData.image} alt={abtData.alt}/>
                   </figure>
                </div>
             </div>
             </div>
               :
            <div className="row">
            <div className="col-md-6">
               <div className="icon-wrap">
                  <figure>
                     <img src={abtData.image} alt={abtData.alt}/>
                  </figure>
               </div>
            </div>
            <div className="col-md-6">
            <div className="content-wrap "  >
               <h3>{abtData.title}</h3>
               <p>{abtData.description}</p>
            </div>
            </div>
            </div>
             }
            </span>
         ))}
         </div>
      </section>
    </>
  )
}

export default AboutContent
