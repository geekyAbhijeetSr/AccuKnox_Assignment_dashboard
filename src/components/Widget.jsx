import React from 'react'
import './widget.css'
import AddWidget from './AddWidget'
import { removeWidget, useDashboard } from '../Store'

const Widget = ({ name, description, type, id, category }) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const { dispatch } = useDashboard()

    const handleRemove = () => {
        dispatch(removeWidget(category, id))
    }

	if (type === 'add') {
		return (
			<>
				<div className={`widget ${type}`}>
					<button onClick={() => {setModalIsOpen(true)}}>+ Add Widget</button>
                </div>
                
                <AddWidget category={category} modalIsOpen={modalIsOpen} closeModal={() => {setModalIsOpen(false)}}  />
			</>
		)
	}

	return (
        <div className='widget'>
            <span className='remove' onClick={handleRemove}>x</span>
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	)
}

export default Widget
