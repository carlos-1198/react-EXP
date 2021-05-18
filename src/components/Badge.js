import { render } from '@testing-library/react';
import React from 'react';

import logo from '../images/badge-header.svg';
import avatar from '../images/puppy.jpg';
import './styles/Badge.css';
class Badge extends React.Component {
    render(){
        return (
            <div className="badge container-fluid">
                <div className="badge_header">
                    <img src={logo} alt="Logo"></img>
                </div>

                <div className="badge_section-name">
                    <img className="badge_avatar" src={avatar} alt="Avatar"></img>
                    <h1 >
                        {this.props.firstName}<br/> {this.props.lastName}
                    </h1>
                </div>

                <div className="badge_section-info">
                    <h3>{this.props.profession}</h3>
                    <div>{this.props.email}</div>
                </div>
                
                <div className="badge_footer">#platziconf</div>
            </div>
        );
    }
}

export default Badge;