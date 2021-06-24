// Table.js
import React, { Component } from "react";
import TableRow from "./TableRow.js";
import API from "../utils/API.js";

class Table extends Component {
    // bootstrap table
    // console.log(props)  
    
    state = {
      employees: [],
      orderedEmployees: []     
    }
    
    sortByFirstName() {
      // get employees list from state
      
      // sort by first name
      // set the result back to employees list state


      // this.state.employees 
    }

    // when this component mounts the API is called and initial states are set
    componentDidMount()  {
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
          <>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                </tr>
              </thead>
                <tbody>
                {this.state.employees.length ?  this.state.employees.map( (person, index) => {
                  return(
                    <TableRow data={person} key={index}/>
                  )
                }) : <> </>}
                </tbody>
             </table>
           </>
      );
  };
};

export default Table;