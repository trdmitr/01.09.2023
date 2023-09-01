import React from 'react'
import classes from "./HomePage.module.css"
import { Link } from 'react-router-dom';


export const HomePage = () => {
    const imgUrl = "https://sun9-65.userapi.com/impg/_0Dl5pF7zrpR5m98PElDacgI5qX0-MAbMDvg9w/C2r2FVIpqag.jpg?size=642x913&quality=96&sign=100208989acbd686b1d68d21de5656c0&type=album"
    // const imgUrl2 = 'https://sun2-22.userapi.com/impg/2YiE2IW9r0friRMzAEniG_oR87ffPUfqKRswKw/vtMiX4nUf8o.jpg?size=300x300&quality=96&sign=7757c3bd97980caf5674faa89f7781c3&type=album'
    const imgAlt = "Каверы Подземки"
    const frontAudio = "https://drive.google.com/uc?export=download&id=1_16menVJ8g_T4-IZ0VZK_k9zISfKLJAo";
    // const imgTzi = "https://drive.google.com/uc?export=download&id=1gsY4lPUU4pJ07s0JwDBeJjUYddkAuSr3"
    return (
      <div className="device device-iphone-x">
          <div className="device-frame">
              <div className="device-content">

                  <div>
                      {/* <span className={classes.navLink}>Сборник за 3 года</span> */}
                      {/* <Link to="/cavers21"  className={classes.navLink21}>2021</Link>
                      <Link to="/cavers22"  className={classes.navLink22}>2022</Link> */}
                      <Link to="/cavers23"  className={classes.navLink23}>Слушаем!</Link>
      
                     {/* <Link to={`/cavers21`} className={classes.navLink21}>Слушаем!</Link> */}
                      {/* <Link to={`/cavers${yearTrib22}`} className={classes.navLink22}>2022</Link>
                      <Link to={`/cavers${yearTrib23}`} className={classes.navLink23}>2023</Link> */}
                      <div className={classes.main}>
                      
                          <div className={classes.article}><p >Трибьют к Дню Знаний!</p></div>
                          <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl} width={100} alt={imgAlt} /></div>
                          <audio controls 
          src={frontAudio} type="audio/mpeg" />
      
                          {/* <div className={classes.article}><img fetchpriority="high" role="presentation"  src={imgUrl2} width={100} alt={imgAlt} /></div> */}
                      </div>
                  </div>
              </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header">
              <div className="device-sensors"></div>
          </div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
      </div>
  )
}
