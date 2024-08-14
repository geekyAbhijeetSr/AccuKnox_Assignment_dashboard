import React from 'react'
import { removeCategory, removeWidget, useDashboard } from '../Store'
import './widgetList.css'

const WidgetList = ({searchQuery}) => {
	const { state, dispatch } = useDashboard()

	const toggleWidget = (category, widgetId) => {
		dispatch({ type: 'TOGGLE_WIDGET', payload: { category, widgetId } })
	}

	return (
		<div className='widget_list'>
			{Object.keys(state).map(category => (
				<details key={category} open>
					<summary className='category_title'>{category} <span className='remove' onClick={() => dispatch(removeCategory(category))}>x</span></summary>
					<ul className='category_list'>
						{state[category].filter(widget => {
							return widget.name.toLowerCase().includes(searchQuery.toLowerCase());
						}).map(widget => (
							<li key={widget.id} className='category_item'>
								<input
									type='checkbox'
									name={widget.id}
									id={widget.id}
									checked={widget.active}
									onChange={() => toggleWidget(category, widget.id)}
								/>
								{widget.name} <span className='remove' onClick={() => dispatch(removeWidget(category, widget.id))}>x</span>
							</li>
						))}
					</ul>
				</details>
			))}
		</div>
	)
}

export default WidgetList
