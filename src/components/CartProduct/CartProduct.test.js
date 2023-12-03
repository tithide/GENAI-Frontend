import React from 'react';
import { render } from '@testing-library/react';
import CartProduct from './CartProduct';
describe('CartProduct', () => {
  it('should render the component with props', () => {
    const props = {
      id: 1,
      image: 'https://example.com/image.jpg',
      title: 'Product Title',
      price: 1000,
      rating: 4,
      hideButton: false,
    };
    const { getByAltText, getByText } = render(<CartProduct {...props} />);
    expect(getByAltText('Cart product')).toBeInTheDocument();
    expect(getByText('Product Title')).toBeInTheDocument();
    expect(getByText('₹ 1000')).toBeInTheDocument();
    expect(getByText('⭐⭐⭐⭐')).toBeInTheDocument();
    expect(getByText('Remove From Cart')).toBeInTheDocument();
  });
  it('should render the component without remove button', () => {
    const props = {
      id: 1,
      image: 'https://example.com/image.jpg',
      title: 'Product Title',
      price: 1000,
      rating: 4,
      hideButton: true,
    };
    const { queryByText } = render(<CartProduct {...props} />);
    expect(queryByText('Remove From Cart')).toBeNull();
  });
});