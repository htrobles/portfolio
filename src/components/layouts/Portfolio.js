import React from 'react';

const Portfolio = () => {
	return (
		<div className="sections portfolio">
			<div className="container subsection projects">
				<div className="row">

					{/*START OF PROJECT CARDS*/}
					<div className="col-md-6 col-lg-4">
						<div className="tile">
							<img src="https://picsum.photos/200" alt="Project Name" className="project-image img img-fluid"/>
							<div className="project-details p-3 p-md-5">
								<h5 className="project-title">This is a Project Title</h5>
								<p className="description">Description</p>
								<div className="technologies">
									<span className="technology">HTML</span>
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