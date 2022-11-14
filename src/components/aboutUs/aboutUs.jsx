import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class aboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="rg-innerbannervtwo" class="rg-innerbannervtwoabout">
        </div>
		<main id="rg-main" className="rg-main rg-haslayout">
			<div className="rg-haslayout rg-sectionspace">
				<div className="container">
					<div className="row">
						<div className="rg-candidatesdetails">
							<div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
								<div className="rg-jobapplycenter rg-jobapplycentervthree">
									<div className="rg-companycontent">
										<div className="rg-jobapplydetails">
											<div className="rg-companyname">
												<h2>Welcome to Rozgar</h2>
											</div>
										</div>
										<div className="rg-jobapplybtnlike">
											<div className="rg-likebtnbox">
                                                <h3>Our Businesses</h3>
												<img src={'./assets/images/Blogo/rozgar.png'}/>
												<img src={'./assets/images/Blogo/mtc.png'}/>
                                                <img src={'./assets/images/Blogo/vil.png'}/>
                                                <img src={'./assets/images/Blogo/hrms.png'}/>
											</div>
										</div>
									</div>
								</div>
								
								<p className='font-16 line-height-22px'>Rozgar.com is India’s most trusted job search platform, which is designed for job seekers to ease the process of searching and finding the best fit. We continuously update new job opportunities and provide freshers and job seekers with a better understanding of the labour market and the jobs they can feasibly get.​</p>
								
								<p className='font-16'>With a database of over 2 million jobs post and 9K active clients including renowned employers and prominent recruiters, we impart an in-depth understanding of specialized markets and help to deliver the best talent promptly. Our cutting-edge technology provides the most extensive reach and unmatched speed, enabling us to provide job seekers with the most accurate solutions for them.</p>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        </main>
      </React.Fragment>
    )
  }
}
