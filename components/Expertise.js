import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Nos Services' />
            <p>Découvrez nos services dédiés à la promotion du développement durable. Nous offrons des conseils personnalisés, des formations sur les pratiques éco-responsables et des ateliers interactifs pour mobiliser les citoyens. Ensemble, nous vous aidons à transformer vos idées en actions concrètes et à créer un impact positif dans votre communauté. </p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
