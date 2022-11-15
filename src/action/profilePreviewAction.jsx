import axios from "axios"
import { getCandidateAuthHeader } from "../utils";

export const profilePreview = (CANDIDATE_ID) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-profilePreview?CANDIDATE_ID=${CANDIDATE_ID}`;
    return axios.get(url,getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};
export const recruitorAction = (CANDIDATE_ID) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-recruitorAction?CANDIDATE_ID=${CANDIDATE_ID}`;
    return axios.get(url,getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};
export const chartMonthAction = (CANDIDATE_ID) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-chartMonth?CANDIDATE_ID=${CANDIDATE_ID}`;
    return axios.get(url,getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};
export const ActionsPerformed = (CANDIDATE_ID) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-actionsPerformed?CANDIDATE_ID=${CANDIDATE_ID}`;
    return axios.get(url,getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};
export const mostApplyJobs = (CANDIDATE_ID) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-mostApplyJobs?CANDIDATE_ID=${CANDIDATE_ID}`;
    return axios.get(url,getCandidateAuthHeader()).then((res) => {
        return res.data;
    })
};