// pages/index.js

import Head from 'next/head';
import Footer from '/components/footer';
import styles from '../styles/styles.module.css';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Head>
        <title>Église Exemple - Accueil</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
        <link rel="stylesheet" href="/styles/styles.module.css" />
     
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      </Head>
      

      {/* Header */}
      <header className={`bg-blue-950 text-white py-8 bg-cover h-96 ${styles.header}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Église Pentecote Du Burundi</h1>
          <nav className="nav">
            <a href="/" className="px-4  bg-blue-600 rounded-full py-2">Accueil</a>
            <a href="/news" className="px-4  bg-blue-600 rounded-full py-2">Actualités</a>
            <a href="/evangelization" className="px-4  bg-blue-600 rounded-full py-2">Évangélisation</a>
            <a href="/events" className="px-4  bg-blue-600 rounded-full py-2">Événements</a>
            <a href="/development_projects" className="px-4  bg-blue-600 rounded-full py-2">Projets de Développement</a>
            <a href="/church_contact" className="px-4  bg-blue-600 rounded-full py-2">Contact de l'Église</a>
            <a href="/about" className="px-4  bg-blue-600 rounded-full py-2">À Propos</a>
            <a href="/donate" className="px-4 bg-blue-600 text-white rounded-full py-2">Message</a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="evangelization" class="py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Bienvenue à l'Église Pentecote Du Burundi</h3>

  

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
       
           
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Événements d'Évangélisation</h3>
                <p class="text-lg mb-4">Rejoignez notre événement d'évangélisation en direct sur Zoom :</p>
                <a href="https://zoom.us/example-event" target="_blank" class="text-blue-600 underline hover:text-blue-800">Rejoindre l'événement sur Zoom</a>

            </div>

            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Notre Chaine Youtube</h3>
                <p class="text-lg mb-4">Suivre nos Evenement sur Youtube:</p>
                <a href="https://www.youtube.com/@ubafmradio4369" target="_blank" class="text-blue-600 underline hover:text-blue-800">Rejoindre l'événement sur Youtube</a>

            </div>
          
          
        </div>
    </section>
    <div className="container mx-auto mt-8">
  <h2 className="text-3xl font-bold mb-4 text-center">Vidéos Postées</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Vidéo 1 */}
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mb-4 h-25">
      <div className="w-1/2 p-4">
        <h3 className="text-xl font-bold mb-2">Titre de la vidéo 1</h3>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>

      </div>
    </div>

    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mb-4">
 
  <div className="w-full relative h-20" style={{ paddingBottom: '56.25%' }}>
    <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
      <source src="/videos/video2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="w-1/2 p-4">
        <h3 className="text-xl font-bold mb-2">Titre de la vidéo 2</h3>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>
        <p className="text-gray-700">Description de la vidéo 1. Cette vidéo parle de...</p>

      </div>
    </div>
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mb-4">
 
 <div className="w-full relative h-20" style={{ paddingBottom: '56.25%' }}>
   <video className="absolute top-0 left-0 w-full h-full object-cover" controls>
     <source src="/videos/video1.mp4" type="video/mp4" />
     Your browser does not support the video tag.
   </video>
 </div>
</div>
  </div>
</div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
