// App.js
import React, { Component } from 'react';
import Header from "./components/Header.js"
import Table from "./components/Table.js"
import API from "./utils/API.js";

class App extends Component {

  state = {
    employees: [{}],
    orderedEmployees: [{}]     
  }

  // when this component mounts the API is called and initial states are set
  componentDidMount() {
    API.fetchEmployeeInfo().then(res => res.json())
    .then(data => {
        console.log(data.results);
        this.setState({
          employees: data.results,
          orderedEmployees: data.results
        })     
    }).catch(err => console.log(err));
  };

  render() {
    return (
        <div className="App">
            <Header />
            <Table employees={this.state.employees} />
        </div>
    );
  };

};

export default App;
