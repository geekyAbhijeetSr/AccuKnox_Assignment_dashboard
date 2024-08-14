import React from 'react'
import Modal from 'react-modal'
import './sidebar.css'
import WidgetList from './WidgetList'
import AddCategory from './addCategory'

Modal.setAppElement('#sidebarModal')

const customStyles = {
	content: {
		top: '0',
		right: '0px',
		bottom: '0',
		left: 'auto',
		backgroundColor: '#fff',
		minWidth: '320px',
		width: '25%',
		padding: 0,
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
}

const Sidebar = ({ isOpen, closeModal }) => {
	const [isOpenAddCategory, setIsOpenAddCategory] = React.useState(false)
	const [searchQuery, setSearchQuery] = React.useState('')

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Sidebar Modal'
		>
			<div className='sidebar'>
				<div className='close' onClick={closeModal}>
					x
				</div>

				<div className='add_or_search'>
					<button
						onClick={() => {
							setIsOpenAddCategory(true)
						}}
					>
						Add Category +
					</button>
					<input
						type='text'
						placeholder='Search...'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</div>

				<AddCategory
					modalIsOpen={isOpenAddCategory}
					closeModal={() => setIsOpenAddCategory(false)}
				/>

				<WidgetList searchQuery={searchQuery} />
			</div>
		</Modal>
	)
}

export default Sidebar
