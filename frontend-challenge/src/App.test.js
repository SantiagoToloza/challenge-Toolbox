import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import '@testing-library/jest-dom';

jest.mock('axios');

beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] });
});

describe('App Component', () => {
    test('renders React Test App header', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        });
        const headerElement = screen.getByText(/React Test App/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('Fetch a la data', async () => {
        const mockData = [
            {
                file: 'test1.csv',
                lines: [
                    {
                        text: 'test text',
                        number: 123,
                        hex: 'abcdef1234567890abcdef1234567890',
                    },
                ],
            },
        ];

        axios.get.mockResolvedValue({ data: mockData });

        await act(async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        });

        expect(screen.getByText(/Files/i)).toBeInTheDocument();
        expect(await screen.findByText(/test text/i)).toBeInTheDocument();
        expect(screen.getByTestId('file-number-0')).toHaveTextContent('123');
        expect(screen.getByText(/abcdef1234567890abcdef1234567890/i)).toBeInTheDocument();
    });

    test('Filtración del dato por nombre de archivo', async () => {
        const mockData = [
            {
                file: 'test1.csv',
                lines: [
                    {
                        text: 'test text',
                        number: 123,
                        hex: 'bbd17b7cb29e6d12801924be1d22f07f',
                    },
                ],
            },
        ];

        axios.get.mockResolvedValue({ data: mockData });

        await act(async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>
            );
        });

        const input = screen.getByPlaceholderText('Enter fole name');
        fireEvent.change(input, { target: { value: 'test1.csv' } });

        const button = screen.getByText('Filter');
        fireEvent.click(button);

        expect(await screen.findByText(/test text/i)).toBeInTheDocument();
    });
});
