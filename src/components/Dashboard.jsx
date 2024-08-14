import React from 'react'
import './dashboard.css'
import Widget from './Widget'
import { useDashboard } from '../Store'

const Dashboard = () => {
	const { state } = useDashboard()

	return (
		<div>
			{Object.keys(state).map(category => {
				return (
					<div key={category} className='category'>
						<h1 className='category_title'>{category}</h1>

						<div className='category_widgets'>
							{state[category].filter(item => item.active).map(item => {
								return (
									<Widget
										key={item.id}
										id={item.id}
										category={category}
										name={item.name}
										description={item.description}
									/>
								)
							})}

							<Widget category={category} type='add' />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Dashboard
