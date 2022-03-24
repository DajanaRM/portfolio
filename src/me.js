import myself from './images/me.jpg';
export const Me = ()=>{
	return (
		<div className="about_container">
			<div className="photo_container">
				<img src={myself} className="photo" alt="" />
			</div>
			<div className="headline">
				Dajana Rosic-Manceva
			</div>
			<div className="page_break">
				Web Developer
			</div>
			<div className="headline">
				Greetings! I'm Dajana
			</div>
			<div className="page_break">
				A self-taught web developer<br/>It took me some time to find my true passion<br/>
				but here we are and there's only one way to go!			
			</div>
		</div>
	)
}