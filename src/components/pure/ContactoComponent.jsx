import React, { Component } from 'react';
import ContactoF from './contactoF';
import Contact from './Contact';
import { PropTypes } from 'prop-types';

class ContactoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conectado: true, 
      cont: 0,
    };
    this.conectar = this.conectar.bind(this);
    this.desconectar = this.desconectar.bind(this);
  }

  conectar = () => {
    this.setState((state) => {
      return { conectado: (state.conectado = true) };
    });
  };

  desconectar = () => {
    console.log(this.state);
    this.setState({ ...this.state, conectado: false });
  };

  render() {
    const { contact } = this.props;
    const { conectado } = this.state;
    console.log(contact);
    return (
      <div>
        <button onClick={this.conectar}>Conectar</button>
        <button onClick={this.desconectar}>Desconectar</button>
        <ContactoF contacto={contact} conectado={conectado}></ContactoF>
      </div>
    );
  }
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
};

export default ContactoComponent;