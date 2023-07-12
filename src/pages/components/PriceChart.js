import React from 'react'

const PriceChart = (props) => {

  return (
    <>
    <section className="pricing-sec">
      <div className="container">
          <div className="row">
              <div className="col-md-12 entry-content table-responsive" >
                  <table className="table">
                      <tbody>
                          <tr>
                              <td></td>
                              <td className="redC"><span>Start-Up</span></td>
                              <td className="redC"><span>Economic</span></td>
                              <td className="redC"><span>Business</span></td>
                            </tr>
                            {props.chartData && props.chartData.length > 0 && props.chartData.map((data,p)=>(
                              <tr key={p}>
                                <td>{data.title}</td>
                                <td className={data.colored=="1" ? "fs":""}>{data.individual}</td>
                                <td className={data.colored=="1" ? "fs":""}>{data.start_up}</td>
                                <td className={data.colored=="1" ? "fs":""}>{data.business}</td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
              </div>
          </div>
      </div>
  </section>
    </>
  )
}

export default PriceChart
