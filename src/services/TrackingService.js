import request from "xhr-request";
export const getAll = () => {
    return fetch("http://api.sgyunlian.com/track/abcde").then((response) => {
        return response.json();
    }).then((response) => {
        return response;
    });
},
getUserGeneratedRecord = () => {
    return fetch("http://api.sgyunlian.com/batch/2/records?record_method=%E7%94%A8%E6%88%B7%E4%BA%A7%E7%94%9F").then((response) => {
        return response.json();
    }).then((response) => {
        return response;
    });
};
