import React from 'react'

const Article = ({ title = 'My blog', date = 'January 1, 1970', preview = 'I was there' }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
