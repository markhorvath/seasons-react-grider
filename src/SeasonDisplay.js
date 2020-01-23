import React from 'react';

const getSeason = (lat, month) => {
    //if statement and ternarys to determine season based on month and lattitude
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // this logic could also be put directly in the object (where text is)
    const text = season === 'winter' ? "Burr, it's chilly" : "Beach time";
    const icon = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div>
    {/*the back-ticks are template strings from ES2015, takes the value of whatever icon is and passes it as a string*/}
        <i className={`${icon} icon`} />
        <h1>{text}</h1>
        <i className={`${icon} icon`} />
        <br />Latitude: {props.lat}, Longitude: {props.lng}</div>
    );
}

export default SeasonDisplay;