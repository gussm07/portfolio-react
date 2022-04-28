/* 
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin' */
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  /* const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef() */

  /*  
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin) */
  /* MUESTRA LA ANIMACIÓN DE TRAZADO DE CONTORNO */
  /*  gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      }) */
  /* TERMINA ANIMACION DE TRAZADO DE CONTORNO */

  /* DIBUJA TODO EL TRAZO DE LA ANIMACIÓN DE LA LETRA S */
  /*   .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      }) */
  /* AL TERMINAR EL TRAZADO DE LA S, MUESTRA EL SVG */
  /*  gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, []) */

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="S" />
    </div>
  )
}

export default Logo
