import React from 'react'
import './header.css'
import Sidebar from './Sidebar'

const Header = () => {
	const [modalIsOpen, setModalIsOpen] = React.useState(false)

	return (
		<header>
			<h1 className='title'>Dashboard</h1>
			<div className="add_or_search">
				<button onClick={() => { setModalIsOpen(true) }}>Manage Widgets</button>
				{/* <input type='text' placeholder='Search...' /> */}
			</div>

			<Sidebar isOpen={modalIsOpen} closeModal={() => { setModalIsOpen(false) }}/>
		</header>
	)
}

export default Header
