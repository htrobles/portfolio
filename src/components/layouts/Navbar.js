import React from 'react';

const Navbar = () => {
	return (
		<div id="navbar">
			<div className="container">
				<nav className="navbar navbar-expand-md">
					<a href="/" className="navbar-brand">HECTOR ROBLES</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span><i class="fas fa-bars"></i></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav ml-auto">
							<li className="navbar-item">
								<a href="/#about" className="nav-link">ABOUT</a>
							</li>
							<li className="navbar-item">
								<a href="/#portfolio" className="nav-link">PORTFOLIO</a>
							</li>
							<li className="navbar-item">
								<a href="/#contact" className="nav-link">CONTACT</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navbar;