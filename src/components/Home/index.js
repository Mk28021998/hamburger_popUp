// Write your code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="app-container">
    <Header />
    <div className="home-img-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="sm-home-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="lg-home-img"
      />
    </div>
  </div>
)

export default Home
