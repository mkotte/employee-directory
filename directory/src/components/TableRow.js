// TableRow.js
import React from "react";

function TableRow( {data} ) {

    return( 
        <tr>
            <th scope="row"><img src={data.picture.medium} ></img></th>
            <td>{data.name.first}</td>
            <td>{data.name.last}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
        </tr>
    );
};

export default TableRow;