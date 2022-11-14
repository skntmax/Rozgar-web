import axios from "axios";
import { getCandidateAuthHeader } from "../utils";

export const jobDetail = (data) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-job-detail?URL=${data.URL}&QUERY=${data.QUERY}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

export const locationForFilter = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-location-for-filter`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};



export const isLocationUrl = (URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-is-location?URL=${URL}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};


export const similarJobs = (KEYWORD) => {
    const url = `${process.env.REACT_APP_BASE_URL}/similar-jobs`;
    return axios.post(url, { KEYWORD: KEYWORD }).then((res) => {
        return res.data;
    })
};

export const SaveJobStatus = (body) => {
    const url = `${process.env.REACT_APP_BASE_URL}/SaveJobStatus`;
    return axios.post(url, body, getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};

export const JobApppliedStatus = (body) => {
    const url = `${process.env.REACT_APP_BASE_URL}/applied-status`;
    return axios.post(url, body, getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};

export const Joblistfresher = (body) => {
    const url = `${process.env.REACT_APP_BASE_URL}/latest-campus-frehser-job`;
    return axios.post(url, body, getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};

export const Jobskeywordsearchindia = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/qa-job-search-india`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

export const Jobskeywordinindia = (page) => {
    const url = `${process.env.REACT_APP_BASE_URL}/qa-job-in-india?page=${page}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

