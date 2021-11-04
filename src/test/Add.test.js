import { render } from '@testing-library/react';
import AddItem from '../pages/AddItem/AddItem';

describe('Stock page',  () => {
  test('It must contain a Header', () => {
    const { container } = render(<AddItem />);

    const headerSection = container.querySelector('header');

    expect(headerSection).toBeInTheDocument();
  });

  test('Header must contain a h2 title', () => {
    const { container } = render(<AddItem />);

    const headerTitle = container.querySelector('header > h2');

    expect(headerTitle).toBeInTheDocument();
  });

  test('It must contain three inputs to insert the data of the items', async () => {
    const { container } = render(<AddItem />);

    const inputList = container.querySelectorAll('input');

    expect(inputList).toHaveLength(3);
  });

  test('It must contain two buttons to save and get back', async () => {
    const { container } = render(<AddItem />);

    const inputList = container.querySelectorAll('button');

    expect(inputList).toHaveLength(2);
  });
});
