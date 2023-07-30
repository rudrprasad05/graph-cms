import React from 'react'

const Author = ({author}) => {

  return (
    <>
        <div>
            <img 
                src={author.photo.url} 
                alt={author.name} 
            />
        </div>
        <div>
            {author.name}
        </div>
    </>
  )
}

export default Author