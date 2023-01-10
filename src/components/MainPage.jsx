import styles from "../cssModules/MainPage.module.css"
import first_image from "../cssModules/process-4.gif"
import {BsChevronDown} from "react-icons/bs"
import pokemons from "../cssModules/pokmeons.gif"
import artket from "../cssModules/artket.gif"
import carrera from "../cssModules/imagen de carrera.png"
import { Link } from "react-router-dom"
import {SiSequelize} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {IoLogoJavascript} from "react-icons/io"
import {DiReact} from "react-icons/di"
import {SiRedux} from "react-icons/si"
import {SiPostgresql} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import {DiScrum} from "react-icons/di"
import {DiTrello} from "react-icons/di"
import {AiFillLinkedin} from "react-icons/ai"
import swal from 'sweetalert';
import { useEffect } from "react"
import useObserver from "./useObsserver"
import CV from "./CV Cabrera Lucas.pdf"
import logo from "./salmoslittle1.png"
import corte1 from "./corte1.jpg"
import corte2 from "./corte2.jpg"
import corte3 from "./corte3.jpg"
import bigimg from "./salmoslittle.png"
import ubicacionimg from "./ubicacion.png"

import Example from "./Example"

export default function MainPage(){

 



    return(
        <div>
         <div className={styles.container}>
            <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo} />

             
            </div>
          <div className={styles.first_section}>
          
              {<Example/>}
            {/* <div className={styles.carrusel}>
              <div>
                <ul>
                 {[corte1, corte2, corte3].map(element => {
                  return (
                   <li><img src={element}></img></li>
                            )
                           }
                          )
                         }
                </ul>
               </div>
         
            </div> 
            <div className={styles.fsbody}>
                         <body>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ut asperiores illo vel quae veritatis adipisci nemo, mollitia sunt necessitatibus nulla quod! Omnis illo harum aliquid cum! Illo, voluptatibus atque.
                         </body>
            </div>        */}
            <div className={styles.textoDescripcion}>

            <h6>Nos dedicamos a mejorar la imagen de nuestros clientes.

El objetivo es brindar el mejor servicio y marcar tendencia.

Por eso construimos un espacio en el mundo para que disfrutes y te sientas cómodo.

Queremos que SALMOS 34 sea tu lugar donde, más allá de cambiar tu look,

puedas relajarte y encontrarte con amigos.

- Te esperamos -
          </h6>
            </div>
           </div>
            
          

          <div className={styles.second_section} id="seccion-2">
          
           
                <h2 className={styles.second_section_title}>Servicios</h2>
                <img src={bigimg} className={styles.bigimg}/>
                <br/>
                <br/>
                <div className={styles.second_section_contain}>
            <h6>
              Corte con navaja: $1000
            </h6>
            <br />
            <h6>
              Corte sin navaja: $800
            </h6>
            <br />
            <h6>
              Corte con navaja + barba: $1200
            </h6>
            <br />
            <h6>
              Claritos hombre desde: $3000
            </h6>
            <br />
            <h6>
              Corte + Claritos: $3800
            </h6>
            <br />
            <br /><br />
            <hr />         
                         


                  </div>
                <div className={styles.ssbodymasimg}>
               
            
                         <h3>Horarios de atención</h3>
                         <br /><br />
            <h6>
              Martes a viernes de 11:00 a 21:00hs
            </h6>
            <br />
            <h6>
              Sábados de 11:00 a 17:00hs
            </h6>
            <br />
            <h6>
              Domingos de 12:00 a 21:00hs
            </h6>
            <br />       

            </div>
            
          </div>

          <div className={styles.thirt_section} id="seccion-3">
            <div className={styles.thirt_section_img_content}>

            
            </div>
            
          </div>

          <div className={styles.fourth_section} id="seccion-4">

            <div className={styles.form_container}>
                <h2>¿Donde estamos?</h2>
                <body>
                  Alvar Núñez 178 - entre Herminio Constanzo y Av. ing. Jorge Douclout
                </body>
                <div>
               <img style={{"width":"100%"}} src={ubicacionimg} alt="ubicacion" onClick={()=>window.location="https://www.google.com.ar/maps/place/Alvar+N%C3%BA%C3%B1ez+178,+B1842+Monte+Grande,+Provincia+de+Buenos+Aires/@-34.7908647,-58.4900274,17z/data=!4m5!3m4!1s0x95bcd1bed790b253:0x877adcdb57da327d!8m2!3d-34.7908383!4d-58.4908964"}/>
                </div>
                <div className={styles.contact_items}>

                    <a href="https://www.facebook.com/profile.php?id=100067874091547"
                      style={{color:"white" }}
                      target="_blanck"
                    >
                    <h1><AiFillFacebook/></h1>
                    </a>
                 
                   
                </div>
                <h5 style={{margin:"1rem"}}>Correo electrónico: salmos34barbershop@gmail.com</h5>
                    <h5 style={{margin:"1rem"}}>Teléfono: 1128440273 - 1153174664</h5>
            </div>

          </div>
         </div>
        </div>
    )
} 