import React from 'react';
import './App.css';



export class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <h1 className="h1Contact"> Send Me A Message</h1>
                <form className="contactForm">
                    <label className="contactLabel">
                        <div className="inputContainer">
                            <input type="text" name="Firstname" id="firstname" placeholder="Prename" required />
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="Lastname" id="lastname" placeholder="Surname" required />
                        </div>
                        <div className="inputContainer">
                            <input type="email" name="e-mail" id="email" size="30" placeholder="E-Mail" required />
                        </div>
                    </label>
                    <textarea id="emailText" name="emailText" rows="6" cols="10" placeholder="Please write here!"></textarea>
                    <input type="submit" value="Submit" id="submitButton" />
                </form>

            </div>
        );
    }
} 