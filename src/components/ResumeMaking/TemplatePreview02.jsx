import React, { Component } from 'react'
import resume03 from '../../assets/img/demos/demo-view-3.png';
import constant from '../../constant';
import { getStorage } from '../../utils';
export default class TemplatePreview02 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            candidateID: getStorage(constant.keys.cd) ? getStorage(constant.keys.cd) : '',
        }
    }
    render() {
        const { candidateID } = this.state
        return (
            <React.Fragment>
                <section className="blog-area section-padding-150-100">
                    <div className="container">
                        <div className="section-heading text-center">
                            <div className="dream-dots justify-content-center">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <h2 className="bold">Template Preview</h2>
                            <p>Wide selection of designs. Carefully optimised for clarity and impact. One click layouts - no formatting required.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div>
                                    <div className="blog_thumbnail">
                                        <img src={resume03} className="temp-img" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="sidebar-area">
                                    <div className="temp-summary mt-4">
                                        <p>Standing out. Professional. Recruiter-approved. Ready in minutes with our step-by-step builder.</p>
                                        <a className="dream-btn width-100" href={candidateID ? constant.component.updateTemplate03.url : constant.component.TemplateEdit02.url}>Try This Template</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
