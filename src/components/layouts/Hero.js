import React from 'react'

const Hero = () => {
	return (
		<div className="section" id="hero">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="hero__hr-text">&lt;hr&gt;</h1>
						<hr className="hero__hr"/>
						{<h1 className="hero__headline">HECTOR ROBLES</h1>}
						<h2 className="hero__subhead">Designer and Full Stack Web Developer</h2>
						{/*<p className="hero__text">Hector Robles is a designer and a web developer.</p>*/}
					</div>
				</div>
			</div>
		</div>

	)
}

export default Hero;
