import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
class App extends Component{
    constructor(){
        super();
        this.state = {
            name: {
                firstname: "Yogesh",
                lastname: "Jadhav"},
                course:"Full Stack Development Course",
                company:"Hubsem Solutions Private Limited"
            };
        }
        render()
        {
            return (
               <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <p>
                        Hello {this.state.name.firstname}
                        {this.state.name.lastname},
                        I am doing course named {this.state.course} 
                        with {this.state.company}
                    </p>
                    <button onClick={() => {
                        this.setState(() => {
                            return {
                                name: {
                                    firstname: "Extreme",
                                    lastname: "React Article"
                                }
                            }
                        }, () =>{
                            console.log(this.state);
                        });
                        //
                    }}>chnage button</button>

                    <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Learn React</a>
                </header>
               </div>
            );
        }
    }

    class Detail extends Component{
        constructor(){
            super();
            this.state = {
               value: "It is very informative and fun learning this course especially React."
                }
            }
                render() {
                    return (
                    <div>
                        <App/>
                        <h3>{this.state.value} </h3>
</div>
                    );
                }
            }
    
export default Detail;