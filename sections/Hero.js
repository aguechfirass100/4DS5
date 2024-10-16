import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* <TitleLogo title='creative' caption='7' className='logobg' /> */}
          <div className='logo'>
            <Link href='/'>
              <Image
                src='/images/4DS5-French-Logo-removebg-preview.png'
                alt='4DS5 Logo'
                width={200}
                height={200}
                className='logomin'
              />
            </Link>
          </div>
          <h1 className='hero-title'>CONSTRUIRE DEMAIN AUJOURD'HUI</h1>

          <div className='sub-heading'>
            <TitleSm title='INNOVER' /> <span>.</span>
            <TitleSm title='CONSTRUIRE' /> <span>.</span>
            <TitleSm title='VIVRE' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Développement Durable : Pour les Gens, Pour la Planète' />
            <p>Le développement durable, c'est l'équilibre entre le bien-être des gens et la protection de la planète. Ensemble, construisons un avenir où progrès humain et respect de l'environnement vont de pair.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
