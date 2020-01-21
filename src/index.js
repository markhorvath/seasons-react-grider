import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //automatically called with props?  ALWAYS have to call super(props);
    constructor(props) {
        super(props);

        this.state = { lat: null, lng: null, errorMessage: ''};


        //check MDN docs for more
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }



    //render always must be defined in class components
    render() {
        let divStyle = {color: 'blue', fontSize: 48, marginTop: 30};
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat && this.state.lng) {
            return <div style={divStyle}>Latitude: {this.state.lat}, Longitude: {this.state.lng}</div>
        }

        return <div style={divStyle}>Loading</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);