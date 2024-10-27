import './Footer.css'
import icon_youtube from '../../static-files/icons/icon_youtube.svg'
import icon_google from '../../static-files/icons/icon_google.svg'
import icon_facebook from '../../static-files/icons/icon_facebook.svg'
import icon_in from '../../static-files/icons/icon_in.svg'
import icon_twitter from '../../static-files/icons/icon_twitter.svg'
import icon_arrowUp from '../../static-files/icons/icon_arrowUp.svg'
import icon_skype from "../../static-files/icons/icon_skype.svg"
import icon_phone from "../../static-files/icons/icon_phone.svg"
import icon_local from "../../static-files/icons/icon_local.svg"
import icon_email from "../../static-files/icons/icon_email.svg"
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  const scrollUp = () => {
    const navBar = document.querySelector('.navbar_container')
    navBar?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  return (
    <footer className='footer-container bg-black' id='contacts-section'>
      <div className="row d-flex flex-xl-row flex-column justify-content-evenly m-auto w-75 pt-4">
        <div className="col-xl-4 col-lg-12 p-0 pt-3 ps-xl-3 d-flex flex-column align-items-xl-baseline  align-items-lg-center ">
          <h2 className='contactUs_title'>Свяжитесь с нами</h2>
          <ul className='contacts_container p-0 pt-2 mt-3'>
            <li className="contact_item">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns={icon_phone} className='contact_icon'>
                <path d="M5.98759 12.9341C8.53112 17.8306 12.1588 21.4352 16.9957 23.9772C18.0589 22.9146 19.1639 21.8728 20.2064 20.7476C20.9778 19.9142 21.77 19.7266 22.8958 19.9975C24.5637 20.4142 26.2942 20.6434 28.0037 20.8101C29.3798 20.956 29.9635 21.4352 29.9844 22.7896C30.0052 24.5606 30.0052 26.3317 29.9844 28.1028C29.9635 29.3946 29.3381 29.978 28.0454 29.9989C14.744 30.1239 2.50587 19.7475 0.421007 6.55819C0.191672 5.01631 0.0874286 3.4536 0.00403403 1.91172C-0.0585119 0.682385 0.608644 0.0364633 1.83871 0.0156271C3.67339 -0.00520904 5.50807 -0.00520904 7.3636 0.0156271C8.53112 0.0364633 9.05234 0.661549 9.17743 1.82837C9.40677 3.68279 9.65695 5.53721 10.0531 7.34996C10.2407 8.24592 10.1365 8.91267 9.51101 9.51692C8.32264 10.6629 7.15511 11.7881 5.98759 12.9341Z" fill="#E5E5E5" />
              </svg>
              <span className='contact_link'>8 (800) 555 35 35</span>
            </li>
            <li className="contact_item">
              <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns={icon_email} className='contact_icon'>
                <path d="M14.9906 24.5263C10.9994 24.5263 7.00812 24.5072 2.99813 24.5455C1.42411 24.5455 0 23.1095 0 21.4438C0.0187383 15.317 0.0374766 9.19019 0 3.08254C0 1.76145 1.23673 0 3.01686 0C10.9994 0.0382924 19.0006 0.0191462 26.9831 0C28.5759 0 30 1.43597 30 3.08254C29.9813 9.20933 29.9813 15.3361 30 21.4438C30 23.0521 28.6134 24.5263 26.9831 24.5263C22.9919 24.5072 19.0006 24.5263 14.9906 24.5263ZM3.01686 6.06935C3.14803 6.20338 3.2792 6.41398 3.46658 6.50972C4.38476 6.91179 5.15303 7.56276 6.01499 8.07971C7.02686 8.69238 8.00125 9.34336 8.99438 9.99433C9.68769 10.4347 10.381 10.8942 11.0743 11.3346C12.386 12.1579 13.7164 13.0003 15.0281 13.8236C16.2086 13.0577 17.3891 12.2727 18.5884 11.5452C19.7689 10.8368 20.9119 10.0709 22.0924 9.34336C23.5728 8.42434 24.9781 7.42873 26.4772 6.54801C26.7021 6.41398 26.9644 6.16508 26.9644 5.93533C27.0206 4.99716 26.9831 4.03985 26.9831 3.10169C22.9357 5.68643 18.9444 8.23288 14.9906 10.7602C10.9806 8.19458 7.00812 5.66728 2.99813 3.10169C3.01686 4.11644 3.01686 5.07375 3.01686 6.06935Z" fill="#E5E5E5" />
              </svg>
              <span className='contact_link'>inbox@mail.ru</span>
            </li>
            <li className="contact_item">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns={icon_skype} className='contact_icon'>
                <path d="M7.8549 0C8.33828 0 8.82166 0 9.30504 0C9.36949 0.0161262 9.43394 0.0483787 9.50645 0.0564418C10.6021 0.177388 11.6333 0.49185 12.6001 1.01595C12.8256 1.1369 13.0432 1.17721 13.2929 1.1369C14.4691 0.967573 15.6454 0.967573 16.8135 1.10465C20.036 1.49974 22.8638 2.78177 25.1679 5.0717C28.6644 8.5469 30.0339 12.7558 29.2525 17.6421C29.2202 17.8437 29.2444 18.0856 29.325 18.271C30.1789 20.3513 30.2353 22.4477 29.4216 24.5441C27.6412 29.132 22.3079 31.2687 17.8367 29.2207C17.6836 29.1481 17.4903 29.1159 17.3211 29.1401C15.307 29.3981 13.3171 29.3417 11.3675 28.7692C6.59812 27.3823 3.31114 24.3587 1.60321 19.6821C0.797575 17.4728 0.652561 15.1828 1.0151 12.8607C1.04732 12.6591 0.990926 12.4333 0.918419 12.2317C0.749237 11.756 0.515604 11.3045 0.37059 10.8288C0.209464 10.2724 0.120845 9.69186 0 9.12744C0 8.65978 0 8.20018 0 7.73252C0.0161126 7.66802 0.0483379 7.60351 0.0563942 7.53095C0.418928 4.16863 2.83582 1.2901 6.09863 0.354777C6.67063 0.201578 7.26679 0.120947 7.8549 0ZM14.7511 5.60386C14.2033 5.65224 13.6474 5.68449 13.0996 5.749C11.8428 5.91026 10.6424 6.2731 9.56284 6.95846C6.84786 8.68397 6.59006 12.6833 9.46617 14.562C10.2235 15.0619 11.0452 15.4247 11.9072 15.6586C13.3413 16.0456 14.7914 16.3842 16.2335 16.7551C16.878 16.9164 17.5144 17.118 18.0542 17.5373C18.9404 18.2146 19.0773 19.4079 18.2959 20.2062C17.9575 20.5529 17.5064 20.8431 17.0552 21.0367C16.0482 21.464 14.9767 21.4801 13.9052 21.3108C12.8659 21.1415 12.0684 20.6254 11.5447 19.7062C11.3352 19.3273 11.166 18.9241 10.9405 18.5613C10.7552 18.2549 10.5538 17.9404 10.304 17.6905C9.77231 17.1664 8.82972 17.0777 8.09659 17.4324C7.38764 17.7711 7.00093 18.4081 7.05733 19.2144C7.0815 19.5127 7.12178 19.8191 7.22651 20.1013C7.8549 21.843 9.09558 23.0041 10.7713 23.7217C11.7944 24.1571 12.8659 24.3506 13.9696 24.4232C15.7743 24.536 17.5628 24.4554 19.2626 23.7781C21.3815 22.9315 22.8477 21.5204 23.0974 19.1338C23.2989 17.1906 22.6463 15.6344 20.9464 14.57C19.9958 13.9734 18.9646 13.5944 17.885 13.3203C16.5477 12.9816 15.2023 12.6752 13.873 12.3446C13.2204 12.1834 12.584 11.9415 12.0522 11.498C11.4077 10.9578 11.3594 10.1192 11.9717 9.53866C12.2536 9.27258 12.6162 9.04681 12.9787 8.90167C13.9294 8.53077 14.9283 8.57109 15.9273 8.7001C16.7088 8.80492 17.305 9.19195 17.7561 9.81281C17.9253 10.0466 18.0703 10.3047 18.2395 10.5465C18.4328 10.8368 18.6262 11.1352 18.8357 11.4174C19.3351 12.0705 20.028 12.1672 20.7692 12.006C21.5345 11.8366 22.0421 11.3367 22.2193 10.5869C22.4288 9.70799 22.0904 8.93393 21.5909 8.2405C21.0189 7.45838 20.2616 6.90202 19.3915 6.4908C17.9253 5.78125 16.3624 5.5958 14.7511 5.60386Z" fill="#E5E5E5" />
              </svg>
              <span className='contact_link'>tu.train.tickets</span>
            </li>
            <li className="contact_item">
              <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns={icon_local} className='contact_icon contact_icon_local'>
                <path d="M10.4669 30C7.57111 26.692 5.0677 23.2905 2.99398 19.59C1.76095 17.4034 0.696068 15.1606 0.229013 12.6936C-0.574321 8.41378 0.733433 4.82543 4.18964 2.20891C7.66452 -0.407596 11.5131 -0.706626 15.3429 1.3492C19.2101 3.40503 21.0597 6.8065 20.8541 11.1798C20.7981 12.5254 20.4245 13.8898 19.9387 15.1606C17.865 20.7301 14.3341 25.365 10.4669 30ZM10.4295 6.8065C8.37445 6.8065 6.69305 8.48854 6.71173 10.5444C6.71173 12.6002 8.39313 14.2822 10.4482 14.2822C12.5032 14.2822 14.1846 12.6002 14.1846 10.5444C14.1659 8.48854 12.5032 6.8065 10.4295 6.8065Z" fill="#E5E5E5" />
              </svg>
              <span className='contact_link contact_link_local'>г. Москва<br></br>
                ул. Московская 27-35-555 555</span>
            </li>
          </ul>
        </div>
        <div className="col-xl-6 col-lg-12 p-0 pt-4 ps-xl-5 d-flex flex-column align-items-lg-center align-items-xl-baseline">
          <h2 className='subscribe_title'>Подписка</h2>
          <h3 className='form_title mt-4'>Будьте в курсе событий</h3>
          <form action="submit" className='form_submit d-lg-flex align-items-center flex-wrap w-100 gx-30' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='email' className='input_email flex-grow-1' />
            <button className='btn_submit'>Отправить</button>
          </form>
          <div className='links_container d-flex flex-column align-items-lg-center align-items-xl-baseline'>
            <h2 className='subscribe_title'>Подписывайтесь на нас</h2>
            <ul className='links_list d-flex flex-wrap p-0 flex-lg-row text-sm-center flex-column align-items-center w-100 justify-content-lg-evenly justify-content-xl-between'>
              <li className='link_item'>
                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns={icon_youtube} className='footer_svg'>
                  <path className='link_item_icon' d="M18.5241 0C22.8289 0.174864 26.7823 0.324748 30.7231 0.512103C31.5138 0.549573 32.317 0.661986 33.1077 0.81187C35.2036 1.19907 36.672 2.62296 36.9983 4.78379C37.287 6.74477 37.4501 8.74321 37.5631 10.7417C37.7764 14.2889 37.7137 17.8237 37.4627 21.3709C37.3623 22.8323 37.1991 24.2936 36.923 25.73C36.5214 27.7909 35.0028 29.2148 32.8943 29.4272C30.2713 29.7019 27.6483 29.9393 25.0127 29.9767C20.0302 30.0392 15.0351 29.9642 10.0526 29.8893C8.44616 29.8643 6.82716 29.7019 5.22071 29.5146C2.45963 29.1774 0.966132 27.691 0.57707 24.9307C-0.0127984 20.7089 -0.0881007 16.4622 0.0750543 12.2155C0.162907 9.89232 0.363713 7.58162 0.58962 5.25842C0.765326 3.43483 1.6062 1.94849 3.35071 1.21156C4.20413 0.849341 5.15796 0.661986 6.08669 0.612025C10.3538 0.362219 14.6084 0.187355 18.5241 0ZM15.1104 21.5833C18.8755 19.4224 22.5904 17.2866 26.3807 15.1008C22.5779 12.915 18.863 10.7791 15.1104 8.6308C15.1104 12.9774 15.1104 17.2491 15.1104 21.5833Z" fill="#E5E5E5" />
                </svg>
              </li>
              <li className='link_item'>
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns={icon_in} className='footer_svg'>
                  <path className='link_item_icon' d="M16.6745 29.9999C14.4205 29.9999 12.241 29.9999 10.0019 29.9999C10.0019 29.776 10.0019 29.5819 10.0019 29.373C10.0019 22.7749 10.0019 16.162 9.98694 9.56395C9.98694 9.01162 10.1511 8.87727 10.6736 8.8922C12.4649 8.92206 14.2563 8.90713 16.0476 8.90713C16.2267 8.90713 16.4208 8.90713 16.6447 8.90713C16.6447 9.81772 16.6447 10.6984 16.6447 11.7285C16.8835 11.4896 17.0179 11.3702 17.1522 11.2358C20.093 8.36973 25.1982 8.11596 28.2136 10.6835C29.9602 12.1763 30.7215 14.1617 30.9902 16.371C31.0797 17.1323 31.0947 17.8936 31.0947 18.6549C31.1096 22.2226 31.0947 25.7754 31.0947 29.3431C31.0947 29.5372 31.0947 29.7461 31.0947 29.985C28.8704 29.985 26.691 29.985 24.422 29.985C24.422 29.776 24.422 29.567 24.422 29.3431C24.422 25.9993 24.422 22.6704 24.422 19.3266C24.422 18.7445 24.3921 18.1623 24.2727 17.61C23.8697 15.5649 22.4366 14.4005 20.4214 14.4304C18.4957 14.4602 17.1373 15.6544 16.779 17.6995C16.6895 18.1772 16.6596 18.6698 16.6596 19.1475C16.6447 22.5361 16.6596 25.9396 16.6596 29.3282C16.6745 29.5372 16.6745 29.7461 16.6745 29.9999Z" fill="#E5E5E5" />
                  <path className='link_item_icon' d="M6.62827 29.9999C4.4339 29.9999 2.25446 29.9999 0.045166 29.9999C0.045166 22.9839 0.045166 15.9829 0.045166 8.93701C2.23953 8.93701 4.40404 8.93701 6.62827 8.93701C6.62827 15.9381 6.62827 22.9392 6.62827 29.9999Z" fill="#E5E5E5" />
                  <path className='link_item_icon' d="M3.44863 5.57822C2.47833 5.54836 1.65731 5.3543 0.970634 4.78705C-0.492277 3.57791 -0.268362 1.38354 1.41846 0.487883C2.59775 -0.139078 3.85167 -0.154006 5.07574 0.398318C6.16546 0.89093 6.79242 2.02543 6.64315 3.10022C6.47894 4.33922 5.56835 5.23488 4.23979 5.48865C3.95617 5.53343 3.65761 5.56329 3.44863 5.57822Z" fill="#E5E5E5" />
                </svg>
              </li>
              <li className='link_item'>
                <svg width="47" height="30" viewBox="0 0 47 30" fill="none" xmlns={icon_google} className='footer_svg'>
                  <path className='link_item_icon' d="M24.7257 3.93531C23.6153 5.11978 22.5789 6.15618 21.5425 7.19259C14.3617 3.56517 8.21726 5.11978 5.7743 11.2642C3.55343 16.5203 6.36653 22.5906 11.8447 24.4414C17.5449 26.3661 23.1711 23.1088 24.8738 16.6683C23.1711 16.6683 21.6165 16.6683 19.9879 16.6683C18.4333 16.6683 16.8787 16.6683 15.176 16.6683C15.176 14.9656 15.176 13.4851 15.176 11.7824C15.6942 11.7084 16.1384 11.7084 16.5825 11.7084C20.8022 11.7084 25.0959 11.7084 29.2415 11.7084C31.5364 17.4826 28.1311 25.1076 21.9126 28.2909C15.102 31.8443 6.88473 29.6974 2.51702 23.3309C-1.70264 17.0385 -0.518171 8.45109 5.33012 3.56517C11.1044 -1.32075 19.4697 -1.17269 24.7257 3.93531Z" fill="#E5E5E5" />
                  <path className='link_item_icon' d="M38.4951 15.0397C36.5703 15.0397 35.1638 15.0397 33.5352 15.0397C33.5352 13.9292 33.5352 12.9669 33.5352 11.7824C35.0157 11.7824 36.4963 11.7824 38.199 11.7824C38.199 10.0797 38.199 8.59915 38.199 6.89648C39.4575 6.89648 40.4199 6.89648 41.6043 6.89648C41.6043 8.37707 41.6043 9.85765 41.6043 11.5603C43.381 11.6343 44.9356 11.7084 46.5643 11.7824C46.5643 12.8188 46.5643 13.7072 46.5643 14.8916C45.0837 14.8916 43.5291 14.8916 41.7524 14.8916C41.7524 16.6683 41.7524 18.2229 41.7524 19.8516C40.5679 19.8516 39.6796 19.8516 38.4951 19.8516C38.4951 18.445 38.4951 16.8904 38.4951 15.0397Z" fill="#E5E5E5" />
                </svg>
              </li>
              <li className='link_item'>
                <svg width="14" height="30" viewBox="0 0 14 30" fill="none" xmlns={icon_facebook} className='footer_svg'>
                  <path className='link_item_icon' d="M8.97738 15.0287C8.97738 20.0416 8.97738 25.0006 8.97738 30C7.29748 30 5.67134 30 3.99144 30C3.99144 25.0275 3.99144 20.055 3.99144 15.0422C2.63408 15.0422 1.34392 15.0422 0 15.0422C0 13.3488 0 11.7093 0 10.0294C1.31704 10.0294 2.6072 10.0294 3.978 10.0294C3.978 9.43804 3.95112 8.88703 3.978 8.33603C4.0452 7.1265 3.99144 5.90353 4.24678 4.73432C4.98594 1.30733 7.56626 -0.412888 11.0739 0.0843625C11.9071 0.205315 12.7269 0.500977 13.5333 0.742883C13.8558 0.836957 13.9768 1.06542 13.9768 1.42828C13.9499 2.59749 13.9633 3.7667 13.9633 5.01655C13.3989 5.01655 12.8882 5.01655 12.3775 5.01655C11.9743 5.01655 11.5711 5.04342 11.168 5.05686C9.51495 5.15094 8.96394 5.71538 8.96394 7.38184C8.96394 8.24195 8.96394 9.08862 8.96394 10.0025C10.6438 10.0025 12.2834 10.0025 13.9633 10.0025C13.6408 11.6421 13.3317 13.2145 12.9957 14.7868C12.9688 14.8944 12.7269 15.0153 12.5925 15.0153C11.5846 15.0287 10.5766 15.0287 9.5687 15.0287C9.39399 15.0287 9.20585 15.0287 8.97738 15.0287Z" fill="#E5E5E5" />
                </svg>
              </li>
              <li className='link_item'>
                <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns={icon_twitter} className='footer_svg'>
                  <path className='link_item_icon' d="M0 26.603C3.8403 26.9989 7.36387 26.1279 10.541 23.9306C10.7093 23.8118 10.8775 23.6831 11.1151 23.505C7.64101 23.1883 5.34475 21.4364 4.05805 18.1998C5.20618 18.3978 6.27513 18.378 7.38367 18.1009C3.64235 16.9626 1.65291 14.4981 1.39557 10.5489C2.49422 11.0933 3.54337 11.4496 4.73109 11.4793C1.40547 8.67826 0.663145 5.35264 2.47442 1.35398C6.61165 6.22364 11.7782 8.86632 18.1128 9.31171C18.0633 8.9554 18.0039 8.64857 17.9742 8.33184C17.608 4.11543 20.5278 0.492882 24.7244 0.047487C27.0504 -0.199955 29.0992 0.522576 30.7917 2.14579C30.9896 2.33385 31.1579 2.37344 31.4053 2.31406C32.9296 1.95774 34.3746 1.40347 35.7702 0.651245C35.2357 2.35365 34.1767 3.65024 32.7316 4.71919C33.177 4.64001 33.6323 4.57073 34.0777 4.47175C34.5429 4.36287 35.0081 4.2342 35.4733 4.08574C35.9187 3.94717 36.3443 3.76901 36.8491 3.59086C35.9286 4.96663 34.8695 6.11476 33.6125 7.06494C33.2166 7.36187 33.1176 7.6687 33.1077 8.14379C32.989 15.7551 29.9504 21.9016 23.7346 26.3654C20.8346 28.4538 17.5288 29.5327 13.9755 29.8791C9.02668 30.374 4.41436 29.3545 0.178158 26.7316C0.12867 26.7019 0.0692838 26.692 0.00989768 26.6821C0 26.6524 0 26.6228 0 26.603Z" fill="#E5E5E5" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-row justify-content-between align-items-center gx-0 mt-4">
        <div className='footer_logo_container d-flex justify-content-evenly'>
          <div className="col-lg-1 col-3">
            <h3 className="footer_logo" id="logo" onClick={scrollUp}>
              <NavLink className={"footer_logo_text"} to="/Frontend_DiplomWork">Лого</NavLink>
            </h3>
          </div>
          <div className="col-lg-1 col-3 text-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns={icon_arrowUp} className='footer_svg' onClick={scrollUp}>
              <circle className='link_item_icon svg_arrowUp_circle' cx="18" cy="18" r="17.5" stroke="#E5E5E5" />
              <path className='link_item_icon svg_arrowUp_arrow' d="M18.3 16.7569C19.9256 18.3882 21.4531 19.9325 22.9667 21.4552C23.3758 21.8668 24.0742 21.835 24.4853 21.4256C24.8978 21.0149 24.8646 20.3803 24.4521 19.9696C22.6174 18.1427 20.7773 16.3107 18.9612 14.5024C18.571 14.114 17.9403 14.1139 17.5503 14.5026C15.8016 16.2458 13.9963 18.0515 12.1839 19.8493C11.7543 20.2753 11.7195 20.9344 12.1606 21.3485C12.579 21.7412 13.272 21.7659 13.6799 21.3622C15.1455 19.912 16.6793 18.383 18.3 16.7569Z" fill="#E5E5E5" />
            </svg></div>
          <div className="col-lg-1 col-3">
            <div className='footer_year'>2024 WEB</div>
          </div>
        </div>
      </div>
    </footer >
  );
};