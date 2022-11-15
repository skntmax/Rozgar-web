import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import constant from '../../constant'
export default class jobsBySkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IT_SKILL_SHOW: false,
            NON_IT_SKILL_SHOW: false

        }
    }

    render() {
        const { IT_SKILL_LIST, IT_SKILL_LIST_COUNT, NON_IT_SKILL_LIST, NON_IT_SKILL_LIST_COUNT } = this.props;
        const { NON_IT_SKILL_SHOW, IT_SKILL_SHOW } = this.state;
        return (
            <React.Fragment>
                <main id="rg-main" className="rg-main rg-haslayout pt-0">
                    <div className="rg-sectionspace rg-haslayout pt-0">
                        <div className="rozgar-jobbylocsearch">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 offset-2">
                                        <form className="rozgar-jobbylocsearchbox">
                                            <div className="rozgar-formbox">
                                                <div className="rozgar-jobbylocsearchcontent">
                                                    <div className="form-group">
                                                        <i className="lnr lnr-magnifier"></i>
                                                        <input type="text" name="keyword" className="form-control" placeholder="Search jobs by Skills, Designation, Companies" />
                                                    </div>
                                                </div>
                                                <div className="rozgar-jobbylocsearchbtn">
                                                    <a href="javascript:void(0)"><i className="lnr lnr-magnifier"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                        <ul className='jobsbylocation-top'>
                                            <li><Link to={constant.component.jobsByLocation.url}>Jobs by Location</Link></li>
                                            <li><Link to={constant.component.jobsByCompany.url}>Jobs by Company</Link></li>
                                            <li><Link to={constant.component.jobsByCategory.url}>Jobs by Category</Link></li>
                                            <li><Link to={constant.component.jobsByDesignation.url}>Jobs by Designation</Link></li>
                                            <li><Link to={constant.component.jobsBySkill.url} className='active'>Jobs by Skill</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rozgar-profile-main-content'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-9'>
                                        <div className='jobsbylocationColumnBox'>
                                            <div className='headtext'>Browse Jobs by IT Skills</div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                {IT_SKILL_LIST.length && IT_SKILL_LIST.map((item, index) => {

                                                    if (IT_SKILL_SHOW) {
                                                        return (<Link to='#'>{item.SKILL} Jobs</Link>)
                                                    }
                                                    else if (index < 50) {
                                                        return (<Link to='#'>{item.SKILL} Jobs</Link>)
                                                    }


                                                })}

                                            </div>
                                            <div className='text-right pr-2 pb-1'>
                                                <button onClick={(e) => this.showITSkills(e)} className='proknowmore'>{IT_SKILL_SHOW ? 'Collapse' : 'View All'}</button>
                                            </div>
                                        </div>

                                        <div className='jobsbylocationColumnBox'>
                                            <div className='headtext'>Browse Jobs By Non-IT Skills</div>
                                            <div className='jobsbylocationColumn colCount_four'>
                                                {NON_IT_SKILL_LIST.length && NON_IT_SKILL_LIST.map((item, index) => {
                                                    if (NON_IT_SKILL_SHOW) {
                                                        return (<Link to='#'>{item.SKILL} Jobs</Link>)
                                                    }
                                                    else if (index < 50) {
                                                        return (<Link to='#'>{item.SKILL} Jobs</Link>)
                                                    }
                                                })}
                                            </div><div className='text-right pr-2 pb-1'>
                                                <Link onClick={(e) => { this.showNonITSkills(e) }} className='proknowmore'>{NON_IT_SKILL_SHOW ? 'Collapse' : 'View All'}</Link>
                                            </div>
                                        </div>

                                        {/* <nav className="rg-pagination">
                                            <ul>
                                                <li className="rg-prevpage"><a href="#"><i className="fa fa-angle-left"></i> Previous</a></li>
                                                <li className="rg-active"><a href="#">01</a></li>
                                                <li><a href="#">02</a></li>
                                                <li><a href="#">03</a></li>
                                                <li><a href="#">04</a></li>
                                                <li><a href="#">05</a></li>
                                                <li><a href="#"></a></li>
                                                <li className="rg-nextpage"><a href="#">Next <i className="fa fa-angle-right"></i></a></li>
                                            </ul>
                                        </nav> */}
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='rightform'>
                                            <h3>Register Now</h3>
                                            <form className="roz-formtheme">
                                                <div className="form-group">
                                                    <input type="Name" name="Name" className="form-control" placeholder="Your Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" name="password" className="form-control" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="mobile" name="mobile" className="form-control" placeholder="Mobile" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="btnregister">Register</button>
                                                </div>
                                                <div className="form-group roz-signedcheck">
                                                    <span>By registering with us you agree to our <a href='#'>Terms & Conditions</a></span>
                                                </div>
                                            </form>
                                        </div>
                                        <div className='rightform'>
                                            <h3>Popular Searches in Noida</h3>
                                            <ul className='popuraljobIncity'>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Part Time Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Fresher Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>HR Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>IT Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Teacher Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>BPO Jobs in Noida</a></li>
                                                <li><a target='_blank' href={constant.component.Enquiry.url}>Data Entry Jobs in Noida</a></li>
                                            </ul>
                                        </div>
                                        <div class="rg-adds rg-jobsearchadd mb-20 mt-20">
                                            <a href="javascript:void(0);" title="">
                                                <figure>
                                                    <img src="./assets/images/adds-05.jpg" alt="img description" />
                                                </figure>
                                            </a>
                                            <span>Ad</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )

    }


    showNonITSkills = (e) => {
        e.preventDefault();
        const { NON_IT_SKILL_SHOW } = this.state;
        this.setState({ NON_IT_SKILL_SHOW: !NON_IT_SKILL_SHOW })
    }


    showITSkills = (e) => {
        e.preventDefault()
        const { IT_SKILL_SHOW } = this.state;
        this.setState({ IT_SKILL_SHOW: !IT_SKILL_SHOW })
    }
}
