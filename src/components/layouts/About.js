import React from 'react'

const About = () => {
	return (
		<div className="section px-3" id="about">
			<div className="subsection personal">
				<div className="container py-5">
					<div className="row p-lg-5">
						<div className="col-12 mb-4">
							<h5>ABOUT ME</h5>
							<hr/>
						</div>
						<div className="col-md-12 mb-5">
							<div className="row mb-4">
								<div className="mx-auto about__img-container d-md-flex align-items-md-center col-md-4 mb-4 mb-md-0">
									<img src="./assets/images/artist.svg" alt="Hector Robles" className="about__img img-fluid px-5 mb-3 mb-md-0"/>
								</div>
								<div className="copy col-md-8 d-md-flex flex-md-column justify-content-md-center">
									<h5 className="text-center text-md-left">Designer</h5>
									<p className="text-justify text-md-left">I am a developer who is a designer first. I believe that websites and web apps should not only be functional but also pleasing to look at. My approach is UI/UX-driven. For me, to make sure that the user gets results with ease and comfort is as important as getting the correct results.</p>
								</div>
							</div>
						</div>
						<div className="col-md-12 mb-5">
							<div className="row">
								<div className="mx-auto about__img-container d-md-flex align-items-md-center col-md-4 mb-4 mb-md-0">
									<img src="./assets/images/developer.svg" alt="Hector Robles" className="about__img img-fluid px-5 mb-3 mb-md-0"/>
								</div>
								<div className="copy col-md-8 d-md-flex flex-md-column justify-content-md-center">
									<h5 className="text-center text-md-left">Developer</h5>
									<p className="text-justify text-md-left">I code because I want my designs to have life. Printed brochures, magazines, or posters will never be interactive unlike websites or apps. Coding gives me the perfect canvas for my art. The possibilities of creating interactive designs in coding are endless. I enjoy all aspects of web development—from planning to deployment. I love art and I love to code.</p>
								</div>
							</div>
						</div>
						<div className="col-md-12 mb-5">
							<div className="row">
								<div className="mx-auto about__img-container d-md-flex align-items-md-center col-md-4 mb-4 mb-md-0">
									<img src="./assets/images/cat.svg" alt="Hector Robles" className="about__img img-fluid px-5 mb-3 mb-md-0"/>
								</div>
								<div className="copy col-md-8 d-md-flex flex-md-column justify-content-md-center">
									<h5 className="text-center text-md-left">Cat Lover</h5>
									<p className="text-justify text-md-left">I love cats! Two cats jumping on my workspace has become a common occurrence, but it only says so much about how I focus on work despite the cute distractions around me.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;