import Destination from '@/components/Destination'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Services'
import Sponsor from '@/components/Sponsor'
import Testimonials from '@/components/Testimonials'
import TravelPoint from '@/components/TravelPoint'

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsor />
      <Services />
      <Destination />
      <TravelPoint />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  
  )
}
