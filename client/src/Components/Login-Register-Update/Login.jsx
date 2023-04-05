import React, { useState } from "react";
import "./Style.css";

export default function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <>
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Iniciar Sesión</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Nombre de usuario" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" value="Ingresar" className="btn1" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Registrarse</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-empresa">
                <i className="fas fa-user"></i>
                <select className="input-field" type="text" placeholder="Empresa">
                    <option value="None">Seleccione su empresa</option>
                    <option value="1">Empresa 1</option>
                    <option value="2">Empresa 2</option>
                </select>

              </div>
              <input type="submit" className="btn1" value="Registrar" />
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Eres nuev@?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button class="btn transparent" onClick={handleSignUpClick}>
                Registrate
              </button>
            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>Ya estas registrad@?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button class="btn transparent" onClick={handleSignInClick}>
                Iniciar Sesión
              </button>
            </div>
            <img src="img/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
