import React, { Component } from 'react';
import './App.css';
import { firebase, db } from "./utils/firebase";

import Post from "./containers/Post";
import Login from "./components/Login";

class App extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            loginOpen: false,
            loginError: undefined,
            user: undefined
        }

        this.loadPosts();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user, loginOpen: false, loginError: ""})
            }
        });

        this.toggleLogin = this.toggleLogin.bind(this);
        this.tryLogin = this.tryLogin.bind(this);
    }

    loadPosts() {
        let posts = [];
        db.collection('posts').get()
            .catch(e => console.error(e))
            .then(snapshot => {
                snapshot.forEach(data => posts.push(data))
                this.setState({posts});
            });
    }

    toggleLogin() {
        this.setState(prevState => {
            return {
                loginOpen: !prevState.loginOpen
            }
        });
    }

    tryLogin(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({
                    loginError: error.message
                });
            })
    }

    render() {
        const {loginOpen, loginError, user} = this.state;

        return (
            <div className="App">
                {
                    this.state.posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))
                }

                { loginOpen && 
                    <Login loginError={loginError} 
                            toggleLogin={this.toggleLogin} 
                            tryLogin={this.tryLogin}
                            /> 
                }
                { user ?
                    <button>WRITE</button> :
                    <button className="loginBtn"
                        onClick={this.toggleLogin}
                    >Login</button>
                }
                
            </div>
        );
    }
}

export default App;
