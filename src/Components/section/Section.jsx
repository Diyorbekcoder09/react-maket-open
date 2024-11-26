import "./Section.css"
import section_rasm from '../../assets/images/section_img.png'
import { IoIosArrowBack } from "react-icons/io";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2, ImLinkedin } from "react-icons/im";

const Section = () => {
  return (
    <div className="container3">
      <section className="section">
        <p className="section_text">
          Amazon – виртуальный торговый сервис. Это крупнейшая мировая площадка для реализации реальных товаров и услуг между странами и даже континентами. Она объединяет продавцов и покупателей, предоставляя для каждой из сторон наиболее интересные и выгодные условия для работы.
          <br />
          <br />
          Хотите вести бизнес из любой точки мира? Это легко!
        </p>
        <p className="section_title">Что такое «Амазон»?</p>
        <p className="section_text2">
          Торговля на Amazon ведется с 1995 года и первоначально была ориентирована на торговлю книгопечатной продукции. Сегодня ассортимент реализации насчитывает более чем 34 категорий таких товаров как электроника и детские игрушки, продукты питания и хозяйственные вещи, спортивное снаряжение и автомобильные запасные части, электронные книги и одежда, а также многое другое.
          <br />
          <br />

          Всего действует восемь филиалов компании, каждый из которых имеет собственную специфику, уровень цен, ассортимент, стоимость доставки. Это отделение в Китае, Канаде, Испании, Германии, Японии, Великобритании, Италии и США (головное подразделение). По масштабам товарооборота, «Амазон» является крупнейшим конкурентом «ИБэя».
          <br />
          <br />
          Все сделки на ресурсе совершаются только через интернет, поэтому для работы нет необходимости в организации офиса или торгового помещения, что позволяет снижать затраты и предлагать покупателям привлекательные цены.
          <br />
          <br />

          Кстати, на ресурсе есть специальная система откликов покупателей, которые описывают свои впечатления о сотрудничестве. «Клиенты со стороны» не смогут написать «заказные» рекомендации или антирекомендации. Поэтому если вы дорожите репутацией, ведете честную торговлю на «Амазон», отзывы покупателей помогут вам укрепить деловую репутацию.
        </p>
        <p className="section_title">
          Как стать продавцом на Amazon?
        </p>
        <p className="section_text">
          Для продажи на Amazon обучение не требуется, все довольно просто – если знать некоторые нюансы. Чтобы создать новый аккаунт, вам достаточно пройти регистрацию продавца на Amazon и ввести специальный код. После чего вы сможете выбирать свои листинги, товарные позиции, стоимость изделий, изменять настройки своей учетной записи.
          <br />
          <br />
          Поэтапно запуск товаров выглядит следующим образом:
        </p>
        <p className="section_text3">
          •  Research – подбор товара;
          <br />
          •  Подбор поставщиков продукции;
          <br />
          •  Осуществление листинга на Amazon;
          <br />
          •  Продажи.
        </p>

        <p className="section_text2">
          Для создания нового рабочего аккаунта оптимально подбирать адреса электронной почты вне российской зоны – лучше всего yahoo или же gmail. Зарубежный сервис относится к ним более лояльно и не испытывает проблем с верификацией, чего нельзя сказать о зоне с доменом .ru.
          <br />
          <br />
          Основной ресурс Amazon – американское отделение сервиса Amazon.com, зарегистрировавшись на нем вы получаете доступ ко всему североамериканскому рынку, включая США, Канаду и Мексику. Однако для торговли в Европе потребуется пройти отдельных процесс.
        </p>
        <img src={section_rasm} alt="" className="section_rasm" />
        <p className="pech">Доступные рынки для продажи на Amazon</p>
        <p className="section_text2">
          Продажи на Amazon Europe стоит начать именно c регистрации на Amazon.co.uk, потому что личный кабинет с сайта британского представительства может использоваться и в других европейских филиалах (Amazon.de, Amazon.fr, Amazon.it).
          <br />
          <br />
          При этом некоторые из сведений своего аккаунта вы можете сделать доступными для своих покупателей, а некоторую информацию скрыть от посторонних глаз.
        </p>
        <div className="section_card">
          <p className="section_card_text">Не пропускайте новые статьи</p>
          <p className="section_card_text2">Подпишитесь на рассылку и получайте новости экспорта, инструкции и статьи</p>
          <form className="form">
            <input type="email" className="section_input" placeholder="Email" required />
            <button className="card_btn">
              Подписаться
            </button>
          </form>
        </div>
        <hr />
        <div className="guruh">
          <div className="section_link">
            <a href="https://x.com/?lang=en"><FaSquareTwitter className="Twittr" /></a>
            <a href="https://www.facebook.com/"><ImFacebook2 className="facebook" /></a>
            <a href="https://uz.linkedin.com/"> <ImLinkedin className="Linkedin" /></a>
            <a href="https://www.instagram.com/"><FaSquareInstagram className="instagram" /></a>
            <div className="card_chiziq"></div>
            <div className="guruh2">
              <p className="section_link_text">Поделились:</p>
              <p className="section_link_text1">439</p>
            </div>
          </div>
          <p className="pech2">Опубликовано 5.01.2019</p>
        </div>

        
      </section>
    </div>
  )
}

export default Section