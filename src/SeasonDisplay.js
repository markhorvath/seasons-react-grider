import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    // "\" escapes the single quote from affecting the string
    summer: {text: 'Let\'s hit the beach', iconName: 'sun'},
    winter: {text: 'Burr, it\'s chilly', iconName: 'snowflake'}
};

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
    // this is an example of destructuring
    const { text, iconName } = seasonConfig[season] // { text, iconName }

    return (
        //className of root div has classname equal to (more or less) the component name, just a good practice
        //the back-ticks are template strings from ES2015, takes the value of whatever icon is and passes it as a string*/
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;