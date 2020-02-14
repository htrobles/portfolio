import React from 'react';

const Footer = () => {
	return(
		<div className="footer py-3">
			<div className="container">
				<span>&copy; {(new Date()).getFullYear()} Hector Robles. All Rights Reserved.</span>
			</div>
		</div>
	)
}

export default Footer;