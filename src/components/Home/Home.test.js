import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render the component with carousel and product sliders', () => {
    const { getByAltText, getByText } = render(<Home />);
    expect(getByAltText('First slide')).toBeInTheDocument();
    expect(getByAltText('Second slide')).toBeInTheDocument();
    expect(getByAltText('Third slide')).toBeInTheDocument();
    expect(getByText('Trending Offers')).toBeInTheDocument();
    expect(getByText('Fashion')).toBeInTheDocument();
    expect(getByText('Electronics')).toBeInTheDocument();
    expect(getByText('Home appliances')).toBeInTheDocument();
    expect(getByText('Mobiles')).toBeInTheDocument();
  });
});
