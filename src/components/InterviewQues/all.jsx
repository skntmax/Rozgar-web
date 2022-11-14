import React, { Component } from "react";
import { Link } from "react-router-dom";
import constant from "../../constant";

export default class all extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  render() {
    const {
      FUNCTIONAL_AREA_LIST,
      INDUSTRY_LIST,
      DESIGNATION_LIST,
      IT_SKILL_LIST,
      NON_IT_SKILL_LIST,
    } = this.props;
    console.log("SKILL_ID", IT_SKILL_LIST);
    return (
      <React.Fragment>
        {/* <div className="rozgar-browseJobs">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12"> */}
                <div className="brows-jobs-companies">
                  <div className="d-flex by-locations-head justify-content-between">
                    <h2 className="small_title">
                      Interview Questions by Companies
                    </h2>
                    <div className="view-all-box">
                      <Link className="rg-onHoverButton"
                        to={constant.component.ShareAnInterview.url}
                      >
                        {" "}
                        Share An Interview
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="companies-brows-list">
                    <ul>
                      <li>
                        <Link
                          style={{ cursor: "pointer" }}
                          to={{
                            pathname: constant.component.interviewQuestionByCompanyId.url.replace(
                              ":id",
                              "tata-consultancy-service"
                            ),
                            // state: { EMPLOYER_ID: 1, EMPLOYER_NAME: "tcs" },
                          }}
                        >
                          <img
                            src={"./assets/images/tcs-company.png"}
                            alt="TCS"
                          />{" "}
                          <h6>TCS</h6>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: constant.component.interviewQuestionByCompanyId.url.replace(
                              ":id",
                              "-cognizant"
                            ),
                            state: {
                              EMPLOYER_ID: 6,
                              EMPLOYER_NAME: "cognizant",
                            },
                          }}
                        >
                          <img
                            src={"./assets/images/cognizant-company.png"}
                            alt="COGNIZANT"
                          />
                          <h6>Cognizant</h6>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: constant.component.interviewQuestionByCompanyId.url.replace(
                              ":id",
                              "byju-s"
                            ),
                            state: {
                              EMPLOYER_ID: 16232,
                              EMPLOYER_NAME: "byjus",
                            },
                          }}
                        >
                          <img
                            src={"./assets/images/byjus-company.png"}
                            alt="Byjus"
                          />
                          <h6>Byjus</h6>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: constant.component.interviewQuestionByCompanyId.url.replace(
                              ":id",
                              "amazon"
                            ),
                            state: {
                              EMPLOYER_ID: 16284,
                              EMPLOYER_NAME: "Amazon",
                            },
                          }}
                        >
                          <img
                            src={"./assets/images/amazon-company.png"}
                            alt="Amazon"
                          />
                          <h6>Amazon</h6>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={{
                            pathname: constant.component.interviewQuestionByCompanyId.url.replace(
                              ":id",
                              "accenture"
                            ),
                            state: {
                              EMPLOYER_ID: 8,
                              EMPLOYER_NAME: "accenture",
                            },
                          }}
                        >
                          <img
                            src={"./assets/images/accenture-company.png"}
                            alt="Accenture"
                          />
                          <h6>Accenture</h6>
                        </Link>
                      </li>
                    </ul>
                    <div className="view-all-box">
                      <Link
                        className="rg-onHoverButton"
                        to={constant.component.interviewQuestionByCompany.url}
                      >
                        {" "}
                        View All Companies
                      </Link>{" "}
                    </div>
                  </div>
                </div>
                <div className="job-maincontaine-row">
                  <div className="brows-by-locations-bx ">
                    <div className="by-locations-head">
                      <h2 className="small_title">
                        Interview Questions by Designations
                      </h2>
                    </div>
                    <ul className="functional-area-list">
                      {/* {DESIGNATION_LIST.length > 0 && DESIGNATION_LIST.map((item, index) => {
                                                if (index <= 9) {
                                                    return (<li>
                                                        <Link style={{ cursor: 'pointer' }} to={{
                                                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', item.URL),
                                                            state: [{ DESIGNATION_ID: item.DESIGNATION, DESIGNATION: item.DESIGNATION }]
                                                        }}>
                                                            {item.DESIGNATION}
                                                        </Link>
                                                    </li>)
                                                }
                                            })} */}
                      <li>
                        <Link
                          className="rg-backgroundHover"
                          to={{
                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(
                              ":id",
                              "software-engineer"
                            ),
                            state: {
                              DESIGNATION_ID: 2272,
                              DESIGNATION: "Software Engineer",
                            },
                          }}
                        >
                          Software Engineer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rg-backgroundHover"
                          to={{
                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(
                              ":id",
                              "machine-learning-engineer"
                            ),
                            state: {
                              DESIGNATION_ID: 171,
                              DESIGNATION: "Machine Learning Engineer",
                            },
                          }}
                        >
                          Machine Learning Engineer
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="rg-backgroundHover"
                          to={{
                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(
                              ":id",
                              "devops-manager"
                            ),
                            state: {
                              DESIGNATION_ID: 226,
                              DESIGNATION: "DevOps Manager",
                            },
                          }}
                        >
                          DevOps Manager
                        </Link>
                      </li>
                      <li><Link className='rg-backgroundHover' to={{
                        pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', 'back-end-developer'),
                        state: { DESIGNATION_ID: 253, DESIGNATION: 'Back End Developer' }
                      }}>Back End Developer</Link></li>
                      <li><Link className='rg-backgroundHover' to={{
                        pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', 'web-designer'),
                        state: { DESIGNATION_ID: 625, DESIGNATION: 'Web Designer' }
                      }}>Web Designer</Link></li>
                      <li>
                        <Link
                          className="rg-backgroundHover"
                          to={{
                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(
                              ":id",
                              "front-end-developer"
                            ),
                            state: {
                              DESIGNATION_ID: 262,
                              DESIGNATION: "Front End Developer",
                            },
                          }}
                        >
                          Front End Developer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rg-backgroundHover"
                          to={{
                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(
                              ":id",
                              "software-development-other"
                            ),
                            state: {
                              DESIGNATION_ID: 273,
                              DESIGNATION: "Software Development - Other",
                            },
                          }}
                        >
                          Software Development - Other
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rg-backgroundHover"
                          to={{
                            pathname: constant.component.interviewQuestionByDesignationId.url.replace(
                              ":id",
                              "service-engineer"
                            ),
                            state: {
                              DESIGNATION_ID: 110,
                              DESIGNATION: "Service Engineer",
                            },
                          }}
                        >
                          Service Engineer
                        </Link>
                      </li>
                    </ul>
                    <div className="view-all-box">
                      <Link
                        className="rg-onHoverButton"
                        to={
                          constant.component.interviewQuestionByDesignation.url
                        }
                      >
                        View All Roles
                      </Link>
                    </div>
                  </div>
                  <div className="brows-by-locations-bx ">
                    <div className="by-locations-head">
                      <h2 className="small_title">
                        Interview Questions by Skills
                      </h2>
                    </div>
                    <ul className="functional-area-list">
                      {/* {IT_SKILL_LIST.length > 0 &&
                        IT_SKILL_LIST.map((item, index) => {
                          if (index <= 9) {
                            return (
                              <li>
                                <Link
                                  to={{
                                    pathname: constant.component.interviewQuestionBySkillsId.url.replace(
                                      ":id",
                                      item.URL
                                    ),
                                    state: { skillId: item.SKILL_ID },
                                  }}
                                >
                                  {item.SKILL}
                                </Link>
                              </li>
                            );
                          }
                        })} */}
                      <ul>
                        <li>
                          <Link className='rg-backgroundHover' to={{
                            pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'php'),
                            state: { skillId: 11 }
                          }}>PHP</Link></li>
                        <li>
                          <Link className='rg-backgroundHover' to={{
                            pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'software-testing'),
                            state: { skillId: 2 }
                          }}>Software Testing</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'networking'),
                          state: { skillId: 1 }
                        }}>Networking</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'java'),
                          state: { skillId: 13 }
                        }}>Java</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'aws'),
                          state: { skillId: 960 }
                        }}>AWS</Link></li>
                        {/* <li><Link className='rg-backgroundHover' to ={{ 
                                    pathname:constant.component.interviewQuestionBySkillsId.url.replace(':id', 'apache-web-server'),
                                    state:{skillId:194}
                                      }}>Apache Web Server</Link></li> */}
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'linux'),
                          state: { skillId: 27 }
                        }}>Linux</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'tally'),
                          state: { skillId: 35 }
                        }}>Tally</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', '-net'),
                          state: { skillId: 9 }
                        }}>.NET</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'video-editing'),
                          state: { skillId: 50 }
                        }}>Video Editing</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'web-designing'),
                          state: { skillId: 24 }
                        }}>Web Designing</Link></li>
                        <li><Link className='rg-backgroundHover' to={{
                          pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'back-office'),
                          state: { skillId: 12 }
                        }}>Back office</Link></li>
                      </ul>
                    </ul>
                    <div className="view-all-box">
                      <Link
                        className="rg-onHoverButton"
                        to={constant.component.interviewQuestionBySkills.url}
                      >
                        View All Skills{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              {/* </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}
