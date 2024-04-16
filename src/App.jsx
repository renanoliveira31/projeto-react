import { useState } from "react";

import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulario/index";
import ReposList from "./components/ReposList/index";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      {/* <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} /> */}

      <Perfil nomeUsuario='renanoliveira31' />
      <ReposList nomeUsuario='renanoliveira31' />
      {/* {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )} */}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App