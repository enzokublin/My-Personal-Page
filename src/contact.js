import React from 'react';
import './App.css';



export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            textMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit(e) {
        alert('A value is submitted ' + this.state.firstName);
        e.preventDefault();
    }

    render() {
        return (
            <div className="contact">
                <h1 className="h1Contact"> Send Me A Message</h1>
                <form className="contactForm" action="mailto:enzokublin@gmail.com" onSubmit={this.handleSubmit}>
                    <label className="contactLabel">
                        <div className="inputContainer">
                            <input type="text" name="firstname" id="firstname" placeholder="Prename" required onChange={this.handleChange} />
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="lastname" id="lastname" placeholder="Surname" required onChange={this.handleChange} />
                        </div>
                        <div className="inputContainer">
                            <input type="email" name="e-mail" id="email" size="30" placeholder="E-Mail" required onChange={this.handleChange} />
                        </div>
                    </label>
                    <textarea id="emailText" name="emailText" rows="6" cols="10" placeholder="Please write here!" onChange={this.handleChange}></textarea>
                    <input type="submit" value="Submit" id="submitButton" />
                </form>

            </div>
        );
    }
} 