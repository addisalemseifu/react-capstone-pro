import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';
import store from '../../redux/store';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('renders correctly', async () => {
    const homepage = await renderer
      .create(
        <Provider store={store}><HomePage /></Provider>,
      )
      .toJSON();
    expect(homepage).toMatchSnapshot();
  });
});
