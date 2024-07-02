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
      <section id="about" class="py-16">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">À Propos de Nous</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Nos Objectifs</h3>
                    <ul class="list-disc pl-6">
                        <li>Évangéliser et partager l'amour de Jésus-Christ.</li>
                        <li>Former des disciples engagés dans la foi chrétienne.</li>
                        <li>Participer activement à des œuvres de compassion et d'aide sociale.</li>
                        <li>Promouvoir l'unité chrétienne et la coopération avec d'autres églises.</li>
                    </ul>
                </div>

                
                <div class="p-6 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Notre Vision</h3>
                    <p class="text-justify">Notre vision est de voir chaque individu et famille transformés par la puissance de l'Esprit Saint et la vérité de l'Évangile. Nous aspirons à être une église dynamique et influente qui rayonne la lumière de Christ dans notre communauté et au-delà.</p>
                </div>
            </div>

          
            <div class="mt-16">
                <h2 class="text-3xl font-bold text-center mb-8">Projets de Développement</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Hôpitaux</h3>
                        <p class="text-justify">Nous investissons dans la santé de notre communauté en construisant des hôpitaux modernes et en offrant des soins médicaux accessibles à tous.</p>
                    </div>

                   
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Hôtels</h3>
                        <p class="text-justify">Nos installations hôtelières visent à soutenir les visiteurs et les participants à nos événements, offrant un hébergement confortable et accueillant.</p>
                    </div>

                   
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Ateliers</h3>
                        <p class="text-justify">Nous facilitons le développement des compétences pratiques à travers nos ateliers, permettant aux membres de la communauté de s'épanouir dans divers domaines professionnels.</p>
                    </div>

                  
                    <div class="p-6 bg-white rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-4">Autres Projets</h3>
                        <p class="text-justify">Nous sommes engagés dans d'autres initiatives de développement telles que la construction de centres communautaires et la promotion de l'éducation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
