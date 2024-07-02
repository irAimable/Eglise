// pages/news_details.js

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/styles.module.css';

const newsDetails = [
  {
    id: '1',
    title: "Titre de l'Actualité 1",
    description: `
      <p>Voici la description complète de l'actualité 1.</p>
      <p>Cette actualité couvre plusieurs aspects intéressants :</p>
      <ul class="list-disc pl-5">
        <li>Premièrement, elle aborde le sujet principal.</li>
        <li>Deuxièmement, elle fournit des informations détaillées.</li>
        <li>Enfin, elle propose des solutions possibles.</li>
      </ul>
      <p>Pour plus de détails, veuillez lire les sections ci-dessous :</p>
      <h2 class="text-2xl font-bold mt-4 mb-2">Section 1 : Contexte</h2>
      <p>Cette section explique le contexte de l'actualité...</p>
      <h2 class="text-2xl font-bold mt-4 mb-2">Section 2 : Détails</h2>
      <p>Cette section fournit des détails approfondis sur l'actualité...</p>
      <h2 class="text-2xl font-bold mt-4 mb-2">Section 3 : Conclusion</h2>
      <p>Cette section présente la conclusion et les implications futures...</p>
    `,
    image: '/images/image1.jpg'
  },
  {
    id: '2',
    title: "Titre de l'Actualité 2",
    description: `
    <p>Voici la description complète de l'actualité 2.</p>
    <p>Cette actualité couvre plusieurs aspects intéressants :</p>
    <ul class="list-disc pl-5">
      <li>Premièrement, elle aborde le sujet principal.</li>
      <li>Deuxièmement, elle fournit des informations détaillées.</li>
      <li>Enfin, elle propose des solutions possibles.</li>
    </ul>
    <p>Pour plus de détails, veuillez lire les sections ci-dessous :</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 1 : Contexte</h2>
    <p>Cette section explique le contexte de l'actualité...</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 2 : Détails</h2>
    <p>Cette section fournit des détails approfondis sur l'actualité...</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 3 : Conclusion</h2>
    <p>Cette section présente la conclusion et les implications futures...</p>
  `,
    image: '/images/image2.jpg'
  },
  {
    id: '3',
    title: "Titre de l'Actualité 3",
    description: `
    <p>Voici la description complète de l'actualité 3.</p>
    <p>Cette actualité couvre plusieurs aspects intéressants :</p>
    <ul class="list-disc pl-5">
      <li>Premièrement, elle aborde le sujet principal.</li>
      <li>Deuxièmement, elle fournit des informations détaillées.</li>
      <li>Enfin, elle propose des solutions possibles.</li>
    </ul>
    <p>Pour plus de détails, veuillez lire les sections ci-dessous :</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 1 : Contexte</h2>
    <p>Cette section explique le contexte de l'actualité...</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 2 : Détails</h2>
    <p>Cette section fournit des détails approfondis sur l'actualité...</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 3 : Conclusion</h2>
    <p>Cette section présente la conclusion et les implications futures...</p>
  `,
    image: '/images/image3.jpg'
  },
  {
    id: '4',
    title: "Titre de l'Actualité 4",
    description: `
    <p>Voici la description complète de l'actualité 4.</p>
    <p>Cette actualité couvre plusieurs aspects intéressants :</p>
    <ul class="list-disc pl-5">
      <li>Premièrement, elle aborde le sujet principal.</li>
      <li>Deuxièmement, elle fournit des informations détaillées.</li>
      <li>Enfin, elle propose des solutions possibles.</li>
    </ul>
    <p>Pour plus de détails, veuillez lire les sections ci-dessous :</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 1 : Contexte</h2>
    <p>Cette section explique le contexte de l'actualité...</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 2 : Détails</h2>
    <p>Cette section fournit des détails approfondis sur l'actualité...</p>
    <h2 class="text-2xl font-bold mt-4 mb-2">Section 3 : Conclusion</h2>
    <p>Cette section présente la conclusion et les implications futures...</p>
  `,
    image: '/images/image4.jpg'
  }
];

export default function NewsDetails() {
  const router = useRouter();
  const { id } = router.query;

  const news = newsDetails.find(newsItem => newsItem.id === id);

  if (!news) {
    return <div>Actualité non trouvée</div>;
  }

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

      <div className="container mx-auto py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <img src={news.image} alt={news.title} className="w-full h-[900px] object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
          <div className="text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: news.description }}></div>
          <Link href="/news" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Retour aux Actualités</Link>
        </div>
      </div>
    </div>
  );
}
