import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import JSApp from './App';
import { createRoot } from 'react-dom/client'

/*it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

/*it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
})*/

it('renders learn react link', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<JSApp/>);
})

it('renders without crashing', () => {
    const container = document.createElement('div');
    const root = createRoot(container); 
    root.render(<JSApp tab="home" />);
    root.unmount();
});