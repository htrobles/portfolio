import React from 'react'

const About = () => {
	return (
		<div className="section px-3" id="about">
			<div className="subsection personal">
				<div className="container py-5">
					<div className="row p-lg-5">
						<div className="col-12 mb-4">
							<h5>ABOUT HECTOR</h5>
							<hr/>
							<p className="about__text mb-4">Being a designer first, Hector Robles demonstrates his creativity through CSS maneuvering and an atmosphere of combined minimalistic approach and vibrancy. His clever use of colors are creatively put together to showcase elements of simplicity and visual consistency. Kicking it up a notch, his artistic psyche delved deeper into web developing as this was the key to his art to not just be beautiful, but also interactive and functional. As he incorporates this career into his portfolio, he sees the future of websites becoming the perfect canvass for his art.</p>
						</div>
						<div className="col-md-4 mb-5 mb-md-0">
							<img src="./assets/images/artist.svg" alt="Hector Robles" className="about__img img-fluid px-5 mb-3 mb-lg-5"/>
							<div className="copy">
								<h5 className="text-center">Artist</h5>
								<p className="text-center">Having graduated with a Fine Arts degree, he has acquired a set of skills that made him a multifaceted designer. Hector's family owns a publishing company that has given him many opportunities to practice his craft as a designer at a very young age. </p>
							</div>
						</div>
						<div className="col-md-4 mb-5 mb-md-0">
							<img src="./assets/images/developer.svg" alt="Hector Robles" className="about__img img-fluid px-5 mb-3 mb-lg-5"/>
							<div className="copy">
								<h5 className="text-center">Developer</h5>
								<p className="text-center">Hector's interest in programming started when he was in grade school through Starcraft's map editor. Growing up he has aspired to be a game developer and is now applying his skills through self-study and incorporating it with his design skills through web development.</p>
							</div>
						</div>
						<div className="col-md-4 mb-5 mb-md-0">
							<img src="./assets/images/cat.svg" alt="Hector Robles" className="about__img img-fluid px-5 mb-3 mb-lg-5"/>
							<div className="copy">
								<h5 className="text-center">Cat Lover</h5>
								<p className="text-center">A self-proclaimed ailurophile. Two cats jumping on his workspace has become a common occurence, but it only says so much about how he focuses on work despite the cute distractions around him.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;