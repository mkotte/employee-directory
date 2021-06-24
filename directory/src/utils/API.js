const API = {

    fetchEmployeeInfo() {
        return fetch("https://randomuser.me/api/?results=200&nat=us")
    }
};

export default API;