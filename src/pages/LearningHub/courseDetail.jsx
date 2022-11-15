import React, { Component , Suspense } from "react";
import {
  courseListById,
  qaCourseCirculam,
  qaFqaList,
} from "../../action/CandidateAction";
import Loader from "../../components/common/Loader";
import { Helmet } from "react-helmet";
const JavaFullStack = React.lazy( () => import('../../components/LearningHub/courseDetail') ); 
export default class javaFullStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: undefined,
      courseDetail: undefined,
      qaFAQList: undefined,
      showShimmer:true
    };
  }
  componentDidMount() {
    document.title =`Learning Hub - Rozgar.com`;
    const url = this.props.match.params.url;
    courseListById(url).then((res) => {
      if (res.status) {
        this.setState({ details: res.result, showShimmer:false });
        document.title = res.result
      ? `${res.result?.COURSE_TITLE} Learning Hub - Rozgar.com`
      : `Learning Hub - Rozgar.com`;
        qaFqaList(res.result.COURSE_FAQS).then((response) => {
          if (response.status) {
            this.setState({ qaFAQList: response.result });
          }
        });
      }
    });
    const COURSE_ID = this.props.match.params.COURSE_ID;
    qaCourseCirculam(COURSE_ID).then((res) => {
      if (res.status) {
        this.setState({ courseDetail: res.result });
      }
    });
  }
  render() {
    const { courseDetail, qaFAQList ,details} = this.state;
    console.log(details?.COURSE_TITLE,"details");
    return (
      <React.Fragment>
         <Helmet >


<title title={details?.COURSE_TITLE + " | Learning Hub - Rozgar.com"}>{details?.COURSE_TITLE + " | Learning Hub - Rozgar.com"}</title>
<meta name="HandheldFriendly" content="True" />
<meta name="Keywords" content={ details?.COURSE_TITLE + " Course," + details?.COURSE_TITLE + "Certification Course,Learn " +  details?.COURSE_TITLE + "Online ,Online " +  details?.COURSE_TITLE + "Course,online " +  details?.COURSE_TITLE + " course for beginners,learn java online course, full stack developer course online,best  " +  details?.COURSE_TITLE +" course online,full stack developer course online."}></meta>
<meta name="description" content={  details?.COURSE_TITLE + " Developer course is designed to give you an essence of front-end, middleware, and back end  web developer technologies."} />
<link rel="canonical" href={window.location.href} />
<meta name="referrer" content="no-referrer-when-downgrade" />

{/* og meta tag */}
<meta property="og:site_name" content="Rozgar.com" />
<meta property="og:title" content={details?.COURSE_TITLE} />
<meta property="og:description" content={ details?.COURSE_TITLE + " Developer course is designed to give you an essence of front-end, middleware, and back end  web developer technologies."} />
<meta property="og:url" content={window.location.href} />
<meta property="og:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta property="og:image:width" content="4000" />
<meta property="og:image:height" content="6000" />

{/* Twitter Meta Tag */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={details?.COURSE_TITLE} />
<meta name="twitter:description" content={ details?.COURSE_TITLE + " Developer course is designed to give you an essence of front-end, middleware, and back end  web developer technologies."} />
<meta name="twitter:url" content={window.location.href} />
<meta name="twitter:image" content="https://rozgarlogo.s3.ap-south-1.amazonaws.com/download.png" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Smita Nag" />
<meta name="twitter:label2" content="Filed under" />
<meta name="twitter:data2" content="Career Advice, Career Insights" />
<meta name="twitter:site" content="@rozgar_india" />

</Helmet>
      <Suspense fallback={<div style={{display:"flex" , height:"100vh" , width:"100vw" , justifyContent:"center" , alignItems:"center"}} >   <div><Loader/></div> </div>}>

      <JavaFullStack
                details={this.state.details}
                courseDetail={courseDetail}
                qaFAQList={qaFAQList}
                showShimmer={this.state.showShimmer}
              />

      </Suspense>
 

        
      </React.Fragment>
    );
  }
}
