import "./Footer.css"
import bayroq1 from "../../assets/images/bayroq1.png"
import bayroq2 from "../../assets/images/bayroq2.png"
import bayroq3 from "../../assets/images/bayroq3.png"
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2, ImLinkedin, ImVk } from "react-icons/im";



const Footer = () => {
  return (
    <div className="box2">
      <footer className="footer">
        <div className="footer_bayroq">
          <div className="bayroq">
            <img src={bayroq1} alt="" className="bayroq_img" />
            <p className="bayroq_text">USA +1 (302) 246-10-37</p>
          </div>
          <div className="bayroq">
            <img src={bayroq2} alt="" className="bayroq_img" />
            <p className="bayroq_text">Deutschland +49 (30) 740-04-1-11</p>
          </div>
          <div className="bayroq">
            <img src={bayroq3} alt="" className="bayroq_img" />
            <p className="bayroq_text"> Россия +7 (495) 155-8937</p>
          </div>
        </div>
        <hr />

        <div className="footer_title">
          <div className="footer_text1">
            <p className="f_text">Компания</p>
            <ul className="footer_item">
              <li className="footer_item_text">Вакансии</li>
              <li className="footer_item_text">Zonesmart в СМИ</li>
              <li className="footer_item_text">Партнеры</li>
              <li className="footer_item_text">Контакты</li>
            </ul>
          </div>
          <div className="footer_text2">
            <p className="f_text">Наши решения</p>
            <ul className="footer_item">
              <li className="footer_item_text">Интеграции</li>
              <li className="footer_item_text">Автоматизация продаж</li>
              <li className="footer_item_text">Профессиональное
                <br />
                продвижение</li>
            </ul>
          </div>
          <div className="footer_text3">
            <p className="f_text">База знаний</p>
            <ul className="footer_item">
              <li className="footer_item_text">Блог</li>
              <li className="footer_item_text">Возможности
                <br />
                маркетплейсов</li>
              <li className="footer_item_text">Частые вопросы</li>
            </ul>
          </div>
          <div className="footer_text4">
            <p className="f_text">Рассылка ZoneSmart</p>
            <ul className="footer_item">
              <li className="footer_item_text">Новости экспорта и никакого спама</li>
            </ul>
            <form className="footer_form">
              <input type="email" required placeholder="Ваш email" className="footer_input" />
              <button className="footer_btn">
                Подписаться
              </button>
            </form>
            <p className="f_text1">
              Остались вопросы? <p className="border">info@zonesmart.ru</p>
            </p>
            <div className="footer_linklar">
              <a href="https://vk.com/"><ImVk className="vk" /></a>
              <a href="https://x.com/?lang=en"><FaSquareTwitter className="vk2" /></a>
              <a href="https://www.facebook.com/"><ImFacebook2 className="vk" /></a>
              <a href="https://uz.linkedin.com/"> <ImLinkedin className="vk" /></a>
              <a href="https://www.instagram.com/"><FaSquareInstagram className="vk2" /></a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer_t">
        <p className="com">ООО "ЗОНСМАРТ" - ОГРН 1197746227755 - ИНН 9705130559</p>
        <p className="com">Политика конфидециальности Правовая информация</p>
        <p className="com">Zonesmart 2019</p>
      </footer>
    </div>
  )
}

export default Footer