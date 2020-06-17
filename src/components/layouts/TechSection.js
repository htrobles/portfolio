import React from 'react';

import Techs from '../Techs/Techs';
import Tech from '../Techs/Tech/Tech';

import { webDevList, designList } from '../../data/TechLists';

const TechSection = () => {
	return (
		<div className="section px-3" id="tech">
			<div className="container py-5">
				<div className="row p-lg-5">
					<div className="col-12 mb-4">
						<h5>Technologies</h5>
						<hr />
					</div>
					<Techs title="Web Development">
						{webDevList.map((webDevTech, index) => (
							<Tech
								key={index}
								src={webDevTech.src}
								alt={webDevTech.alt}
								title={webDevTech.title}
							/>
						))}
					</Techs>
					<Techs title="Design">
						{designList.map((designTech, index) => (
							<Tech
								key={index}
								src={designTech.src}
								alt={designTech.alt}
								title={designTech.title}
							/>
						))}
					</Techs>
				</div>
			</div>
		</div>
	);
};

export default TechSection;
