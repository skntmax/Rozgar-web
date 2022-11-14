import * as axios from "axios";

export const jobsearchIndiaDetail = (URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/qa-job-search-indiadetails?KEYWORD_URL=${URL.KEYWORD_URL}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

export const FullStackDeveloperJobsInIndia = (URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/qa-job-in-indiadetails?KEYWORD_URL=${URL.KEYWORD_URL}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};