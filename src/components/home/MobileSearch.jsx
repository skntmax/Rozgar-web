import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { IQTotalCompanyById, IQTotalCountById, IQTotalDesignationById, IQTotalSkillById, jobCountByTopCategory, KeywordSearch, LocationSearch, statistics, topCompanyImages, topCompanyList, topPremiumFeaturedCompanyList } from '../../action/dashboard';
import constant from '../../constant';
import { Typeahead } from 'react-bootstrap-typeahead';
import { getRandomColorBtn, numberWithCommas, onChange, setError, setOptions, validateForm } from '../../utils';
import Carousel from 'react-bootstrap/Carousel'
import { get } from 'react-scroll/modules/mixins/scroller';
import Shimmer from '../common/Shimmer';
import { premiumCityList } from '../../action/jobsByActions';
import FeaturedSlider from '../common/FeaturedSlider/FeaturedSlider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RozgarLearn from '../LearningHub/courseDetail';
import { style } from '@mui/system';
import networkinglogo from '../../../src/assets/images/Networking.jpg'

export default class hometabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompanies: false,
            premiumService: false,
            employerService: false,
            CITY_LIST: null,
            clientCount: 0,
            tempKeyword: "",
            tempLocation: "",
            LOCATION_LIST: {},
            jobCount: 0,
            candidatesCount: 0,
            recruiterCount: 0,
            setclientCount: 0,
            setjobCount: 0,
            setcandidatesCount: 0,
            setrecruiterCount: 0,
            // KEYWORD: { name: 'KEYWORD', value: [], options: [], error: '', isRequired: false },
            JOB_COUNT_BY_TOP_CATEGORY: this.props?.JOB_COUNT_BY_TOP_CATEGORY ? this.props?.JOB_COUNT_BY_TOP_CATEGORY : null,
            // FEATURED_COMPANIES: null,
            // PREMIUM_COMPANIES: null,
            FEATURED_COMPANIES: this.props?.FEATURED_COMPANIES ? this.props?.FEATURED_COMPANIES : null,
            PREMIUM_COMPANIES: this.props?.PREMIUM_COMPANIES ? this.props?.PREMIUM_COMPANIES : null,
            premium: [],
            // TOP_COMPANY_IMAGES: this.props?.TOP_COMPANY_IMAGES ? this.props?.TOP_COMPANY_IMAGES : [],
            TOP_COMPANY_IMAGES: [],
            KEYWORD: { name: 'KEYWORD', value: [], options: [], error: '', isRequired: true },
            LOCATION: { name: 'LOCATION', value: [], options: [], error: '', isRequired: false },
            EXPERIENCE: {
                name: 'EXPERIENCE', value: [], options: [{ value: [0, 1], range: '0-1 Year' },
                { value: [1, 3], range: '1-3 Years' },
                { value: [3, 5], range: '3-5 Years' },
                { value: [5, 7], range: '5-7 Years' },
                { value: [7, 10], range: '7-10 Years' },
                { value: [10, 12], range: '10-12 Years' },
                { value: [12, 14], range: '12-14 Years' },
                { value: [14, 16], range: '14-16 Years' },
                { value: [16, 18], range: '16-18 Years' },
                { value: [18, 20], range: '18-20 Years' },
                { value: [20, 25], range: '20-25 Years' },
                { value: [25, 30], range: '25-30 Years' },
                { value: [30, undefined], range: '30+ Years' },

                ], error: '', isRequired: false
            },
            SALARY: {
                name: 'SALARY', value: [], options: [{ value: [0, 500000], range: '0-5 Lacs' },
                { value: [500000, 1000000], range: '5-10 Lacs' },
                { value: [1000000, 15000000], range: '10-15 Lacs' },
                { value: [15000000, 2000000], range: '15-20 Lacs' },
                { value: [2000000, 25000000], range: '20-25 Lacs' },
                { value: [25000000, 3000000], range: '25-30 Lacs' },
                { value: [3000000, 4000000], range: '30-40 Lacs' },
                { value: [4000000, 5000000], range: '40-50 Lacs' },
                { value: [5000000, 6000000], range: '50-60 Lacs' },
                { value: [6000000, 7000000], range: '60-70 Lacs' },
                { value: [7000000, 8000000], range: '70-80 Lacs' },
                { value: [8000000, 9000000], range: '80-90 Lacs' },
                { value: [9000000, 10000000], range: '90-100 Lacs' },
                { value: [10000000, undefined], range: '1 Cr+' }], error: '', isRequired: false
            },
            selectedKeyword: [],
            error: {},
            QuestionDetails: [13, 58, 11, 1],
            CompanyQuestionDetails: [6, 8, 17, 1, 16284],
            RolesQuestionDetails: [2272, 171, 226, 262],
            QIdSkillCount: [],
            QIdCompanyCount: [],
            QIdRoleCount: [],
        }
    }

    toggleCompanies = () => {
        const { showCompanies } = this.state;
        this.setState({ showCompanies: !showCompanies })
    }
    togglePremiumService = () => {
        const { premiumService } = this.state;
        this.setState({ premiumService: !premiumService })
    }
    toggleEmployerService = () => {
        const { employerService } = this.state;
        this.setState({ employerService: !employerService })
    }

    componentDidMount() {
        this.setState({ jobCount: 1156843, clientCount: 9593, candidatesCount: 12333676, recruiterCount: 98653 })
        let counter = setInterval(this.counter, 1000)
        clearInterval(counter)
        this.getPremiumCityList()
        this.getTopCompanyImages()

        this.InterQuestionSkillById()
        this.InterQuestionCompanyById()
        this.InterQuestionDesignationById()
        jobCountByTopCategory().then(res => {
            if (res.status) {
                this.setState({ JOB_COUNT_BY_TOP_CATEGORY: res.result })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
        topPremiumFeaturedCompanyList().then(res => {
            if (res.status) {
                this.setState({ FEATURED_COMPANIES: res.result.featured, PREMIUM_COMPANIES: res.result.premium })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
        // statistics().then(res => {
        //     if (res.status) {
        //         this.setState({ jobCount: 0, clientCount: 0, candidatesCount: 0, recruiterCount: 0 })
        //         let counter = setInterval(this.counter, 10);
        //     }
        //     else {
        //         alert(res.error)
        //     }
        // }).catch(err => {
        //     alert(err)
        // })

    }
    InterQuestionSkillById = async () => {
        try {
            const { QuestionDetails } = this.state
            //   let allResult = []

            for (let i = 0; i < QuestionDetails.length; i++) {

                const modal = {
                    SKILL_ID: QuestionDetails[i]
                }
                let res = await IQTotalSkillById(modal)
                // allResult[allResult.length]=res.result  
                //  this.setState({QIdSkillCount:res.result})
                if (res.result.length > 0) {
                    this.setState({ QIdSkillCount: [...this.state.QIdSkillCount, ...res.result] })
                }
            }
        } catch (err) {
            console.log("err", err);
        }
        //    this.setState({QIdSkillCount:allResult})

    }

    InterQuestionDesignationById = async () => {
        try {
            const { RolesQuestionDetails } = this.state
            // let allResult = []
            for (let i = 0; i < RolesQuestionDetails.length; i++) {
                const modal = {
                    ROLES: RolesQuestionDetails[i]
                }
                let res = await IQTotalDesignationById(modal)
                // this.setState({QIdDesignationCount:res.result})
                // allResult[allResult.length]=res.result  
                if (res.result.length > 0) {
                    this.setState({ QIdRoleCount: [...this.state.QIdRoleCount, ...res.result] })
                }
            }
        } catch (err) {
            console.log("err", err)
        }
        // console.log("Roles",allResult);
        // this.setState({QIdRoleCount:allResult})
    }

    InterQuestionCompanyById = async () => {

        try {

            const { CompanyQuestionDetails } = this.state

            for (let i = 0; i < CompanyQuestionDetails.length; i++) {

                const modal = {
                    COMPANIES: CompanyQuestionDetails[i]
                }

                let res = await IQTotalCompanyById(modal)
                if (res.result.length > 0) {
                    this.setState({ QIdCompanyCount: [...this.state.QIdCompanyCount, ...res.result] })
                }
            }


        } catch (err) {
            console.log("err", err)
        }

        console.log("company", this.state.QIdCompanyCount);
        // this.setState({QIdCompanyCount:allResult})
    }

    getTopCompanyImages = () => {
        topCompanyImages().then(res => {
            if (res.status) {
                this.setState({ TOP_COMPANY_IMAGES: res.result.images })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }

    getPremiumCityList = () => {
        premiumCityList().then(res => {
            if (res.status) {
                this.setState({ LOCATION_LIST: res.result, CITY_LIST: res.result ? res.result.city : null })
            }
            else {
                alert(res.error)
            }
        }).catch(err => {
            alert(err)
        })
    }

    counter = () => {
        const { setclientCount, setjobCount, setcandidatesCount, setrecruiterCount, jobCount, clientCount, candidatesCount,
            recruiterCount } = this.state
        if (setclientCount < clientCount) {
            this.setState({ setclientCount: setclientCount + 575 })
        }
        if (setjobCount < jobCount) {
            this.setState({ setjobCount: setjobCount + 9543 })
        }
        if (setcandidatesCount < candidatesCount) {
            this.setState({ setcandidatesCount: setcandidatesCount + 3458 })
        }
        if (setrecruiterCount < recruiterCount) {
            this.setState({ setrecruiterCount: setrecruiterCount + 9956 })
        }
    }

    onKeywordChange = (e) => {

        const val = e.map(item => {
            if (typeof item === 'object') {
                return item.label
            }
            else {
                return item
            }
        })

        onChange(this, this.state.KEYWORD.name, val)
    }
    onLocationChange = (e) => {
        const val = e.map(item => {
            if (typeof item === 'object') {
                return item.label
            }
            else {
                return item
            }
        })

        onChange(this, this.state.LOCATION.name, val)
    }

    onKeywordPress = (input, TYPE) => {
        if (TYPE === 'KEYWORD') {
            KeywordSearch(input).then(res => {
                if (res.status) {
                    setOptions(this, this.state.KEYWORD.name, res.result)
                }
                else {
                    alert(res.error)
                }
            }).catch(err => {
                alert(err)
            })
        }
        if (TYPE === 'LOCATION') {
            LocationSearch(input).then(res => {
                if (res.status) {
                    setOptions(this, this.state.LOCATION.name, res.result)
                }
                else {
                    alert(res.error)
                }
            }).catch(err => {
                alert(err)
            })
        }
    }

    typeaheadOnChange = (e) => {
        let { value, name } = e.target
        if (e.length > 0 && e[0].customOption) {
            value = [{ name: e[0].name }];
        }
        onChange(this, name, value);
        this.onKeywordPress(e)

    }


    // onKeywordInputChange(e) {
    //     this.setState({
    //         customKeyword: e
    //     });
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps == nextState) {
            return false;
        } else {
            return true
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm(this)) {

            const st = this.state;
            const model = {
                KEYWORD: st.KEYWORD.value.split(','),
                LOCATION: st.LOCATION.value.split(','),
                EXPERIENCE: {
                    MIN: '',
                    MAX: '',
                },
                SALARY: {
                    MIN: '',
                    MAX: ''
                }
            }
        }
    }

    validateKeyForm = () => {
        let data = this.state
        let error = {}
        let isValid = true

        if (!data['keyword']) {
            error.KEYWORD = "Please enter valid keyword"
            isValid = false

            this.setState({
                error: error
            })

            return isValid
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        onChange(this, name, value)
    }

    onSearch = (e) => {

        e.preventDefault()
        const { KEYWORD, LOCATION, EXPERIENCE, SALARY } = this.state;
        if (validateForm(this)) {
            let MINEXP = ''
            let MAXEXP = ''
            if (EXPERIENCE.value.length) {
                let exp = EXPERIENCE.value.split(',')
                if (exp && exp.length > 0) {
                    MINEXP = exp[0]
                    MAXEXP = exp[1]
                }
            }

            let MINSALARY = ''
            let MAXSALARY = ''
            if (SALARY.value.length) {
                let sal = SALARY.value.split(',')
                if (sal && sal.length > 0) {
                    MINSALARY = sal[0]
                    MAXSALARY = sal[1]
                }
            }
            let url = ''
            if (KEYWORD.value.length) {

                url = constant.component.searchjob.url + `?keyword=${KEYWORD.value}`

            }

            if (LOCATION.value.length) {
                url = url + `&location=` + LOCATION.value
            }
            if (EXPERIENCE.value.length) {
                url = url + `&exp=` + MINEXP + '-' + MAXEXP

            }
            if (SALARY.value.length) {
                url = url + `&sal=` + MINSALARY + '-' + MAXSALARY

            }

            window.location.href = url

        }


    }
    onClickSkill = (id, data) => {

        // localStorage.setItem("setSkillId",id)
        // this.props.history.push(constant.component.interviewQuestionBySkillsId.url.replace(":id",data))
    }

    onJobSearch(e) {

        let keyword = e.target.value
        let { KEYWORD, LOCATION } = this.state

        console.log("state>>>>", this.state);
        if (e.target.placeholder == "Location") {

            let location = e.target.value
            this.setState({ tempLocation: location })
            if (e.code == "Enter") {
                if (this.state.tempKeyword != "" || this.state.KEYWORD.value.length > 0) {
                    let LocationUrl;
                    if (this.state.tempSkill != "") {

                        LocationUrl = `${constant.component.searchjob.url}?location=${keyword}&keyword=${this.state.tempSkill}`
                    }
                    else if (this.state.KEYWORD.value.length > 0) {
                        let [first] = this.state.KEYWORD.value
                        console.log("first keyword ", first);
                        LocationUrl = `${constant.component.searchjob.url}?location=${keyword}&keyword=${first}`
                    }

                    window.location.href = LocationUrl
                    //  window.open(LocationUrl ,"_blank")
                } else {
                    if (this.state.KEYWORD.value.length == 0)
                        setError(this, this.state.KEYWORD.name, " ")
                }
            }
            return
        }

        if (e.target.placeholder.trim() == "Enter Skill, Company, Designation") {
            let url = ""
            this.setState({ tempSkill: keyword })
            setError(this, this.state.KEYWORD.name, "")
            if (this.state.tempLocation != "" && keyword && e.code == "Enter") {
                let LocationUrl = `${constant.component.searchjob.url}?location=${this.state.tempLocation}&keyword=${keyword}`
                window.location.href = LocationUrl
            }
            else if (keyword && e.code == "Enter" && this.state.tempLocation == "") {
                let url = constant.component.searchjob.url + `?keyword=${keyword}`
                window.location.href = url
                // window.location.reload()
            }


        }

        else if (KEYWORD.value.length > 0) {
            let keywords = []
            let LocationUrl = ""

            if (e.code == "Enter") {
                if (KEYWORD.value.length > 1) {

                    Promise.all(KEYWORD.value.map(ele => keywords.push(ele)))
                    LocationUrl = LocationUrl + `${constant.component.searchjob.url}?keyword=${keywords}`

                } else if (KEYWORD.value.length === 1) {
                    if (LOCATION.value.length == 0) {
                        let [first] = this.state.KEYWORD.value
                        LocationUrl = LocationUrl + `${constant.component.searchjob.url}?keyword=${first}`
                        window.location.href = LocationUrl
                    } else {
                        let [firstLocation] = this.state.LOCATION.value
                        let [first] = this.state.KEYWORD.value

                        LocationUrl = LocationUrl + `${constant.component.searchjob.url}?keyword=${first}&location=${firstLocation}`
                        window.location.href = LocationUrl

                    }

                }

                else if (LOCATION.value.length > 0) {
                    if (e.type = "Enter") {
                        if (KEYWORD.value.length == 0) {
                            setError(this, this.state.KEYWORD.name, " ")
                        }
                    }
                }

            }
        }



    }


    render() {

        const { KEYWORD, LOCATION, EXPERIENCE, SALARY, error, QIdSkillCount, QIdRoleCount, QIdCompanyCount } = this.state;
        const { showCompanies, employerService, premiumService, setclientCount, setjobCount, setcandidatesCount, setrecruiterCount,
            JOB_COUNT_BY_TOP_CATEGORY, FEATURED_COMPANIES, PREMIUM_COMPANIES, premium, TOP_COMPANY_IMAGES, CITY_LIST } = this.state;
        const { LOCATION_LIST } = this.props;

        console.log("CompanyQuestionDetails", this.state.CompanyQuestionDetails, QIdCompanyCount);
        const featuredsettings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        arrows: false
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false
                    }
                }
            ]

        };

        const premiumsettings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        };

        return (

            <main id="rg-main" className="rg-main rg-haslayout pt-0">
                <section className='mobilehViewMobile-search'>
                    <div className='mobilehide full-screen mt-0'>
                        <div className="rg-wrapper-mobile">
                        <div className="roz-search-job">
                            <div className="search-form-area">
                                <form onSubmit={this.onSearch} className="rg-formtheme rg-formbasicinfo">
                                    <fieldset>
                                        <div className="form-group rg-inputwithicon">
                                            <i className="lnr lnr-magnifier"></i>
                                            {/* <Typeahead
                                                className={KEYWORD.error.length ? 'form-control is-invalid' : 'form-control'}
                                                id="keyword"
                                                labelKey="name"
                                                multiple
                                                options={KEYWORD.options}
                                                placeholder="Skill, company, designation or keyword"
                                                onInputChange={(e) => { this.onKeywordPress(e, 'KEYWORD') }}
                                                onChange={(e) => { this.onKeywordChange(e) }}
                                                style={{ height: "auto" }}
                                            /> */}
                                            <Typeahead
                                                className={KEYWORD.error.length ? 'form-control is-invalid' : 'form-control'}
                                                id='keyword'
                                                style={{ height: '0px !important' }}
                                                useCache={false}
                                                clearButton={false}
                                                multiple
                                                allowNew={true}
                                                name={KEYWORD.name}
                                                selected={KEYWORD.value}
                                                options={KEYWORD.options}
                                                inputProps={e => console.log("iput props ", e)}
                                                onKeyDown={(e) => this.onJobSearch(e)}
                                                placeholder=" Enter Skill, Company, Designation"
                                                onInputChange={(e) => { this.onKeywordPress(e, 'KEYWORD') }}
                                                onChange={(e) => { this.onKeywordChange(e) }}
                                                emptyLabel
                                            // style={{ height: "auto" }}
                                            />


                                            {KEYWORD.error.length > 0 && <span className='text-danger' > Please enter keywords to search relevant jobs </span>}

                                        </div>

                                        <div className="form-group rg-inputwithicon">
                                            <i className="ti-location-pin"></i>

                                            <Typeahead
                                                className='form-control'
                                                id='location'
                                                useCache={false}
                                                clearButton={false}
                                                maxResults={3}
                                                multiple={true}
                                                allowNew={true}
                                                name={LOCATION.name}
                                                selected={LOCATION.value}
                                                options={LOCATION.options}
                                                placeholder="Location"
                                                onKeyDown={(e) => this.onJobSearch(e)}
                                                onInputChange={(e) => { this.onKeywordPress(e, 'LOCATION') }}
                                                onChange={(e) => { this.onLocationChange(e) }}
                                                emptyLabel
                                                style={{ height: "auto" }}
                                            />

                                        </div>
                                        <div className="form-group col-lg-6 rg-inputwithicon pl-0">
                                            <i className="lnr lnr-calendar-full"></i>
                                            <span className="rg-select">

                                                <select
                                                    className="form-control "
                                                    name={EXPERIENCE.name}
                                                    value={EXPERIENCE.value}
                                                    onChange={this.onChange}

                                                >
                                                    <option value=''>Experience (in years)</option>
                                                    {
                                                        EXPERIENCE.options.map(item => {
                                                            return (<option value={item.value}>{item.range}</option>)
                                                        })
                                                    }

                                                </select>
                                            </span>
                                        </div>

                                        <div className="form-group col-lg-6 rg-inputwithicon pr-0">
                                            <i className="fa fa-rupee"></i>
                                            <span className="rg-select">
                                                <select
                                                    className="form-control "
                                                    name={SALARY.name}
                                                    value={SALARY.value}
                                                    onChange={this.onChange}


                                                >
                                                    <option value=''>Salary (in lacs)</option>
                                                    {
                                                        SALARY.options.map(item => {
                                                            return (<option value={item.value}>{item.range}</option>)
                                                        })
                                                    }
                                                </select>
                                            </span>
                                        </div>
                                        <div className="form-group rg-btnsarea mb-0">
                                            <button type="submit" className="rg-btn rg-active btn-primary float-right" id="showtoast">Search</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="section1" className="rg-haslayout rg-sectionspace">
                    <div className="container" id="container1">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className='roz-home-nav animated bounceInDown'>
                                    <ul>
                                        <li><a className="activetab" href=''><i className="lnr lnr-magnifier" data-interception='off'></i> Search Jobs</a></li>
                                        <li><Link target='_blank' to={constant.component.latestfresherjob.url}><i className="lnr lnr-briefcase"></i> Fresher Jobs</Link></li>
                                        <li><a target='_blank' href={constant.component.internationalJobs.url} data-interception='off'><i className="lnr lnr-rocket"></i> International Jobs</a></li>
                                        <li className='left-sub-menu' onClick={this.toggleCompanies}><a data-interception='off'><i className="lnr lnr-apartment"></i> Companies<div class='fa fa-caret-down right'></div></a>
                                            {showCompanies ? <ul>
                                                <li><a href={constant.component.companieslist.url} data-interception='off'>Browse All Companies</a></li>
                                                <li><a href={constant.component.topcompanieslist.url} data-interception='off'>Top Companies</a></li>
                                                <li><Link to={{
                                                    pathname: constant.component.Enquiry.url.replace(":Enquiry", 'companies-review'),
                                                    state: { title: 'Company Reviews' }
                                                }}>Company Reviews</Link></li>
                                                <li><Link to={{
                                                    pathname: constant.component.interviewQuestion.url
                                                }}>Interview Questions</Link></li>
                                            </ul> : null}
                                        </li>
                                        <li className='left-sub-menu' onClick={this.togglePremiumService}><a data-interception='off'><i className="lnr lnr-graduation-hat"></i> Student Services<div class='fa fa-caret-down right'></div></a>
                                            {premiumService ? <ul>
                                                <li><Link to={{
                                                    pathname: constant.component.ResumeMaking.url,
                                                }}>Resume Making</Link></li>
                                                <li><Link to={{
                                                    pathname: constant.component.studyAbroad.url
                                                }}>Study Abroad</Link></li>
                                                <li><Link to={{
                                                    pathname: constant.component.internationalWorkVisas.url.replace(":Enquiry", 'international-work-visa'),
                                                    state: { title: 'International work Visas' }
                                                }}>International work Visas</Link></li>
                                                <li><Link to={{
                                                    pathname: constant.component.StudentsExplorer.url.replace(":Enquiry", 'Career-explorer'),
                                                    state: { title: 'Career Explorer' }
                                                }}>Career Explorer</Link></li>
                                                <li><Link to={{
                                                    pathname: constant.component.careerAstrology.url.replace(":Enquiry", 'career-astrology'),
                                                    state: { title: 'Career Astrology' }
                                                }}>Career Astrology</Link></li>
                                                <li><Link to={{
                                                    pathname: constant.component.educationLoan.url.replace(":Enquiry", 'education-loan'),
                                                    state: { title: 'Education Loan' }
                                                }}>Education Loan</Link></li>
                                            </ul> : null}
                                        </li>

                                        <li className='left-sub-menu' onClick={this.toggleEmployerService}><a data-interception='off'><i className="lnr lnr-users"></i> Employer Services<div class='fa fa-caret-down right'></div></a>
                                            {employerService ? <ul>
                                                <li><Link to={constant.component.contracttualstaffing.url}>Contractual Staffing</Link></li>
                                                <li><Link to={constant.component.hrmanagementsystem.url}>H R Management System</Link></li>
                                                <li><Link to={constant.component.payrollautomation.url}>Payroll Automation</Link></li>
                                                <li><Link to={constant.component.marketingtechnology.url}>Marketing Technology Solution</Link></li>
                                                <li><Link to={constant.component.startupincubation.url}>Startup Incubation</Link></li>
                                                <li><Link to={constant.component.fulltimehiring.url}>Full Time Hiring</Link></li>
                                            </ul> : null}
                                        </li>

                                        <li><a target='_blank' data-interception='off' href='https://campus.rozgar.com/'><i className="lnr lnr-indent-increase"></i> Campus Solutions</a></li>
                                    </ul>
                                    <div className="hire-company">
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="roz-search-job">
                                    <div className="search-head">
                                        <h2>Looking for a <span>Corporate</span> Job?</h2>
                                        <p>11 lakh+ jobs for you to explore</p>
                                    </div>
                                    <div className="search-form-area">
                                        <form onSubmit={this.onSearch} className="rg-formtheme rg-formbasicinfo">
                                            <fieldset>
                                                <div className="form-group rg-inputwithicon">
                                                    <i className="lnr lnr-magnifier"></i>
                                                    {/* <Typeahead
                                                        className={KEYWORD.error.length ? 'form-control is-invalid' : 'form-control'}
                                                        id="keyword"
                                                        labelKey="name"
                                                        multiple
                                                        options={KEYWORD.options}
                                                        placeholder="Skill, company, designation or keyword"
                                                        onInputChange={(e) => { this.onKeywordPress(e, 'KEYWORD') }}
                                                        onChange={(e) => { this.onKeywordChange(e) }}
                                                        style={{ height: "auto" }}
                                                    /> */}
                                                    <Typeahead
                                                        className={KEYWORD.error.length ? 'form-control is-invalid' : 'form-control'}
                                                        id='keyword'
                                                        style={{ height: '0px !important' }}
                                                        useCache={false}
                                                        clearButton={false}
                                                        multiple
                                                        allowNew={true}
                                                        name={KEYWORD.name}
                                                        selected={KEYWORD.value}
                                                        options={KEYWORD.options}
                                                        inputProps={e => console.log("iput props ", e)}
                                                        onKeyDown={(e) => this.onJobSearch(e)}
                                                        placeholder=" Enter Skill, Company, Designation"
                                                        onInputChange={(e) => { this.onKeywordPress(e, 'KEYWORD') }}
                                                        onChange={(e) => { this.onKeywordChange(e) }}
                                                        emptyLabel
                                                    // style={{ height: "auto" }}
                                                    />


                                                    {KEYWORD.error.length > 0 && <span className='text-danger' > Please enter keywords to search relevant jobs </span>}

                                                </div>

                                                <div className="form-group rg-inputwithicon">
                                                    <i className="ti-location-pin"></i>

                                                    <Typeahead
                                                        className='form-control'
                                                        id='location'
                                                        useCache={false}
                                                        clearButton={false}
                                                        maxResults={3}
                                                        multiple={true}
                                                        allowNew={true}
                                                        name={LOCATION.name}
                                                        selected={LOCATION.value}
                                                        options={LOCATION.options}
                                                        placeholder="Location"
                                                        onKeyDown={(e) => this.onJobSearch(e)}
                                                        onInputChange={(e) => { this.onKeywordPress(e, 'LOCATION') }}
                                                        onChange={(e) => { this.onLocationChange(e) }}
                                                        emptyLabel
                                                        style={{ height: "auto" }}
                                                    />

                                                </div>
                                                <div className="form-group col-lg-6 rg-inputwithicon pl-0">
                                                    <i className="lnr lnr-calendar-full"></i>
                                                    <span className="rg-select">

                                                        <select
                                                            className="form-control "
                                                            name={EXPERIENCE.name}
                                                            value={EXPERIENCE.value}
                                                            onChange={this.onChange}

                                                        >
                                                            <option value=''>Experience (in years)</option>
                                                            {
                                                                EXPERIENCE.options.map(item => {
                                                                    return (<option value={item.value}>{item.range}</option>)
                                                                })
                                                            }

                                                        </select>
                                                    </span>
                                                </div>

                                                <div className="form-group col-lg-6 rg-inputwithicon pr-0">
                                                    <i className="fa fa-rupee"></i>
                                                    <span className="rg-select">
                                                        <select
                                                            className="form-control "
                                                            name={SALARY.name}
                                                            value={SALARY.value}
                                                            onChange={this.onChange}


                                                        >
                                                            <option value=''>Salary (in lacs)</option>
                                                            {
                                                                SALARY.options.map(item => {
                                                                    return (<option value={item.value}>{item.range}</option>)
                                                                })
                                                            }
                                                        </select>
                                                    </span>
                                                </div>
                                                <div className="form-group rg-btnsarea mb-0">
                                                    <button type="submit" className="rg-btn rg-active btn-primary float-right" id="showtoast">Search</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                <div className="get-your-own-box">
                                    <a data-interception='off' href={constant.component.PersonalRecruiter.url}>
                                        <div className="head-box">
                                            <div className="head-text">
                                                <h2>Get your own Personal Recruiter</h2>
                                            </div>
                                            <div className="ownprice">
                                                <del><i className="fa fa-rupee"></i>14000</del> <span><i className="fa fa-rupee"></i>4999</span>
                                            </div>
                                            <div className="ownprice"><a data-interception='off' href={constant.component.PersonalRecruiter.url}>Know More</a></div>
                                        </div>
                                        <div className="get-your-text-box">
                                            <div className="resume-box">
                                                <span><i className="fa fa-file-text"></i></span>
                                                <p>Resume<br />Writing</p>
                                            </div>
                                            <div className="per-box">
                                                <span><i className="fa fa-search"></i></span>
                                                <p>Personal Job<br />Search</p>
                                            </div>
                                            <div className="linkdin-box">
                                                <span><i className="fa fa-linkedin-in"></i></span>
                                                <p>Linked-In Profile/ Other&nbsp;Job&nbsp;-&nbsp;site&nbsp;profiles</p>
                                            </div>
                                            <div className="astro-box">
                                                <span><i className="fa fa-snowflake-o"></i></span>
                                                <p>Astrology driven guidance</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="roz-create-cv">
                                    <a target='_blank' href={constant.component.ResumeMaking.url}>
                                        <div className="imgfree">
                                            <img src={'./assets/images/cv-pic.jpg'} />
                                        </div>
                                        <div className="create-cv-bg">
                                            <div className="create-text">
                                                <div className="free-text">Free</div>
                                                <h4>Create CV</h4>
                                            </div>
                                            <div className="btn-cv">
                                                <i className="fa fa-angle-double-right" ></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="roz-company-hiring">
                                    <div className="company-hiring">
                                        <div className="company-hiring-text">
                                            <h3>Companies Hiring</h3>
                                        </div>
                                        <div className="company-hiring-view">
                                            <a data-interception='off' target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                        </div>
                                    </div>
                                    <div className="company-hiring-logo">
                                        {TOP_COMPANY_IMAGES === null && < Shimmer />}
                                        {TOP_COMPANY_IMAGES !== null && TOP_COMPANY_IMAGES.length > 0 && TOP_COMPANY_IMAGES.map((item, index) => {
                                            return (
                                                <a data-interception='off' href={constant.component.joblist.url.replace(':url', item.URL)} target='_blank'><img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} /></a>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--************************************
                Featured Jobs Start
        *************************************--> */}
                {/* <FeaturedSlider/> */}

                <section className="rg-haslayout rg-sectionspace rg-bglight" id="section2">
                    <div className="container" id="container2">
                        <div className="row" id="row2">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="rg-sectionhead">
                                    <h2>Premium Companies Hirings</h2>
                                    <a data-interception='off' className="rg-btnviewall" target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                </div>
                            </div>
                            <div className="rg-featuredjobs pr-2">
                                {PREMIUM_COMPANIES === null && <Shimmer />}
                                <div className='row'>
                                    <div className="rg-feature-full-width">
                                        <Slider {...featuredsettings} >
                                            {PREMIUM_COMPANIES !== null && PREMIUM_COMPANIES.map((item, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <div className='col-md-12'>
                                                            <div className="rg-featurejob job-slice mb-15">
                                                                <figure className="rg-companyimg">
                                                                    {item.COMPANY_LOGO === 'NA' ? <h3>{item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}

                                                                </figure>
                                                                <div className="rg-companycontent">
                                                                    <div className="rg-companyname">
                                                                        <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}>{item.COMPANY_NAME}</a></h3>
                                                                        <span title={item.ABOUT_COMPANY.replace('<p>', '')}>{item.ABOUT_COMPANY.length > 25 ? item.ABOUT_COMPANY.substring(0, 25).replace('<p>', '') + '...' : item.ABOUT_COMPANY.replace('<p>', '')}</span>
                                                                    </div>
                                                                    <div className="rg-companyhead">
                                                                        <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                            <span className="star">
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                            <span className="main-2 rating"></span> |
                                                                            <span className="main-2 reviews">{0} reviews</span>
                                                                        </div>
                                                                        <div className="rg-rightarea">
                                                                            <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}>View Jobs</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                {/* <!--************************************
                Featured Jobs End
        *************************************--> */}


                {/* <!--************************************
                Our Professionals Start
        *************************************--> */}
                <section className="rg-haslayout rg-sectionspace" id="section3">
                    <div className="container" id="container3">
                        <div className="row" id="row3">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 pl-0">
                                <div className="rg-ourprofessionals mobilefield">
                                    {JOB_COUNT_BY_TOP_CATEGORY === null && <Shimmer />}
                                    {JOB_COUNT_BY_TOP_CATEGORY !== null && JOB_COUNT_BY_TOP_CATEGORY.length > 0 && JOB_COUNT_BY_TOP_CATEGORY.map((item, index) => {
                                        for (const [key, value] of Object.entries(item)) {
                                            return (<div className="col-12 col-sm-12 col-md-6 col-lg-6 float-left">
                                                <a target='_blank' href={constant.component.joblist.url.replace(':url', value.url)}>
                                                    <div className="rg-ourprofessional height100">
                                                        <div className="rg-professionaldetail">
                                                            <div className="rg-popular-caregoriescontent">
                                                                <div className="rg-popular-caregories-text">
                                                                    <h5>{key}</h5>
                                                                </div>
                                                                <div className="rg-popular-caregories-job">
                                                                    <h3 className='font-weight-600 mb-0'><span>{value.totalJobs}</span></h3>
                                                                    <span className={getRandomColorBtn(key.replace(/ /g, '').length)}>{value.newJobs} New</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>)
                                        }
                                    }
                                    )
                                    }

                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <a href={constant.component.jobsByCategory.url} target='_blank'>
                                    <div className="job-popular-box">
                                        <img src={'./assets/images/jop-popular.jpg'} />
                                        <a data-interception='off' className="btn-tpcategories" target='_blank' href={constant.component.jobsByCategory.url}>VIEW ALL</a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!--************************************
                Our Professionals End
                *************************************--> */}

                <section id="campusrogar" className="wow fadeInRight" data-wow-duration="1.4s">
                    <div className="container" id="container4">
                        <div className="row" id="row4">
                            <div className="accelerate-your-job row">
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="roz-sectionimg">
                                        <img src={'./assets/images/acc-your-job-search.jpg'} />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="roz-sectiontext">
                                        <h2>Accelerate your job search with premium services</h2>
                                        <p>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
                                        <ul>
                                            <li><i className="fa fa-pencil"></i> Resume writing</li>
                                            <li><i className="fa fa-bolt"></i> Priority applicant</li>
                                            <li><i className="fa fa-file-text"></i> Resume display</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                    <div className="roz-section-by-rozgar">
                                        <div className="by-rozgar">by Campus Rozgar</div>
                                        <a data-interception='off' className="roz-btn-more" target='_blank' href='https://campus.rozgar.com/'>Learn More</a>
                                        <p>Includes paid services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="counter-stats" className="wow fadeInRight" data-wow-duration="1.4s">
                    <div className="container" id="container5">
                        <div className="row" id="row5">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="rg-sectionhead mb-10">
                                    <h2>Rozgar Statistics</h2>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-briefcase" aria-hidden="true"></i>
                                    {/* <div className="counting" data-count="900000">0</div> */}
                                    <div className="counting" >{numberWithCommas(1156843)}</div>

                                    <h5>Jobs & Counting</h5>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-user" aria-hidden="true"></i>
                                    {/* <div className="counting" data-count="280">0</div> */}
                                    <div className="counting" >{numberWithCommas(9593)}</div>
                                    <h5>Clients</h5>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-users" aria-hidden="true"></i>
                                    {/* <div className="counting" data-count="23423434">0</div> */}
                                    <div className="counting" >{numberWithCommas(12333676)}</div>

                                    <h5>Candidates</h5>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3 stats">
                                <div className='count-box'>
                                    <i className="lnr lnr-magnifier" aria-hidden="true"></i>
                                    <div className="counting" >{numberWithCommas(98653)}</div>
                                    <h5>Recruiters</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!--************************************
                Sponsored Companies Start
        *************************************--> */}

                <section className="rg-haslayout rg-sectionspace rg-bglight" id="section6">
                    <div className="container" id="container6">
                        <div className="row" id="row6">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="rg-sectionhead">
                                    <h2>Featured Sponsored Companies</h2>
                                    <a data-interception='off' className="rg-btnviewall" target='_blank' href={constant.component.jobsByCompany.url}>View All</a>
                                </div>
                            </div>
                            <div className="rg-featuredjobs pr-2">
                                {FEATURED_COMPANIES === null && <Shimmer />}
                                <div className='row'>
                                    <div className="rg-feature-full-width">
                                        <Slider {...featuredsettings} >
                                            {FEATURED_COMPANIES !== null && FEATURED_COMPANIES.map((item, index) => {
                                                return (
                                                    <React.Fragment>
                                                        <div className='col-md-12'>
                                                            <div className="rg-featurejob job-slice mb-15">
                                                                <figure className="rg-companyimg">
                                                                    {item.COMPANY_LOGO === 'NA' ? <h3>{item.COMPANY_NAME.split(' ').map((i) => i.substring(0, 1)).join('')}</h3> : <img src={`${process.env.REACT_APP_BASE_URL}/company/logo/${item.COMPANY_LOGO}`} alt={item.COMPANY_NAME} />}

                                                                </figure>
                                                                <div className="rg-companycontent">
                                                                    <div className="rg-companyname">
                                                                        <h3><a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}>{item.COMPANY_NAME}</a></h3>
                                                                        <span title={item.ABOUT_COMPANY.replace('<p>', '')}>{item.ABOUT_COMPANY.length > 25 ? item.ABOUT_COMPANY.substring(0, 25).replace('<p>', '') + '...' : item.ABOUT_COMPANY.replace('<p>', '')}</span>
                                                                    </div>
                                                                    <div className="rg-companyhead">
                                                                        <div className="rg-btnjobtag rg-homefulltimejobreviews">
                                                                            <span className="star">
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                            <span className="main-2 rating">{(Math.round(item.rating * 10) / 10) > 5 ? 5 : Math.round(item.rating * 10) / 10}</span> |
                                                                            <span className="main-2 reviews">{item.reviewCount} reviews</span>
                                                                        </div>
                                                                        <div className="rg-rightarea">
                                                                            <a data-interception='off' className="rg-hiringfeature rg-tagfeatured" target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}>View Jobs</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!--************************************
                Sponsored Companies End
        *************************************--> */}

                {/* <!--************************************
                Our Professionals Start
        *************************************--> */}
                <section className="rg-haslayout rg-sectionspace" id="section7">
                    <div className="container" id="container7">
                        <div className='worried-about-box' id="worried1">
                            <div className="row" id="row7">
                                <div className='col-md-3'>
                                    <img src={'./assets/images/next-interview.png'} />
                                </div>
                                <div className='col-md-9'>
                                    <div className='nextinterview'>Worried about your Next Interview? Start Preparing here with more than 50K Interview Questions</div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ display: 'flex', alignItems: 'center', }}>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 plr-0">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="rg-sectionhead">
                                        <h2>Interview Questions by Role</h2>
                                        <a data-interception='off' className="rg-btnviewall" href={constant.component.interviewQuestionByDesignation.url}>
                                            {/* <Link to={constant.component.interviewQuestionBySkills.url}> */}
                                            View All
                                            {/* </Link> */}
                                        </a>
                                    </div>
                                </div>
                                <div className="rg-ourprofessionals">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                                        <div className="rg-ourprofessional">
                                            <div className="rg-professionaldetail pb-0">
                                                <div className="rg-professionalcontent">
                                                    <Link to={{
                                                        pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', 'software-engineer'),
                                                        state: { DESIGNATION_ID: 2272, DESIGNATION: 'Software Engineer' }
                                                    }}>

                                                        <div className="rg-interviewbyrole">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Software Engineer</a></h3>
                                                            {/* <span>{QIdRoleCount} questions</span> */}
                                                            <span>{QIdRoleCount && QIdRoleCount.length > 3 ? QIdRoleCount[0].designation : 0} questions</span>
                                                        </div>

                                                        {/* <div className="rg-interviewbyrole">
                                                            <h3><a data-interception='off' href="">Software Engineer</a></h3>
                                                            <span>(4.7K+ questions)</span>
                                                        </div> */}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="rg-professionaldetail pb-0">
                                                <div className="rg-professionalcontent">
                                                    <Link to={{
                                                        pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', 'business-analyst'),
                                                        state: { DESIGNATION_ID: 171, DESIGNATION: 'Business Analyst' }
                                                    }}>
                                                        <div className="rg-interviewbyrole">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Business Analyst</a></h3>
                                                            {/* <span>(2K+ questions)</span> */}
                                                            <span>{QIdRoleCount && QIdRoleCount.length > 3 ? QIdRoleCount[1].designation : 0} questions</span>

                                                        </div>
                                                    </Link>
                                                    {/* <div className="rg-interviewbyrole">
                                                            <h3><a data-interception='off' href="">Business Analyst</a></h3>
                                                            <span>(2K+ questions)</span>
                                                        </div>
                                                    </Link> */}

                                                </div>
                                            </div>
                                            <div className="rg-professionaldetail pb-0">
                                                <div className="rg-professionalcontent">
                                                    <Link to={{
                                                        pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', 'devops-manager'),
                                                        state: { DESIGNATION_ID: 226, DESIGNATION: 'DevOps Manager' }
                                                    }}>
                                                        <div className="rg-interviewbyrole">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>DevOps Manager</a></h3>
                                                            {/* <span>(1.8K+ questions)</span> */}
                                                            <span>{QIdRoleCount && QIdRoleCount.length > 3 ? QIdRoleCount[2].designation : 0} questions</span>

                                                        </div>
                                                        {/* <div className="rg-interviewbyrole">
                                                            <h3><a data-interception='off' href="">Consultant</a></h3>
                                                            <span>(1.8K+ questions)</span>
                                                        </div> */}

                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="rg-professionaldetail">
                                                <div className="rg-professionalcontent">
                                                    <Link to={{
                                                        pathname: constant.component.interviewQuestionByDesignationId.url.replace(':id', 'front-end-developer'),
                                                        state: { DESIGNATION_ID: 262, DESIGNATION: 'Front End Developer' }
                                                    }}>
                                                        <div className="rg-interviewbyrole">
                                                            <h3>
                                                                <a data-interception='off' className='rg-onMouseHover'>
                                                                    Front End Developer
                                                                </a>
                                                            </h3>
                                                            {/* <span>(694 questions)</span> */}
                                                            <span>{QIdRoleCount && QIdRoleCount.length > 3 ? QIdRoleCount[3].designation : 0} questions</span>
                                                        </div>
                                                        {/* </h3>
                                                            <span>(694 questions)</span>
                                                        </div> */}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 plr-0">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="rg-sectionhead">
                                        <h2>Interview Questions by Skills</h2>
                                        <a data-interception='off' className="rg-btnviewall" href={constant.component.interviewQuestionBySkills.url}>View All</a>
                                    </div>
                                </div>
                                <div className="rg-ourprofessionals questions-skills-mobile ">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                                        <div className="rg-ourprofessional">
                                            <Link to={{
                                                pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'java'),
                                                state: { skillId: 13 }
                                            }}>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/java-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>JAVA</a></h3>
                                                            {console.log("this.state", QIdSkillCount && QIdSkillCount.length > 3 ? QIdSkillCount[0].skill : 0)}
                                                            <span>{QIdSkillCount && QIdSkillCount.length > 3 ? QIdSkillCount[0].skill : 0} questions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={{
                                                pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'python'),
                                                state: { skillId: 58 }
                                            }}>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/python-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Python</a></h3>
                                                            <span>{QIdSkillCount && QIdSkillCount.length > 3 ? QIdSkillCount[1].skill : 0} questions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={{
                                                pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'php'),
                                                state: { skillId: 11 }
                                            }}>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={'./assets/images/php-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>PHP</a></h3>
                                                            <span>{QIdSkillCount && QIdSkillCount.length > 3 ? QIdSkillCount[2].skill : 0} questions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to={{
                                                pathname: constant.component.interviewQuestionBySkillsId.url.replace(':id', 'networking'),
                                                state: { skillId: 1 }
                                            }}>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img src={networkinglogo} alt="image description" style={{ height: "49px", padding: "0 12px" }} />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Networking</a></h3>
                                                            <span>{QIdSkillCount && QIdSkillCount.length > 3 ? QIdSkillCount[3].skill : 0} questions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 plr-0">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="rg-sectionhead">
                                        <h2>Interview Questions by Company</h2>
                                        <a data-interception='off' className="rg-btnviewall" href={constant.component.interviewQuestionByCompany.url}>View All</a>
                                    </div>
                                </div>
                                <div className="rg-ourprofessionals">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                                        <div className="rg-ourprofessional  questions-company-mobile">
                                            <Link
                                                to={{
                                                    pathname: constant.component.interviewQuestionByCompanyId.url.replace(':id', '-cognizant'),
                                                    // state: { EMPLOYER_ID: 6, EMPLOYER_NAME: 'Cognizant' }
                                                }}>
                                                <div className="rg-professionaldetail bb">
                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/cognizant-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Cognizant</a></h3>
                                                            <span>{QIdCompanyCount && QIdCompanyCount.length > 4 ? QIdCompanyCount[0].company : 0} Questions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link
                                                to={{
                                                    pathname: constant.component.interviewQuestionByCompanyId.url.replace(':id', 'accenture'),
                                                    // state: { EMPLOYER_ID: 8, EMPLOYER_NAME: 'Accenture' }
                                                }}>
                                                <div className="rg-professionaldetail bb">

                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/acc-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Accenture</a></h3>
                                                            <span>{QIdCompanyCount && QIdCompanyCount.length > 3 ? QIdCompanyCount[1].company : 0}  Questions</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link
                                                to={{
                                                    pathname: constant.component.interviewQuestionByCompanyId.url.replace(':id', 'byju-s'),
                                                    // state: { EMPLOYER_ID: 17, EMPLOYER_NAME: 'byjus'.toUpperCase() }
                                                }}>
                                                <div className="rg-professionaldetail bb">

                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/byju-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Byjus</a></h3>
                                                            <span>{QIdCompanyCount && QIdCompanyCount.length > 3 ? QIdCompanyCount[2].company : 0}  Questions</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link
                                                to={{
                                                    pathname: constant.component.interviewQuestionByCompanyId.url.replace(':id', 'tata-consultancy-service'),
                                                    // state: { EMPLOYER_ID: 1, EMPLOYER_NAME: 'tcs'.toUpperCase() }
                                                }}>
                                                <div className="rg-professionaldetail bb">

                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/tcs-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover' >TCS</a></h3>
                                                            <span>{QIdCompanyCount && QIdCompanyCount.length > 3 ? QIdCompanyCount[3].company : 0}  Questions</span>
                                                        </div>
                                                    </div>
                                                </div></Link>
                                            <Link
                                                to={{
                                                    pathname: constant.component.interviewQuestionByCompanyId.url.replace(':id', 'amazon'),
                                                    // state: { EMPLOYER_ID: 16284, EMPLOYER_NAME: 'Amazon' }
                                                }}>
                                                <div className="rg-professionaldetail bb">

                                                    <figure className="rg-professionalimg">
                                                        <img className="incombylogo" src={'./assets/images/amazon-logo.jpg'} alt="image description" />
                                                    </figure>
                                                    <div className="rg-professionalcontent">
                                                        <div className="rg-professionalname">
                                                            <h3><a data-interception='off' className='rg-onMouseHover'>Amazon</a></h3>
                                                            <span>{QIdCompanyCount && QIdCompanyCount.length > 4 ? QIdCompanyCount[4].company : 0} questions</span>
                                                        </div>
                                                    </div>
                                                </div> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--************************************
                Our Professionals End
        *************************************--> */}

                <section id="section8">
                    <div class="container" id="container8">
                        <div className='mobileappbg' id="mobile1">
                            <div class="row" id="row8">
                                <div class="col-xs-12 col-sm-12 col-md-7">
                                    <h3>Get Rozgar app link on your mobile</h3>
                                    <p>Available for both Android and iOS apps</p>
                                    <div class="appsearch">
                                        <input type="text" placeholder="Enter mobile number..." />
                                        <div class="button-src">
                                            <Link to={{
                                                pathname: constant.component.Enquiry.url.replace(":Enquiry", 'Get Rozgar app link on your mobile'),
                                                state: { title: 'Get Rozgar app link on your mobile' }
                                            }}><button>Get&nbsp;link</button></Link>
                                        </div>
                                    </div>
                                    <strong class="applogo">
                                        <a data-interception='off'>
                                            {/* <Link to={{
                                            pathname: constant.component.Enquiry.url.replace(":Enquiry", 'companies-review'),
                                            state: { title: 'Company Reviews' }
                                        }}> */}
                                            <img src={'./assets/images/android-img.png'} alt="Android Logo" />


                                        </a> &nbsp;
                                        <a data-interception='off'>
                                            {/* <Link to={{
                                            pathname: constant.component.Enquiry.url.replace(":Enquiry", 'companies-review'),
                                            state: { title: 'Company Reviews' }
                                        }}> */}
                                            <img src={'./assets/images/apple-img.png'} alt="Android Logo" />
                                        </a>
                                    </strong>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-5 text-left">
                                    <div className=''>
                                        <img src={'./assets/images/appdev.png'} alt="App Development" />
                                    </div>
                                </div>
                            </div>
                            <div className='appshaperight'>
                                <img src={'./assets/images/app-shape-right.png'} />
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!--************************************
            Blogs News Article Start
        *************************************--> */}
                <section className="rg-location-section rg-haslayout" id="section9">
                    <div className="container" id="container9">
                        <div className="row" id="row9">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-10">
                                <div className="rg-sectionhead">
                                    <h2><i className="lnr lnr-map-marker"></i> Jobs by Location</h2>
                                    <a data-interception='off' className="rg-btnviewall" target='_blank' href={constant.component.jobsByLocation.url}>View All</a>
                                </div>

                                <div className="roz-jobbylocation">
                                    <ul>

                                        {LOCATION_LIST === null && <Shimmer />}
                                        {
                                            LOCATION_LIST !== null &&
                                            CITY_LIST !== null && CITY_LIST.length > 0 && CITY_LIST.map((item, index) => {
                                                if (index < 30) {
                                                    return (
                                                        <li><i className="lnr lnr-map-marker"></i> <a data-interception='off' target='_blank' href={constant.component.joblist.url.replace(':url', item.URL)}> Jobs in {item.CITY.length > 15 ? item.CITY.substring(0, 13) + '..' : item.CITY}</a></li>

                                                    )
                                                }
                                            })}
                                        {/* <li><a href="#"><i className="lnr lnr-map-marker"></i> Jobs in Mumbai</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--************************************
                Blogs News Article End
        *************************************--> */}


            </main >
        )
    }
}
