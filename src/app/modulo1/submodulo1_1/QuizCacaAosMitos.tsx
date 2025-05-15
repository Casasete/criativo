import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: { text: string; معلم: boolean }[];
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Apenas pessoas que pintam ou cantam são criativas.',
    options: [
      { text: 'Fato', معلم: false },
      { text: 'Mito', معلم: true },
    ],
    explanation: 'MITO! Criatividade está em resolver problemas, ter novas ideias em qualquer área, como ciências, esportes ou até cozinhando!',
  },
  {
    id: 2,
    text: 'Criatividade é uma habilidade que nasce com a gente e não pode ser aprendida.',
    options: [
      { text: 'Fato', معلم: false },
      { text: 'Mito', معلم: true },
    ],
    explanation: 'MITO! Criatividade é como um músculo! Quanto mais você pratica e aprende técnicas, mais forte ela fica!',
  },
  {
    id: 3,
    text: 'Pessoas criativas são sempre muito excêntricas ou "estranhas".',
    options: [
      { text: 'Fato', معلم: false },
      { text: 'Mito', معلم: true },
    ],
    explanation: 'MITO! Pessoas criativas podem ser de todos os jeitos! O importante é ter ideias originais e úteis, não o jeito de se vestir ou se comportar.',
  },
  {
    id: 4,
    text: 'Se eu sou bom em matemática ou lógica, não posso ser criativo.',
    options: [
      { text: 'Fato', معلم: false },
      { text: 'Mito', معلم: true },
    ],
    explanation: 'MITO! A criatividade adora a lógica! Muitos cientistas e matemáticos famosos foram super criativos para descobrir coisas novas!',
  },
  {
    id: 5,
    text: 'Ter muitas ideias diferentes é uma parte importante da criatividade.',
    options: [
      { text: 'Fato', معلم: true },
      { text: 'Mito', معلم: false },
    ],
    explanation: 'FATO! Pensar em várias soluções e possibilidades é um superpoder criativo chamado pensamento divergente!',
  },
];

interface QuizCacaAosMitosProps {
  onQuizComplete: (correctAnswers: number) => void;
}

const QuizCacaAosMitos: React.FC<QuizCacaAosMitosProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    setSelectedAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
      onQuizComplete(score);
    }
  };

  if (quizFinished) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 my-6 rounded-lg shadow-md">
        <p className="font-bold text-2xl mb-3">Quiz Finalizado!</p>
        <p className="text-xl">Você acertou {score} de {questions.length} perguntas!</p>
        <p className="mt-3">Parabéns, Explorador! Você está no caminho certo para desbravar o Mundo da Imaginação!</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 rounded-lg shadow-md">
      <h4 className="font-bold text-xl text-yellow-700 mb-4">Exercício: Caça aos Mitos da Criatividade!</h4>
      <div className="mb-4">
        <p className="text-lg text-gray-800 mb-1">Pergunta {currentQuestionIndex + 1} de {questions.length}:</p>
        <p className="text-xl font-medium text-gray-900">{currentQuestion.text}</p>
      </div>

      {!showExplanation ? (
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.معلم)}
              className="w-full text-left bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-5 rounded-lg shadow transition duration-150 ease-in-out transform hover:scale-105"
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div className={`p-4 rounded-md ${selectedAnswer ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500"} border-l-4 mt-4`}>
          <p className={`font-bold ${selectedAnswer ? "text-green-700" : "text-red-700"}`}>
            {selectedAnswer ? "Correto!" : "Ops!"}
          </p>
          <p className={`${selectedAnswer ? "text-green-600" : "text-red-600"} mt-1`}>{currentQuestion.explanation}</p>
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow transition duration-150"
          >
            {currentQuestionIndex < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizCacaAosMitos;

