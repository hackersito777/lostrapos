import styles from "./inicio.module.css";
import protela from "./protela.jpg"
import microfibradelgado from "./microfibradelgado.jpg"
import protelablanco from "./protelablanco.jpg"
import microfibragruesa from "./microfibragruesa.jpg"
import mas1 from "./mas1.jpg"
import mas2 from "./mas2.jpg"
import mas3 from "./mas3.jpg"
import mas4 from "./mas4.jpg"
import mas5 from "./mas5.jpg"



const Inicio = () => {



  const numeroWhatsApp = '573174327691'; // Reemplaza con el número de WhatsApp al que deseas redirigir

  const handleHacerPedidoClick = () => {
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}`;
    window.location.href = urlWhatsApp;
  };





  return (
    <>
      {/* MAIN (Center website) */}
      <div className={styles.main}>
        <h1>toallapp</h1>
        <hr />
        <h2>Ventas Al Por Mayor Y Al Detal</h2>
        <p>"Toallapp: Donde la limpieza se convierte en una experiencia."</p>
        {/* Portfolio Gallery Grid */}
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.content}>
              <img src={protela} alt="Mountains" style={{ width: "100%" }} />
              <h3>Toalla Limpion Protela</h3>
              <p>3 Unidades X $5.000 COP</p>
              <p>"Descubre la limpieza sin compromisos con nuestras toallitas de poliéster y algodón. Diseñadas para tareas de limpieza desafiantes, estas toallitas son el aliado resistente que necesitas. La combinación de poliéster y algodón garantiza una durabilidad excepcional, mientras que su capacidad de absorción y su habilidad para eliminar la suciedad dejan las superficies impecables.</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className="content">
              <img src={microfibradelgado} alt="Lights" style={{ width: "100%" }} />
              <h3>Toalla Limpion Microfibra Delgado</h3>
              <p>1 Unidad 10.000. 4 Unidades X 30.000 COP</p>
              <p>Alta capacidad de absorción: Las toallitas de microfibra pueden retener una gran cantidad de líquido en relación con su peso, lo que las hace eficientes para secar superficies.

Excelente capacidad de limpieza: La estructura de las fibras de microfibra es muy fina y tiene una gran cantidad de filamentos, lo que permite atrapar y eliminar eficazmente el polvo, la suciedad y las partículas de grasa.

No dejan pelusa: Las toallitas de microfibra están diseñadas para no soltar pelusa.</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <img src={protelablanco} alt="Nature" style={{ width: "100%" }} />
              <h3>Toalla Limpion Protela Blanco</h3>
              <p>3 Unidades X 5.000 COP</p>
              <p>Nuestras toallitas de poliéster y algodón son la elección perfecta para mantener todo reluciente. No dejan pelusa, son resistentes a productos químicos y versátiles en una amplia gama de aplicaciones. ¿Buscas eficiencia sin sacrificar calidad? Estas toallitas ofrecen resultados excepcionales sin gastar de más.

¿Listo para una limpieza impecable y sin preocupaciones? Descubre la diferencia con nuestras toallitas de poliéster y algodón, donde la resistencia se combina con la limpieza superior. La elección de los profesionales para los trabajos de limpieza más exigentes. ¡No dejes que nada te detenga, mantén todo en su mejor estado con nuestras toallitas!"</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.content}>
              <img src={microfibragruesa} alt="Mountains" style={{ width: "100%" }} />
              <h3>Toalla Limpion Microfibra UltraAbsorbente</h3>
              <p>1 Unidad 10.000. 4 Unidades X 30.000</p>
              <p>
              - Gruesas y Absorbentes
- Hacen que las toallas de algodon sean obsoletas
- Limpian Sin Quimicos
- No dejan rayones
- Pulen mientras limpian
- Remueve el maximo de suciedad
- Sin Pelusa
- De larga duración</p>
            </div>
          </div>
        </div>






        <button className={styles.neonbutton} onClick={handleHacerPedidoClick}>Hacer Pedido</button>


<br/>
<br/>
<br/>



        <div className={styles.content}>
        
          <h3>Mas imagenes</h3>
          <p>"Toallapp: Donde la limpieza se convierte en una experiencia."</p>
          <img src={mas1} alt="Bear" style={{ width: "100%" }} />
          <img src={mas2} alt="Bear" style={{ width: "100%" }} />
          <img src={mas3} alt="Bear" style={{ width: "100%" }} />
          <img src={mas4} alt="Bear" style={{ width: "100%" }} />
          <img src={mas5} alt="Bear" style={{ width: "100%" }} />
        </div>
        {/* END MAIN */}
      </div>
    </>




  )





}

export default Inicio;