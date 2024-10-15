import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title="CONSTRUIRE DEMAIN AUJOURD'HUI" className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='À Propos de Notre Parti' />
              <p className='desc-p'>Chez Développement Durable, nous croyons que le développement durable est la clé pour bâtir une société prospère aujourd'hui tout en préservant la planète pour les générations futures. Notre mission est de mettre en place des politiques éco-responsables, de réduire les déchets et de promouvoir l'innovation verte. En investissant dans les énergies renouvelables, en soutenant l'agriculture durable et en favorisant une culture de responsabilité environnementale, nous visons à créer un avenir où progrès et durabilité vont de pair.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>30+</h1>
                  <h3>Experts</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Projects</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>ODD</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/wind turbine.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/electric-bus-mobility.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Notre Vision' />
              <br />
              <p className='misson-p'>Nous envisageons un monde où la croissance économique respecte les limites de nos ressources naturelles. À travers des infrastructures vertes, des énergies propres et des économies circulaires, nous pouvons construire une société qui place l'humain et la planète au cœur de ses priorités. Avec votre soutien, nous pouvons faire de la vie durable non pas une option, mais une norme.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
