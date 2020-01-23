import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    //this is completely equivalent to the constructor with super(props) and this.state
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        //check MDN docs for more
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    //any time component updates, render() will be called first before componentdidupdate()
//     componentDidUpdate() {
// console.log('ddi update');
//     }



    //render always must be defined in class components
    render() {
        let divStyle = {color: 'blue', fontSize: 48, marginTop: 60};
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat && this.state.lng) {
            return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
        }

        return <Spinner />;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);