import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticlesList from './ArticlesList';

test('renders article list items', async () => {
  render(<ArticlesList />);
  const articleList = screen.getByTestId('article-list');
  expect(articleList).toBeInTheDocument();
});



