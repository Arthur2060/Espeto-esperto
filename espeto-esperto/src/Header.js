import './Header.css';

function Header() {
  return (
      <header className="App-header">
        <img src="Logo.png" id="logo" alt="Insira aqui a logo"/>

        <nav>
          <ul>
            <li class="item"><a href="#">Inicio</a></li>
            <li class="item"><a href="#">Sobre nós</a></li>
            <li class="item"><a href="#">Contato</a></li>
            <li class="item"><a href="#">Marcar hora</a></li>
          </ul>
        </nav>

        <div id="login-cadastro-conta">
          <button type="button">Login</button>
          <button type="button">Cadastro</button>
        </div>
      </header>
  );
}

export default Header;
