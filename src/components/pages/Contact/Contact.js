import React, {useState} from 'react';
import "./Contact.css";

const Contact = () => {

    const [state, setState] = useState({
        name: "Name",
        email: "Email",
        message: "Message"
    })

    const onChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleCancel = (e) => {
        setState({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <div className="contact">
        <h1 className="title has-text-primary has-text-weight-bold is-family-primary has-text-centered">Wanna Say Hi... ?</h1>
            <div class="field">
                <label class="label is-primary">Name</label>
                <div class="control has-icons-left">
                    <input
                        class="input is-small is-primary"
                        type="text"
                        name="name"
                        placeholder="Your Name..."
                        value={state.name}
                        onChange={onChange}
                        />
                    <span class="icon is-small is-left">
                        <i class="material-icons">face</i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input
                        class="input is-small is-primary"
                        type="email"
                        placeholder="Email..."
                        name="email"
                        value={state.email}
                        onChange={onChange}
                        />
                    <span class="icon is-small is-left">
                        <i class="material-icons">mail</i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea
                        value={state.message}
                        class="is-small textarea is-primary"
                        name="message"
                        placeholder="Message..."
                        onChange={onChange}></textarea>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-danger" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
