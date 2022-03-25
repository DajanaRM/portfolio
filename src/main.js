import {Me} from './me';
import {Header} from './header';
import React, { useEffect} from "react";
export const Main = ()=>{
	useEffect(() => {
		document.title = "Dajana Rosic-Manceva";  
	}, []);
	return (
		<>
			<Header/>
			<div className='main'>
				<Me/>
				<div className="info_container">
					<div className="headline">
						Welcome!
					</div><br/><br/>
					<div className="page_break">
						Here you can find out more about me and my recent projects<br/>
					</div>
					<div>
						This website is made with React.js and Bootstrap,<br/> published with npm on GitHub Pages.
					</div>
				</div>
			</div>
		</>
	)
}