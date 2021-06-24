const url = "https://randomuser.me/api/?results=200&nat=us";

const API = {
    fetchEmployeeInfo () {
        return fetch(url)
    }
};

export default API;