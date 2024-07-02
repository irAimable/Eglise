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
      <section id="church-contact" class="py-16">
        <div class="mt-16">
            <h2 class="text-3xl font-bold text-center mb-8">Contact des representant</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">1er Reverend Pasteur</h3>
                    <p class="text-justify">783936789</p>
                </div>

            
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">2er Reverend Pasteur</h3>
                    <p class="text-justify">79876567</p>
                </div>

                
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Cordinateur</h3>
                    <p class="text-justify">65874554</p>
                </div>

              
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Directeur du Radio</h3>
                    <p class="text-justify">797650243</p>
                </div>
            </div>
        </div>
    </section>

     

      {/* Footer */}
      <Footer/>
    </div>
  );
}
