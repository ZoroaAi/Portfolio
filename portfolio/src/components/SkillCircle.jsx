import React from 'react';
import {useSpring, animated} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import '../styles/skillCircle.scss';

const SkillCircle = ({percentage, skill}) => {

    const circleProps = useSpring({
        from: {val: 0},
        to: {val: percentage},
        config: {duration: 1500}
    });

    return (
        <VisibilitySensor partialVisibility minTopValue={100}>
            {({isVisible}) => (
                <div className="skill-card">
                    <div className="skill-circle">
                        <svg width="150" height="150" viewBox="0 0 50 50">
                            <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="2" fill="transparent" />
                            <animated.circle
                                cx="25"
                                cy="25"
                                r="20"
                                stroke="purple"
                                strokeWidth="2"
                                fill="transparent"
                                strokeDasharray="126"
                                strokeDashoffset={circleProps.val.interpolate(val => (1 - val / 100) * 126)}
                            />
                        </svg>
                        <div className="skill-text">
                            <span>{skill}</span>
                            <animated.span>{circleProps.val.interpolate(val => Math.floor(val))}</animated.span>
                        </div>
                    </div>
                </div>
            )}
        </VisibilitySensor>
    );
}

export default SkillCircle;
