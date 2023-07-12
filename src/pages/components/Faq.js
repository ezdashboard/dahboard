import React, {useState, useEffect} from 'react'
import FAQarrow from "../assets/images/down.png"

 const Faq = (props) =>{
    const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);

    const toggleHiddenTitle = (index) => {
        if (hiddenTitleIndex === index) {
          setHiddenTitleIndex(null);
        } else {
          setHiddenTitleIndex(index);
        }
      };
    return(
        <>
        <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
                    {props.faqData && props.faqData.length > 0 && props.faqData.map((data, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemProp={data.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {data.status}Q.{i+1} {data.title}
                            </button>
                        </h2>
                        <div id={'collapseOne'+i} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" itemScope="" itemProp={data.description} itemType="https://schema.org/Answer">
                            <div className={hiddenTitleIndex === i ? 'accordion-body' :''}>
                            {hiddenTitleIndex === i && <div dangerouslySetInnerHTML={{ __html: data.description}} />}
                            </div>
                        </div>
                    </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    )
 }
 export default Faq;