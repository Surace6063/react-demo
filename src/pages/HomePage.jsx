import HeroSection from '../components/HeroSection'
import LatestProduct from '../components/LatestProduct'

const HomePage = () => {
  return (
    <div className='container'>
        <HeroSection />

        {/* latest product */}
        <div className='mt-16'>
          <h1 className='text-2xl font-semibold text-slate-800 mb-6'>Latest Products</h1>
          <LatestProduct />
        </div>
    </div>
  )
}
export default HomePage