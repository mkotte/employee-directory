import React, { Component } from "react";
import Table from "./Table.js"
import API from "../utils/API.js";

class Main extends Component {
    state = {
        employees: [],
        orderedEmployees: []     
    }

    // when this component mounts the API is called and initial states are set
    componentDidMount() {


    render() {
        return (
            <>
                <Table />
            </>
        );
    }
};

export default Main;