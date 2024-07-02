// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
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
      <section id="news" className="py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Bienvenue à l'Église Pentecote Du Burundi</h3>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       
          {/* Article 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=1">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image1.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 1</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 1...</button>
          </Link>
        </div>

          {/* Article 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=2">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image2.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 2</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 2...</button>
          </Link>
        </div>

          {/* Article 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=3">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image3.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 3</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 3...</button>
          </Link>
        </div>

          {/* Article 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 news-article">
          <Link href="/news_details?id=4">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <img src="images/image4.jpg" alt="Actualité 4" className="w-full h-30 object-cover object-center" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Titre de l'Actualité 4</h3>
            <button className="text-gray-700">Cliquez sur l'image pour voir la description de l'actualité 4...</button>
          </Link>
        </div>

        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
