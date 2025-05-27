import HeroSlider from "../../components/HeroSlider/HeroSlider"
import ListAnime from "../../components/ListAnime/ListAnime"
import './Home.scss'

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <ListAnime/>
    </div>
  )
}

export default Home;