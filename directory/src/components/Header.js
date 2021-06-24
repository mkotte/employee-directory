import React from "react";
import SearchForm from "./SearchForm.js";

function Header(){
    return (
    <nav class="navbar navbar-light bg-light justify-content-between">
        <h1>Employee Directory</h1>
        <SearchForm />
    </nav>
    );
};

export default Header;

