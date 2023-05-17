import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve({}),
    });
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });

  it('renders the ArticlesList component', () => {
    render (<App />);
    const articlesListElement = screen.getByTestId('article-list');
    expect(articlesListElement).toBeInTheDocument();
  });
});