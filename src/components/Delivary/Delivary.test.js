import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from '../../StateProvider';
import reducer from '../../reducer';
import Delivary from './Delivary';

describe('Delivary', () => {
  it('should render the component with form fields', () => {
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <StateProvider initialState={{}} reducer={reducer}>
          <Delivary />
        </StateProvider>
      </BrowserRouter>
    );
    expect(getByLabelText('Full Name *')).toBeInTheDocument();
    expect(getByLabelText('Mobile Number *')).toBeInTheDocument();
    expect(getByLabelText('Pin Code *')).toBeInTheDocument();
    expect(getByLabelText('Address *')).toBeInTheDocument();
    expect(getByLabelText('Land Mark *')).toBeInTheDocument();
    expect(getByLabelText('City/District *')).toBeInTheDocument();
    expect(getByText('Save Changes')).toBeInTheDocument();
  });

  it('should update the state and redirect to payment page on form submit', () => {
    const { getByLabelText, getByText, history } = render(
      <BrowserRouter>
        <StateProvider initialState={{}} reducer={reducer}>
          <Delivary />
        </StateProvider>
      </BrowserRouter>
    );
    fireEvent.change(getByLabelText('Full Name *'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Mobile Number *'), { target: { value: '1234567890' } });
    fireEvent.change(getByLabelText('Pin Code *'), { target: { value: '123456' } });
    fireEvent.change(getByLabelText('Address *'), { target: { value: '123 Main St' } });
    fireEvent.change(getByLabelText('Land Mark *'), { target: { value: 'Near Park' } });
    fireEvent.change(getByLabelText('City/District *'), { target: { value: 'New York' } });
    fireEvent.click(getByText('Save Changes'));
    expect(history.location.pathname).toEqual('/payment');
  });
});
