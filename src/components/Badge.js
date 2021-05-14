import { render } from '@testing-library/react';
import React from 'react';

import logo from '../images/logo-barca.jpg';
import './styles/Badge.css';
class Badge extends React.Component {
    render(){
        return (
            <div className="Badge">
                <div className="badge_header">
                    <img src={logo} alt="Logo"></img>
                </div>

                <div className="badge_section-name">
                    <img clasName="badge_avatar"src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                    <h1 >
                        Carlos<br/> Mendoza
                    </h1>
                </div>

                <div className="badge_section-info">
                    <h3>Fontend Engineer</h3>
                    <div>@kirit0</div>
                </div>
                
                <div className="badge_footer">#platziconf</div>
            </div>)
    }
}

export default Badge;