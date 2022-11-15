import React, { Component } from 'react'
import { onChange, setOptions, validateForm } from '../../utils';

import { Typeahead } from 'react-bootstrap-typeahead';
import constant from '../../constant';
// import { KeywordSearch } from '../../action/dashboard';
import { KeywordSearch } from '../../action/CompanyQuestionAction';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

            KEYWORD: { name: 'KEYWORD', value: [], options: [], error: '', isRequired: true },
            filterforId: { name: 'filterforId', value: [], options: [], error: '', isRequired: false },
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
        }
    }

    onKeywordChange = (e) => {
        // e.preventDefault()
       const {filterforId} =  this.state
        const val = e.map(item => {
            if (typeof item === 'object') {
                return item.label
            }
            else {
                return item
            }
        })
         const data = val[0].slice(2);
        console.log(data);
    const filteredValue =  filterforId.options.filter(i=>{
        if(i.QUESTION_TITLE == data ){
        return i
        }else {
            return null
        }
        })
        // const Value = e[0].slice(2)
        this.props.history.push({
            // pathname: constant.component.AnswerByQuestion.url.replace(':id',val.replace(/ /g,'-')),
            pathname: constant.component.AnswerByQuestion.url.replace(':id', filteredValue[0].URL),
            state: { QuestionId:filteredValue[0].INTERVIEW_QUESTIONS_ID,Question:filteredValue[0].QUESTION_TITLE}
          })
        // onChange(this, this.state.KEYWORD.name, val[0].slice(2))
    }

    onKeywordPress = (input, TYPE) => {
        if(input[0] =='Q'){
            var Value = input.slice(2);
        }else{
            var Value = input
        }

        if (TYPE === 'KEYWORD') {
            KeywordSearch(input).then(res => {
                console.log("debug",res.result);
                if (res.status) {
                    setOptions(this, this.state.KEYWORD.name, res.result)
                    setOptions(this,this.state.filterforId.name, res.result)
                }
                else {
                    alert(res.error)
                }
            }).catch(err => {
                alert(err)
            })
        }
    }

    onSubmit = (e) => {
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
    render() {
        const { KEYWORD } = this.state;
        console.log("history",this.props.history.location);
        if(KEYWORD.value){
            // onChange(this, this.state.KEYWORD.name, undefined)
        }
        console.log("KEYWORD",KEYWORD);
        return (
            <React.Fragment>
                <form className="rozgar-jobbylocsearchbox">
                    <div className="rozgar-formbox">
                        <div className="rozgar-jobbylocsearchcontent">
                            <div className="form-group ">
                                <i className="lnr lnr-magnifier" style={{zIndex:'1'}}></i>
                                {/* <input type="text" name="keyword" className="form-control" placeholder="Search jobs by Skills, Designation, Companies" /> */}
                                <Typeahead
                                    // className={KEYWORD.error.length ? 'form-control is-invalid' : 'form-control'}
                                    className={KEYWORD.error.length ? 'form-control is-invalid' : ''}
                                    id='keyword'
                                    useCache={true}
                                    clearButton={false}
                                    // multiple={true}
                                    // allowNew={true}
                                    // maxResults={3}
                                    name={KEYWORD.name}
                                    selected={KEYWORD.value}
                                    options={KEYWORD.options.map(i=>`Q.${i.QUESTION_TITLE}`)}
                                    placeholder="Search By Question"
                                    onInputChange={(e) => { this.onKeywordPress(e, 'KEYWORD') }}
                                    onChange={(e) => { this.onKeywordChange(e) }}
                                    emptyLabel
                                    
                                />
                            </div>
                        </div>
                        <div className="rozgar-jobbylocsearchbtn">
                            <a href="javascript:void(0)" 
                            // onClick={(e) => { this.onSubmit(e) }}
                            ><i className="lnr lnr-magnifier"></i></a>
                        </div>
                    </div>
                    {/* {KEYWORD.error.length > 0 && <span style={{ marginLeft: '50px' }} className='text-danger'>Please enter keywords to search relevant jobs</span>} */}

                </form>


            </React.Fragment>
        )
    }
}
