import React, { Component } from 'react'
import JobsBySkill from '../../components/jobsBySkill/jobsBySkill'
import constant from '../../constant'
import { ITSkillList, NonITSkillList } from '../../action/jobsByActions'
export default class jobsBySkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IT_SKILL_LIST: [],
      NON_IT_SKILL_LIST: [],
      IT_SKILL_LIST_COUNT: undefined,
      NON_IT_SKILL_LIST_COUNT: undefined,

    }
  }
  componentDidMount() {

    document.title = constant.title.JobsBySkill
    window.scrollTo(0, 0)
    ITSkillList().then(res => {
      if (res.status) {
        this.setState({ IT_SKILL_LIST: res.result.list, IT_SKILL_LIST_COUNT: res.result.count })
      }
      else {
        alert(res.error)
      }
    }).catch(err => {
      console.log(err)
    })


    NonITSkillList().then(res => {
      if (res.status) {
        this.setState({ NON_IT_SKILL_LIST: res.result.list, NON_IT_SKILL_LIST_COUNT: res.result.count })
      }
      else {
        alert(res.error)
      }
    }).catch(err => {
      console.log(err)
    })



  }
  render() {
    const { IT_SKILL_LIST, IT_SKILL_LIST_COUNT, NON_IT_SKILL_LIST, NON_IT_SKILL_LIST_COUNT } = this.state;
    return (
      <React.Fragment>
        {IT_SKILL_LIST.length && NON_IT_SKILL_LIST.length 
        ?
          <JobsBySkill
            IT_SKILL_LIST={IT_SKILL_LIST}
            IT_SKILL_LIST_COUNT={IT_SKILL_LIST_COUNT}
            NON_IT_SKILL_LIST={NON_IT_SKILL_LIST}
            NON_IT_SKILL_LIST_COUNT={NON_IT_SKILL_LIST_COUNT}
          />
          :
          null
        }</React.Fragment>
    )
  }
}
