import React from 'react';

const Tech = (props) => {
	return (
		<div className="col-4 col-sm-3 col-xl-2 p-3 p-md-5 tech__icon">
			<img
				className="img-fluid"
				src={props.src}
				alt={props.alt}
				data-toggle="tooltip"
				data-placement="bottom"
				title={props.title}
			/>
		</div>
	);
};

export default Tech;
