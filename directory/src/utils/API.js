const url = "https://randomuser.me/api/?results=200&nat=us";

function API() {
    return fetch(url)
};

export default API;