import React from 'react';

const projectImgUrl = './assets/images/projects/';

const Project = (props) => {
	return (
		<div className="col-md-6 col-lg-4" key={props.project.id}>
			<div className="tile mb-4">
				<img
					src={projectImgUrl + props.project.image}
					alt={props.project.title}
					className="project__image img img-fluid"
				/>
				<div className="project__details p-4">
					<h5 className="project__title">{props.project.title}</h5>
					<p className="project__description">{props.project.description}</p>
					<div className="project__btn">
						<a
							href={props.project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="btn"
						>
							VIEW PROJECT
						</a>
					</div>
					<div className="project__technologies pr-5">
						{/* START OF PROJECT TECHS */}
						{props.project.technologies.map((tech) => {
							return (
								<span className="project__technology d-inline-block" key={tech}>
									{tech}
								</span>
							);
						})}
						{/* END OF PROJECT TECHS  */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
