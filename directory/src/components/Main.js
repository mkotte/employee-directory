import React, { Component } from "react";
import Header from "./Header.js"
import Table from "./Table.js"
import API from "../utils/API.js";

class Main extends Component {
    state = {
        employees: [],
        orderedEmployees: []     
    }

    // when this component mounts the API is called and initial states are set
    componentDidMount() {
        API.fetchEmployeeInfo().then(res => res.json())
        .then(data => this.setState({
            employees: data.results,
            orderedEmployees: data.results
        }));
    };

    render() {
        return (
            <>
                <Header />
                <Table employees={this.orderedEmployees} />
            </>
        );
    };
};

export default Main;