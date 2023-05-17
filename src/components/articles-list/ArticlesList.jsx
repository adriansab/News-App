import React, { useEffect, useState } from 'react'
import ArticleListItem from '../article-list-item/ArticleListItem'
import './ArticlesList.css'

const ArticlesList = () => {
  
  //const apiKey='6cef80e3-6ef5-4769-9eb9-bd6b47ddf146';
  
  const [data, setData] = useState();
  
  
  useEffect(() => {
    const apiUrl =`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=6cef80e3-6ef5-4769-9eb9-bd6b47ddf146`

   const fetchData = () => {
      return new Promise((resolve, reject) => {
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              reject(new Error('Network response was not ok'));
            }
            return response.json();
          })
          .then(data => {
            resolve(data.response.results);
          })
          .catch(error => {
            reject(error);
          });
      });
    };

    fetchData().then(data => {
      setData(data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }, []);
  return (
    <div className='article-list'  data-testid='article-list'>
      {data !== undefined &&
        data.map(article => {
        return (
          <React.Fragment key={article.id}>
            <ArticleListItem  title={article.webTitle} thumbnail={article.fields.thumbnail} body={article.fields.bodyText} url={article.webUrl} />  
          </React.Fragment>
        )
      })}
    </div>
  )
}
  
export default ArticlesList;