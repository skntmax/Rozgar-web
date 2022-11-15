import * as axios from "axios";
// import 'dotenv/config'


export const blogList = (data) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-blog-list?KEYWORD=${data.KEYWORD}&page=${data.page}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

export const recentblogList = (page) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-recent-blog-list`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

export const BlogbyURL = (URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/blog-by-url?URL=${URL}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};


export const blogCategory = (CATEGORY_ID, URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-blog-category-list?URL=${URL}&CATEGORY_ID=${CATEGORY_ID} `;
    return axios.get(url).then((res) => {
        return res.data;
    })
};



export const BlogListbyCategoryURL = (data) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-blog-list-by-category?URL=${data.URL}&page=${data.page}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};


export const addBlogComment = (model) => {
    const url = `${process.env.REACT_APP_BASE_URL}/create-blog-comment`;
    return axios.post(url, model).then((res) => {
        return res.data;
    })
};

export const blogCommentList = (URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-blog-comment-list?URL=${URL}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};

