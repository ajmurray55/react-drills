import React, {Component} from "react";

class Login extends Component {
    constructor() {
        super();
        
        this.state = {
            username: "",
            password: ""
        };
    // this.handleLogin = this.handleLogin.bind(this)

    };
    handleUsernameChange(name) {
        this.setState({ username: name });
    }
    handlePasswordChange(pass) {
        this.setState({ password: pass });
    }
    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
        this.setState({npm
            username: "",
            password: ""
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input value={this.state.username} 
                onChange={e => this.handleUsernameChange(e.target.value)}/>
                <input value={this.state.password}
                onChange={e => this.handlePasswordChange(e.target.value)}/>
                <button
                onClick={() => this.handleLogin()}>Login</button>
            </div>
        );
    }
}

export default Login;