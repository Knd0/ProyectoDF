import React from "react";

export default function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll bg-info bg-gradient">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#!">
              PROYECTO
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mx-auto">
                <li class="nav-item">
                  <a class="nav-link text-white active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#!">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#!">
                    Attractions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#!">
                    Opinions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div class="container my-5 py-5"></div>
      </main>
    </>
  );
}
