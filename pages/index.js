import ContentHome from '../components/ContentHome' 
import CarouselComp from '../components/Carousel'
import SectionAds from '../components/SectionAds'
import OfferSection from '../components/Offer'

export default function Home() {
  return (
    <main>
      <CarouselComp/>
      <OfferSection/>
      <SectionAds/>
      <ContentHome/>
    </main>
  )
}
