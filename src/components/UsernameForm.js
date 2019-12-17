import React, { Component } from "react";

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    onChange(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Create a new user - What is your username?</h2>
                    <form>
                        <input type='text' placeholder='Enter your username' onChange={this.onChange}/>
                        <input type='submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default UsernameForm