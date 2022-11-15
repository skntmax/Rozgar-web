import React, { Component } from 'react'

export default class error extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="rg-innerbannervtwo" class="rg-innerbannervtwo" style={{minHeight:'200px'}}>
        </div>
        <main id="rg-main" className="rg-main rg-haslayout">
          <div className="rg-haslayout rg-sectionspace">
            <div className="container">
              <div className="row">
                <div className="rg-candidatesdetails">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="rg-jobapplycenter rg-jobapplycentervthree text-center pt-5">
                      <img src={'assets/images/404.jpg'}/>
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
}
