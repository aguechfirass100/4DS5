import { useRouter } from 'next/router';
import { showcase } from '@/assets/data/dummydata';
import DonationSection from '@/sections/DonationSection';
import Head from 'next/head';
import React, { useState } from 'react';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = showcase.find((item) => item.id === parseInt(id));

  const [raised, setRaised] = useState(project ? project.raised : 0);
  const [topDonors, setTopDonors] = useState(project ? project.topDonors : []);

  if (!project) {
    return <p>Loading...</p>;
  }

  const handleDonate = (amount, newDonor) => {
    setRaised(prevRaised => prevRaised + amount);
    setTopDonors(prevDonors => {
      const updatedDonors = [...prevDonors, newDonor];
      return updatedDonors.sort((a, b) => b.amount - a.amount).slice(0, 5);
    });
  };

  return (
    <>
      <Head>
        <title>{project.title} - Project Details</title>
      </Head>
      <section className='project-details'>
        <div className='container'>
          <div className='details-content'>
            <div className='left-side'>
              <h1>{project.title}</h1>
              <img src={project.cover} alt={project.title} className='project-cover' />
              <h2>Catégorie: {project.catgeory}</h2>
              <p>{project.description}</p>
            </div>

            <div className='right-side'>
              <DonationSection
                goal={project.goal}
                raised={raised}
                topDonors={topDonors}
                onDonate={handleDonate}
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .project-details {
          background-color: $dark;
          color: $white;
          padding: 50px 0;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .details-content {
          display: flex;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }

        .left-side {
          flex: 2;
        }

        .right-side {
          flex: 1;
        }

        h1 {
          color: $indigo;
          font-size: 2.5rem;
        }

        h2 {
          color: $green;
        }

        p {
          font-size: 1.125rem;
          line-height: 1.8;
        }

        .project-cover {
          width: 100%;
          height: auto;
          border-radius: 12px;
          margin-bottom: 20px;
          border: 3px solid $green;
        }
      `}</style>
    </>
  );
};

export default ProjectDetails;
