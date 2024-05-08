// src/components/ReadingTest.js
import React, { useState } from 'react';
import ResultModal from './ResultModal';  // Import the modal component

const ReadingTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const passage = 'The quick brown fox jumps over the lazy dog.';
  const questions = [
    { id: 1, text: 'What role does the fox play in Western folklore?', options: ['A guardian', 'A trickster', 'A sacred animal', 'A mythical hero'], correctAnswer: 'A trickster' },
    { id: 2, text: 'How is the fox viewed in Eastern cultures?', options: ['As cunning', 'As sacred', 'As dangerous', 'As irrelevant'], correctAnswer: 'As sacred' },
    { id: 3, text: 'Which animal is known for causing mischief?', options: ['Dog', 'Fox', 'Cat', 'Rabbit'], correctAnswer: 'Fox' },
    { id: 4, text: 'What is the common perception of foxes in folklore?', options: ['Helpful', 'Harmful', 'Cunning', 'Ignorant'], correctAnswer: 'Cunning' },
    { id: 5, text: 'Which quality is most associated with the fox in Japan?', options: ['Cunning', 'Bravery', 'Sacredness', 'Mischief'], correctAnswer: 'Sacredness' }
  ];

  const handleAnswerSelect = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="reading-test">
      <h1>IELTS Reading Test Simulation</h1>
      <p>{passage}</p>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          {question.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={selectedAnswers[question.id] === option}
                onChange={() => handleAnswerSelect(question.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <ResultModal isOpen={modalOpen} score={score} total={questions.length} onClose={handleCloseModal} />
    </div>
  );
};

export default ReadingTest;
