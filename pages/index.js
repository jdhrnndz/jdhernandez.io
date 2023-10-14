import Head from 'next/head'
import AnimatedBackground from '@components/AnimatedBackground'
import HomeBanner from '@components/HomeBanner'
import Navigation from '@components/Navigation'
import ProjectList from '@components/ProjectList'
import { useState } from 'react';
import routes from 'utils/routes';
import Contact from '@components/Contact'
import SiteHeader from '@components/SiteHeader'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(routes.About);
  return (
    <div className="container h-screen flex flex-col">
      <SiteHeader>
        <Navigation navTo={setCurrentPage} />
      </SiteHeader>
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
    </div>
  )
}
