import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
    const [lat, lng, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat && lng) {
        content = <SeasonDisplay lat={lat} lng={lng} />;
    } else {
        content = <Spinner message="Please accept location request" />;
    }

    const divStyle = {borderColor: 'red', borderWidth: 10, borderStyle: 'solid'};

    return <div style={divStyle}>{content}</div>
}

// class App extends React.Component {

//     //this is completely equivalent to the constructor with super(props) and this.state
//     state = { lat: null, errorMessage: '' };

//     componentDidMount() {
//         //check MDN docs for more
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
//             (err) => this.setState({ errorMessage: err.message })
//         );
//     }

//     //any time component updates, render() will be called first before componentdidupdate()
// //     componentDidUpdate() {
// // console.log('ddi update');
// //     }
//     renderContent() {

//         if(this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>;
//         }

//         if(!this.state.errorMessage && this.state.lat && this.state.lng) {
//             return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
//         }

//         return <Spinner message="Please accept location request" />;
//     }


//     //render always must be defined in class components
//     render() {
//         //this is just an example of how you might render conditional components, with the
//         //border just an example of something you might want to be around every potential component
//         const divStyle = {borderColor: 'red', borderWidth: 10, borderStyle: 'solid'};
//         return (
//             <div style={divStyle}>
//                 {this.renderContent()}
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);