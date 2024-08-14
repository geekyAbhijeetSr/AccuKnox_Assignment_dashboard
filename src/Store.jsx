import React, { createContext, useReducer, useContext } from 'react';

// Initial state
const initialState = {
	'CSPM Executive Dashboard': [
		{
			id: '1',
			name: 'Cloud Accounts',
			description:
				'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			active: true,
		},
		{
			id: '2',
			name: 'Cloud Account Risk Assessment',
			description:
				'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
			active: true,
		},
	],
	'CWPP Dashboard': [
		{
			id: '4',
			name: 'Top 5 Namespaces specific alerts',
			description:
				'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			active: true,
		},
		{
			id: '5',
			name: 'Workload Alerts',
			description:
				'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			active: true,
		},
	],
	'Registry Scan': [
		{
			id: '7',
			name: 'Image Risk Assessment',
			description:
				'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			active: true,
		},
		{
			id: '8',
			name: 'Image Vulnerability Assessment',
			description:
				'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			active: true,
		},
	],
}

// Create context
const DashboardContext = createContext();

// Action types
const ADD_WIDGET = 'ADD_WIDGET';
const REMOVE_WIDGET = 'REMOVE_WIDGET';
const TOGGLE_WIDGET = 'TOGGLE_WIDGET';
const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

// Reducer function
function dashboardReducer(state, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        [action.payload.category]: [
          ...(state[action.payload.category] || []),
          action.payload.widget
        ]
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].filter(
          widget => widget.id !== action.payload.widgetId
        )
      };
    
    case TOGGLE_WIDGET:
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].map(widget => {
          if (widget.id === action.payload.widgetId) {
            return { ...widget, active: !widget.active };
          }
          return widget;
        })
      };

    case ADD_CATEGORY:
      if (!state[action.payload.category]) {
        return {
          ...state,
          [action.payload.category]: []
        };
      }
      return state;
    case REMOVE_CATEGORY:
      if (state[action.payload.category]) {
        delete state[action.payload.category];
        return { ...state };
      }
      return state;
    default:
      return state;
  }
}

// Provider component
export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook for using the context
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}

// Action creators
export function addWidget(category, name, description) {
  const widget = { id: Date.now().toString(), name, description, active: true };
  return { type: ADD_WIDGET, payload: { category, widget } };
}

export function removeWidget(category, widgetId) {
  return { type: REMOVE_WIDGET, payload: { category, widgetId } };
}

export function toggleWidget(category, widgetId) {
  return { type: TOGGLE_WIDGET, payload: { category, widgetId } };
}

export function addCategory(category) {
  return { type: ADD_CATEGORY, payload: { category } };
}

export function removeCategory(category) {
  return {type: REMOVE_CATEGORY, payload: { category } };
}
