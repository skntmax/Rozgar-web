import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FourZeroFours extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <div id="error_page" className='pricing-area padding-top-100px padding-bottom-80px'>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-7 col-lg-9">
                    <h2>404 <i className="fa fa-exclamation-triangle"></i></h2>
                    <p>We're sorry, but the page you were looking for doesn't exist.</p>
                    <p>Go to <a href='/' style={{textDecoration:'none', cursor:'pointer'}} className='text-danger'>Home Page</a></p>
                    {/* <form>
                      <div className="search_bar_error">
                        <input type="text" className="form-control" placeholder="What are you looking for?"/>
                        <input type="submit" value="Search"/>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
      </React.Fragment>
    )
  }
}
