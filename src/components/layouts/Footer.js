import React, {Fragment} from 'react';

const Footer = () => {
	return(
		<Fragment>
			<div className="py-3" id="footer">
				<div className="container">
					<span className="d-inline-block py-2">&copy; {(new Date()).getFullYear()} Hector Robles. All Rights Reserved.</span>
					<button className="d-none d-md-block footer__button" data-toggle="modal" data-target="#contactModal">HIRE ME</button>
				</div>
			</div>
	
			<div className="modal fade px-0" id="contactModal" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="contactModalTitle">HIRE ME</h5>
						</div>
						<div className="modal-body p-md-5">
							<div className="row">
								<div className="col-lg-6">
									<form action="https://formspree.io/myywrdrp" method="POST">
										<div className="form-group">
											<label htmlFor="name">Name:</label>
											<input type="text" className="form-control" id="name" name="name" required placeholder="John Doe"/>
										</div>
										<div className="form-group">
											<label htmlFor="email">Email Address:</label>
											<input type="email" className="form-control" id="email" name="email" required placeholder="jdoe@email.com"/>
										</div>
										<div className="form-group">
											<label htmlFor="message">Message:</label>
											<textarea name="message" id="message" rows="5" className="form-control" required placeholder="Hi Hector! I would like to hire you for a job."></textarea>
										</div>
										<button type="submit" className="btn btn-secondary w-100" >Send Message</button>
									</form>
								</div>
								<div className="col-lg-6 pl-5">
									<a href="tel:+639175735851" className="d-block mt-4 mb-3"><i className="mr-3 fas fa-phone-square-alt"></i>+63 917 573 5851</a>
									<a href="mailto:hjt.robles@gmail.com" className="d-block mb-3"><i className="mr-3 fas fa-envelope"></i>hjt.robles@gmail.com</a>
									<a href="./assets/downloads/hector-robles-resume.pdf" target="_blank" className="d-block"><i className="mr-3 fas fa-file"></i>Download my resume</a>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-outline-light px-4" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Footer;