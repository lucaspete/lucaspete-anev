import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Container, Typography} from "@material-ui/core";

const Header = () => {
  const [nome, setNome] = useState(null);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem('nome');
    if (nomeUsuario) {
      setNome(nomeUsuario)
    } else {
      setNome(null)
    }
  }, [])

  return (
    <Container className="header">
      <Typography variant="h4">
        {nome ? `Olá, ${nome}` : 'Aproveite os produtos'}
      </Typography>
      {nome ? (
        <Link to="cadastrar" style={{textDecoration: 'none'}}>
          <Button variant="contained" className="color2">
            Cadastrar produto
          </Button>
        </Link>
      ) : ''}
      <Link to={nome ? 'sair' : 'login'} style={{textDecoration: 'none', margin: '5px' }}>
        <Button variant="contained" className="color2">
          {nome ? 'Sair' : 'Login'}
        </Button>
      </Link>
    </Container>
  )
}

export default Header;