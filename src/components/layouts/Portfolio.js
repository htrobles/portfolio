import React from 'react';
const projects = require('./../../data/projects');

const Portfolio = () => {

	const projectImgUrl = "./assets/images/projects/";

	return (
		<div className="section px-3" id="portfolio">
			<div className="container projects py-5">
				<div className="row p-lg-5">
					<div className="col-12 mb-4">
						<h5>PORTFOLIO</h5>
						<hr/>
					</div>

					{/*START OF PROJECT CARDS*/}
					{projects.map(project => {
						return (
							<div className="col-md-6 col-lg-4" key={project.id}>
								<div className="tile mb-4">
									<img src={projectImgUrl + project.image} alt={project.title} className="project__image img img-fluid"/>
									<div className="project__details p-4">
										<h5 className="project__title">{project.title}</h5>
										<p className="project__description">{project.description}</p>
										<div className="project__btn">
											<a href={project.url} target="blank" className="btn">VIEW PROJECT</a>
										</div>
										<div className="project__technologies pr-5">
										{/* START OF PROJECT TECHS */}
											{project.technologies.map(tech => {
												return (
													<span className="project__technology d-inline-block" key={tech}>{tech}</span>
												)
											})}
										{/* END OF PROJECT TECHS  */}
										</div>
									</div>
								</div>
							</div>
						)
					})}
					{/*END OF PROJECT CARDS*/}


				</div>
			</div>
		</div>
	)
}

export default Portfolio;