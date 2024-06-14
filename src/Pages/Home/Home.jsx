import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from './Banner/Banner'
import Advantage from './Advantage/Advantage'
import PopularCourses from './Popular-Courses/PopularCourses'
import Counter from './Counter/Counter'
import Stories from './Stories/Stories'
import NewsLetter from './Newsletter/NewsLetter'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Dream.IT | Home</title>
      </Helmet>
      <div>
        <Banner />
        <Advantage />
        <PopularCourses />
        <Counter />
        <Stories />
        <NewsLetter />
      </div>
    </div>
  )
}

export default Home