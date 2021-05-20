import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
class BadgeNew extends React.Component {
    state = { form :{
        firstName:'',
        lastName:'',
        email:'',
    }};
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value, 
            },
        });
    };
    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew_hero">
                    <img className="img-fluid" src={header} alt="header" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName}
                            email={this.state.form.email} 
                            profession="sleeper"/>                     
                        </div>
                        
                        <div className="offset-1 col-5">
                            <BadgeForm onChange={this.handleChange} 
                            formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;