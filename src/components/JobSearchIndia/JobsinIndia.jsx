import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import constant from '../../constant'
import Pagination from 'react-js-pagination'


export default class JobsinIndia extends Component {
    
   constructor(props) {
    super(props);
    this.state = {
      detail:this.props,
      currentPage: 1   

    }
}
componentDidMount(){
     window.scroll(0,0);
    // this.props.getAllJobSearchIndia()
}

handlePageChange = (pageNumber) => {
  // this.state.currentPage = (pageNumber);
  console.log(pageNumber,"pageNumber");
  this.setState({
      currentPage: pageNumber
  })
  this.props.getAllJobInIndia(pageNumber)
};


  render() {
    const {List} = this.props
    return (
      <React.Fragment>
           <main id='rg-main' className='rg-main rg-haslayout pt-0'>
   <div className='rg-sectionspace rg-haslayout pt-0'>
      <div className='rozgar-jobbylocsearch'>
         <div className='container'>
            <div className='row'>
               <div className='col-12 col-sm-12 col-md-10 col-lg-10 offset-1'>
                  <h4 style={{fontSize: "24px", color: "white", textAlign: "center", width: "80%",marginLeft: "auto",marginRight: "auto"}}>Full Stack Developer Jobs In India - Search & Apply Premimum Full Stack Developer Jobs at Rozgar </h4>
               </div>
            </div>
         </div>
      </div>
      <div className='rozgar-profile-main-content'>
         <div className='container'>
            <div className='row'>
               <div className='col-md-9'>
              
                  <ul className='jobs-name-section'>
                    
                  {List?.map((item,index)=>{
                                            return(<li style={{width:'33%', float:'left'}}><Link style={{color:'#333333'}} to={constant.component.FullStackJobs.url.replace(':KEYWORD_URL', item.KEYWORD_URL)}>{item.KEYWORD_NAME}</Link></li>)
                                        })}

                     {/* <li><a href='/job-search-india/a-grade-jobs-in-india' >A Grade Jobs in India</a></li>
                     <li><a href='/job-search-india/ai-jobs-in-india' >AI Jobs in India</a></li>
                     <li><a href='/job-search-india/audiobook-narrator-jobs-in-india' >Audiobook Narrator Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-bangalore' >Jobs in India bangalore</a></li>
                     <li><a href='/job-search-india/jobs-in-india-business-analyst' >Jobs in India Business Analyst</a></li>
                     <li><a href='/job-search-india/jobs-in-india-biotechnology' >Jobs in India Biotechnology</a></li>
                     <li><a href='/job-search-india/jobs-in-bmw-india' >Jobs in BMW India</a></li>
                     <li><a href='/job-search-india/jobs-in-boeing-india' >Jobs in Boeing India</a></li>
                     <li><a href='/job-search-india/jobs-in-bbc-india' >Jobs in BBC India</a></li>
                     <li><a href='/job-search-india/jobs-in-bcg-india' >Jobs in BCG India</a></li>
                     <li><a href='/job-search-india/jobs-in-barclays-india' >Jobs in Barclays India</a></li>
                     <li><a href='/job-search-india/jobs-in-basf-india' >Jobs in Basf India</a></li>
                     <li><a href='/job-search-india/jobs-in-bosch-india' >Jobs in Bosch India</a></li>
                     <li><a href='/job-search-india/best-salary-jobs-in-india' >Best Salary Jobs in India</a></li>
                     <li><a href='/job-search-india/best-work-from-home-jobs-in-india' >Best Work from Home Jobs in India</a></li>
                     <li><a href='/job-search-india/best-jobs-in-india-with-high-salary' >Best Jobs in India with high Salary</a></li>
                     <li><a href='/job-search-india/best-paying-jobs-in-india' >Best Paying Jobs in India</a></li>
                     <li><a href='/job-search-india/bank-jobs-in-india' >Bank Jobs in India</a></li>
                     <li><a href='/job-search-india/business-analyst-jobs-in-india' >Business Analyst Jobs in India</a></li>
                     <li><a href='/job-search-india/biotechnology-jobs-in-india' >Biotechnology Jobs in India</a></li>
                     <li><a href='/job-search-india/blockchain-jobs-in-india' >Blockchain Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-civil-engineer' >Jobs in India Civil Engineer</a></li>
                     <li><a href='/job-search-india/jobs-in-india-cements' >Jobs in India cements</a></li>
                     <li><a href='/job-search-india/jobs-in-india-chennai' >Jobs in India chennai</a></li>
                     <li><a href='/job-search-india/jobs-in-india-consultancy-indore' >Jobs in India consultancy indore</a></li>
                     <li><a href='/job-search-india/jobs-in-india-cement-plant' >Jobs in India cement plant</a></li>
                     <li><a href='/job-search-india/jobs-in-india-construction' >Jobs in India construction</a></li>
                     <li><a href='/job-search-india/jobs-in-india-consulting' >Jobs in India consulting</a></li>
                     <li><a href='/job-search-india/jobs-in-coal-india' >Jobs in Coal India</a></li>
                     <li><a href='/job-search-india/jobs-in-citibank-india' >Jobs in Citibank India</a></li>
                     <li><a href='/job-search-india/jobs-in-care-india' >Jobs in Care India</a></li>
                     <li><a href='/job-search-india/cyber-security-jobs-in-india' >Cyber Security Jobs in India</a></li>
                     <li><a href='/job-search-india/civil-engineering-jobs-in-india' >Civil Engineering Jobs in India</a></li>
                     <li><a href='/job-search-india/cfa-jobs-in-india' >CFA Jobs in India</a></li>
                     <li><a href='/job-search-india/central-government-jobs-in-india' >Central Government Jobs in India</a></li>
                     <li><a href='/job-search-india/cpa-jobs-in-india' >CPA Jobs in India</a></li>
                     <li><a href='/job-search-india/cruise-ship-jobs-in-india' >Cruise Ship Jobs in India</a></li>
                     <li><a href='/job-search-india/csr-jobs-in-india' >CSR Jobs in India</a></li>
                     <li><a href='/job-search-india/canadian-embassy-jobs-in-india' >Canadian Embassy Jobs in India</a></li>
                     <li><a href='/job-search-india/ca-jobs-in-india' >CA Jobs in India</a></li>
                     <li><a href='/job-search-india/cyber-security-government-jobs-in-india' >Cyber Security Government Jobs in India</a></li>
                     <li><a href='/job-search-india/careers-in-deloitte-india' >Careers in Deloitte India</a></li>
                     <li><a href='/job-search-india/jobs-created-in-india' >Jobs Created in India</a></li>
                     <li><a href='/job-search-india/jobs-other-than-it-in-india' >Jobs Other than IT in India</a></li>
                     <li><a href='/job-search-india/jobs-which-are-in-demand-in-india' >Jobs which are in Demand in India</a></li>
                     <li><a href='/job-search-india/jobs-in-make-in-india' >Jobs in Make in India</a></li>
                     <li><a href='/job-search-india/data-scientist-jobs-in-india' >Data Scientist Jobs in India</a></li>
                     <li><a href='/job-search-india/data-analyst-jobs-in-india' >Data Analyst Jobs in India</a></li>
                     <li><a href='/job-search-india/defence-jobs-in-india' >Defence Jobs in India</a></li>
                     <li><a href='/job-search-india/data-entry-jobs-in-india' >Data Entry Jobs in India</a></li>
                     <li><a href='/job-search-india/devops-jobs-in-india' >Devops Jobs in India</a></li>
                     <li><a href='/job-search-india/digital-marketing-jobs-in-india' >Digital Marketing Jobs in India</a></li>
                     <li><a href='/job-search-india/demanding-jobs-in-india' >Demanding Jobs in India</a></li>
                     <li><a href='/job-search-india/data-engineer-jobs-in-india' >Data Engineer Jobs in India</a></li>
                     <li><a href='/job-search-india/document-controller-jobs-in-india' >Document Controller Jobs in India</a></li>
                     <li><a href='/job-search-india/drone-pilot-jobs-in-india' >Drone Pilot Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-embassy' >Jobs in India Embassy</a></li>
                     <li><a href='/job-search-india/jobs-in-india-essay' >Jobs in India essay</a></li>
                     <li><a href='/job-search-india/jobs-in-india-electrical-engineering' >Jobs in India Electrical Engineering</a></li>
                     <li><a href='/job-search-india/jobs-in-india-economics' >Jobs in India economics</a></li>
                     <li><a href='/job-search-india/jobs-in-ey-india' >Jobs in EY India</a></li>
                     <li><a href='/job-search-india/jobs-in-emaar-india' >Jobs in Emaar India</a></li>
                     <li><a href='/job-search-india/jobs-in-ericsson-india' >Jobs in Ericsson India</a></li>
                     <li><a href='/job-search-india/jobs-in-exxonmobil-india' >Jobs in Exxonmobil India</a></li>
                     <li><a href='/job-search-india/jobs-in-ebay-india' >Jobs in eBay India</a></li>
                     <li><a href='/job-search-india/jobs-in-eaton-india' >Jobs in Eaton India</a></li>
                     <li><a href='/job-search-india/embassy-jobs-in-india' >Embassy Jobs in India</a></li>
                     <li><a href='/job-search-india/environmental-jobs-in-india' >Environmental Jobs in India</a></li>
                     <li><a href='/job-search-india/electrical-engineer-jobs-in-india' >Electrical Engineer Jobs in India</a></li>
                     <li><a href='/job-search-india/engineering-jobs-in-india' >Engineering Jobs in India</a></li>
                     <li><a href='/job-search-india/executive-housekeeper-jobs-in-india' >Executive Housekeeper Jobs in India</a></li>
                     <li><a href='/job-search-india/economist-jobs-in-india' >Economist Jobs in India</a></li>
                     <li><a href='/job-search-india/environmental-science-jobs-in-india' >Environmental Science Jobs in India</a></li>
                     <li><a href='/job-search-india/electrical-jobs-in-india' >Electrical Jobs in India</a></li>
                     <li><a href='/job-search-india/executive-chef-jobs-in-india' >Executive chef Jobs in India</a></li>
                     <li><a href='/job-search-india/easy-government-jobs-in-india' >Easy Government Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-foreigners' >Jobs in India for Foreigners</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-us-returns' >Jobs in India for US Returns</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-english-speakers' >Jobs in India for English Speakers</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-us-citizens' >Jobs in India for US Citizens</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-expats' >Jobs in India for Expats</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-american-citizens' >Jobs in India for American Citizens</a></li>
                     <li><a href='/job-search-india/jobs-in-india-from-usa' >Jobs in India from USA</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-returning-nris' >Jobs in India for returning nris</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-freshers' >Jobs in India for Freshers</a></li>
                     <li><a href='/job-search-india/jobs-in-india-from-uk' >Jobs in India from UK</a></li>
                     <li><a href='/job-search-india/freelance-jobs-in-india' >Freelance Jobs in India</a></li>
                     <li><a href='/job-search-india/faculty-jobs-in-india' >Faculty Jobs in India</a></li>
                     <li><a href='/job-search-india/forensic-science-jobs-in-india' >Forensic Science Jobs in India</a></li>
                     <li><a href='/job-search-india/frm-jobs-in-india' >Frm Jobs in India</a></li>
                     <li><a href='/job-search-india/facebook-jobs-in-india' >Facebook Jobs in India</a></li>
                     <li><a href='/job-search-india/french-jobs-in-india' >French Jobs in India</a></li>
                     <li><a href='/job-search-india/future-jobs-in-india' >Future Jobs in India</a></li>
                     <li><a href='/job-search-india/finance-jobs-in-india' >Finance Jobs in India</a></li>
                     <li><a href='/job-search-india/forensic-jobs-in-india' >Forensic Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-government' >Jobs in India Government</a></li>
                     <li><a href='/job-search-india/jobs-in-india-glycols-ltd-kashipur' >Jobs in India Glycols Ltd Kashipur</a></li>
                     <li><a href='/job-search-india/jobs-in-india-glycols-ltd' >Jobs in India Glycols Ltd</a></li>
                     <li><a href='/job-search-india/jobs-in-google-india' >Jobs in Google India</a></li>
                     <li><a href='/job-search-india/jobs-in-gail-india' >Jobs in Gail India</a></li>
                     <li><a href='/job-search-india/jobs-in-gsk-india' >Jobs in GSK India</a></li>
                     <li><a href='/job-search-india/jobs-in-ge-india' >Jobs in GE India</a></li>
                     <li><a href='/job-search-india/jobs-in-google-india-with-salary' >Jobs in Google India with Salary</a></li>
                     <li><a href='/job-search-india/jobs-in-giz-india' >Jobs in GIZ India</a></li>
                     <li><a href='/job-search-india/jobs-in-gartner-india' >Jobs in Gartner India</a></li>
                     <li><a href='/job-search-india/google-jobs-in-india' >Google Jobs in India</a></li>
                     <li><a href='/job-search-india/gis-jobs-in-india' >Gis Jobs in India</a></li>
                     <li><a href='/job-search-india/geology-jobs-in-india' >Geology Jobs in India</a></li>
                     <li><a href='/job-search-india/geologist-jobs-in-india' >Geologist Jobs in India</a></li>
                     <li><a href='/job-search-india/grade-a-jobs-in-india' >Grade a Jobs in India</a></li>
                     <li><a href='/job-search-india/german-language-jobs-in-india' >German Language Jobs in India</a></li>
                     <li><a href='/job-search-india/genuine-work-from-home-jobs-in-india' >Genuine Work from Home Jobs in India</a></li>
                     <li><a href='/job-search-india/government-psychology-jobs-in-india' >Government Psychology Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-hyderabad' >Jobs in India Hyderabad</a></li>
                     <li><a href='/job-search-india/jobs-in-india-high-salary' >Jobs in India high Salary</a></li>
                     <li><a href='/job-search-india/jobs-in-india-habitat-centre-delhi' >Jobs in India habitat Centre Delhi</a></li>
                     <li><a href='/job-search-india/jobs-in-india-hotel-industry' >Jobs in India Hotel Industry</a></li>
                     <li><a href='/job-search-india/jobs-in-india-hospitality' >Jobs in India Hospitality</a></li>
                     <li><a href='/job-search-india/jobs-in-hp-india' >Jobs in HP India</a></li>
                     <li><a href='/job-search-india/jobs-in-helpage-india' >Jobs in Helpage India</a></li>
                     <li><a href='/job-search-india/jobs-in-hsbc-india' >Jobs in HSBC India</a></li>
                     <li><a href='/job-search-india/jobs-in-hotel-india' >Jobs in Hotel India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-with-highest-salary' >Jobs in India with Highest Salary</a></li>
                     <li><a href='/job-search-india/highly-paid-jobs-in-india' >Highly Paid Jobs in India</a></li>
                     <li><a href='/job-search-india/highest-paying-government-jobs-in-india' >Highest Paying Government Jobs in India</a></li>
                     <li><a href='/job-search-india/highest-paid-engineering-jobs-in-india' >Highest Paid Engineering Jobs in India</a></li>
                     <li><a href='/job-search-india/hr-jobs-in-india' >HR Jobs in India</a></li>
                     <li><a href='/job-search-india/highest-paying-jobs-in-india-for-fresher' >Highest Paying Jobs in India for Fresher</a></li>
                     <li><a href='/job-search-india/high-demand-jobs-in-india' >high Demand Jobs in India</a></li>
                     <li><a href='/job-search-india/highest-paid-jobs-in-india-in-science-field' >Highest Paid Jobs in India in Science field</a></li>
                     <li><a href='/job-search-india/jobs-in-india-indeed' >Jobs in India Indeed</a></li>
                     <li><a href='/job-search-india/jobs-in-india-infoline' >Jobs in India Infoline</a></li>
                     <li><a href='/job-search-india/jobs-in-india-indore' >Jobs in India Indore</a></li>
                     <li><a href='/job-search-india/jobs-in-india-it' >Jobs in India IT</a></li>
                     <li><a href='/job-search-india/jobs-in-ikea-india' >Jobs in ikea India</a></li>
                     <li><a href='/job-search-india/jobs-in-invest-india' >Jobs in invest India</a></li>
                     <li><a href='/job-search-india/careers-in-india-international-school-sharjah' >Careers in India International school sharjah</a></li>
                     <li><a href='/job-search-india/careers-in-infosys-india' >Careers in Infosys India</a></li>
                     <li><a href='/job-search-india/careers-in-ibm-india' >Careers in IBM India</a></li>
                     <li><a href='/job-search-india/careers-in-intel-india' >Careers in Intel India</a></li>
                     <li><a href='/job-search-india/it-jobs-in-india' >IT Jobs in India</a></li>
                     <li><a href='/job-search-india/indeed-jobs-in-india' >Indeed Jobs in India</a></li>
                     <li><a href='/job-search-india/international-work-from-home-jobs-in-india' >International Work from Home Jobs in India</a></li>
                     <li><a href='/job-search-india/investment-banking-jobs-in-india' >investment banking Jobs in India</a></li>
                     <li><a href='/job-search-india/interesting-jobs-in-india' >Interesting Jobs in India</a></li>
                     <li><a href='/job-search-india/international-relations-jobs-in-india' >International Relations Jobs in India</a></li>
                     <li><a href='/job-search-india/iti-jobs-in-india' >ITI Jobs in India</a></li>
                     <li><a href='/job-search-india/it-jobs-in-india-for-freshers' >IT Jobs in India for Freshers</a></li>
                     <li><a href='/job-search-india/in-demand-jobs-in-india' >In Demand Jobs in India</a></li>
                     <li><a href='/job-search-india/it-project-manager-jobs-in-india' >IT Project Manager Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-july-2022' >Jobs in India july 2022</a></li>
                     <li><a href='/job-search-india/jobs-in-india-for-japanese-language' >Jobs in India for Japanese Language</a></li>
                     <li><a href='/job-search-india/career-in-jcb-india' >Career in JCB India</a></li>
                     <li><a href='/job-search-india/careers-in-jll-india' >Careers in JLL India</a></li>
                     <li><a href='/job-search-india/jp-morgan-jobs-in-india' >JP Morgan Jobs in India</a></li>
                     <li><a href='/job-search-india/govt-jobs-jobs-in-india' >Govt Jobs Jobs in India</a></li>
                     <li><a href='/job-search-india/bank-jobs-jobs-in-india' >Bank Jobs Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-for-indian-in-japan' >Jobs for Indian in Japan</a></li>
                     <li><a href='/job-search-india/jobs-in-usa-for-indian-citizens' >Jobs in USA for Indian Citizens</a></li>
                     <li><a href='/job-search-india/jobs-in-indiana' >Jobs in Indiana</a></li>
                     <li><a href='/job-search-india/jobs-in-indiana-pa' >Jobs in Indiana PA</a></li>
                     <li><a href='/job-search-india/jobs-in-indianola-iowa' >Jobs in Indianola Iowa</a></li>
                     <li><a href='/job-search-india/jobs-in-indianola-ms' >Jobs in Indianola MS</a></li>
                     <li><a href='/job-search-india/japanese-language-jobs-in-india' >Japanese Language Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-indian-trail-nc' >Jobs in Indian Trail NC</a></li>
                     <li><a href='/job-search-india/java-developer-jobs-in-india' >Java Developer Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-indian-land-sc' >Jobs in Indian land sc</a></li>
                     <li><a href='/job-search-india/careers-in-kpmg-india' >Careers in KPMG India</a></li>
                     <li><a href='/job-search-india/kubernetes-jobs-in-india' >Kubernetes Jobs in India</a></li>
                     <li><a href='/job-search-india/korean-language-jobs-in-india' >Korean Language Jobs in India</a></li>
                     <li><a href='/job-search-india/korean-translator-jobs-in-india' >Korean Translator Jobs in India</a></li>
                     <li><a href='/job-search-india/korean-jobs-in-india' >Korean Jobs in India</a></li>
                     <li><a href='/job-search-india/kotlin-jobs-in-india' >Kotlin Jobs in India</a></li>
                     <li><a href='/job-search-india/kinaxis-jobs-in-india' >Kinaxis Jobs in India</a></li>
                     <li><a href='/job-search-india/kubernetes-administrator-jobs-in-india' >Kubernetes Administrator Jobs in India</a></li>
                     <li><a href='/job-search-india/kafka-jobs-in-india' >kafka Jobs in India</a></li>
                     <li><a href='/job-search-india/kronos-jobs-in-india' >kronos Jobs in India</a></li>
                     <li><a href='/job-search-india/krafton-jobs-in-india' >Krafton Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-list' >Jobs in India List</a></li>
                     <li><a href='/job-search-india/jobs-in-india-linkedin' >Jobs in India Linkedin</a></li>
                     <li><a href='/job-search-india/jobs-in-india-logistics' >Jobs in India Logistics</a></li>
                     <li><a href='/job-search-india/jobs-in-loreal-india' >Jobs in Loreal India</a></li>
                     <li><a href='/job-search-india/jobs-in-linde-india' >Jobs in Linde India</a></li>
                     <li><a href='/job-search-india/jobs-in-lic-india' >Jobs in LIC India</a></li>
                     <li><a href='/job-search-india/jobs-in-lamborghini-india' >Jobs in Lamborghini India</a></li>
                     <li><a href='/job-search-india/work-in-india-login' >Work in India login</a></li>
                     <li><a href='/job-search-india/jobs-in-oil-india-limited' >Jobs in Oil India Limited</a></li>
                     <li><a href='/job-search-india/jobs-in-coal-india-limited' >Jobs in coal India Limited</a></li>
                     <li><a href='/job-search-india/latest-govt-jobs-in-india' >Latest Govt Jobs in India</a></li>
                     <li><a href='/job-search-india/legal-jobs-in-india' >Legal Jobs in India</a></li>
                     <li><a href='/job-search-india/logistics-jobs-in-india' >Logistics Jobs in India</a></li>
                     <li><a href='/job-search-india/list-of-government-jobs-in-india' >List of Government Jobs in India</a></li>
                     <li><a href='/job-search-india/least-stressful-jobs-in-india' >Least Stressful Jobs in India</a></li>
                     <li><a href='/job-search-india/list-of-a-grade-government-jobs-in-india' >List of A Grade Government Jobs in India</a></li>
                     <li><a href='/job-search-india/latest-govt-jobs-in-india-2021' >Latest Govt Jobs in India 2021</a></li>
                     <li><a href='/job-search-india/land-surveyor-jobs-in-india' >Land Surveyor Jobs in India</a></li>
                     <li><a href='/job-search-india/lowest-paying-jobs-in-india' >Lowest Paying Jobs in India</a></li>
                     <li><a href='/job-search-india/librarian-jobs-in-india' >Librarian Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-mumbai' >Jobs in India Mumbai</a></li>
                     <li><a href='/job-search-india/jobs-in-indiamart' >Jobs in Indiamart</a></li>
                     <li><a href='/job-search-india/jobs-in-india-mechanical-engineer' >Jobs in India Mechanical Engineer</a></li>
                     <li><a href='/job-search-india/jobs-in-india-marketing' >Jobs in India marketing</a></li>
                     <li><a href='/job-search-india/jobs-in-indiamart-noida' >Jobs in Indiamart Noida</a></li>
                     <li><a href='/job-search-india/jobs-in-indiamart-work-from-home' >Jobs in Indiamart Work from Home</a></li>
                     <li><a href='/job-search-india/jobs-in-indiamart-bangalore' >Jobs in Indiamart bangalore</a></li>
                     <li><a href='/job-search-india/jobs-in-indiamart-hyderabad' >Jobs in Indiamart Hyderabad</a></li>
                     <li><a href='/job-search-india/jobs-in-microsoft-india' >Jobs in Microsoft India</a></li>
                     <li><a href='/job-search-india/jobs-in-mckinsey-india' >Jobs in Mckinsey India</a></li>
                     <li><a href='/job-search-india/most-paid-jobs-in-india' >Most Paid Jobs in India</a></li>
                     <li><a href='/job-search-india/most-demanding-jobs-in-india' >Most Demanding Jobs in India</a></li>
                     <li><a href='/job-search-india/most-respected-jobs-in-india' >Most Respected Jobs in India</a></li>
                     <li><a href='/job-search-india/microsoft-jobs-in-india' >Microsoft Jobs in India</a></li>
                     <li><a href='/job-search-india/most-salary-jobs-in-india' >Most Salary Jobs in India</a></li>
                     <li><a href='/job-search-india/mining-jobs-in-india' >Mining Jobs in India</a></li>
                     <li><a href='/job-search-india/most-stressful-jobs-in-india' >Most Stressful Jobs in India</a></li>
                     <li><a href='/job-search-india/most-powerful-jobs-in-india' >Most Powerful Jobs in India</a></li>
                     <li><a href='/job-search-india/mechanical-engineering-jobs-in-india' >Mechanical Engineering Jobs in India</a></li>
                     <li><a href='/job-search-india/mba-jobs-in-india' >MBA Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-news' >Jobs in India news</a></li>
                     <li><a href='/job-search-india/jobs-in-india-nursing' >Jobs in India Nursing</a></li>
                     <li><a href='/job-search-india/jobs-in-netflix-india' >Jobs in Netflix India</a></li>
                     <li><a href='/job-search-india/jobs-in-nestle-india' >Jobs in Nestle India</a></li>
                     <li><a href='/job-search-india/jobs-in-nike-india' >Jobs in Nike India</a></li>
                     <li><a href='/job-search-india/jobs-in-ngo-india' >Jobs in NGO India</a></li>
                     <li><a href='/job-search-india/jobs-in-natwest-india' >Jobs in Natwest India</a></li>
                     <li><a href='/job-search-india/job-in-new-india-assurance' >Job in New India assurance</a></li>
                     <li><a href='/job-search-india/career-in-namaste-india' >Career in Namaste India</a></li>
                     <li><a href='/job-search-india/ngo-jobs-in-india' >NGO Jobs in India</a></li>
                     <li><a href='/job-search-india/nursing-jobs-in-india' >Nursing Jobs in India</a></li>
                     <li><a href='/job-search-india/nanotechnology-jobs-in-india' >Nanotechnology Jobs in India</a></li>
                     <li><a href='/job-search-india/ngo-jobs-in-india-for-freshers' >NGO Jobs in India for Freshers</a></li>
                     <li><a href='/job-search-india/nestle-jobs-in-india' >Nestle Jobs in India</a></li>
                     <li><a href='/job-search-india/ndt-jobs-in-india' >NDT Jobs in India</a></li>
                     <li><a href='/job-search-india/netflix-tagger-jobs-in-india' >Netflix tagger Jobs in India</a></li>
                     <li><a href='/job-search-india/new-jobs-in-india' >New Jobs in India</a></li>
                     <li><a href='/job-search-india/network-engineer-jobs-in-india' >Network Engineer Jobs in India</a></li>
                     <li><a href='/job-search-india/no-jobs-in-india' >No Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-online' >Jobs in India Online</a></li>
                     <li><a href='/job-search-india/jobs-in-india-oil-and-gas' >Jobs in India Oil and Gas</a></li>
                     <li><a href='/job-search-india/job-in-india-or-abroad' >Job in India or Abroad</a></li>
                     <li><a href='/job-search-india/jobs-in-outside-india' >Jobs in Outside India</a></li>
                     <li><a href='/job-search-india/jobs-in-oracle-india' >Jobs in Oracle India</a></li>
                     <li><a href='/job-search-india/jobs-in-oxfam-india' >Jobs in Oxfam India</a></li>
                     <li><a href='/job-search-india/work-in-india-or-abroad' >Work in India or Abroad</a></li>
                     <li><a href='/job-search-india/job-in-oil-india-assam' >Job in Oil India assam</a></li>
                     <li><a href='/job-search-india/freelancer-jobs-in-india-online' >Freelancer Jobs in India Online</a></li>
                     <li><a href='/job-search-india/online-teaching-jobs-in-india' >Online Teaching Jobs in India</a></li>
                     <li><a href='/job-search-india/online-work-from-home-jobs-in-india' >Online Work from Home Jobs in India</a></li>
                     <li><a href='/job-search-india/oil-and-gas-jobs-in-india' >Oil and Gas Jobs in India</a></li>
                     <li><a href='/job-search-india/online-tutor-jobs-in-india' >Online Tutor Jobs in India</a></li>
                     <li><a href='/job-search-india/online-data-entry-jobs-in-india' >Online Data Entry Jobs in India</a></li>
                     <li><a href='/job-search-india/online-survey-jobs-in-india' >Online Survey Jobs in India</a></li>
                     <li><a href='/job-search-india/online-part-time-jobs-in-india' >Online Part Time Jobs in India</a></li>
                     <li><a href='/job-search-india/offshore-jobs-in-india' >Offshore Jobs in India</a></li>
                     <li><a href='/job-search-india/online-typing-jobs-in-india' >Online Typing Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-post' >Jobs in India post</a></li>
                     <li><a href='/job-search-india/jobs-in-india-post-payment-bank' >Jobs in India post Payment Bank</a></li>
                     <li><a href='/job-search-india/jobs-in-india-punjab' >Jobs in India Punjab</a></li>
                     <li><a href='/job-search-india/jobs-in-india-private' >Jobs in India Private</a></li>
                     <li><a href='/job-search-india/jobs-in-pepsico-india' >Jobs in Pepsico India</a></li>
                     <li><a href='/job-search-india/jobs-in-pfizer-india' >Jobs in Pfizer India</a></li>
                     <li><a href='/job-search-india/jobs-in-puma-india' >Jobs in Puma India</a></li>
                     <li><a href='/job-search-india/jobs-in-pwc-india' >Jobs in PWC India</a></li>
                     <li><a href='/job-search-india/jobs-in-pan-india' >Jobs in Pan India</a></li>
                     <li><a href='/job-search-india/jobs-in-paypal-india' >Jobs in PayPal India</a></li>
                     <li><a href='/job-search-india/pilot-jobs-in-india' >Pilot Jobs in India</a></li>
                     <li><a href='/job-search-india/private-jobs-in-india' >Private Jobs in India</a></li>
                     <li><a href='/job-search-india/part-time-jobs-in-india' >Part Time Jobs in India</a></li>
                     <li><a href='/job-search-india/power-bi-jobs-in-india' >Power BI Jobs in India</a></li>
                     <li><a href='/job-search-india/powerful-jobs-in-india' >Powerful Jobs in India</a></li>
                     <li><a href='/job-search-india/psu-jobs-in-india' >PSU Jobs in India</a></li>
                     <li><a href='/job-search-india/public-health-jobs-in-india' >Public Health Jobs in India</a></li>
                     <li><a href='/job-search-india/permanent-work-from-home-jobs-in-india' >Permanent Work from Home Jobs in India</a></li>
                     <li><a href='/job-search-india/project-manager-jobs-in-india' >Project Manager Jobs in India</a></li>
                     <li><a href='/job-search-india/psychology-jobs-in-india' >Psychology Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-quora' >Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/jobs-in-quikr-india-pvt-ltd' >Jobs in Quikr India pvt Ltd</a></li>
                     <li><a href='/job-search-india/career-in-india-quiz' >Career in India quiz</a></li>
                     <li><a href='/job-search-india/best-jobs-in-india-quora' >Best Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/acca-jobs-in-india-quora' >Acca Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/travelling-jobs-in-india-quora' >Travelling Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/freelance-jobs-in-india-quora' >Freelance Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/online-jobs-in-india-quora' >Online Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/transcription-jobs-in-india-quora' >Transcription Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/government-jobs-in-india-quora' >Government Jobs in India Quora</a></li>
                     <li><a href='/job-search-india/qualifications-for-cruise-ship-jobs-in-india' >Qualifications for Cruise Ship Jobs in India</a></li>
                     <li><a href='/job-search-india/quantity-surveyor-jobs-in-india' >Quantity Surveyor Jobs in India</a></li>
                     <li><a href='/job-search-india/qa-jobs-in-india' >QA Jobs in India</a></li>
                     <li><a href='/job-search-india/qualcomm-jobs-in-india' >Qualcomm Jobs in India</a></li>
                     <li><a href='/job-search-india/quality-manager-jobs-in-india' >Quality Manager Jobs in India</a></li>
                     <li><a href='/job-search-india/quant-jobs-in-india' >Quant Jobs in India</a></li>
                     <li><a href='/job-search-india/quantum-computing-jobs-in-india' >Quantum Computing Jobs in India</a></li>
                     <li><a href='/job-search-india/qualification-for-bank-jobs-in-india' >Qualification for Bank Jobs in India</a></li>
                     <li><a href='/job-search-india/quality-control-jobs-in-india' >Quality Control Jobs in India</a></li>
                     <li><a href='/job-search-india/quadient-inspire-jobs-in-india' >Quadient Inspire Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-remote' >Jobs in India Remote</a></li>
                     <li><a href='/job-search-india/jobs-in-india-railway' >Jobs in India Railway</a></li>
                     <li><a href='/job-search-india/jobs-in-india-reddit' >Jobs in India reddit</a></li>
                     <li><a href='/job-search-india/jobs-in-raw-india' >Jobs in Raw India</a></li>
                     <li><a href='/job-search-india/jobs-in-roche-india' >Jobs in Roche India</a></li>
                     <li><a href='/job-search-india/jobs-in-redbull-india' >Jobs in Redbull India</a></li>
                     <li><a href='/job-search-india/jobs-in-rakuten-india' >Jobs in Rakuten India</a></li>
                     <li><a href='/job-search-india/jobs-in-reliance-india' >Jobs in Reliance India</a></li>
                     <li><a href='/job-search-india/jobs-in-rbs-india' >Jobs in RBS India</a></li>
                     <li><a href='/job-search-india/jobs-in-rbi-india' >Jobs in RBI India</a></li>
                     <li><a href='/job-search-india/remote-jobs-in-india' >Remote Jobs in India</a></li>
                     <li><a href='/job-search-india/research-jobs-in-india' >Research Jobs in India</a></li>
                     <li><a href='/job-search-india/remote-us-jobs-in-india' >Remote US Jobs in India</a></li>
                     <li><a href='/job-search-india/richest-jobs-in-india' >Richest Jobs in India</a></li>
                     <li><a href='/job-search-india/railway-jobs-in-india' >Railway Jobs in India</a></li>
                     <li><a href='/job-search-india/research-scientist-jobs-in-india' >Research Scientist Jobs in India</a></li>
                     <li><a href='/job-search-india/renewable-energy-jobs-in-india' >Renewable Energy Jobs in India</a></li>
                     <li><a href='/job-search-india/rpa-jobs-in-india' >RPA Jobs in India</a></li>
                     <li><a href='/job-search-india/respected-jobs-in-india' >Respected Jobs in India</a></li>
                     <li><a href='/job-search-india/remote-sensing-jobs-in-india' >Remote Sensing Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-salary' >Jobs in India Salary</a></li>
                     <li><a href='/job-search-india/jobs-in-india-software-engineer' >Jobs in India software Engineer</a></li>
                     <li><a href='/job-search-india/jobs-in-india-statistics' >Jobs in India Statistics</a></li>
                     <li><a href='/job-search-india/jobs-in-india-sales' >Jobs in India Sales</a></li>
                     <li><a href='/job-search-india/jobs-in-india-survey' >Jobs in India Survey</a></li>
                     <li><a href='/job-search-india/jobs-in-siemens-india' >Jobs in Siemens India</a></li>
                     <li><a href='/job-search-india/jobs-in-spotify-india' >Jobs in Spotify India</a></li>
                     <li><a href='/job-search-india/jobs-in-shell-india' >Jobs in Shell India</a></li>
                     <li><a href='/job-search-india/jobs-in-salesforce-india' >Jobs in Salesforce India</a></li>
                     <li><a href='/job-search-india/jobs-in-samsung-india' >Jobs in samsung India</a></li>
                     <li><a href='/job-search-india/safety-officer-jobs-in-india' >Safety officer Jobs in India</a></li>
                     <li><a href='/job-search-india/salesforce-jobs-in-india' >Salesforce Jobs in India</a></li>
                     <li><a href='/job-search-india/steve-jobs-in-india' >Steve Jobs in India</a></li>
                     <li><a href='/job-search-india/scientist-jobs-in-india' >Scientist Jobs in India</a></li>
                     <li><a href='/job-search-india/snowflake-jobs-in-india' >Snowflake Jobs in India</a></li>
                     <li><a href='/job-search-india/safety-jobs-in-india' >Safety Jobs in India</a></li>
                     <li><a href='/job-search-india/ship-jobs-in-india' >Ship Jobs in India</a></li>
                     <li><a href='/job-search-india/stress-free-jobs-in-india' >Stress Free Jobs in India</a></li>
                     <li><a href='/job-search-india/servicenow-jobs-in-india' >Servicenow Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-india-today' >Jobs in India today</a></li>
                     <li><a href='/job-search-india/jobs-in-india-that-pay-well' >Jobs in India that Pay Well</a></li>
                     <li><a href='/job-search-india/jobs-in-india-tv-noida' >Jobs in India Tv Noida</a></li>
                     <li><a href='/job-search-india/jobs-in-india-tv' >Jobs in India Tv</a></li>
                     <li><a href='/job-search-india/jobs-in-india-tourism' >Jobs in India Tourism</a></li>
                     <li><a href='/job-search-india/jobs-in-india-that-don-t-require-a-degree' >Jobs in India that don't Require a Degree</a></li>
                     <li><a href='/job-search-india/jobs-in-india-that-pay-you-to-travel' >Jobs in India that Pay you to Travel</a></li>
                     <li><a href='/job-search-india/jobs-in-tesla-india' >Jobs in Tesla India</a></li>
                     <li><a href='/job-search-india/jobs-in-twitter-india' >Jobs in Twitter India</a></li>
                     <li><a href='/job-search-india/jobs-in-tcs-india' >Jobs in TCS India</a></li>
                     <li><a href='/job-search-india/top-10-highest-paying-jobs-in-india' >Top 10 Highest Paying Jobs in India</a></li>
                     <li><a href='/job-search-india/top-jobs-in-india' >Top Jobs in India</a></li>
                     <li><a href='/job-search-india/top-salary-jobs-in-india' >Top Salary Jobs in India</a></li>
                     <li><a href='/job-search-india/top-paying-jobs-in-india' >Top Paying Jobs in India</a></li>
                     <li><a href='/job-search-india/travelling-jobs-in-india' >Travelling Jobs in India</a></li>
                     <li><a href='/job-search-india/top-10-jobs-in-india' >Top 10 Jobs in India</a></li>
                     <li><a href='/job-search-india/top-government-jobs-in-india' >Top Government Jobs in India</a></li>
                     <li><a href='/job-search-india/transcription-jobs-in-india' >Transcription Jobs in India</a></li>
                     <li><a href='/job-search-india/top-50-highest-paid-jobs-in-india' >Top 50 Highest Paid Jobs in India</a></li>
                     <li><a href='/job-search-india/jobs-in-unicef-india' >Jobs in Unicef India</a></li>
                     <li><a href='/job-search-india/jobs-in-undp-india' >Jobs in UNDP India</a></li>
                     <li><a href='/job-search-india/jobs-in-u-s-a-for-indian' >Jobs in U.S.A for Indian</a></li>
                     <li><a href='/job-search-india/job-opportunities-in-usa-for-indian' >Job Opportunities in USA for Indian</a></li>
                     <li><a href='/job-search-india/jobs-in-usa-for-indian-students' >Jobs in USA for Indian Students</a></li>
                     <li><a href='/job-search-india/un-jobs-in-india' >UN Jobs in India</a></li>
                     <li><a href='/job-search-india/us-remote-jobs-in-india' >US Remote Jobs in India</a></li>
                     <li><a href='/job-search-india/us-embassy-jobs-in-india' >US Embassy Jobs in India</a></li>
                     <li><a href='/job-search-india/us-cma-jobs-in-india' >US CMA Jobs in India</a></li>
                     <li><a href='/job-search-india/undp-jobs-in-india' >UNDP Jobs in India</a></li>
                     <li><a href='/job-search-india/university-jobs-in-india' >University Jobs in India</a></li>
                     <li><a href='/job-search-india/unicef-jobs-in-india' >Unicef Jobs in India</a></li>
                     <li><a href='/job-search-india/usa-work-from-home-jobs-in-india' >USA Work from Home Jobs in India</a></li>
                     <li><a href='/job-search-india/unique-jobs-in-india' >Unique Jobs in India</a></li>
                     <li><a href='/job-search-india/urban-planning-jobs-in-india' >Urban Planning Jobs in India</a></li> */}
                  </ul>
               </div>
               <div className='col-md-3'>
               <div className='rightform1'>
                                    

                                    <div className='roz-create-cv'>
                                       <div className='urgent-hiring-area'>
                                         <div className='hiring-img'>
                                           <img src='../assets/images/announce-img01.png' />
                                         </div>
                                         <div className='immediate-joiners'>
                                           <a href='/jobs/hiring-fresher'>Immediate Joiners</a>
                                         </div>
                                       </div>
                                       <a target='_blank' href='/resume-making'>
                                         <div className='imgfree'>
                                           <img src='../assets/images/cv-pic01.png' />
                                         </div>
                                         <div className='create-cv-bg'>
                                           <div className='create-text'>
                                             <div className='free-text'>Free</div>
                                             <h4>Create CV</h4>
                                           </div>
                                           <div className='btn-cv'>
                                             <i className='fa fa-angle-double-right'></i>
                                           </div>
                                         </div>
                                       </a>
                                     </div>
                                      
                                     <div className='create-free-job-alert new-create-free'>
                                       <div className='create-free-job-box'>
                                           <h3>Create a Free Job Alert</h3>
                                           <p>Get an email on jobs matching your criteria</p>
                                           <span className='no-reg-r'>No registration required</span>
                                       </div>
                                       <div className='create-job-alert-btn'><a href={constant.component.CreateJobAlert.url}>CREATE JOB ALERT</a></div>
                                     </div>
                                     <div className='rg-adds rg-jobsearchadd swiggyjobs-bx'>
                                       <a target='_blank' href='https://recruit.rozgar.com/job-post' title=''>
                                         <figure>
                                           <img src='../../assets/images/post-a-job.jpg' alt='img description' style={{padding: "0px" }} />
                                         </figure>
                                       </a>
                                      
                                     </div>
                                     <div className='rg-adds rg-jobsearchadd swiggyjobs-bx'>
                                       <a target='_blank' href={constant.component.StudentsExplorer.url} title=''>
                                         <figure>
                                           <img src='../../assets/images/career-explorer.jpg' alt='img description' style={{padding: "0px" }} />
                                         </figure>
                                       </a>
                                      
                                     </div>

                                    <div className='rg-adds rg-jobsearchadd swiggyjobs-bx mb'>
                                       <a href='javascript:void(0);' title=''>
                                         <figure>
                                           <img src='../../assets/images/swiggyjobs.jpg' alt='img description' />
                                         </figure>
                                       </a>
                                       <span>Ad</span>
                                   </div>
                                  
                                   <div className='rg-adds rg-jobsearchadd'>
                                       <a href='javascript:void(0);' title=''>
                                         <figure>
                                           <img src='../../assets/images/adds-05.jpg' alt='img description' />
                                         </figure>
                                       </a>
                                       <span>Ad</span>
                                     </div>
                                     </div>
                            <div className='rightform rightform-right'>                                       
                              <h3>Popular Searches</h3>
                              <ul className='popuraljobIncity'>
                                  <li><a href='https://rozgar.com/search-job?keyword=PHP%20Developer&amp;location=Noida'>Latest PHP Jobs in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=full%20stack%20developer&amp;location=noida'>Full Stack Developer in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=React%20JS&amp;location=noida'>React Js Developer in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=JavaScript&amp;location=noida'>JavaScript Developer in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=UI%20Developer&amp;location=noida'>UI developer in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=mern%20developer&amp;location=noida'>Mern Developer in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=cloud%20computing&amp;location=noida'>Cloud Computing in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=IT&amp;location=Noida'>IT Jobs in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=Python&amp;location=noida'>Python Developer in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=React%20JS&amp;location=delhi'>React Js Developer in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=JavaScript&amp;location=delhi'>JavaScript Developer in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=UI%20Developer&amp;location=delhi'>UI developer in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=cloud%20computing&amp;location=delhi'>Cloud Computing in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=PHP%20Developer&amp;location=delhi'>Latest PHP Jobs in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=full%20stack%20developer&amp;location=delhi'>Full Stack Developer in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=IT&amp;location=delhi'>IT Jobs in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=Python&amp;location=delhi'>Python Developer in Delhi</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=JavaScript&amp;location=pune'>JavaScript Developer in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=UI%20Developer&amp;location=pune'>UI developer in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=cloud%20computing&amp;location=pune'>Cloud Computing in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=PHP%20Developer&amp;location=pune'>Latest PHP Jobs in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=full%20stack%20developer&amp;location=pune'>Full Stack Developer in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=full%20stack%20developer&amp;location=pune'>IT Jobs in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=Python&amp;location=pune'>Python Developer in Pune</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=JavaScript&amp;location=gurugram'>JavaScript Developer in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=UI%20Developer&amp;location=gurugram'>UI developer in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=cloud%20computing&amp;location=gurugram'>Cloud Computing in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=PHP%20Developer&amp;location=gurugram'>Latest PHP Jobs in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=full%20stack%20developer&amp;location=gurugram'>Full Stack Developer in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=IT&amp;location=gurugram'>IT Jobs in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=Python&amp;location=gurugram'>Python Developer in Gurugram</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=aws&amp;location=noida'>AWS in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=Machine%20Learning&amp;location=noida'>Machine Learning in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=blockchain&amp;location=noida'>BlockChain in Noida</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=Java'>Java Developer</a></li>
                                  <li><a href='https://rozgar.com/search-job?keyword=NLP'>Natural Language Processing</a></li>
                              </ul>
                          </div>
                      </div>
                          <nav className="rg-pagination">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <ul className="pagination pagination-rounded justify-content-center mt-4">
                                          <Pagination
                                              activePage={this.state.currentPage}
                                              totalItemsCount={this.props.count}
                                              itemsCountPerPage={200}
                                              pageRangeDisplayed={10}
                                              onChange={this.handlePageChange}
                                              itemClass="page-item"
                                              linkClass="page-link"
                                          />
                                      </ul>
                                  </div>
                              </div>
                          </nav>
            </div>
         </div>
      </div>
   </div>
</main>
      </React.Fragment>
    )
  }
}
