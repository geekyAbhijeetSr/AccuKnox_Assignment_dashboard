import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDashboard, addCategory } from '../Store'
import './addWidget.css'

Modal.setAppElement('#addCategoryModal')

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#fff',
		width: '320px',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
}

const AddCategory = ({ modalIsOpen, closeModal }) => {
    const [categoryName, setCategoryName] = useState('')
    const { dispatch } = useDashboard()

	const handleSubmit = e => {
        e.preventDefault()
        
		console.log('Category Name:', categoryName)
        dispatch(addCategory(categoryName))
		
		closeModal()
	}

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Add Widget Modal'
		>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='categoryName'>Category Name:</label>
					<input
						type='text'
						id='categoryName'
						value={categoryName}
						onChange={e => setCategoryName(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Add Category</button>
			</form>
		</Modal>
	)
}

export default AddCategory
