import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
        };
    }

    componentDidMount() {
        fetch('http://ietilab6taskplanner.westus.azurecontainer.io:8080/')
            .then(response => response.json())
            .then(data => {
                let userList = [];
                data.forEach(function (user) {
                    userList.push({
                       user
                    })
                });
                this.setState({usersList: userList});
            });
    }

    render() {
        return (
            <div>
            	<h1>Lista de Usuarios</h1>
                <UserList usersList={this.state.usersList}/>
            </div>
        );
    }
}

export default App;