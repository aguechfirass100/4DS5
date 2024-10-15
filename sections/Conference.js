import { Title, TitleSm } from "@/components/common/Title";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";

Modal.setAppElement(".container");

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    height: "auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },
};

const Conference = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const addSampleEvents = () => {
    const sampleEvents = [
      {
        title: "Réunion de l'équipe A",
        start: "2024-10-15T10:00:00",
        end: "2024-10-15T11:00:00",
        description: "Discussion sur les progrès du projet de réforme sociale",
        location: "Online - Zoom",
        speakers: ["Alice Dupont", "Bob Martin"],
      },
      {
        title: "Conférence sur l'innovation politique",
        start: "2024-10-17T09:00:00",
        end: "2024-10-17T12:00:00",
        description: "Débats sur les nouvelles approches politiques pour la prochaine décennie",
        location: "Online - Zoom",
        speakers: ["Dr. Émilie Caron", "Jean Dupuis"],
      },
      {
        title: "Sommet sur l'IA et l'impact social",
        start: "2024-10-20T14:00:00",
        end: "2024-10-20T17:00:00",
        description: "Exploration de l'impact de l'IA sur les politiques sociales",
        location: "Online - Zoom",
        speakers: ["Sarah Lemoine", "Michel Bergeron"],
      },
      {
        title: "Réunion stratégique pour la campagne",
        start: "2024-10-16T11:30:00",
        end: "2024-10-16T12:30:00",
        description: "Planification des initiatives de la campagne pour les élections à venir",
        location: "Online - Zoom",
        speakers: ["Jeanne Lefèvre", "Marc Moreau"],
      },
      {
        title: "Atelier de développement de projet",
        start: "2024-10-18T10:00:00",
        end: "2024-10-18T12:00:00",
        description: "Élaboration des propositions pour la nouvelle plateforme politique",
        location: "Online - Zoom",
        speakers: ["Thomas Petit", "Diane Leroy"],
      },
      {
        title: "Conférence sur la cybersécurité et la politique",
        start: "2024-10-19T09:00:00",
        end: "2024-10-19T16:00:00",
        description: "Discussions sur la sécurité numérique et ses enjeux pour la politique",
        location: "Online - Zoom",
        speakers: ["Éthan Perret", "Nathalie Roux"],
      },
      {
        title: "Mise à jour des politiques internes",
        start: "2024-10-16T14:00:00",
        end: "2024-10-16T15:00:00",
        description: "Revue et discussion des nouvelles politiques du parti",
        location: "Online - Zoom",
        speakers: ["Équipe RH"],
      },
      {
        title: "Réunion de revue financière",
        start: "2024-10-17T13:00:00",
        end: "2024-10-17T14:00:00",
        description: "Examen des performances financières du trimestre",
        location: "Online - Zoom",
        speakers: ["Directeur financier", "Équipe des finances"],
      },
      {
        title: "Lancement du sprint de design",
        start: "2024-10-15T13:00:00",
        end: "2024-10-15T15:00:00",
        description: "Démarrage du sprint de design pour l'application de gestion politique",
        location: "Online - Zoom",
        speakers: ["Équipe UI/UX"],
      },
      {
        title: "Stratégie de soutien aux électeurs",
        start: "2024-10-18T14:00:00",
        end: "2024-10-18T15:30:00",
        description: "Amélioration du service de soutien aux électeurs pour les prochaines élections",
        location: "Online - Zoom",
        speakers: ["Responsable du soutien aux électeurs"],
      },
      {
        title: "Session de planification e-commerce",
        start: "2024-10-21T09:00:00",
        end: "2024-10-21T11:00:00",
        description: "Planification des ventes en ligne pour financer les campagnes électorales",
        location: "Online - Zoom",
        speakers: ["Équipe e-commerce", "Marketing"],
      },
      {
        title: "Table ronde sur le leadership",
        start: "2024-10-19T15:00:00",
        end: "2024-10-19T17:00:00",
        description: "Discussion sur les stratégies de leadership pour le parti",
        location: "Online - Zoom",
        speakers: ["Président du parti", "Vice-président des opérations"],
      }
    ];
    

    setEvents(sampleEvents);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    addSampleEvents();
  }, []);

  return (
    <>
      <style jsx>{`
        .calendar {
          background-color: #1e1e1e;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .modal-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-title {
          font-size: 30px;
          margin-bottom: 10px;
          color: #fff;
          text-align: center;
        }

        .modal-description,
        .modal-location,
        .modal-speakers {
          margin-top: 10px;
          color: #ccc;
          font-size: 18px;
          text-align: center;
        }

        .close {
          cursor: pointer;
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 30px;
          color: #fff;
        }

        .start-meeting-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #845aff; /* Using $indigo */
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .start-meeting-button:hover {
          background-color: #5b3ad2; /* Darker shade of indigo */
        }

        .modal-footer {
          margin-top: 20px;
          text-align: center;
        }

        .zoom-link {
          color: #00dc93; /* Using $green */
          text-decoration: underline;
        }

        .zoom-link:hover {
          color: #1ec69e; /* Lighter shade of green */
        }
      `}</style>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Live Conferences" /> <br />
            <br />
            <Title title="Innovative Conference Experiences" className="title-bg" />
          </div>
          <div className="calendar">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventClick={handleEventClick}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              themeSystem="bootstrap"
            />
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Event Details"
      >
        <div className="modal-content">
          <h2 className="modal-title">
            {selectedEvent ? selectedEvent.title : ""}
          </h2>
          <button onClick={closeModal} className="close">
            &times;
          </button>
          {selectedEvent && (
            <>
              <p className="modal-description">
                <strong>Start:</strong> {selectedEvent.start.toLocaleString()}
                <br />
                <strong>End:</strong>{" "}
                {selectedEvent.end ? selectedEvent.end.toLocaleString() : "N/A"}
                <br />
                <strong>Description:</strong> {selectedEvent.extendedProps.description}
                <br />
                <strong>Location:</strong> {selectedEvent.extendedProps.location}
                <br />
                <strong>Speakers:</strong> {selectedEvent.extendedProps.speakers.join(", ")}
                <br />
              </p>
              <div className="modal-footer">
                <a
                  href="https://zoom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zoom-link"
                >
                  Join on Zoom
                </a>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Conference;
