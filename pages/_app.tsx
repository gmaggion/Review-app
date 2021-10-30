import '../styles/globals.css'
import '../styles/styles.css'
import { Fragment } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import Link from 'next/link';


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
                <Link href="/">
                <a className="text-black-400 no-underline">
                  Home
                </a>
                </Link>

                <Link href="/about">
                <a className="text-black-400 no-underline p-8">
                  About
                </a>
                </Link>

               <Link href="/blog">
               <a  className="text-black-400 no-underline">
                  Blog
                </a>
                </Link>
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