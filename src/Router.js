import React, { useEffect, useState } from "react";
import { getStorage } from "./utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import constant from "./constant";
import homepage from "./pages/home/homepage";
import MobileSearch from "./components/home/MobileSearch"
import joblist from "./pages/joblist/joblist";
import jobdetails from "./pages/jobdetail/jobdetails";
import signin from "./pages/signin/signin";
import register from "./pages/register/register";
import companieslist from "./pages/companies/companieslist";
import companydetails from "./pages/companies/companydetails";
import jobbycity from "./pages/jobbycity/jobbycity";
import CityOverview from "./pages/jobbycity/CityOverview";
import faqs from "./pages/faqs/faqs";
import faqDetail from "./pages/faqs/faqDetail";
import faqCategory from "./pages/faqs/faqCategory";
import jobsByLocation from "./pages/jobsByLocation/jobsByLocation";
import jobsByCompany from "./pages/jobsByCompany/jobsByCompany";
import jobsByCategory from "./pages/jobsByCategory/jobsByCategory";
import jobsByDesignation from "./pages/jobsByDesignation/jobsByDesignation";
import jobsBySkill from "./pages/jobsBySkill/jobsBySkill";
import aboutUs from "./pages/aboutUs/aboutUs";
import privacyPolicy from "./pages/privacyPolicy/privacyPolicy";
import termsConditions from "./pages/termsConditions/termsConditions";
import forgotPassword from "./pages/forgotPassword/forgotPassword";
import EmployeeHeader from "./components/common/EmployeeHeader";
import Logout from "./components/common/SignOut";
import JobsByDashboard from "./pages/jobsBy/dashboard";
import { Layout } from "./Layout";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";
import blog from "./pages/blog/blog";
import blogDetails from "./components/blog/blogDetails";
import JobSearchIndia from "./pages/JobsearchIndia/Jobsearchindia";
// import blogDetails from './pages/blog/blogDetails'
// import BLogCategoryDetail from './components/blog/BLogCategoryDetail'
import BlogListByCategory from "./pages/blog/blogListByCategory";
import CreateJobAlert from "./pages/CreateFreeJobAlert/CreateJobAlert";
// import profile from './pages/myAccount/profile'
import editProfile from "./pages/myAccount/editProfile";
import SavedJobs from "./components/myAccount/SavedJobs";
import RecommendedJobs from "./components/myAccount/RecommendedJobs";
import ProfilePerformance from "./pages/myAccount/ProfilePerformance";
import InboxMessage from "./components/myAccount/InboxMessage";
import ApplicationStatus from "./components/myAccount/ApplicationStatus";
import ProfilePreview from "./components/myAccount/ProfilePreview";
import ResetPassword from "./pages/forgotPassword/resetPassword";
import BlogListBySearch from "./pages/blog/BlogListBySearch";
import AllRecommendedJobs from "./pages/myAccount/AllRecommendedJobs";
import myRozgar from "./pages/myAccount/profile";
import reportIssue from "./pages/reportIssue/reportIssue";
import jobListBySearch from "./pages/joblist/jobListBySearch";
import Enquiry from "./pages/Enquiry/Enquiry";
import profilePicture from "./components/myAccount/profilePicture";
import PersonalRecruiter from "./pages/PersonalRecruiter/PersonalRecruiter";
import TopCompanyList from "./pages/companies/topcompanies";
import LatestFresherJoblist from "./pages/joblist/latestfresherjobs";
import error from "./pages/Error/error";
import ByCompany from "./pages/InterviewQuestions/ByCompany";
import BySkills from "./pages/InterviewQuestions/BySkills";
import ShareAnInterview from "./pages/InterviewQuestions/ShareAnInterview";
import AddAnswer from "./pages/InterviewQuestions/AddAnswer";
import AllJobs from "./pages/AllJobs/AllJobs";
import courseDetail from "./pages/LearningHub/courseDetail";
import GovermentJobList from "./pages/joblist/govermentJobs";
import InternationalJobList from "./pages/joblist/internationalJobs";

import Fulltimehiring from "./pages/EmployerServices/Fulltimehiring";
import ContractualStaffingCopy from "./pages/EmployerServices/Contractualstaffing";
import FeaturedJobs from "./components/myAccount/FeaturedJobs";
import PremiumJobs from "./components/myAccount/PremiumJobs";
import EmailVerificationScreen from "./components/common/EmailVerificationScreen";
import HRMS from "./pages/EmployerServices/Hrmanagementsystem";
import Marketingtechnologysolution from "./pages/EmployerServices/Marketingtechnologysolution";
import Payrollautomation from "./pages/EmployerServices/Payrollautomation";
import Startupincubation from "./pages/EmployerServices/Startupincubation";

import InterviewQuestion from "./components/InterviewQues/InterviewQuestion";

import DiscussionForum from './pages/DiscussionForum/DiscussionForum'
import buyCourse from './pages/LearningHub/buyCourse'
import ThankYou from './pages/LearningHub/thankYou'
import studyAbroad from './pages/StudyAbroad/studyAbroad'
import AdmissionAssistance from './pages/StudyAbroad/AdmissionAssistance'
import StudyAbroadScholarship from './pages/StudyAbroad/StudyAbroadScholarship'
import TestPreparation from './pages/StudyAbroad/TestPreparation'
import travelGuidance from './pages/StudyAbroad/TravelGuidance'
import VisaApplicationAssistance from './pages/StudyAbroad/VisaApplicationAssistance'
import CoursesAdviceGuidance from './pages/StudyAbroad/CoursesAdviceGuidance'
import studyAbroadCounselling from './pages/StudyAbroad/StudyAbroadCounselling'
import VisaCoverLetter from './pages/StudyAbroad/VisaCoverLetter'
import SopWritingServices from './pages/StudyAbroad/SopWritingServices'
import LorWritingServices from './pages/StudyAbroad/LorWritingServices'
import ResumeWritingServices from './pages/StudyAbroad/ResumeWritingServices'
import StudyInAustralia from './pages/StudyAbroad/StudyInAustralia'
import StudyInCanada from './pages/StudyAbroad/StudyInCanada'
import StudyInUk from './pages/StudyAbroad/StudyInUk'
import StudyInUsa from './pages/StudyAbroad/StudyInUsa'
import StudyInItaly from './pages/StudyAbroad/StudyInItaly'
import StudyInIreland from './pages/StudyAbroad/StudyInIreland'
import StudyInNewZealand from './pages/StudyAbroad/StudyInNewZealand'
import StudyInSingapore from './pages/StudyAbroad/StudyInSingapore'
import CompanyAnswer from './pages/InterviewQuestions/CompanyAnswer'
import ByDesignation from './pages/InterviewQuestions/ByDesignation'
import DesignationAnswer from './pages/InterviewQuestions/DesignationAnswer'
import InternationalWorkVisas from './pages/InternationalWorkVisas/InternationalWorkVisas'
import ResumeMaking from './pages/ResumeMaking/ResumeMaking'
import TemplatePreview from './pages/ResumeMaking/TemplatePreview'
import TemplatePreview01 from './pages/ResumeMaking/TemplatePreview01'
import TemplatePreview02 from './pages/ResumeMaking/TemplatePreview02'
import TemplateEdit from './pages/ResumeMaking/TemplateEdit'
import TemplateEdit01 from './pages/ResumeMaking/TemplateEdit01'
import TemplateEdit02 from './pages/ResumeMaking/TemplateEdit02'
import CareerReport1Year from './components/common/CareerAstrology/CareerReport1Year'
// import DiscussionForum from "./pages/DiscussionForum/DiscussionForum";
import DiscussionForumCategory from "./pages/DiscussionForum/DiscussionForumCategory";
// import BuyCourse from "./pages/LearningHub/buyCourse";
// import buyCourse from "./pages/LearningHub/buyCourse";
// import ThankYou from "./pages/LearningHub/thankYou";
// import studyAbroad from "./pages/StudyAbroad/studyAbroad";
// import AdmissionAssistance from "./pages/StudyAbroad/AdmissionAssistance";
// import StudyAbroadScholarship from "./pages/StudyAbroad/StudyAbroadScholarship";
// import TestPreparation from "./pages/StudyAbroad/TestPreparation";
// import travelGuidance from "./pages/StudyAbroad/TravelGuidance";
// import VisaApplicationAssistance from "./pages/StudyAbroad/VisaApplicationAssistance";
// import CoursesAdviceGuidance from "./pages/StudyAbroad/CoursesAdviceGuidance";
// import studyAbroadCounselling from "./pages/StudyAbroad/StudyAbroadCounselling";
// import VisaCoverLetter from "./pages/StudyAbroad/VisaCoverLetter";
// import SopWritingServices from "./pages/StudyAbroad/SopWritingServices";
// import LorWritingServices from "./pages/StudyAbroad/LorWritingServices";
// import ResumeWritingServices from "./pages/StudyAbroad/ResumeWritingServices";
// import StudyInAustralia from "./pages/StudyAbroad/StudyInAustralia";
// import StudyInCanada from "./pages/StudyAbroad/StudyInCanada";
// import StudyInUk from "./pages/StudyAbroad/StudyInUk";
// import StudyInUsa from "./pages/StudyAbroad/StudyInUsa";
// import StudyInItaly from "./pages/StudyAbroad/StudyInItaly";
// import StudyInIreland from "./pages/StudyAbroad/StudyInIreland";
// import StudyInNewZealand from "./pages/StudyAbroad/StudyInNewZealand";
// import StudyInSingapore from "./pages/StudyAbroad/StudyInSingapore";
// import CompanyAnswer from "./pages/InterviewQuestions/CompanyAnswer";
// import ByDesignation from "./pages/InterviewQuestions/ByDesignation";
// import DesignationAnswer from "./pages/InterviewQuestions/DesignationAnswer";
// import InternationalWorkVisas from "./pages/InternationalWorkVisas/InternationalWorkVisas";
// import ResumeMaking from "./pages/ResumeMaking/ResumeMaking";
// import TemplatePreview from "./pages/ResumeMaking/TemplatePreview";
// import TemplatePreview01 from "./pages/ResumeMaking/TemplatePreview01";
// import TemplatePreview02 from "./pages/ResumeMaking/TemplatePreview02";
// import TemplateEdit from "./pages/ResumeMaking/TemplateEdit";
// import TemplateEdit01 from "./pages/ResumeMaking/TemplateEdit01";
// import TemplateEdit02 from "./pages/ResumeMaking/TemplateEdit02";
// import CareerReport1Year from "./components/common/CareerAstrology/CareerReport1Year";
import StudentsExplorer from './pages/StudentsExplorer/StudentsExplorer'
import careerExplorerDetail from './pages/StudentsExplorer/CareerExplorerDetail'
import DiscussionForumDetails from './pages/DiscussionForum/DiscussionForumDetails';
import ResumeViewOne from "./pages/ResumeMaking/ResumeViewOne/ResumeViewOne";
import ResumeViewTwo from "./pages/ResumeMaking/ResumeViewOne/ResumeViewTwo";
import ResumeViewThree from "./pages/ResumeMaking/ResumeViewOne/ResumeViewThree";
import ResumeTemplateView01 from "./pages/ResumeMaking/ResumeViewOne/ResumeTemplateView01";
import ResumeTemplateView02 from "./pages/ResumeMaking/ResumeViewOne/ResumeTemplateView02";
import ResumeTemplateView03 from "./pages/ResumeMaking/ResumeViewOne/ResumeTemplateView03";
import CareerAstrology from './pages/CareerAstrology/CareerAstrology';
import AnswerByQuestion from './components/InterviewQuestions/AnswerbyQuestion';

import RemedialSolutionForCareer from "./components/common/CareerAstrology/RemedialSolutionForCareer";
import StrengthReadingForCareer from "./components/common/CareerAstrology/StrengthReadingForCareer";
import CareerAsk1Question from "./components/common/CareerAstrology/CareerAsk1Question";
import CareerAsk3Question from "./components/common/CareerAstrology/CareerAsk3Question";
import CareerReport2Year from "./components/common/CareerAstrology/CareerReport2Year";
import CareerReport3Year from "./components/common/CareerAstrology/CareerReport3Year";
import CareerReport5Years from "./components/common/CareerAstrology/CareerReport5Years";
import ChangePassword from "./pages/forgotPassword/ChangePassword";
import FourZeroFour from "./pages/404/FourZeroFour";
import DiscussionFormSignIn from "./pages/DiscussionForum/DiscussionFormsignin";

// import AnswerByQuestion from './components/InterviewQuestions/AnswerbyQuestion'
// import CareerAstrology from './components/common/CareerAstrology/CareerAstrology'
// import DiscussionForumDetails from './pages/DiscussionForum/DiscussionForumDetails'
// import RemedialSolutionForCareer from './components/common/CareerAstrology/RemedialSolutionForCareer'
// import StrengthReadingForCareer from './components/common/CareerAstrology/StrengthReadingForCareer'
// import CareerAsk1Question from './components/common/CareerAstrology/CareerAsk1Question'
// import CareerAsk3Question from './components/common/CareerAstrology/CareerAsk3Question'
// import CareerReport2Year from './components/common/CareerAstrology/CareerReport2Year'
// import CareerReport3Year from './components/common/CareerAstrology/CareerReport3Year'
// import CareerReport5Years from './components/common/CareerAstrology/CareerReport5Years'
// import ChangePassword from './pages/forgotPassword/ChangePassword'
// import FourZeroFour from './pages/404/FourZeroFour'
// import WorkinAustralia from './components/InternationalWorkVisas/WorkinAustralia';
// import WorkinCanada from './components/InternationalWorkVisas/WorkinCanada';
// import EducationLoan from './components/StudyAbroad/EducationLoan';

import WorkinUK from "./pages/InternationalWorkVisas/WorkinUK";
import ResumeTemplate1 from "./components/ResumeMaking/ResumeTemplate1";
import WorkinUSA from "./components/InternationalWorkVisas/WorkinUSA";


import WorkinAustralia from './components/InternationalWorkVisas/WorkinAustralia'
import WorkinCanada from './components/InternationalWorkVisas/WorkinCanada'
import EducationLoan from './components/StudyAbroad/EducationLoan'
import CommonSearchQuestions from "./components/InterviewQuestions/CommonSearchQuestion";
import CommonSearchAnswer from "./pages/InterviewQuestions/CommonSearchAnswer";
import CommonSearchQuestion from "./components/InterviewQuestions/CommonSearchQuestion";
import WorkinIreland from "./components/InternationalWorkVisas/WorkinIreland";
import WorkinNewZealand from "./components/InternationalWorkVisas/WorkinNewZealand";
import WorkinSingapore from "./components/InternationalWorkVisas/WorkinSingapore";
import WorkinMalaysia from "./components/InternationalWorkVisas/WorkinMalaysia";
import AdsMainPage from "./pages/Ads/MainPage"
import MessageById from "./components/myAccount/MessageById";
import ResumeTemplate2 from "./pages/ResumeMaking/ResumeTemplate2";
import ResumeTemplate3 from "./pages/ResumeMaking/ResumeTemplate3";
import ResumeTemplate4 from "./pages/ResumeMaking/ResumeTemplate4";
import HiringFresshersJob from "./pages/joblist/hiringfreshersjob"
import Jobsearchindia from './pages/JobsearchIndia/Jobsearchindia'
import JobSearchDetail from "./pages/JobsearchIndia/JobSearchDetail";
import FullStackJobsIndia from "./pages/JobsearchIndia/FullStackJobsIndia";
import jobsinIndia from "./pages/JobsearchIndia/JobsinIndia";

import Swiggy from "./pages/companies/Swiggy/Swiggy";
import SwiggyJobs from "./pages/companies/Swiggy/SwiggyJobs";
import SwiggyAboutUs from "./pages/companies/Swiggy/SwiggyAboutUs";
import SwiggyLife from "./pages/companies/Swiggy/SwiggyLife";
import UpdateTemplate from "./pages/ResumeMaking/UpdateTemplate";
import UpdateTemplate01 from "./pages/ResumeMaking/UpdateTemplate01";
import UpdateTemplate02 from "./pages/ResumeMaking/UpdateTemplate02";

import PMRozgarMela from "./pages/PMRozgarMela/PMRozgarMela";


const EmployeeRoutes = (props) => {
  const ud = getStorage("USER_DETAIL");
  if (ud.USER_TYPE === "EMPLOYEE") {
    return (
      <React.Fragment>
        {props.hideHeader === true ? null : <EmployeeHeader />}
        <Route exact={true} path={props.path} component={props.component} />
        {props.hideFooter === true ? null : <Footer />}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Route exact={true} path={props.path} component={props.component} />
    </React.Fragment>
  );
};

const CandidateRoute = (props) => {
  const token = getStorage(constant.keys.ctoken);
  const urlKeys = Object.entries(constant.component);
  const path = props.path;
  const match = urlKeys.filter((i) => i[1].url === path);
  if (token) {
    if (match.length > 0 && match[0][1].url === path) {
      return (
        <React.Fragment>
          {props.hideHeader === true ? null : <EmployeeHeader />}
          <Route exact={true} path={props.path} component={props.component} />
          {props.hideFooter === true ? null : <Footer />}
        </React.Fragment>
      );
    } else {
      window.location.href = constant.component.login.url;
    }
  } else {
    window.location.href = constant.component.login.url;
  }
};

const ModalRoute = (props) => {
  const cd = getStorage(constant.keys.cd);
  if (cd) {
    return (
      <React.Fragment>
        <Route exact={true} path={props.path} component={props.component} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Route exact={true} path={props.path} component={props.component} />
    </React.Fragment>
  );
};

const PrivateRoutes = (props) => {
  const token = getStorage(constant.keys.ctoken);
  const urlKeys = Object.entries(constant.component);
  const path = props.path;
  const match = urlKeys.filter((i) => i[1].url === path);
  if (token) {
    if (match.length > 0 && match[0][1].url === path) {
      return (
        <React.Fragment>
          {props.hideHeader === true ? null : <EmployeeHeader />}
          <Route exact={true} path={props.path} component={props.component} />
          {props.hideFooter === true ? null : <Footer />}
        </React.Fragment>
      );
    } else {
      window.location.href = constant.component.login.url;
    }
  } else {
    if (match.length > 0 && match[0][1].url === path) {
      return (
        <React.Fragment>
          {!props.showLoader && props.hideHeader === true ? null : <Header />}

          <Route exact={true} path={props.path} component={props.component} />

          {!props.showLoader && props.hideFooter === true ? null : <Footer />}
        </React.Fragment>
      );
    } else {
      window.location.href = constant.component.login.url;
    }
  }
};

const Router = (props) => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 500);
  }, []);

  return (
    <React.Fragment>
       <BrowserRouter>  
      <Switch>
        <PrivateRoutes
          exact
          path={constant.component.login.url}
          showLoader={showLoader}
          component={homepage}
        />
        <PrivateRoutes
          exact
          path={constant.component.homepage.url}
          showLoader={showLoader}
          component={homepage}
        />

        <PrivateRoutes
          exact
          path={constant.component.MobileSearch.url}
          showLoader={showLoader}
          component={MobileSearch}
        />

        {/* <PrivateRoutes exact path={constant.component.joblist.url} component={joblist} /> */}
        <PrivateRoutes
          exact
          path={constant.component.jobdetails.url}
          component={jobdetails}
        />

        <PrivateRoutes
          exact
          path={constant.component.CreateJobAlert.url}
          component={CreateJobAlert}
        />


        <Route exact path={constant.component.signin.url} component={signin} />
        <Route
          exact
          path={constant.component.register.url}
          component={register}
        />
        <Route
          path={constant.component.resetPassword.url}
          component={ResetPassword}
        />
        <Route
          exact
          path={constant.component.forgotPassword.url}
          component={forgotPassword}
        />

        <PrivateRoutes
          exact
          path={constant.component.privacyPolicy.url}
          component={privacyPolicy}
        />
        <PrivateRoutes
          exact
          path={constant.component.termsConditions.url}
          component={termsConditions}
        />

        <PrivateRoutes
          exact
          path={constant.component.companieslist.url}
          component={companieslist}
        />
        <PrivateRoutes
          exact
          path={constant.component.topcompanieslist.url}
          component={TopCompanyList}
        />
        <PrivateRoutes
          exact
          path={constant.component.companydetails.url}
          component={companydetails}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobbycity.url}
          component={jobbycity}
        />
        <PrivateRoutes
          exact
          path={constant.component.CityOverview.url}
          component={CityOverview}
        />

        <PrivateRoutes
          exact
          path={constant.component.blog.url}
          component={blog}
        />
        <PrivateRoutes
          exact
          path={constant.component.PersonalRecruiter.url}
          component={PersonalRecruiter}
        />

        <PrivateRoutes exact path={constant.component.blogDetail.url} component={blogDetails} />

        <PrivateRoutes
          exact
          path={constant.component.blogCategory.url}
          component={BlogListByCategory}
        />

        <PrivateRoutes
          exact
          path={constant.component.faqs.url}
          component={faqs}
        />

        <PrivateRoutes
          exact
          path={constant.component.reportIssue.url}
          component={reportIssue}
        />
        <PrivateRoutes
          exact
          path={constant.component.Enquiry.url}
          component={Enquiry}
        />
        <PrivateRoutes
          exact
          path={constant.component.error.url}
          component={error}
        />

        <PrivateRoutes
          exact
          path={constant.component.faqDetails.url}
          component={faqDetail}
        />
        <PrivateRoutes
          exact
          path={constant.component.faqCategory.url}
          component={faqCategory}
        />
        {/* <EmployeeRoutes exact path={constant.component.profile.url} component={profile} /> */}
        {/* <PrivateRoutes exact path={constant.component.jobsByLocation.url} component={jobsByLocation} /> */}
        {/* <PrivateRoutes exact path={constant.component.jobsByCompany.url} component={jobsByCompany} /> */}
        {/* <PrivateRoutes exact path={constant.component.jobsByCategory.url} component={jobsByCategory} /> */}
        {/* <PrivateRoutes exact path={constant.component.jobsByDesignation.url} component={jobsByDesignation} /> */}
        {/* <PrivateRoutes exact path={constant.component.jobsBySkill.url} component={jobsBySkill} /> */}
        <PrivateRoutes
          exact
          path={constant.component.AllJobs.url}
          component={JobsByDashboard}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByCategory.url}
          component={JobsByDashboard}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByLocation.url}
          component={JobsByDashboard}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByCompany.url}
          component={JobsByDashboard}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByDesignation.url}
          component={JobsByDashboard}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsBySkill.url}
          component={JobsByDashboard}
        />
        <PrivateRoutes
          exact
          path={constant.component.joblist.url}
          component={joblist}
        />
        <PrivateRoutes
          exact
          path={constant.component.latestfresherjob.url}
          component={LatestFresherJoblist}
        />
        <PrivateRoutes
          exact
          path={constant.component.hiringfresherjob.url}
          component={HiringFresshersJob}
        />

        <PrivateRoutes
          exact
          path={constant.component.governmentJobs.url}
          component={GovermentJobList}
        />
        <PrivateRoutes
          exact
          path={constant.component.internationalJobs.url}
          component={InternationalJobList}
        />
        <PrivateRoutes
          exact
          path={constant.component.fulltimehiring.url}
          component={Fulltimehiring}
        />
        <PrivateRoutes
          exact
          path={constant.component.contracttualstaffing.url}
          component={ContractualStaffingCopy}
        />
        <PrivateRoutes
          exact
          path={constant.component.hrmanagementsystem.url}
          component={HRMS}
        />
        <PrivateRoutes
          exact
          path={constant.component.marketingtechnology.url}
          component={Marketingtechnologysolution}
        />
        <PrivateRoutes
          exact
          path={constant.component.payrollautomation.url}
          component={Payrollautomation}
        />
        <PrivateRoutes
          exact
          path={constant.component.startupincubation.url}
          component={Startupincubation}
        />
        <PrivateRoutes
          exact
          path={constant.component.discussionForum.url}
          component={DiscussionForum}
        />
        <PrivateRoutes
          exact
          path={constant.component.discussionForumDetails.url}
          component={DiscussionForumDetails}
        />

        {/* <EmployeeRoutes exact path={constant.component.editProfile.url} component={editProfile} /> */}
        {/* <EmployeeRoutes exact path={constant.component.savedJobs.url} component={SavedJobs} /> */}
        {/* <EmployeeRoutes exact path={constant.component.recommendedJobs.url} component={RecommendedJobs} /> */}
        <CandidateRoute
          exact
          path={constant.component.recommendedJobs.url}
          component={RecommendedJobs}
        />

        <CandidateRoute
          exact
          path={constant.component.applicationStatusById.url}
          component={ApplicationStatus}
        />
        <CandidateRoute
          exact
          path={constant.component.applicationStatus.url}
          component={ApplicationStatus}
        />
        {/* <EmployeeRoutes exact path={constant.component.profilePreview.url} component={ProfilePreview} /> */}

        <CandidateRoute
          exact
          path={constant.component.editProfile.url}
          component={editProfile}
        />
        <CandidateRoute
          exact
          path={constant.component.profilePreview.url}
          component={ProfilePreview}
        />
        <CandidateRoute
          exact
          path={constant.component.profilePreviews.url}
          component={ProfilePreview}
        />
        <CandidateRoute
          exact
          path={constant.component.myRozgar.url}
          component={myRozgar}
        />
        <CandidateRoute
          exact
          path={constant.component.allRecommendedJobsList.url}
          component={AllRecommendedJobs}
        />
        <CandidateRoute
          exact
          path={constant.component.savedJobs.url}
          component={SavedJobs}
        />
        <CandidateRoute
          exact
          path={constant.component.ProfilePerformance.url}
          component={ProfilePerformance}
        />
        <CandidateRoute
          exact
          path={constant.component.InboxMessage.url}
          component={InboxMessage}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByLocation.url}
          component={jobsByLocation}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByCompany.url}
          component={jobsByCompany}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByCategory.url}
          component={jobsByCategory}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsByDesignation.url}
          component={jobsByDesignation}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsBySkill.url}
          component={jobsBySkill}
        />
        <PrivateRoutes
          exact
          path={constant.component.aboutUs.url}
          component={aboutUs}
        />
        <PrivateRoutes
          exact
          path={constant.component.privacyPolicy.url}
          component={privacyPolicy}
        />
        <PrivateRoutes
          exact
          path={constant.component.termsConditions.url}
          component={termsConditions}
        />
        <PrivateRoutes
          exact
          path={constant.component.searchbBoglist.url}
          component={BlogListBySearch}
        />
        <PrivateRoutes
          exact
          path={constant.component.searchjob.url}
          component={jobListBySearch}
        />
        {/* <PrivateRoutes exact path={constant.component.courseDetail.url} component={JavaFullStack} /> */}
        <PrivateRoutes
          exact
          path={constant.component.courseDetailById.url}
          component={courseDetail}
        />

        <PrivateRoutes
          exact
          path={constant.component.ByCompany.url}
          component={ByCompany}
        />
        <PrivateRoutes
          exact
          path={constant.component.interviewQuestionBySkillsId.url}
          component={BySkills}
        />
        <PrivateRoutes
          exact
          path={constant.component.ShareAnInterview.url}
          component={ShareAnInterview}
        />
        {/* <PrivateRoutes exact path={constant.component.AddAnswer.url} component={AddAnswer} /> */}
        {/* <PrivateRoutes exact path={constant.component.AllJobs.url} component={AllJobs} /> */}

        <Route path={constant.component.logout.url} component={Logout} />
        <Route
          path={constant.component.verifyEmail.url}
          component={EmailVerificationScreen}
        />

        {/* Profile Picture upload */}
        <ModalRoute
          exact
          path={constant.component.profileUpload.url}
          component={profilePicture}
        />
        {/* Profile Picture upload */}

        <CandidateRoute
          exact
          path={constant.component.premiumJobs.url}
          component={PremiumJobs}
        />
        <CandidateRoute
          exact
          path={constant.component.changePassword.url}
          component={ChangePassword}
        />
        <CandidateRoute
          exact
          path={constant.component.featuredJobs.url}
          component={FeaturedJobs}
        />
        <PrivateRoutes
          exact
          path={constant.component.buyCourse.url}
          component={buyCourse}
        />
        <PrivateRoutes
          exact
          path={constant.component.thankYou.url}
          component={ThankYou}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyAbroad.url}
          component={studyAbroad}
        />
        <PrivateRoutes
          exact
          path={constant.component.admissionAssistance.url}
          component={AdmissionAssistance}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyAbroadScholarship.url}
          component={StudyAbroadScholarship}
        />
        <PrivateRoutes
          exact
          path={constant.component.testPreparation.url}
          component={TestPreparation}
        />
        <PrivateRoutes
          exact
          path={constant.component.travelGuidance.url}
          component={travelGuidance}
        />
        <PrivateRoutes
          exact
          path={constant.component.visaApplicationAssistance.url}
          component={VisaApplicationAssistance}
        />
        <PrivateRoutes
          exact
          path={constant.component.coursesAdviceGuidance.url}
          component={CoursesAdviceGuidance}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyAbroadCounselling.url}
          component={studyAbroadCounselling}
        />
        <PrivateRoutes
          exact
          path={constant.component.visaCoverLetter.url}
          component={VisaCoverLetter}
        />
        <PrivateRoutes
          exact
          path={constant.component.sopWritingServices.url}
          component={SopWritingServices}
        />
        <PrivateRoutes
          exact
          path={constant.component.lorWritingServices.url}
          component={LorWritingServices}
        />
        <PrivateRoutes
          exact
          path={constant.component.resumeWritingServices.url}
          component={ResumeWritingServices}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInAustralia.url}
          component={StudyInAustralia}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInCanada.url}
          component={StudyInCanada}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInUk.url}
          component={StudyInUk}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInUsa.url}
          component={StudyInUsa}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInItaly.url}
          component={StudyInItaly}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInIreland.url}
          component={StudyInIreland}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInNewZealand.url}
          component={StudyInNewZealand}
        />
        <PrivateRoutes
          exact
          path={constant.component.studyInSingapore.url}
          component={StudyInSingapore}
        />
        <PrivateRoutes
          exact
          path={constant.component.internationalWorkVisas.url}
          component={InternationalWorkVisas}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerAstrology.url}
          component={CareerAstrology}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerReport1Year.url}
          component={CareerReport1Year}
        />
        <PrivateRoutes
          exact
          path={constant.component.remedialSolutionForCareer.url}
          component={RemedialSolutionForCareer}
        />
        <PrivateRoutes
          exact
          path={constant.component.strengthReadingForCareer.url}
          component={StrengthReadingForCareer}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerAsk1Question.url}
          component={CareerAsk1Question}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerAsk3Question.url}
          component={CareerAsk3Question}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerReport2Year.url}
          component={CareerReport2Year}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerReport3Year.url}
          component={CareerReport3Year}
        />
        <PrivateRoutes
          exact
          path={constant.component.careerReport5Years.url}
          component={CareerReport5Years}
        />

        <PrivateRoutes
          exact
          path={constant.component.interviewQuestion.url}
          component={InterviewQuestion}
        />
        <PrivateRoutes
          exact
          path={constant.component.interviewQuestionBySkills.url}
          component={InterviewQuestion}
        />
        <PrivateRoutes
          exact
          path={constant.component.JobSearchIndia.url}
          component={Jobsearchindia}
        />
        <PrivateRoutes
          exact
          path={constant.component.jobsearchIndiaDetail.url}
          component={JobSearchDetail}
        />
        <PrivateRoutes
          exact
          path={constant.component.interviewQuestionByCompany.url}
          component={InterviewQuestion}
        />
        <PrivateRoutes
          exact
          path={constant.component.interviewQuestionByDesignation.url}
          component={InterviewQuestion}
        />
        <PrivateRoutes
          exact
          path={constant.component.interviewAnswer.url}
          component={AddAnswer}
        />

        <PrivateRoutes
          exact
          path={constant.component.interviewQuestionByCompanyId.url}
          component={ByCompany}
        />

        <PrivateRoutes
          exact
          path={constant.component.interviewQuestionByDesignationId.url}
          component={ByDesignation}
        />

        <PrivateRoutes
          exact
          path={constant.component.companyInterviewAnswer.url}
          component={CompanyAnswer}
        />
        <PrivateRoutes
          exact
          path={constant.component.designationInterviewAnswer.url}
          component={DesignationAnswer}
        />

        <CandidateRoute exact path={constant.component.premiumJobs.url} component={PremiumJobs} />
        <CandidateRoute exact path={constant.component.changePassword.url} component={ChangePassword} />
        <CandidateRoute exact path={constant.component.featuredJobs.url} component={FeaturedJobs} />
        <PrivateRoutes exact path={constant.component.buyCourse.url} component={buyCourse} />
        <PrivateRoutes exact path={constant.component.thankYou.url} component={ThankYou} />
        <PrivateRoutes exact path={constant.component.studyAbroad.url} component={studyAbroad} />
        <PrivateRoutes exact path={constant.component.admissionAssistance.url} component={AdmissionAssistance} />
        <PrivateRoutes exact path={constant.component.studyAbroadScholarship.url} component={StudyAbroadScholarship} />
        <PrivateRoutes exact path={constant.component.testPreparation.url} component={TestPreparation} />
        <PrivateRoutes exact path={constant.component.travelGuidance.url} component={travelGuidance} />
        <PrivateRoutes exact path={constant.component.visaApplicationAssistance.url} component={VisaApplicationAssistance} />
        <PrivateRoutes exact path={constant.component.coursesAdviceGuidance.url} component={CoursesAdviceGuidance} />
        <PrivateRoutes exact path={constant.component.studyAbroadCounselling.url} component={studyAbroadCounselling} />
        <PrivateRoutes exact path={constant.component.visaCoverLetter.url} component={VisaCoverLetter} />
        <PrivateRoutes exact path={constant.component.sopWritingServices.url} component={SopWritingServices} />
        <PrivateRoutes exact path={constant.component.lorWritingServices.url} component={LorWritingServices} />
        <PrivateRoutes exact path={constant.component.resumeWritingServices.url} component={ResumeWritingServices} />
        <PrivateRoutes exact path={constant.component.studyInAustralia.url} component={StudyInAustralia} />
        <PrivateRoutes exact path={constant.component.studyInCanada.url} component={StudyInCanada} />
        <PrivateRoutes exact path={constant.component.studyInUk.url} component={StudyInUk} />
        <PrivateRoutes exact path={constant.component.studyInUsa.url} component={StudyInUsa} />
        <PrivateRoutes exact path={constant.component.studyInItaly.url} component={StudyInItaly} />
        <PrivateRoutes exact path={constant.component.studyInIreland.url} component={StudyInIreland} />
        <PrivateRoutes exact path={constant.component.studyInNewZealand.url} component={StudyInNewZealand} />
        <PrivateRoutes exact path={constant.component.studyInSingapore.url} component={StudyInSingapore} />
        <PrivateRoutes exact path={constant.component.internationalWorkVisas.url} component={InternationalWorkVisas} />
        <PrivateRoutes exact path={constant.component.careerAstrology.url} component={CareerAstrology} />
        <PrivateRoutes exact path={constant.component.careerReport1Year.url} component={CareerReport1Year} />
        <PrivateRoutes exact path={constant.component.remedialSolutionForCareer.url} component={RemedialSolutionForCareer} />
        <PrivateRoutes exact path={constant.component.strengthReadingForCareer.url} component={StrengthReadingForCareer} />
        <PrivateRoutes exact path={constant.component.careerAsk1Question.url} component={CareerAsk1Question} />
        <PrivateRoutes exact path={constant.component.careerAsk3Question.url} component={CareerAsk3Question} />
        <PrivateRoutes exact path={constant.component.careerReport2Year.url} component={CareerReport2Year} />
        <PrivateRoutes exact path={constant.component.careerReport3Year.url} component={CareerReport3Year} />
        <PrivateRoutes exact path={constant.component.careerReport5Years.url} component={CareerReport5Years} />
        <PrivateRoutes exact path={constant.component.workinAustralia.url} component={WorkinAustralia} />
        <PrivateRoutes exact path={constant.component.workinCanada.url} component={WorkinCanada} />
        <PrivateRoutes exact path={constant.component.workinUK.url} component={WorkinUK} />
        <PrivateRoutes exact path={constant.component.educationLoan.url} component={EducationLoan} />
        <CandidateRoute exact path={constant.component.premiumJobs.url} component={PremiumJobs} />
        <CandidateRoute exact path={constant.component.featuredJobs.url} component={FeaturedJobs} />
        <PrivateRoutes exact path={constant.component.buyCourse.url} component={buyCourse} />
        <PrivateRoutes exact path={constant.component.thankYou.url} component={ThankYou} />
        <PrivateRoutes exact path={constant.component.studyAbroad.url} component={studyAbroad} />
        <PrivateRoutes exact path={constant.component.admissionAssistance.url} component={AdmissionAssistance} />
        <PrivateRoutes exact path={constant.component.studyAbroadScholarship.url} component={StudyAbroadScholarship} />
        <PrivateRoutes exact path={constant.component.testPreparation.url} component={TestPreparation} />
        <PrivateRoutes exact path={constant.component.travelGuidance.url} component={travelGuidance} />
        <PrivateRoutes exact path={constant.component.visaApplicationAssistance.url} component={VisaApplicationAssistance} />
        <PrivateRoutes exact path={constant.component.coursesAdviceGuidance.url} component={CoursesAdviceGuidance} />
        <PrivateRoutes exact path={constant.component.studyAbroadCounselling.url} component={studyAbroadCounselling} />
        <PrivateRoutes exact path={constant.component.visaCoverLetter.url} component={VisaCoverLetter} />
        <PrivateRoutes exact path={constant.component.sopWritingServices.url} component={SopWritingServices} />
        <PrivateRoutes exact path={constant.component.lorWritingServices.url} component={LorWritingServices} />
        <PrivateRoutes exact path={constant.component.resumeWritingServices.url} component={ResumeWritingServices} />
        <PrivateRoutes exact path={constant.component.studyInAustralia.url} component={StudyInAustralia} />
        <PrivateRoutes exact path={constant.component.studyInCanada.url} component={StudyInCanada} />
        <PrivateRoutes exact path={constant.component.studyInUk.url} component={StudyInUk} />
        <PrivateRoutes exact path={constant.component.studyInUsa.url} component={StudyInUsa} />
        <PrivateRoutes exact path={constant.component.studyInItaly.url} component={StudyInItaly} />
        <PrivateRoutes exact path={constant.component.studyInIreland.url} component={StudyInIreland} />
        <PrivateRoutes exact path={constant.component.studyInNewZealand.url} component={StudyInNewZealand} />
        <PrivateRoutes exact path={constant.component.studyInSingapore.url} component={StudyInSingapore} />
        <PrivateRoutes exact path={constant.component.internationalWorkVisas.url} component={InternationalWorkVisas} />
        <PrivateRoutes exact path={constant.component.careerAstrology.url} component={CareerAstrology} />
        <PrivateRoutes exact path={constant.component.StudentsExplorer.url} component={StudentsExplorer} />
        <PrivateRoutes exact path={constant.component.CareerExplorerDetail.url} component={careerExplorerDetail} />
        <PrivateRoutes exact path={constant.component.ResumeViewOne.url} component={ResumeViewOne} />
        <PrivateRoutes exact path={constant.component.ResumeViewTwo.url} component={ResumeViewTwo} />
        <PrivateRoutes exact path={constant.component.ResumeViewThree.url} component={ResumeViewThree} />
        <PrivateRoutes exact path={constant.component.ResumeTemplateView01.url} component={ResumeTemplateView01} />
        <PrivateRoutes exact path={constant.component.ResumeTemplateView02.url} component={ResumeTemplateView02} />
        <PrivateRoutes exact path={constant.component.ResumeTemplateView03.url} component={ResumeTemplateView03} />
        <PrivateRoutes exact path={constant.component.resumeTemplate1.url} component={ResumeTemplate1} />
        <PrivateRoutes exact path={constant.component.workinUSA.url} component={WorkinUSA} />
        <PrivateRoutes exact path={constant.component.messageById.url} component={MessageById} />
        <PrivateRoutes exact path={constant.component.workinIreland.url} component={WorkinIreland} />
        <PrivateRoutes exact path={constant.component.workinNewZealand.url} component={WorkinNewZealand} />
        <PrivateRoutes exact path={constant.component.workinSingapore.url} component={WorkinSingapore} />
        <PrivateRoutes exact path={constant.component.workinMalaysia.url} component={WorkinMalaysia} />
        <PrivateRoutes exact path={constant.component.resumeTemplate2.url} component={ResumeTemplate2} />
        <PrivateRoutes exact path={constant.component.resumeTemplate3.url} component={ResumeTemplate3} />
        <PrivateRoutes exact path={constant.component.resumeTemplate4.url} component={ResumeTemplate4} />
        <PrivateRoutes exact path={constant.component.FullStackJobs.url} component={FullStackJobsIndia} />
        <PrivateRoutes exact path={constant.component.FullStackDeveloperJobsInIndia.url} component={jobsinIndia} />

        <PrivateRoutes exact path={constant.component.Swiggy.url} component={Swiggy} />
        <PrivateRoutes exact path={constant.component.SwiggyJobs.url} component={SwiggyJobs} />
        <PrivateRoutes exact path={constant.component.SwiggyAboutUs.url} component={SwiggyAboutUs} />
        <PrivateRoutes exact path={constant.component.SwiggyLife.url} component={SwiggyLife} />

        <PrivateRoutes exact path={constant.component.PMRozgarMela.url} component={PMRozgarMela} />

        <PrivateRoutes
          exact
          path={constant.component.AnswerByQuestion.url}
          component={AnswerByQuestion}
        />

        <PrivateRoutes
          exact
          path={constant.component.ResumeMaking.url}
          component={ResumeMaking}
        />
        <PrivateRoutes
          exact
          path={constant.component.TemplatePreview.url}
          component={TemplatePreview}
        />
        <PrivateRoutes
          exact
          path={constant.component.TemplatePreview01.url}
          component={TemplatePreview01}
        />
        <PrivateRoutes
          exact
          path={constant.component.TemplatePreview02.url}
          component={TemplatePreview02}
        />
        <PrivateRoutes
          exact
          path={constant.component.TemplateEdit.url}
          component={TemplateEdit}
        />
        <PrivateRoutes
          exact
          path={constant.component.TemplateEdit01.url}
          component={TemplateEdit01}
        />
        <PrivateRoutes
          exact
          path={constant.component.TemplateEdit02.url}
          component={TemplateEdit02}
        />
        <PrivateRoutes
          exact
          path={constant.component.discussionForumSignIn.url}
          component={DiscussionFormSignIn}
        />
        <PrivateRoutes
          exact
          path={constant.component.discussionForumCategory.url}
          component={DiscussionForumCategory}
        />

        <PrivateRoutes
          exact
          path={constant.component.commonSearchQuestion.url}
          component={CommonSearchQuestions}
        />
        <PrivateRoutes
          exact
          path={constant.component.commonSearchAnswer.url}
          component={CommonSearchAnswer}
        />
        <PrivateRoutes
          exact
          path={constant.component.ads.url}
          component={AdsMainPage}
        />
        <PrivateRoutes
          exact
          path={constant.component.updateTemplate01.url}
          component={UpdateTemplate}
        />
        <PrivateRoutes
          exact
          path={constant.component.updateTemplate02.url}
          component={UpdateTemplate01}
        />
        <PrivateRoutes
          exact
          path={constant.component.updateTemplate03.url}
          component={UpdateTemplate02}
        />
         
        <Route component={FourZeroFour} />
        </Switch>
           
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
