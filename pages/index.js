import Head from 'next/head'
import AnimatedBackground from '@components/AnimatedBackground'
import HomeBanner from '@components/HomeBanner'
import Navigation from '@components/Navigation'
import ProjectList from '@components/ProjectList'
import { useState } from 'react';
import routes from 'utils/routes';
import Contact from '@components/Contact'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(routes.About);
  return (
    <div className="container">
      <div className="header-wrap">
        <div className="header text-xl font-bold">
          <h1>( ͡° ͜ʖ ͡°)</h1>
        </div>
      </div>
      <AnimatedBackground />
      {
        currentPage === routes.About &&
        <HomeBanner />
      }
      {
        currentPage === routes.Projects &&
        <ProjectList />
      }
      {
        currentPage === routes.Contact &&
        <Contact />
      }
      <Navigation navTo={setCurrentPage} />
    </div>
  )
}
