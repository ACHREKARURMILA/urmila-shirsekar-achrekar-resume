import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="MFA" where="Sir J.J.School of Arts, Mumbai" from="July 2006 " to="May 2008"/>
            <Widecard title="BFA" where="Sir J.J.School of Arts, Mumbai" from="July 2002 " to="April 2006"/>
            <Widecard title="HSC" where="R.V.Nerurkar High School & Junior Collage" from="2000" to="2002"/>
            </div>
            )
        }
    }
    
export default Education
    