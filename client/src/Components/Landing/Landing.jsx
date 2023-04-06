import React from "react";
import style from "./Landing.module.css";

export default function Landing() {
  return (
    <>
      <div>
        <section className={style.gradientform}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-xl-10">
                <div class="card rounded-3">
                  <div class="row g-0">
                    <div class="col-lg-6 bg-dark text-white rounded-start">
                      <div class="card-body p-md-5 mx-md-4">
                        <div class="text-center">
                          <img
                            className={style.img}
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            alt="logo"
                          />
                          <h4 class="mt-1 mb-5 pb-1">Somos "Proyecto David Franco"</h4>
                          <h5 class="mt-1 mb-5 pb-1">Inicie sesion para continuar</h5>
                        </div>

                        <form>
                        

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example11"
                              class="form-control"
                              placeholder="email@email.com"
                            />
                            <label class="form-label" for="form2Example11">
                              Email
                            </label>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example22"
                              class="form-control"
                            />
                            <label class="form-label" for="form2Example22">
                              Contraseña
                            </label>
                          </div>

                          <div class="text-center pt-1 mb-5 pb-1">
                            <div >
                              <button
                                className="border-0 bg-info bg-gradient w-100 h-80 rounded"
                                type="button"
                              >
                                Inicio Sesión
                              </button>
                            </div>
                            <a class="text-muted" href="#!">
                              Te olvidaste la contraseña?
                            </a>
                          </div>

                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mt-2 mb-0 me-2">No tienes una cuenta?</p>
                            <button
                              type="button"
                              class="btn btn-outline-danger"
                            >
                              Registrarse
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                    <div class="col-lg-6 d-flex align-items-center bg-info bg-gradient rounded-end">
                    <div >
                      <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4 text-dark">We are more than just a company</h4>
                        <p class="small mb-0 text-dark">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
