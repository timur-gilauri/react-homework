import React from 'react';
import Renderer from 'react-test-renderer';
import {App} from './';

describe('App component', () => {
  it('Should be build', () => {
    const app = Renderer.create(<App />);

    expect(app).not.toBeUndefined();
  });
});
