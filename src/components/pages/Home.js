import React, {Fragment} from 'react'

import Hero from './../layouts/Hero'
import About from './../layouts/About'
import Portfolio from './../layouts/Portfolio'
import Tech from './../layouts/Tech'
import Navbar from '../layouts/Navbar'

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<About />
			<Portfolio />
			<Tech />
		</Fragment>
	)
}

export default Home;