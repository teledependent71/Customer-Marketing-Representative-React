import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Marketing Representative</title>
        <meta property="og:title" content="Customer Marketing Representative" />
      </Helmet>
    </div>
  )
}

export default Home
