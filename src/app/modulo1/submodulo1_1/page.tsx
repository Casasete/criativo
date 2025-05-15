
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Importar o componente Image
import React, { useState } from 'react';
import QuizCacaAosMitos from './QuizCacaAosMitos';

export default function Submodulo1_1Page() {
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [badgeEarned, setBadgeEarned] = useState(false);
  const [showOwlAnimation, setShowOwlAnimation] = useState(false); // Para controlar a animação da coruja

  const handleQuizCompletion = (finalScore: number) => {
    setScore(finalScore);
    setQuizCompleted(true);
    if (finalScore >= 3) {
      setBadgeEarned(true);
    }
  };

  // Simular a aparição da coruja após um tempo
  useState(() => {
    const timer = setTimeout(() => {
      setShowOwlAnimation(true);
    }, 500); // Coruja aparece após 0.5 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300 min-h-screen text-gray-800 font-sans">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 drop-shadow-md">Módulo 1: O Mapa da Criatividade – Fundamentos Essenciais</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-indigo-600 mt-2 drop-shadow-sm">Submódulo 1.1: O Que Raios é Criatividade?</h2>
      </header>

      <div className={`my-8 p-6 bg-white/90 backdrop-blur-lg shadow-xl rounded-lg flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${showOwlAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="w-36 h-36 md:w-48 md:h-48 relative rounded-full mb-4 md:mb-0 md:mr-8 flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:scale-110 overflow-hidden">
          <Image src="/professor_coruja.png" alt="Professor Sábio Coruja" width={192} height={192} className="object-cover"/>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-purple-600 mb-3">Professor Sábio Coruja Explica:</h3>
          <p className="text-lg leading-relaxed">
            Olá, jovem explorador! Muitos pensam que criatividade é como um raio mágico que só atinge alguns...
            Mas isso é um <strong className="text-red-600 font-bold">MITO!</strong> Na verdade, a criatividade está em todos nós!
            É como um superpoder adormecido esperando para ser despertado! Vamos juntos estourar essas ideias erradas?
          </p>
        </div>
      </div>

      <section className={`mb-8 p-6 bg-white/80 backdrop-blur-md shadow-xl rounded-lg transition-all duration-1000 ease-out delay-300 ${showOwlAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-lg leading-relaxed mt-4">
          A criatividade não é um privilégio místico de poucos, mas uma capacidade inerente e fundamental ao ser humano. 
          Ela não se limita às belas-artes ou às ciências de ponta; ela pulsa vibrantemente na resolução de um problema matemático, 
          na elaboração de uma estratégia de negócios, na engenhosidade de um professor, ou até na forma como você organiza seu quarto!
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Alguns mitos comuns que vamos quebrar:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 text-lg space-y-1">
          <li>"Só artistas são criativos" - <strong className="text-red-600 font-bold">MITO!</strong></li>
          <li>"Criatividade é nascer com um dom" - <strong className="text-red-600 font-bold">MITO!</strong></li>
          <li>"Pessoas criativas são sempre excêntricas" - <strong className="text-red-600 font-bold">MITO!</strong></li>
          <li>"Criatividade não serve para quem gosta de lógica ou números" - <strong className="text-red-600 font-bold">MITO!</strong></li>
        </ul>
      </section>

      <section className={`my-8 p-6 bg-white/80 backdrop-blur-md shadow-xl rounded-lg transition-all duration-1000 ease-out delay-500 ${showOwlAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {!quizCompleted ? (
          <QuizCacaAosMitos onQuizComplete={handleQuizCompletion} />
        ) : (
          <div className="text-center py-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">Quiz Concluído!</h3>
            <p className="text-xl">Você acertou {score} de 5 perguntas!</p>
            {badgeEarned && (
              <div className="mt-6 inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 animate-customBounce">
                🏅 Badge Conquistado: Desbravador de Mitos! 🏅
              </div>
            )}
            <p className="text-lg leading-relaxed mt-4">
              O Professor Sábio Coruja diz: "Parabéns, Explorador! Você desvendou os primeiros segredos do Mapa da Criatividade!"
            </p>
          </div>
        )}
      </section>

      <footer className={`mt-12 text-center pb-10 transition-opacity duration-1000 ease-out delay-700 ${showOwlAnimation ? 'opacity-100' : 'opacity-0'}`}>
        <Link href="/modulo1/submodulo1_2" legacyBehavior>
          <a className={`py-3 px-8 rounded-lg shadow-lg transition duration-300 font-bold ${quizCompleted && badgeEarned ? 'bg-purple-600 hover:bg-purple-800 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}>
            Próximo Submódulo (1.2)
          </a>
        </Link>
        {!(quizCompleted && badgeEarned) && <p className="text-sm text-gray-600 mt-2">Complete o quiz e ganhe o badge para avançar!</p>}
        <p className="mt-6 text-sm text-gray-500">
          Curso Despertando a Criatividade - Protótipo v0.1.2
        </p>
      </footer>

      <style jsx global>{`
        .animate-customBounce {
          animation: customBounce 1s infinite;
        }
        @keyframes customBounce {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
}

