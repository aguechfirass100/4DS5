import React from "react";
import { FaUniversity, FaHandsHelping, FaNewspaper, FaMicrophone, FaAward } from "react-icons/fa";

const Profile = () => {
  const userInfo = {
    name: "Firass Aguech",
    bio: "Économiste et analyste politique passionné par les réformes politiques et économiques. Travailleur pour un avenir durable.",
    profilePicture: "https://img.freepik.com/premium-photo/man-with-shirt-that-says-he-is-real-man_1057389-84799.jpg?w=740", // Replace with actual profile picture URL
    education: [
      { degree: "Doctorat en économie politique", institution: "London School of Economics", year: "2020" },
      { degree: "Master en relations internationales", institution: "Sciences Po Paris", year: "2016" }
    ],
    contributions: [
      { projectName: "Réforme économique en Afrique du Nord", amount: "$1,200" },
      { projectName: "Initiative de politique d'énergie verte", amount: "$800" },
      { projectName: "Réformes éducatives pour l'égalité", amount: "$500" }
    ],
    publications: [
      { title: "L'avenir de l'énergie verte dans les pays en développement", date: "Mai 2023" },
      { title: "Réformes politiques en Afrique du Nord: une analyse critique", date: "Mars 2023" }
    ],
    recentSpeeches: [
      { title: "Développement durable et politique", date: "Septembre 2023", location: "ONU" },
      { title: "Croissance économique verte", date: "Juin 2023", location: "Forum Économique Mondial" }
    ],
    awards: [
      { title: "Prix du Jeune Économiste", year: "2022" },
      { title: "Récompense des Politiques Innovantes", year: "2021" }
    ]
  };

  return (
    <section className="profile-section">
      <div className="container">
        <div className="profile-grid">
          
          {/* Left Column: User Info */}
          <div className="profile-left">
            <div className="profile-card">
              <img src={userInfo.profilePicture} alt={userInfo.name} className="profile-picture" />
              <h2>{userInfo.name}</h2>
              <p className="bio">{userInfo.bio}</p>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="profile-right">
            {/* Education Section */}
            <div className="card education-card">
              <div className="card-header">
                <FaUniversity className="card-icon" />
                <h3>Éducation</h3>
              </div>
              <ul>
                {userInfo.education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.degree}</strong> <br />
                    {edu.institution}, {edu.year}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contributions Section */}
            <div className="card contributions-card">
              <div className="card-header">
                <FaHandsHelping className="card-icon" />
                <h3>Contributions</h3>
              </div>
              <ul>
                {userInfo.contributions.map((contribution, index) => (
                  <li key={index}>
                    <strong>{contribution.projectName}</strong> <br />
                    <span>{contribution.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Publications Section */}
            <div className="card publications-card">
              <div className="card-header">
                <FaNewspaper className="card-icon" />
                <h3>Publications</h3>
              </div>
              <ul>
                {userInfo.publications.map((publication, index) => (
                  <li key={index}>
                    <strong>{publication.title}</strong> <br />
                    <span>{publication.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Speeches Section */}
            <div className="card speeches-card">
              <div className="card-header">
                <FaMicrophone className="card-icon" />
                <h3>Discours</h3>
              </div>
              <ul>
                {userInfo.recentSpeeches.map((speech, index) => (
                  <li key={index}>
                    <strong>{speech.title}</strong> <br />
                    <span>{speech.date} - {speech.location}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards Section */}
            <div className="card awards-card">
              <div className="card-header">
                <FaAward className="card-icon" />
                <h3>Récompenses</h3>
              </div>
              <ul>
                {userInfo.awards.map((award, index) => (
                  <li key={index}>
                    <strong>{award.title}</strong> <br />
                    <span>{award.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
  .profile-section {
    background-color: #080e10; /* Dark */
    color: #ffffff; /* White */
    padding: 60px 0;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .profile-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
  }

  .profile-left {
    display: flex;
    flex-direction: column;
  }
  .profile-card {
    background: linear-gradient(203deg, rgba(192, 90, 255, 1) 0%, rgba(67, 39, 158, 1) 100%); /* Gradient */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .profile-picture {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
  .bio {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
  }

  .profile-right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .card {
    background: linear-gradient(250deg, rgba(20, 20, 30, 1) 0%, rgba(30, 30, 50, 1) 100%); /* Darker Gradient */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .card-icon {
    color: #00dc93; /* Green */
    font-size: 24px;
  }
  h3 {
    color: #ffffff; /* White text for the title */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow */
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 1); /* Fully opaque white */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow for better visibility */
  }
  li strong {
    color: #ffffff; /* White for strong text */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow for strong text */
  }
`}</style>


    </section>
  );
};

export default Profile;
