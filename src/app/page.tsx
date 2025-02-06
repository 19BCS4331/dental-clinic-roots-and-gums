import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/services/Services'
import About from '@/components/about/About'
import Testimonials from '@/components/testimonials/Testimonials'
import Map from '@/components/Map'
import Contact from '@/components/contact/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Map />
      <Contact />
    </>
  )
}
