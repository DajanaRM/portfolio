import {Me} from './me';
import {Header} from './header';
import React, { useState,useEffect} from "react";
import image1 from './images/Screenshot_1.jpg';
import image2 from './images/Screenshot_2.jpg';
import image3 from './images/Screenshot_3.jpg';
import image4 from './images/Screenshot_4.jpg';
import image5 from './images/Screenshot_5.jpg';
import image6 from './images/Screenshot_6.jpg';
export const Projects = ()=>{
	useEffect(() => {
     document.title = "Projects"; 
	}, []);
	const images = [image1, image2, image3, image4]
	var randomImage = images[Math.floor(Math.random()*images.length)]
	const [time, setTime] = useState(Date.now());
	
	useEffect(() => {
		const interval = setInterval(() => setTime(Date.now()), 3000);
		return () => {
			clearInterval(interval);
		};
	}, []);


  
	return (
		<>
			<Header/>
			<div className='main'>
				<Me/>
				<div className="info_container">
					<div className="page_break">
						<div className="photo_container">
							<img id="project_image" src={randomImage} className="screenshot" alt="" />
						</div>
						Web application in which after login/registration you can save all about important people (and animals) in your life<br/>
						HTML, CSS,JS, PHP, SQL, Jquery, AJAX,... 
					</div>
				<div className="page_break">
					<div className="photo_container"><img src={image5} className="screenshot" alt="" /></div>
						A photographer's website<br/>
						HTML, CSS
					</div>
				<div className="page_break">
					<div className="photo_container">
						<img src={image6} className="screenshot" alt="" />
					</div>
					Me trying to sell myself!<br/>
					React.js
					</div>
					<div className="tobecontinued">. . .
					</div>
				</div>
			</div>
		</>  
	)
}