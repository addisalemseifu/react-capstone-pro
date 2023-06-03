import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Item from '../Item';
import '@testing-library/jest-dom';

describe('item', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Item /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
