import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        }
    }

    render() {

        const { status } = this.state;

        return (
            <section id="contact">
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mbjzlepr"
                    method="POST"
                >
                    <h1>Contact</h1>
                    <br></br>
                    <p>Please fill in your details and I will get back to you as soon as possible.</p>
                    <label>Name:</label>
                    <input type="text" name="name" required/>
                    <label>Email:</label>
                    <input type="email" name="email" required/>
                    <label>Message:</label>
                    <textarea type="text" name="message"cols="30" rows="8" required></textarea>
                    {status === "SUCCESS" ? <p><strong>Thanks for contacting me!</strong></p> : <button className="button">Send message</button>}
                    {status === "ERROR" && <p>Ooops! There was an error. Try again!</p>}
                </form>
            </section >
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            }  else if (xhr.status === 401) {
                this.setState({ status: "ERROR" });
            } 
            else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

}

export default Contact;
