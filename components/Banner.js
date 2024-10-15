import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Nous sommes impatients de démarrer un nouveau projet' /> <br />
            <TitleLogo title="Prenez l'initiative, agissez aujourd'hui !" />
          </div>
          <div>
            <button className='button-primary'>Demander un rappel</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
