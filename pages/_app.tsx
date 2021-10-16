import '../styles/globals.css'
import '../styles/styles.css'
import { Fragment } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";


  function MyApp({ Component, pageProps }) {
  return (
    <><ToastContainer
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      closeOnClick
      pauseOnHover /><Fragment>
        <header>
          <nav>
            <ul className="flex justify-between items-center p-8 bg-yellow-100">
              <li>
                <a href="/" className="text-black-400 no-underline">
                  Home
                </a>

                <a href="/about" className="text-black-400 no-underline p-8">
                  About
                </a>

                <a href="/blog" className="text-black-400 no-underline">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer className="bg-yellow-100 flex justify-center items-center py-4">
          <p>Ricardo e Gabriela passaram por aqui</p>
        </footer>
      </Fragment></>
  );
}

export default MyApp