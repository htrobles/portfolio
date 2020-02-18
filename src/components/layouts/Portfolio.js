import React from 'react';
const projects = require('./../../data/projects');

console.log(projects);

const Portfolio = () => {
	return (
		<div className="section portfolio">
			<div className="container projects py-5">
				<div className="row p-lg-5">
					<div className="col-12 mb-4">
						<h5>PORTFOLIO</h5>
						<hr/>
						<p className="about__text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur deserunt dolores ad repudiandae ipsa obcaecati accusamus, nobis ducimus molestiae ipsam aperiam officia eius numquam incidunt minima libero! Sapiente, incidunt, porro!</p>
					</div>

					{/*START OF PROJECT CARDS*/}
					<div className="col-md-6 col-lg-4">
						<div className="tile">
							<img src="https://picsum.photos/200" alt="Project Name" className="project__image img img-fluid"/>
							<div className="project__details p-3 p-md-5">
								<h5 className="project__title">This is a Project Title</h5>
								<p className="project__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque maiores ab aliquam voluptas deserunt quisquam nihil inventore laborum nesciunt modi.</p>
								<button className="btn btn-secondary btn-sm w-100 project__btn">View Project</button>
								<div className="project__technologies">
									<span className="project__technology">HTML</span>
								</div>
							</div>
						</div>
					</div>
					{/*END OF PROJECT CARDS*/}


				</div>
			</div>
		</div>
	)
}

export default Portfolio;