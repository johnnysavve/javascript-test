import React from 'react';
import {render} from 'react-dom';
import UserTableComponent from './user/user.js'

class Main extends React.Component {
    render() {
        return <UserTableComponent/>
    }
}

render(<Main/>, document.getElementById("app"));