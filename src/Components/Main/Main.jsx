import "./Main.css"
import { IoIosArrowBack } from "react-icons/io";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import main_img from "../../assets/images/main_rasm.png"

const Main = () => {
  return (
    <div className="Container2">
      <main className="main">
        <p className="main_title">
          <IoIosArrowBack className="main_icon" />  Вернуться назад
        </p>
        <img src={main_img} alt="" className="main_img" />
        <p className="main_text">5.01.2019</p>
        <p className="main_text2">Продажа на Amazon: эффективный бизнес на дистанционном обслуживании</p>
        <div className="main_card">
          <a href="https://x.com/?lang=en"><FaSquareTwitter className="Twittr" /></a>
          <a href="https://www.facebook.com/"><ImFacebook2 className="facebook" /></a>
          <a href="https://uz.linkedin.com/"> <ImLinkedin className="Linkedin" /></a>
          <a href="https://www.instagram.com/"><FaSquareInstagram className="instagram" /></a>
          <div className="card_chiziq"></div>
          <div className="main_card_text_group">
            <p className="main_card_text">Поделились:</p>
            <p className="main_card_text2">439</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main