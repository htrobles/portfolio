import React, {Fragment} from 'react'

import Hero from './../layouts/Hero'
import About from './../layouts/About'
import Portfolio from './../layouts/Portfolio'

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<About />
			<Portfolio />
		</Fragment>
	)
}

export default Home;