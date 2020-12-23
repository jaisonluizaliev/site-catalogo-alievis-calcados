import ContentHome from '../components/ContentHome' 
import CarouselComp from '../components/Carousel'
import SectionAds from '../components/SectionAds'

export default function Home() {
  return (
    <main>
      <CarouselComp/>
      <SectionAds/>
      <ContentHome/>
    </main>
  )
}
