import React, { useState } from 'react'
import "./ArticleListItem.css"


const ArticleListItem = ({title, thumbnail, body, url }) => {
  
  const [descriptionOpen, setDescriptionOpen] = useState(false)
  

  return (
    <>
      <div className='article-list-item'>        
        <div className='image'>
          <img src={thumbnail} alt=''  />
          <button className='button' onClick={() => window.location.href = url}>
            Full Article 
          </button>
          </div>
          <div className='content'>
          <h3 onClick={() => setDescriptionOpen(!descriptionOpen)} >{title}
          </h3>
          {descriptionOpen && <p className='description' >{body} </p>}
          </div>
      </div>
    </>
  )
}

export default ArticleListItem;