import "./Header.css";
import header_logo from "../../assets/images/header_logo.png"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";


const Header = () => {
    return (
        <div className="Container">
            <header className="header">
                <img src={header_logo} alt="" className="header_log" />
                <div className="header_chiziq"></div>
                <p className="header_text">Экспортная платформа</p>
                <ul className="item">
                    <li className="item_text">О компании </li>
                    <li className="item_text_header">Наши решения <IoMdArrowDropdown /></li>
                    <li className="item_text_header">База знаний <IoMdArrowDropdown /></li>
                    <li className="item_text">Блог</li>
                    <li className="item_text">Тарифы</li>
                </ul>
                <button className="header_btn">
                  <FaRegUser className="header_icon"/>  Личный кабинет
                </button>
            </header>
        </div>
    )
}

export default Header