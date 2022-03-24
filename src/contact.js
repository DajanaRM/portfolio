import {Me} from './me';
import {Header} from './header'
import React, { useEffect} from "react";
import email from './baseline_mail_outline_black_24dp.png'
import github from './GitHub-Mark-32px.png'
export const Contact = ()=>{
	useEffect(() => {
    document.title = "Contact"; 
	}, []);
	
	return (
		<>
			<Header/>
				<div className='main'>
				<Me/>
					<div className="info_container">
						<div className="headline">
							Get in touch!
						</div><br/><br/>
					<div className="page_break">
						<img src={email} className="icons" onClick={() => window.location = 'mailto:dajanarosman@gmail.com'} alt="dajanarosman@gmail"/>
						<img src={github} className="icons" onClick={()=> window.open("https://github.com/DajanaRM", "_blank")} alt="https://github.com/DajanaRM"/>
					</div>
				</div>
			</div>
		</>
	)
}