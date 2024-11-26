import "./section2.css"
import rasm from "../../assets/images/card_img1.png"
import rasm2 from "../../assets/images/card_img2.png"
import rasm3 from "../../assets/images/card_img3.png"


const section2 = () => {
    return (
        <div className="row">
            <section className="box">
                <p className="title">Другие новости по теме</p>
                <div className="guruh5">
                    <div className="card_c">
                        <img src={rasm} alt="" className="card_im" />
                        <p className="card_section_text">5.01.2019</p>
                        <p className="card_section_text2">Как продавать на Amazon?</p>
                        <p className="chitat">Читать</p>
                    </div>
                    <div className="card_c">
                        <img src={rasm2} alt="" className="card_im" />
                        <p className="card_section_text">5.01.2019</p>
                        <p className="card_section_text2">Доставка в США и Европу</p>
                        <p className="chitat">Читать</p>
                    </div>
                    <div className="card_c">
                        <img src={rasm3} alt="" className="card_im" />
                        <p className="card_section_text">5.01.2019</p>
                        <p className="card_section_text2">Как выводить деньги с Amazon
                            в Россию?</p>
                        <p className="chitat">Читать</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default section2