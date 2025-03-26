// VideoGallery.jsx

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './VideoGallery.css'; // Optional CSS for additional styling

import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';

const projects = [
  {
    "number": 1,
    "title": "Suivi des Travaux de Recherche des Étudiants",
    "developer": "Meryam ABBADI",
    "videoUrl": "/videos/video1.mp4",
    "githubUrl": "https://github.com/ABBADI-mery/SuiviTravauxRecherche-tudiants/blob/main/README.md"
  },
  {
    "number": 2,
    "title": "Gestion des stages",
    "developer": "Amine ABOU-LAICHE",
    "videoUrl": "/videos/video2.mp4",
    "githubUrl": "https://github.com/AmineAbl/gestion_stage/blob/main/README.md"
  },
  {
    "number": 3,
    "title": "Gestion des Transports Universitaires",
    "developer": "Noura ABOUBICHR",
    "videoUrl": "/videos/video3.mp4",
    "githubUrl": "https://github.com/nouraaboubichr/gestion-tran/blob/master/src/main/java/README.md"
  },
  {
    "number": 4,
    "title": "Gestion des Étudiants et Inscriptions",
    "developer": "Fatima Ezzahra AGOURRAM",
    "videoUrl": "/videos/video4.mp4",
    "githubUrl": "https://github.com/faty-creator/ControleProjet/blob/master/README.md"
  },
  {
    "number": 5,
    "title": "Gestion des Dépenses d’École",
    "developer": "Soufiane AIT HMAD",
    "videoUrl": "/videos/video5.mp4",
    "githubUrl": "https://github.com/ah-SOUFIANE/gestioDepenseSprint3/blob/main/README.md"
  },
  {
    "number": 6,
    "title": "Suivi des Absences",
    "developer": "Rafik AIT ICHOU",
    "videoUrl": "/videos/video6.mp4",
    "githubUrl": "https://github.com/RAFIKAITICHOU/-Suivi-des-Absences/blob/main/README.md"
  },
  {
    "number": 7,
    "title": "Gestion des Travaux Pratiques (TP)",
    "developer": "Meriem ATIF",
    "videoUrl": "/videos/video7.mp4",
    "githubUrl": "https://github.com/mariematif/-Gestion-des-Travaux-Pratiques/blob/main/README.md"
  },
  {
    "number": 8,
    "title": "Gestion des Infrastructures Scolaires",
    "developer": "Ilham AYOUCHI",
    "videoUrl": "/videos/video8.mp4",
    "githubUrl": "https://github.com/ilhamayouchi/gestion_infrastructure/blob/main/README.md"
  },
  {
    "number": 9,
    "title": "Gestion des Compétitions Sportives",
    "developer": "Hamza BAHLOUL",
    "videoUrl": "/videos/video9.mp4",
    "githubUrl": "https://github.com/hamzabhl/Projet-Java-Gestion-des-Competitions-sportives/blob/main/README.md"
  },
  {
    "number": 10,
    "title": "Gestion des emprunts de livres",
    "developer": "Hiba BEN DRIOUICH",
    "videoUrl": "/videos/video10.mp4",
    "githubUrl": "https://github.com/Hibabendriouich/Emprunts_Livres/blob/main/README.md"
  },
  {
    "number": 11,
    "title": "Gestion des profs vacataires",
    "developer": "Zineb BIDAS",
    "videoUrl": "/videos/video11.mp4",
    "githubUrl": "https://github.com/Zineb2004-beep/Gestion_des_profs_vacataire_project/blob/52d1bc79c5107e38a4921a82500a3d08e9c87a1b/README.md"
  },
  {
    "number": 12,
    "title": "Gestion des Certifications Professionnelles",
    "developer": "Abderrahman BOUANANI",
    "videoUrl": "/videos/video12.mp4",
    "githubUrl": "https://github.com/Abduuu0414/Projet-Java-Gestion-des-Certifications-Professionnelles/blob/main/README.md"
  },
  {
    "number": 13,
    "title": "Gestion des Candidatures en Master",
    "developer": "Zakaria Bouzdig",
    "videoUrl": "/videos/video13.mp4",
    "githubUrl": "https://github.com/bouzdigZakaria/projetctrl2/blob/master/README.md"
  },
  {
    "number": 14,
    "title": "Suivi des projets de fin d'etudes",
    "developer": "Sanae EL ABTAHY",
    "videoUrl": "/videos/video14.mp4",
    "githubUrl": "https://github.com/elabtahysanae/gestionpfe/blob/master/README.md"
  },
  {
    "number": 15,
    "title": "Gestion des Evaluations des Enseignants",
    "developer": "Ikram EL KHATTAB",
    "videoUrl": "/videos/video15.mp4",
    "githubUrl": "https://github.com/Ex-Girl1/p.gestionEva/blob/main/README.md"
  },
  {
    "number": 16,
    "title": "Gestion des concours internes",
    "developer": "Imane EL-KOURARI",
    "videoUrl": "/videos/video16.mp4",
    "githubUrl": "https://github.com/imane2004-desing/concoursinterne"
  },
  {
    "number": 17,
    "title": "Gestion des Projets de Recherche",
    "developer": "Fatima Zahra EN-NESYRY",
    "videoUrl": "/videos/video17.mp4",
    "githubUrl": "https://github.com/ENNE-FATI/ControleProjet/blob/main/README.md"
  },
  {
    "number": 18,
    "title": "Gestion des activites pedagogiques",
    "developer": "Atiqa ESSAYOUTI",
    "videoUrl": "/videos/video18.mp4",
    "githubUrl": "https://github.com/atiqaessayouti/activitep/blob/main/READMI.md"
  },
  {
    "number": 19,
    "title": "Gestion des Formations Continues",
    "developer": "Soukaina GARID",
    "videoUrl": "/videos/video19.mp4",
    "githubUrl": "https://github.com/SoukainaGARID/Gestion-des-Formations-Continues/blob/main/README.md"
  },
  {
    "number": 20,
    "title": "Gestion des supports pedagogiques",
    "developer": "Sara HARIB",
    "videoUrl": "/videos/video20.mp4",
    "githubUrl": "https://github.com/SaraHarib/Gest_Supports_pedagogiques/blob/master/README.md"
  },
  {
    "number": 21,
    "title": "Gestion des Réclamation",
    "developer": "Hatim KOUBRI",
    "videoUrl": "/videos/video21.mp4",
    "githubUrl": "https://github.com/009-hatim/Gestion-des-Relamations/blob/main/README.md"
  },
  {
    "number": 22,
    "title": "Gestion des Conférences Scientifiques",
    "developer": "Rayan LAYHI",
    "videoUrl": "/videos/video22.mp4",
    "githubUrl": "https://github.com/LayhiRayan/Gestion-des-conferences/blob/main/README.md"
  },
  {
    "number": 23,
    "title": "Gestion des bourses",
    "developer": "GHITA MAKHFI",
    "videoUrl": "/videos/video23.mp4",
    "githubUrl": ""
  },
  {
    "number": 24,
    "title": "Gestion des examens",
    "developer": "Halima Moustine",
    "videoUrl": "/videos/video24.mp4",
    "githubUrl": "https://github.com/halimaMst/gestion_examens/blob/main/README.md"
  },
  {
    "number": 25,
    "title": "Gestion de bibliothèque",
    "developer": "Sara OUADAY",
    "videoUrl": "/videos/video25.mp4",
    "githubUrl": "https://github.com/Sarrah-1/GestionDeBibliotheque/blob/master/README.md"
  },
  {
    "number": 26,
    "title": "Gestion des groupes",
    "developer": "Doha Ouahmane",
    "videoUrl": "/videos/video26.mp4",
    "githubUrl": "https://github.com/Doha09/Gestion-des-groupes/blob/main/README.md"
  },
  {
    "number": 27,
    "title": "Gestion des Clubs Étudiants",
    "developer": "Salma OUARRAR",
    "videoUrl": "/videos/video27.mp4",
    "githubUrl": "https://github.com/SalmaOuar/Gestion-des-clubs/blob/main/README.md"
  },
  {
    "number": 28,
    "title": "Gestion des journées portes ouvertes",
    "developer": "Asmaa SABRI",
    "videoUrl": "/videos/video28.mp4",
    "githubUrl": "https://github.com/AsmaaSB/Gestion_JPO/blob/main/README.md"
  },
  {
    "number": 29,
    "title": "Gestion des Certification",
    "developer": "Yassine SALIHI",
    "videoUrl": "/videos/video29.mp4",
    "githubUrl": "https://github.com/YassineSalihi/Gestion-des-cerifications/blob/main/README.md"
  },
  {
    "number": 30,
    "title": "Gestion des concours d'accés",
    "developer": "Wissal Kassori",
    "videoUrl": "/videos/video30.mp4",
    "githubUrl": "https://github.com/wissalkassori/gestiondes-concour/blob/main/README.md"
  }
];

const VideoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null); // Référence pour l'élément vidéo

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
  };

  // Fonction pour lancer la vidéo en plein écran
  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="container">
        <header className="text-center mb-5">
          <h4 className="display-4">Contrôle pratique (Mi-Semestre)<br/> Programmation 3 (POO)</h4>
          <h4 className="text-muted">Licence Informatique ENS Marrakech</h4>
          <h5 className="text-secondary">Pr. Mohamed LACHGAR</h5>
          <p style={{ color: "red" }}>
            Il est impératif d'utiliser les conceptions fixées dans chaque travail.
          </p>
        </header>
      </div>

      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow border-0 rounded">
              <div 
                className="card-img-top rounded-top video-thumbnail" 
                style={{ cursor: 'pointer', position: 'relative' }}
                onClick={() => handleVideoClick(project.videoUrl)}
              >
                <video width="100%" height="150" controls={false}>
                  <source src={project.videoUrl} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
                {/* Optionnel : Ajout d'un overlay pour indiquer qu'il est cliquable */}
                <div className="overlay">
                  <span className="play-button">&#9658;</span>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{`Projet ${project.number}: ${project.title}`}</h5>
                <p className="card-text text-muted">Développé par : { project.developer.toUpperCase()}</p>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour afficher la vidéo */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Vidéo du projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentVideo && (
            <div className="video-container" style={{ position: 'relative' }}>
              <video
                ref={videoRef}
                width="100%"
                controls
                autoPlay
                style={{ display: 'block' }}
              >
                <source src={currentVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
              {/* Bouton plein écran personnalisé */}
              <Button
                variant="secondary"
                onClick={handleFullScreen}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  opacity: 0.7,
                }}
              >
                Plein Écran
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default VideoGallery;
