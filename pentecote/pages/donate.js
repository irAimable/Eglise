// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from '/components/Footer';
import styles from '../styles/styles.module.css';
export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      setStatus('Email sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Error sending email');
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 relative">
      <Head>
        <title>Église Exemple - Accueil</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
        <link rel="stylesheet" href="/styles/styles.module.css" />
     
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      </Head>

      <div className="background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`ball ball-${i + 1}`}></div>
        ))}
      </div>

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

      <section id="contact" className="py-16 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contactez-Nous</h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Votre message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Envoyer
            </button>
            {status && <p className="mt-4 text-center">{status}</p>}
          </form>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .ball {
          position: absolute;
          bottom: -50px;
          width: 20px;
          height: 20px;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: rise 10s linear infinite;
        }

        .ball:nth-child(2n) {
          width: 30px;
          height: 30px;
          animation-duration: 12s;
        }

        .ball:nth-child(3n) {
          width: 40px;
          height: 40px;
          animation-duration: 14s;
        }

        @keyframes rise {
          to {
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  );
}
