// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-img-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="sm-home-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-home-img"
      />
    </div>
  </div>
)

export default About
