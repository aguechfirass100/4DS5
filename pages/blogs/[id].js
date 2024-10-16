import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import CommentsList from '@/components/comments/CommentsList';
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));

  const comments = [
    { 
      fullName: 'Jean Dupont', 
      userId: '01', 
      avatarUrl: 'https://icons.iconarchive.com/icons/ampeross/qetto-2/128/photos-icon.png', 
      text: 'Cet article met bien en avant les avantages des panneaux solaires. Je pense sérieusement à en installer chez moi.', 
      replies: []
    },
    {
      fullName: 'Pierre Martin',
      userId: '03',
      avatarUrl: 'https://icons.iconarchive.com/icons/raindropmemory/laboratory/128/Photo-2-icon.png',
      text: 'Les panneaux solaires sont une solution idéale, mais le coût initial est encore élevé pour beaucoup de familles.',
      replies: []
    },
    {
      fullName: 'Jacques Durand',
      userId: '05',
      avatarUrl: 'https://icons.iconarchive.com/icons/neiio/prime-dock-2/128/Pictures-icon.png',
      text: 'Très bon article ! L\'avenir de l\'énergie est clairement renouvelable, et les panneaux solaires sont une excellente première étape.',
      replies: []
    }
  ];
  

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          
        <div className='heading-title'>
            <TitleSm title='ÉNERGIE RENOUVELABLE / JANVIER 12, 2023' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title="L'énergie solaire : un choix incontournable pour un avenir durable" />
              <p className='desc-p'>
                Les panneaux solaires jouent un rôle clé dans la transition énergétique mondiale. Ils permettent de produire de l'électricité propre et renouvelable en captant l'énergie du soleil. Cette technologie, en constante évolution, devient de plus en plus abordable et accessible.
              </p>
              <p className='desc-p'>
                L'installation de panneaux solaires peut considérablement réduire la dépendance aux énergies fossiles, tout en diminuant les émissions de gaz à effet de serre. C'est une solution durable qui contribue non seulement à la préservation de l'environnement, mais aussi à l'autosuffisance énergétique des particuliers et des entreprises.
              </p>
              <p className='desc-p'>
                Les innovations dans ce domaine, telles que les panneaux solaires bifaciaux ou les systèmes de stockage d'énergie, permettent d'améliorer l'efficacité et la rentabilité des installations solaires. Que ce soit pour les foyers ou les grandes industries, l'énergie solaire s'impose comme une alternative fiable aux sources d'énergie traditionnelles.
              </p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title="Pourquoi investir dans les panneaux solaires ?" />
              <p className='desc-p'>
                Investir dans l'énergie solaire, c'est faire un pari sur l'avenir. En plus des avantages environnementaux, les panneaux solaires permettent également de réaliser des économies significatives sur les factures d'électricité. De nombreuses subventions et incitations fiscales existent pour encourager les installations solaires, rendant cette technologie encore plus attractive.
              </p>
              <p className='desc-p'>
                Que vous soyez un particulier ou un entrepreneur, adopter les panneaux solaires peut transformer votre consommation énergétique et réduire votre empreinte carbone. À long terme, les bénéfices financiers et écologiques sont indéniables.
              </p>
              <p className='desc-p'>
                En conclusion, les panneaux solaires sont bien plus qu'une simple tendance : ils représentent une véritable solution pour un avenir énergétique durable. Il est temps de franchir le pas et d'investir dans l'énergie solaire.
              </p>
            </div>
          </div>

          {/* Comments Section */}
          <div className='comments-section'>
            <CommentsList comments={comments} />
          </div>

        </div>
      </section>
    </>
  )
}

export default SinglePost;
