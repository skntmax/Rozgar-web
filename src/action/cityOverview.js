import * as axios from "axios";

export const cityAnOverView = (URL) => {
    const url = `${process.env.REACT_APP_BASE_URL}/rzg-city-an-overview?URL=${URL}`;
    return axios.get(url).then((res) => {
        return res.data;
    })
};
