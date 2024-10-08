import './Footer.css'
import icon_youtube from '../../static-files/icons/icon_youtube.png'
import icon_google from '../../static-files/icons/icon_google.png'
import icon_facebook from '../../static-files/icons/icon_facebook.png'
import icon_in from '../../static-files/icons/icon_in.png'
import icon_twitter from '../../static-files/icons/icon_twitter.png'
import icon_arrowUp from '../../static-files/icons/icon_arrowUp.png'
import icon_skype from "../../static-files/icons/icon_skype.png"
import icon_phone from "../../static-files/icons/icon_phone.png"
import icon_local from "../../static-files/icons/icon_local.png"
import icon_email from "../../static-files/icons/icon_email.png"

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_content_container'>
        <div className='contactUs'>
          <h2 className='contactUs_title'>Свяжитесь с нами</h2>
          <ul className='contacts_container'>
            <li className="contact_item">
              <img src={icon_phone} alt="icon_phone" className='contact_icon' />
              <span className='contact_link'>8 (800) 555 35 35</span>
            </li>
            <li className="contact_item">
              <img src={icon_email} alt="icon_email" className='contact_icon' />
              <span className='contact_link'>inbox@mail.ru</span>
            </li>
            <li className="contact_item">
              <img src={icon_skype} alt="icon_skype" className='contact_icon' />
              <span className='contact_link'>tu.train.tickets</span>
            </li>
            <li className="contact_item">
              <img src={icon_local} alt="icon_local" className='contact_icon' />
              <span className='contact_link'>г. Москва<br></br>
                ул. Московская 27-35<br></br>
                555 555</span>
            </li>
          </ul>
        </div>
        <div className='subscribe'>
          <h2 className='subscribe_title'>Подписка</h2>
          <h3 className='form_title'>Будьте в курсе событий</h3>
          <form action="submit" className='form_submit'>
            <input type="text" placeholder='email' className='input_email' />
            <button className='btn_submit'>Отправить</button>
          </form>
          <div className='links_container'>
            <h2 className='subscribe_title'>Подписывайтесь на нас</h2>
            <ul className='links_list'>
              <li className='link_item'>
                <img src={icon_youtube} alt="icon_youtube" className='link_item_icon' />
              </li>
              <li className='link_item'>
                <img src={icon_in} alt="icon_in" className="link_item_icon" />
              </li>
              <li className='link_item'>
                <img src={icon_google} alt="icon_google" className="link_item_icon" />
              </li>
              <li className='link_item'>
                <img src={icon_facebook} alt="icon_facebook" className="link_item_icon" />
              </li>
              <li className='link_item'>
                <img src={icon_twitter} alt="icon_twitter" className="link_item_icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer_logo_container'>
        <h3 className='footer_logo'>Лого</h3>
        <img src={icon_arrowUp} alt="icon_arrowUp" />
        <div className='footer_year'>2018 WEB</div>
      </div>
    </footer>
  );
};
