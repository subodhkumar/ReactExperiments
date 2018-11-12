import React, {Component} from 'react';
import TRow from './trow';
import TCol from './tcol';

class Navitem extends Component {
    render(){
        return(
            <TCol>{this.props.value}</TCol>
        )
    }
}
class Navbar extends Component {
    render(){
        return (
            <TRow col="3">
             {this.props.children}
            </TRow>
        )
    }
}

export default Navbar;