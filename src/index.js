import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    //automatically called with props?  ALWAYS have to call super(props);
    constructor(props) {
        super(props);

        this.state = { lat: null, lng: null};
    }

    //render always must be defined in class components
    render() {
        //check MDN docs for more
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);