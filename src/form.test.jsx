import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import {BookingForm} from './components/Booking/BookingForm';
import { BrowserRouter } from "react-router-dom";
import { fetchAPI, submitAPI } from "./utils/api";


const date = new Date().toISOString().split('T')[0]
const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><BookingForm/></BrowserRouter>)
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


test('Initialize times', async () => {
    const times = fetchAPI(new Date(date));

    render(<BrowserRouter><BookingForm/></BrowserRouter>)

    const timeButtons = screen.getAllByRole('button');
    // Expect times elements to be equal to times length
    // + 1 for reservation button
    expect(timeButtons.length).toBe(times.length + 1);
})

test('Update availble times when date changes ', async () => {
    const times = fetchAPI(new Date(date));

    render(<BrowserRouter><BookingForm/></BrowserRouter>)
    const dateInput = screen.getByLabelText('Choose date');

    fireEvent.change(dateInput, {target: {value: date }})

    const timeButtons = screen.getAllByRole('button');
    // Expect times elements to be equal to times length
    // + 1 for reservation button
    expect(timeButtons.length).toBe(times.length + 1);
})
