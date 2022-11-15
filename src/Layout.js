import React from "react";
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"
import {
    useLocation
} from "react-router-dom";
import EmployeeHeader from "./components/common/EmployeeHeader";
import constant from "./constant";
import { getStorage } from "./utils";
const hideBeforeLoginHeaderFooter = (location) => {
    return (location === constant.component.signin.url || location === constant.component.register.url ||
        location === constant.component.forgotPassword.url || location === constant.component.logout.url)
}
export const NormalLayout = ({ children }) => {
    const location = useLocation()
    const ud = getStorage('USER_DETAIL')

    return (
        <React.Fragment >
            {!ud && < EmployeeHeader />}
            {!hideBeforeLoginHeaderFooter(location.pathname) && !ud && < Header />}
            {children}
            {!hideBeforeLoginHeaderFooter(location.pathname) && <Footer />}
        </React.Fragment >
    )
};


export const Layout = ({ children }) => {
    const location = useLocation()
    return (
        <React.Fragment >
            {!hideBeforeLoginHeaderFooter(location.pathname) && < Header />}
            {children}
            {!hideBeforeLoginHeaderFooter(location.pathname) && <Footer />}
        </React.Fragment >
    )
};

export const NoLayout = ({ children }) => {
    return (
        <React.Fragment >
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </React.Fragment >
    )
};