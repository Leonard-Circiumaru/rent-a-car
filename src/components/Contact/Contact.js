import React from "react";
import { AddContact } from "./AddContact/AddContactItem"
//import { Component } from "react";
import "./style.css";

export class Contact extends React.Component {
    render() {
        return <div className="contact">
            <h3 className="contact__title">Contact</h3>
            <AddContact />
        </div>
    }
}