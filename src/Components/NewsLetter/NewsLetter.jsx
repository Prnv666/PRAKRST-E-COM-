import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <>
      <div className="news-letter">
        <h1>Get Exclusive offeres on E-mail</h1>
        <p>Subscribe NewsLetter and Stay Updated</p>

        <div>
            <input type="email" placeholder='your email id' />
            <button>Subscribe</button>
        </div>
        
      </div>
    </>
  )
}

export default NewsLetter
