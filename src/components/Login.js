import React, {Component} from 'react';
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        const {toggleLogin, loginError, tryLogin} = this.props;
        const {email, password} = this.state;
        
        return (
            <div className="Login">
                <div className="box">
                    <h1>LOGIN</h1>
                    <input type="email" placeholder="EMAIL" value={email}
                        onChange={e => this.setState({email: e.target.value})}
                    />
                    <input type="password" value={password} 
                        onChange={e => this.setState({password: e.target.value})}
                    />
                    <button onClick={() => tryLogin(email, password)}>LOGIN</button>
                    <div className="error">{loginError}</div>
                    <div className="x"
                        onClick={toggleLogin}
                    >x</div>
                </div>
            </div>
        )
    }
}