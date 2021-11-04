import { render, within } from '@testing-library/react';
import Stock from '../pages/Stock/Stock';

describe('Stock page',  () => {
  test('It must contain a Header', () => {
    const { container } = render(<Stock />);

    const headerSection = container.querySelector('header');

    expect(headerSection).toBeInTheDocument();
  });

  test('Header must contain a h2 title', () => {
    const { container } = render(<Stock />);

    const headerTitle = container.querySelector('header > h2');

    expect(headerTitle).toBeInTheDocument();
  });

  test('It must contain a button with a inner text "Add item"', () => {
    const { container } = render(<Stock />);

    const { getByText } = within(container.querySelector('.add-btn'));

    expect(getByText('Add item')).toBeInTheDocument();
  });
})