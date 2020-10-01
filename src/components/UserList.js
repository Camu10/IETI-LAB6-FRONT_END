import React, {Component} from 'react';

export class UserList extends Component {

    constructor(props){
        super(props)
    }

    render(){
        
        console.log(this.props.usersList)
        const data = this.props.usersList;
        const items = data.map((user) => (
             <tr>
                <td>{user.user.id}</td>
                <td>{user.user.name}</td>
                <td>{user.user.email}</td>
                <td>{user.user.password}</td>
            </tr>
        ));
        return(
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );

    }
}

export default UserList;