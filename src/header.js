import React, { Component, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {Main } from './main';
import {About} from './about';
import {Projects} from './projects';
import {Contact} from './contact';
import menu from './baseline_menu_white_36dp.png';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export  function Header(){
	const size = useWindowSize();
	
	const Profile = () =>{ var profile ='';
		if(window.innerWidth <= 700){
			profile = ( <div>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									<img src={menu}/>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item>
										<NavLink to="/about">About</NavLink>
									</Dropdown.Item>
									<Dropdown.Item>
										<NavLink to="/projects">Projects</NavLink>
									</Dropdown.Item>
									<Dropdown.Item>
										<NavLink to="/contact">Contact</NavLink>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div> )
		}
		else {
			profile = ( <div className="profile">
							<span className="App-link" id="about">
								<NavLink to='/about'>About</NavLink>
							</span>
							<span className="App-link">
								<NavLink to='/projects'>Projects</NavLink>
							</span>
							<span className="App-link">
								<NavLink to='/contact'>Contact</NavLink>
							</span>
						</div> )
		}
		return profile;
	}
	
	return (
		<div className="App">
			<header className="App-header">
				<NavLink to='/'>
					<div className="myself">
						<span>
							Dajana Rosic-Manceva
						</span>
					</div>
				</NavLink>
				<Profile/>
			</header>
		</div>
	);
}
function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
    
    window.addEventListener("resize", handleResize);
	handleResize();
    
	return () => window.removeEventListener("resize", handleResize);
	}, []);
	
	return windowSize;
}