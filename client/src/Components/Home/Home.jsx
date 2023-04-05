import React from "react";
import Navbar from "../Navbar-Footer/Navbar";
import Footer from "../Navbar-Footer/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="box">
        <div className="filters">
          <h3 className="h3">Filtros</h3>
          <select className="input-field" type="text" placeholder="Empresa">
            <option value="None">Seleccione su empresa</option>
            <option value="1">Empresa 1</option>
            <option value="2">Empresa 2</option>
          </select>
          <select className="input-field" type="text" placeholder="Empresa">
            <option value="None">Seleccione su empresa</option>
            <option value="1">Empresa 1</option>
            <option value="2">Empresa 2</option>
          </select>
          <select className="input-field" type="text" placeholder="Empresa">
            <option value="None">Seleccione su empresa</option>
            <option value="1">Empresa 1</option>
            <option value="2">Empresa 2</option>
          </select>
        </div>
        <main class="table">
          <section class="table__header">
            <h1>Customer's Orders</h1>
            <div class="group">
              <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Search" type="search" class="input" />
            </div>
          </section>
          <section class="table__body">
            <table>
              <thead>
                <tr>
                  <th>
                    {" "}
                    Id <span class="icon-arrow"></span>
                  </th>
                  <th>
                    {" "}
                    Cliente <span class="icon-arrow"></span>
                  </th>
                  <th>
                    {" "}
                    Ubicación <span class="icon-arrow"></span>
                  </th>
                  <th>
                    {" "}
                    Fecha de orden <span class="icon-arrow"></span>
                  </th>
                  <th>
                    {" "}
                    Estado <span class="icon-arrow"></span>
                  </th>
                  <th>
                    {" "}
                    <span class="icon-arrow"></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* MAPEADO DE AUTOS */}

                <tr>
                  <td> 1 </td>
                  <td>
                    {" "}
                    <img src="images/Zinzu Chan Lee.jpg" alt="" />
                    Zinzu Chan Lee
                  </td>
                  <td> Seoul </td>
                  <td> 17 Dec, 2022 </td>
                  <td>
                    <p class="status delivered">Terminado</p>
                  </td>
                  <td>
                    {" "}
                    <Link to="/auto">Ver mas</Link>
                  </td>
                </tr>
                <tr>
                  <td> 2 </td>
                  <td>
                    <img src="images/Jeet Saru.jpg" alt="" /> Jeet Saru{" "}
                  </td>
                  <td> Kathmandu </td>
                  <td> 27 Aug, 2023 </td>
                  <td>
                    <p class="status cancelled">Cancelado</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$5350.50</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 3</td>
                  <td>
                    <img src="images/Sonal Gharti.jpg" alt="" /> Sonal Gharti{" "}
                  </td>
                  <td> Tokyo </td>
                  <td> 14 Mar, 2023 </td>
                  <td>
                    <p class="status shipped">En proceso</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$210.40</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 4</td>
                  <td>
                    <img src="images/Alson GC.jpg" alt="" /> Alson GC{" "}
                  </td>
                  <td> New Delhi </td>
                  <td> 25 May, 2023 </td>
                  <td>
                    <p class="status delivered">Terminado</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$149.70</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 5</td>
                  <td>
                    <img src="images/Sarita Limbu.jpg" alt="" /> Sarita Limbu{" "}
                  </td>
                  <td> Paris </td>
                  <td> 23 Apr, 2023 </td>
                  <td>
                    <p class="status pending">Pendiente</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$399.99</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 6</td>
                  <td>
                    <img src="images/Alex Gonley.jpg" alt="" /> Alex Gonley{" "}
                  </td>
                  <td> London </td>
                  <td> 23 Apr, 2023 </td>
                  <td>
                    <p class="status cancelled">Cancelado</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$399.99</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 7</td>
                  <td>
                    <img src="images/Alson GC.jpg" alt="" /> Jeet Saru{" "}
                  </td>
                  <td> New York </td>
                  <td> 20 May, 2023 </td>
                  <td>
                    <p class="status delivered">Terminado</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$399.99</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 8</td>
                  <td>
                    <img src="images/Sarita Limbu.jpg" alt="" /> Aayat Ali Khan{" "}
                  </td>
                  <td> Islamabad </td>
                  <td> 30 Feb, 2023 </td>
                  <td>
                    <p class="status pending">Pendiente</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$149.70</strong>{" "}
                  </td>
                </tr>
                <tr>
                  <td> 9</td>
                  <td>
                    <img src="images/Alex Gonley.jpg" alt="" /> Alson GC{" "}
                  </td>
                  <td> Dhaka </td>
                  <td> 22 Dec, 2023 </td>
                  <td>
                    <p class="status cancelled">Cancelado</p>
                  </td>
                  <td>
                    {" "}
                    <strong>$249.99</strong>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
