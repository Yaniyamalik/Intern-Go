import React from 'react';
import { Features } from "./components/Features";
import { Herosection } from "./components/Herosection";
import { About } from "./components/about";
import Journey from "./components/howitworks";
import { Joinus } from "./components/Joinus";
import { Footer } from "./components/Footer";import './globals.css';
export default function Home() {
  return (
   <div className="">
    <Herosection/>
    <Journey/>
    <Features/>
    <About/>
    <Joinus/>
   </div>
  );
}
