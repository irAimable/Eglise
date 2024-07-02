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
      <section id="home" className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Bienvenue à l'Église Pentecote Du Burundi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Objectifs de l'église */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Descriptions</h3>
              <p className="text-lg mb-4">L'Église Exemple est une communauté chrétienne dédiée à propager l'amour de Dieu à travers le monde. Nous sommes engagés à servir notre communauté et à partager la bonne nouvelle de Jésus-Christ.</p>
            </div>

            {/* Vision de l'église */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Notre Objectif</h3>
              <p className="text-lg mb-4">Nous vous invitons à explorer notre site pour découvrir nos événements à venir, nos projets de développement et plus encore.</p>
            </div>

            {/* Image 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Objectifs</h3>
              <h2 className="text-xl font-bold mb-4"> Reverand Pasteur Rubwiririkanya</h2>
              <p>loremxbhcbhgbhfbch hdgufvhhcgxcvyfbvjvbhvb  bfvvygxvxcyhcvxc</p>
             
            </div>

            {/* Image 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              
              <img src="/images/rev.jpeg" alt="eg1" className="w-full h-84 object-cover rounded-lg mb-4" />
            </div>
            
            {/* Description */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Localisation</h3>
              <p className="text-lg mb-4">L'Église Exemple est une communauté chrétienne dédiée à propager l'amour de Dieu à travers le monde. Nous sommes engagés à servir notre communauté et à partager la bonne nouvelle de Jésus-Christ.</p>
            </div>

            {/* Vision de l'église */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              
              <img src="/images/ntahangwa.jpeg" alt="eg1" className="w-full h-84 object-cover rounded-lg mb-4" />

              
            </div>

            {/* Autres images */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Objectifs</h3>
              <img src="/images/rev.jpeg" alt="eg1" className="w-full h-84 object-cover rounded-lg mb-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Objectifs</h3>
              <img src="/images/rev.jpeg" alt="eg1" className="w-full h-84 object-cover rounded-lg mb-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Objectifs</h3>
              <img src="/images/rev.jpeg" alt="eg1" className="w-full h-84 object-cover rounded-lg mb-4" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Nos Objectifs</h3>
              <img src="/images/rev.jpeg" alt="eg1" className="w-full h-84 object-cover rounded-lg mb-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Vidéos */}
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
