import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StrictMode } from "react";

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";
import './assets/css/bootstrap.css';
import './assets/css/normalize.css';
import './assets/css/fontawesome/fontawesome-all.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/owl.carousel.css';
import './assets/css/linearicons.css';
import './assets/css/prettyPhoto.css';
import './assets/css/magnific-popup.css';
import './assets/css/chartist.css';
import './assets/css/scrollbar.css';
import './assets/css/chosen.css';
import './assets/css/main.css';
import './assets/css/color.css';
import './assets/css/transitions.css';
import './assets/css/responsive.css';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById("root");


  hydrate( 
    <App />       
  , rootElement)
  
   
const MetaTags = ()=>{
   return <React.Fragment>
      <MetaTags>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="copyright" content="2022 Rozgar.com" />
    <meta name="content-language" content="EN" />
    <meta name="author" content="www.rozgar.com" />
    <meta name="resource-type" content="document" />
    <meta name="distribution" content="GLOBAL" />
    <meta name="revisit-after" content="1 day" />
    <meta name="rating" content="general" />
    <meta name="pragma" content="no-cache" />
    <meta name="classification"
        content="Jobs &amp; Career Explorer : Job Search, Job posting, Apply Jobs, Post a Jobs for free" />
    <meta name="robots" content="ALL" />
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </MetaTags>
    </React.Fragment>
}

 
// ReactDOM.render(

//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')

// );

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//    rootElement);
// } else {
//   render(
//     <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//    rootElement);
// }

reportWebVitals();
