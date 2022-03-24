import {Me} from './me';
import {Header} from './header';
import React, { useEffect} from "react";
export const About = ()=>{
	useEffect(() => {
		document.title = "About";
	}, []);
	return (
		<div><Header/>
			<div className='main'>
				<Me/>
				<div className="info_container">
					<div className="page_break">
						Highly motivated, self-taught developer<br/>
						<ul><div className="headline"><br/>Skills:</div><br/>
						<li> HTML, CSS</li>
						<li>JavaScript, React.js, Node.js</li>
						<li>PHP, MySQL</li>
						<li>JQuery, AJAX</li>
						</ul>
					</div><br/>
					<div className="page_break">
						<ul><div className="headline">Soft skills:</div><br/>
						<li> problem-solving, fast learning, empathy, adaptability, multipotential, curiosity...</li>
						</ul>
					</div><br/>
					<div className="page_break">
						<ul><div className="headline">Languages:</div><br/>
						<li>English (advanced), Serbian (native), Bulgarian (intermediate)</li>
						</ul>
					</div>
					<div>
						<ul><div className="headline">Interests:</div><br/>
						<li>reading, music, photography, gardening, nature & animal lover</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}