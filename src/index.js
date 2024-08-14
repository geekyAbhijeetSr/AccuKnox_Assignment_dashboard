import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { DashboardProvider } from './Store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<DashboardProvider>
			<div className='container'>
				<App />
			</div>
		</DashboardProvider>
	</React.StrictMode>
)
