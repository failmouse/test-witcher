import React, {useState} from 'react';
import './formpage.scss';
import { useForm } from "react-hook-form";
import ArrowIco from "./components/arrow.png";
import ClipIco from './components/clip.png';
import Logo from "../../components/images/logo.png";

export default function FormPage() {
    const {register, handleSubmit,formState: {errors, touchedFields, dirtyFields}, setValue, getValues} = useForm({
        defaultValues: {
            Name: "",
            Email: "",
            Telephone: "",
            Text: "",
            picture: "",
            City: "Выберете город"
        }});

    let TelephonePlaceholder = "+7 (___) __-__-___";

    if (touchedFields.Telephone || dirtyFields.Telephone) {
        TelephonePlaceholder = "Телефон";
        if (getValues("Telephone").length < 2) {setValue("Telephone", "+7");}
    }

    let cityList = [
        "Москва",
        "Санкт-Питербург",
        "Казань",
        "Краснодар",
        "Ростов на дону"
    ]

    const [CityExpanded, setCityExpanded] = useState(false);

    const [triggered, settriggered] = useState("no");

    const [fileName, setfileName] = useState("Прикрепите файл");

    const [formSended, setformSended] = useState("no");

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        setformSended("yes");
    }

    const handleCityChange = (city) => {
        setValue("City", city);
    }

    return (
        <>
            <header className="header-form">
                <a href="/"><img src={Logo}/></a>
            </header>
            <section className="container">
                <div className="contact-us-form">
                    <div className="form-wrapper">
                        {formSended!=="yes"? 
                        <>
                            <h1 className='title-form'>Оставьте заявку</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row-selector">
                                    <div className='citySelect'>
                                        <input onClick={() => 
                                        {setCityExpanded(!CityExpanded); settriggered("yes");}} className={ CityExpanded ? "expanded" : "collapsed" }
                                        style={{backgroundColor: errors.City && "rgba(236, 63, 63, 0.2)"}} type="text" readOnly
                                        {...register("City", { required: true, validate: (value) => value !== "Выберете город" })} />
                                        <i className={ CityExpanded ? "expanded" : "collapsed" } ><img src={ArrowIco}/></i>
                                        <ul className={
                                            triggered=="yes"? CityExpanded? "expanded" : "collapsed" : ""
                                        } triggered={triggered} style={{backgroundColor: errors.City && "rgba(236, 63, 63, 0.2)"}}>
                                            {cityList.map((i, index) =>
                                                <li key={index} onClick={() => {handleCityChange(cityList[index]); setCityExpanded(!CityExpanded);}}>
                                                    {cityList[index]}
                                                </li>
                                            )}
                                        </ul>
                                        {errors.City && errors.City.type === "validate" && (<span className="error">Поле не заполненно</span>)}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <input placeholder="Name"
                                        style={{backgroundColor: errors.Name && "rgba(236, 63, 63, 0.2)"}} type="text"
                                        {...register("Name", { required: true, minLength: 3, maxLength: 20, pattern: /[A-Za-zА-Яа-я]/i })} />
                                    <span className="floating-label">Имя</span>
                                    {errors.Name && errors.Name.type === "required" && (<span className="error">Поле не заполненно</span>)}
                                </div>
                                <div className="form-row two-input">
                                    <div className="input-column">
                                        <input placeholder="Email" style={{backgroundColor: errors.Email && "rgba(236, 63, 63, 0.2)"}} type="email"
                                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        <span className="floating-label">Email</span>
                                        {errors.Email && errors.Email.type === "required" && (<span className="error">Поле не заполненно</span>)}
                                    </div>
                                    <div className="input-column">
                                        <input placeholder="Телефон" style={{backgroundColor: errors.Telephone && "rgba(236, 63, 63, 0.2)"}} type="tel"
                                        {...register("Telephone", { required: true, minLength: 11, maxLength: 12, pattern: /[+1-9]/i })} />
                                        <span className="floating-label">{TelephonePlaceholder}</span>
                                        {errors.Telephone && errors.Telephone.type === "required" && (<span className="error">Поле не заполненно</span>)} 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <textarea placeholder="Оставьте пометку к заказу" style={{backgroundColor: errors.Text && "rgba(236, 63, 63, 0.2)"}}
                                        {...register("Text", { required: true })} /> 
                                        {errors.Text && errors.Text.type === "required" && (<span className="error">Поле не заполненно</span>)}
                                </div>
                                <div className="form-row-file">
                                    <div className='file-handler'>
                                        <input accept="image/*" type="file" id="picture" {...register("picture", { onChange: (e) => {if (getValues("picture")[0]!==undefined) {setfileName(getValues("picture")[0].name)} else {setfileName("Прикрепите файл")}}, required: true })} />
                                        <label className={errors.picture && "error"} htmlFor="picture">{fileName}</label>
                                        <i><img src={ClipIco}/></i>
                                    </div>
                                    {errors.picture && errors.picture.type === "required" && (<span className="error">Поле не заполненно</span>)}
                                </div>
                                <div className='form-row-checkbox'>
                                    <div className='checkbox-hadler'>        
                                        <input className='custom-checkbox' type="checkbox" id="persData" {...register("persData", { required: true })} />
                                        <label className={errors.persData && "error"} htmlFor="persData">Даю согласие на обработку своих персональных данных</label>
                                    </div>
                                    {errors.persData && errors.persData.type === "required" && (<span className="error">Поле не заполненно</span>)}
                                </div>
                                <input className='lightred-btn' value="Оставить заявку"  type="submit" />
                            </form>
                        </>
                        :
                        <div className='success-text'>
                            <h1>Заявка отправлена!</h1>
                            <h4>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h4>
                            <a className="lightred-btn" href="/">Вернуться на главную</a>
                        </div>}
                    </div>
                    <div className={formSended!=="yes"? "contacts" : "contacts sended"}>
                        <p>Наша горячая линия</p>
                        <h2>8 800 38 23 112</h2>
                        <p>Главный офис</p>
                        <h3>г. Москва, Садовническая ул., 80</h3>
                        <p>Часы работы</p>
                        <h3>Пн-Пт с 10:00 до 22:00</h3>
                    </div>
                </div>
            </section>
        </>
    )
}
