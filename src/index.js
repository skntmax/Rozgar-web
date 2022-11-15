import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
 
 

  render(<BrowserRouter>
    <App />
  </BrowserRouter>, rootElement);


 
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
