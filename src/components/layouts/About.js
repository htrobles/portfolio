import React from 'react'

const About = () => {
	return (
		<div className="section about">
			<div className="subsection personal">
				<div className="container py-5">
					<div className="row">
						<div className="col-md-4 px-xl-5 mb-5 mb-md-0">
							<img src="https://picsum.photos/200" alt="Hector Robles" className="img img-fluid mb-3"/>
							<div className="copy">
								<h5 className="text-center">Artist</h5>
								<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vero voluptatem, sit incidunt ab hic neque aspernatur beatae alias quia. Rem autem nihil, placeat fugit sed veniam praesentium officiis, nemo.</p>
							</div>
						</div>
						<div className="col-md-4 px-xl-5 mb-5 mb-md-0">
							<img src="https://picsum.photos/200" alt="Hector Robles" className="img img-fluid mb-3"/>
							<div className="copy">
								<h5 className="text-center">Family Guy</h5>
								<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vero voluptatem, sit incidunt ab hic neque aspernatur beatae alias quia. Rem autem nihil, placeat fugit sed veniam praesentium officiis, nemo.</p>
							</div>
						</div>
						<div className="col-md-4 px-xl-5 mb-5 mb-md-0">
							<img src="https://picsum.photos/200" alt="Hector Robles" className="img img-fluid mb-3"/>
							<div className="copy">
								<h5 className="text-center">Cat Lover</h5>
								<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam vero voluptatem, sit incidunt ab hic neque aspernatur beatae alias quia. Rem autem nihil, placeat fugit sed veniam praesentium officiis, nemo.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="subsection professional">
				<div className="container py-5">
					<div className="row">
						<div className="col-md-4">
							<img src="https://picsum.photos/200" alt="Hector Robles" className="img img-fluid pl-xl-5"/>
						</div>
						<div className="col-md-8 pr-xl-5">
							<div className="copy">
								<h5>Web Developer</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt dolores ad repudiandae ipsa obcaecati accusamus, nobis ducimus molestiae ipsam aperiam officia eius numquam incidunt minima libero! Sapiente, incidunt, porro!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;