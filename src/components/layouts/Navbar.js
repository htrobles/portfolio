import React from 'react';

const Navbar = () => {
	return (
		<div id="navbar">
			<div className="container">
				<nav className="navbar navbar-expand-md px-0">
					<a href="/" className="navbar-brand">
						HECTOR ROBLES
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<i className="fas fa-bars"></i>
						</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav ml-auto">
							<li className="navbar-item">
								<a href="#about" className="nav-link">
									ABOUT
								</a>
							</li>
							<li className="navbar-item">
								<a href="#portfolio" className="nav-link">
									PORTFOLIO
								</a>
							</li>
							<li className="navbar-item">
								<a href="#tech" className="nav-link">
									TECHNOLOGIES
								</a>
							</li>
							<li className="navbar-item">
								<a
									href="#contact"
									className="nav-link d-md-none"
									data-toggle="modal"
									data-target="#contactModal"
								>
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
