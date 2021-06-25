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
      console.log("hit");
      // get employees list from state
      // sort by first name
      let sorted = this.state.employees
      sorted.sort(this.compare);
      // set the result back to employees list state
      // this.state.employees 
      this.setState({
        employees: sorted
      });
    };

    compare(a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      } 
      if (a.name.first > b.name.first){
        return 1        
      }
      return 0
    };

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
                  <th scope="col"><button className="btn" onClick={ () => {
                    // console.log("hitt")
                    this.sortByFirstName()
                  }}>First</button></th>
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