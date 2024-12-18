"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Projet.module.css";

// Définition de l'interface pour les projets
interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  stack: string;
  lien: string;
  logo: string[];
  logos: string[];
  images: string[];
  imagess: string[];
  imagesss: string[];
  imagessss: string[];
  imagesssss: string[];
}

export default function Projet() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  // Données des projets
  const projects: Project[] = [
    {
      id: 1,
      title: "Valkyr Ink",
      type: "Tattoo artist, site vitrine",
      description: "Valkyr ink est une artiste tatoueuse. Ce site a été réalisé dans l'idée de créer une experience utilisateur immersive et innovante, reflétant son travail",
      stack: "React, spline, css, gsap",
      lien: "https://valkyrink-tattoo.com/",
      logo: ["bw.svg"],
      logos: ["valimg.svg"],
      images: ["imageV.svg"],
      imagess: ["meltel.svg"],
      imagesss: ["melipad.svg"],
      imagessss: ["melgalerie.svg"],
      imagesssss: ["melflash.svg"],
    },
    {
      id: 2,
      title: "CyberVikingTattoo",
      type: "Tattoo artist, site vitrine",
      description: "CyberVikingTattoo est un artiste tatoueur. Son projet met en valeur les tatouages d'inspiration cyber et viking, correspondant à son style.",
      stack: "NextJS, spline, css",
      lien: "",
      logo: ["cblogo.svg"],
      logos: ["cbimg.svg"],
      images: ["mattaille.svg"],
      imagess: ["mattel.svg"],
      imagesss: ["matipad.svg"],
      imagessss: ["mattext.svg"],
      imagesssss: ["matcitation.svg"],
    },
    {
      id: 3,
      title: "Korando",
      type: "Application web, réseau social",
      description: "Korando est une plateforme que j'ai créée pour permettre de découvrir les sentiers bretons, les événements outdoor, ainsi que de trouver des groupes de marche, de trail et d'autres activités de plein air.",
      stack: "ReactJS, CSS, PostgreSQL, Clerk ",
      lien: "En cours...",
      logo: ["KO.svg"],
      logos: ["koimg.svg"],
      images: ["korando.svg"],
      imagess: ["korando1.svg"],
      imagesss: ["korando2.svg"],
      imagessss: ["korando3.svg"],
      imagesssss: ["korando4.svg"],
    },
    {
      id: 4,
      title: "Guild",
      type: "Application web, réseau social",
      description: "Guild est un réseau social qui met en relation les joueurs de RPG pour leur permettre de trouver chaussure à leur pied. Les utilisateurs peuvent créer et rejoindre des groupes en fonction de critères de recherche précis.",
      stack: "ReactJS, spline, CSS, Express, MySQL",
      lien: "Projet de formation",
      logo: ["guildlogo.svg"],
      logos: ["guildimg.svg"],
      images: ["guild.svg"],
      imagess: ["guild1.svg"],
      imagesss: ["guild2.svg"],
      imagessss: ["guild3.svg"],
      imagesssss: ["guild4.svg"],
    },
  ];




  // Fonction pour ouvrir la modal
  const openModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section className={styles.mesProjets}>
      {projects.map((project, index) => (
        <button className={styles.modalButton} onClick={() => openModal(project)} key={project.id}>
          <div className={styles.projetContent}>
            <div className={styles.imgWork}>
              {project.logo.map((img, idx) => (
                <Image src={img} alt={project.title} width={500} height={400} key={idx} />
              ))}
              {project.logos.map((imgs, idx) => (
                <Image src={imgs} alt={project.title} width={300} height={400} key={idx} id={styles.logoMediaQuerie}/>
              ))}
            </div>
            <div className={styles.projetDescription}>
              <li>
                <h4>{project.title}</h4>
                <p>{project.type}</p>
              </li>
            </div>
            <div className={styles.projetNumber}>
              <h3>{String(index + 1).padStart(2, "0")}.</h3>
            </div>
          </div>
        </button>
      ))}

      {/* Modal personnalisée */}
      {isModalOpen && (
        <div className={styles.customModalOverlay} onClick={closeModal}>
          <div className={styles.customModal} onClick={(e) => e.stopPropagation()}>
            {currentProject && (
              <>
              <div className={styles.gridContainer}>
                  <div className={styles.closeButtonContainer}>
                    <button onClick={closeModal} className={styles.closeButton}>
                      <Image src="/fleche.svg" alt="icone fleche" width={39} height={39} />
                    </button>
                  </div>
              <div className={styles.gridModale}>
                 
                  <div className={styles.modalImages}>
                    <div className={styles.imgPrincipale}>
                    {currentProject.images.map((img, idx) => (
                      <Image src={img} alt={currentProject.title} width={400} height={400} key={idx} />
                    ))}
                    </div>
                    <div className={styles.imgSecondaire}>
                      {currentProject.imagess.map((img, idx) => (
                        <Image src={img} alt={currentProject.title} width={150} height={300} key={idx} />
                      ))}
                      {currentProject.imagesss.map((img, idx) => (
                        <Image src={img} alt={currentProject.title} width={150} height={300} key={idx} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.gridMiddle}>
                    <h4>0{currentProject.id}.</h4>
                    <div className={styles.imgTertiaire}>
                      {currentProject.imagessss.map((img, idx) => (
                        <Image src={img} alt={currentProject.title} width={150} height={300} key={idx} />
                      ))}
                      {currentProject.imagesssss.map((img, idx) => (
                        <Image src={img} alt={currentProject.title} width={150} height={300} key={idx} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.descProjet}>
                   <div className={styles.projetDesc}>
                      <h2>{currentProject.title}</h2>
                      <p>{currentProject.description}</p>
                    </div>
                    <div className={styles.projetType}>
                      <h5>TYPE:</h5>
                      <p>{currentProject.type}</p>
                    </div>
                    <div className={styles.projetStack}>
                      <h5>STACK:</h5>
                      <p>{currentProject.stack}</p>
                    </div>
                    <div className={styles.projetLien}>
                      <h5>LIEN:</h5>
                      <a href={currentProject.lien}  target="_blank" >{currentProject.lien}</a>
                    </div>
                  </div>
                </div>
                </div>
              </>
            )}
          </div>
        </div>
        
      )}
    </section>
  );
}
