import React,{Component, Fragment} from 'react';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }


    render() { 
        return ( 
            <Fragment>
                <h3>Player Name {this.props.playerName}</h3>
                <button onClick={this.props.updateTotal}>Do It!</button>
            </Fragment>
         );
    }
}
 
export default Player;