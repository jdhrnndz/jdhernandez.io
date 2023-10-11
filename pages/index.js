import Head from 'next/head'
import AnimatedBackground from '@components/AnimatedBackground'
import HomeBanner from '@components/HomeBanner'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <div className="container">
      <div className="header-wrap">
        <div className="header">
          <h1>JD Hernandez</h1>
        </div>
      </div>
      <AnimatedBackground />
      <HomeBanner />
      <Navigation />
    </div>
  )
}
