// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftPivot title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftPivot/i);
    expect(titleElement).toBeInTheDocument();
});
