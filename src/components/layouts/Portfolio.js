import React from 'react';

import Project from '../Project/Project';

const projects = require('./../../data/projects');

const Portfolio = () => {
	return (
		<div className="section px-3" id="portfolio">
			<div className="container projects py-5">
				<div className="row p-lg-5">
					<div className="col-12 mb-4">
						<h5>PORTFOLIO</h5>
						<hr />
					</div>

					{/*START OF PROJECT CARDS*/}
					{projects.map((project, index) => {
						return <Project key={index} project={project} />;
					})}
					{/*END OF PROJECT CARDS*/}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
