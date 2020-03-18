import React,{Component, Fragment} from 'react';
import Player from './Player';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grand_total: 0
          }
    }

    // callback to update score
    updateTotal = () => {
        let newScore = this.state.grand_total+=1;
        this.setState(
            {
                grand_total: newScore
            }
        )
    }

    render() { 
        return ( 
            <Fragment>
                <h1>Play the Game</h1>
                <h3>Total Score {this.state.grand_total}</h3>
                <Player playerName="Kevin" updateTotal={this.updateTotal}/>
            </Fragment>
         );
    }
}
 
export default AppContainer;