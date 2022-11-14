import React, { Component, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import constant from './constant';
import Router from './Router'
import moment from 'moment';
import { capFirstLetterInSentence, getsessionStorage, getStorage, removeAllLocalStorage, removeStorage, setStorage } from './utils';
import loadScript from './loadScript'
import MyProvider from './MyProvider';
import { MetaTags } from 'react-meta-tags';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { hot } from 'react-hot-loader/root'

function App() {

  const session_token = getsessionStorage(constant.keys.ctoken)
  const loggedIn = getStorage(constant.keys.cLoggedIn)
  // const remeber_me = getStorage(constant.keys.c_remeber_me)
  const cd = getStorage(constant.keys.cd)
  // const local_token = getStorage(constant.keys.token)

  const onStorageUpdate = (e) => {
    const session_token = getStorage(constant.keys.ctoken)
    const cd = getStorage(constant.keys.cd)
    setStorage(constant.keys.ctoken, session_token)
    setStorage(constant.keys.cd, cd)
  }

   
  useEffect(() => {
    // if (cd) {
    // if (!remeber_me && !session_token) {
    //   removeStorage('rsc_cache')
    //   removeStorage(constant.keys.ctoken);
    //   removeStorage(constant.keys.cd);
    //   removeAllLocalStorage()
    //   // window.location.reload();
    // }
    // else if (loggedIn) {
    //   const CurrentTime = moment().format('X')
    //   const expireTime = +loggedIn + 604800000;
    //   if (CurrentTime > expireTime) {
    //     removeStorage('rsc_cache')
    //     removeStorage(constant.keys.ctoken);
    //     removeStorage(constant.keys.cd);
    //     removeAllLocalStorage()
    //     // window.location.reload();
    //   }
    // }
    // if (local_token) {
    //   lastActivity()
    // }

    // }
    // window.addEventListener("storage", onStorageUpdate);

    loadPage()
    // return () => {
    //   window.removeEventListener("storage", onStorageUpdate);
    // };
  }, [])

  const loadPage = () => {
    if (typeof Node === 'function' && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.warn('Cannot remove a child from a different parent', child, this);
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.warn(
              'Cannot insert before a reference node from a different parent',
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }
  }

  const [loaded, setLoaded] = useState(false);
   

  useEffect(() => {
    loadScript(() => {
      setLoaded(true);
    });
  }, []);
//   const location = useLocation()
// console.log(window.location.href)
  return (
    // <MyProvider.Consumer>
    <React.Fragment>
      {/* {loaded ? console.log("loaded") : ''} */}
      <Router />
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
  );
}

export default hot(App);
