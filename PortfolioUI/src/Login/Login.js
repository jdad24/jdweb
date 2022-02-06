import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="login-container">
                <div className='title'>Enter login credentials in order to proceed to Joshua Dadson's portfolio</div>
                <form
                    action='/login'
                    method='post'
                >
                    <input
                        type="text" value={this.state.username}
                        onChange={(e) => { this.setState({ username: e.target.value }); console.log(this.state.username) }}
                        placeholder='Enter username'></input>
                    <br />
                    <input
                        type="text"
                        value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }); console.log(this.state.password) }}
                        placeholder='Enter password'></input>
                    <br />
                    <input
                        type="submit"
                        value="Sign In" />
                </form>
            </div>
        )
    }
}

export default Login;