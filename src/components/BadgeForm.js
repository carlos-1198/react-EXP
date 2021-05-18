import React from 'react';

class BadgeForm extends React.Component{
    /* handleChange = e => {
         console.log({
            name: e.target.name,
            value: e.target.value,
        }); 
        this.setState({
            [e.target.name]:e.target.value, //[e.tar...] guarda el nombre del elemento que llama al metodo, en este caso, el imput.
        })
    } */
    handleClick = e => {
        console.log('Button was clicked');
    }
    handleSubmit = e =>{    //se puede cancelar la recarga de la pagina por default de un boton al dar click
        e.preventDefault(); //si se cambia el type por button o se usa el onsubmit con prevent default.
    }
    render(){
        return(
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange} className="form-control"
                        type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} className="form-control"
                        type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange} className="form-control"
                        type="email" name="email" value={this.props.formValues.email}/>
                    </div>

                    <div>
                        <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default BadgeForm;