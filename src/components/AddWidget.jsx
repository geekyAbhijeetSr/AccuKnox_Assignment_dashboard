import React, { useState } from 'react'
import Modal from 'react-modal'
import { addWidget, useDashboard } from '../Store'
import './addWidget.css'

Modal.setAppElement('#addWidgetModal')

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

const AddWidget = ({ category, modalIsOpen, closeModal }) => {
    const { dispatch } = useDashboard()
	const [widgetName, setWidgetName] = useState('')
	const [widgetDescription, setWidgetDescription] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// Here you would typically dispatch an action or call a function to add the widget
		console.log('Adding widget:', {
			name: widgetName,
			description: widgetDescription,
        })
        
        dispatch(addWidget(category, widgetName, widgetDescription))
		// Reset form fields after submission
		setWidgetName('')
        setWidgetDescription('')
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
					<label htmlFor='widgetName'>Widget Name:</label>
					<input
						type='text'
						id='widgetName'
						value={widgetName}
						onChange={e => setWidgetName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='widgetDescription'>Widget Description:</label>
					<textarea
						id='widgetDescription'
						value={widgetDescription}
						onChange={e => setWidgetDescription(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Add Widget</button>
			</form>
		</Modal>
	)
}

export default AddWidget
