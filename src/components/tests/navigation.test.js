import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../Navigation';
import '@testing-library/jest-dom';

describe('Navigation', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Navigation /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
