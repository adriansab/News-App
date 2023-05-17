import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleListItem from './ArticleListItem';

describe('<ArticleListItem />', () => {
  const article = {
    id: '123',
    webTitle: 'Test Article',
    fields: {
      thumbnail: 'https://example.com/image.jpg',
      bodyText: 'This is the article body text',
    },
    webUrl: 'https://example.com/article',
  };

  it('renders the article title', () => {
    render(<ArticleListItem title={article.webTitle} />);
    const titleElement = screen.getByText(article.webTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the article thumbnail image', () => {
    render(<ArticleListItem thumbnail={article.fields.thumbnail} />);
    const imageElement = screen.getByAltText('');
    expect(imageElement.src).toEqual(article.fields.thumbnail);
  });

  it('renders the article body when the title is clicked', () => {
    render(<ArticleListItem title={article.webTitle} body={article.fields.bodyText} />);
    const titleElement = screen.getByText(article.webTitle);
    fireEvent.click(titleElement);
    const bodyElement = screen.getByText(article.fields.bodyText);
    expect(bodyElement).toBeInTheDocument();
  });
});
