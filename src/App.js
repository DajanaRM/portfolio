import './App.css';
import {Main } from './main';
import {About} from './about';
import {Projects} from './projects';
import {Contact} from './contact';
import React, { Component, useState, useEffect } from 'react';
import {HashRouter as Router, Routes, Route,useHistory, useLocation, useNavigate, Link, useParams} from "react-router-dom";

const App = ({location}) => (
	<Router>
		<Routes location={location}>
		    <Route path="/" element={<Main/>} />
		    <Route path="/about" element={<About/>} />
		    <Route path="/contact" element={<Contact/>} />
		    <Route path="/projects" element={<Projects/>} />
       		 </Routes>
	</Router>
)
export default App;
