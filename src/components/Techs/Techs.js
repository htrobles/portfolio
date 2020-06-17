import React from 'react';

const Techs = (props) => {
	return (
		<div className="col-12 border-bottom mb-4">
			<h5 className="pl-md-4">{props.title}</h5>
			<div className="row mb-4">{props.children}</div>
		</div>
	);
};

export default Techs;
