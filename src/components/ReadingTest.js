// src/components/ReadingTest.js
import React, { useState } from 'react';

const ReadingTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Expanded passage and questions
  const passage = "The fox has played a significant role in many cultures' myths and folklore. In Western folklore, the fox is typically represented as a cunning creature, sometimes helping humans but more often causing mischief. Meanwhile, in Eastern cultures, such as those in Japan, the fox is considered sacred and capable of warding off evil spirits.";

  const questions = [
    { 
      id: 1, 
      text: 'What role does the fox play in Western folklore?', 
      options: ['A guardian', 'A trickster', 'A sacred animal', 'A mythical hero'], 
      correctAnswer: 'A trickster' 
    },
    { 
      id: 2, 
      text: 'How is the fox viewed in Eastern cultures?', 
      options: ['As cunning', 'As sacred', 'As dangerous', 'As irrelevant'], 
      correctAnswer: 'As sacred' 
    },
    { 
      id: 3, 
      text: 'Which animal is known for causing mischief?', 
      options: ['Dog', 'Fox', 'Cat', 'Rabbit'], 
      correctAnswer: 'Fox' 
    },
    { 
      id: 4, 
      text: 'What is the common perception of foxes in folklore?',
      options: ['Helpful', 'Harmful', 'Cunning', 'Ignorant'],
      correctAnswer: 'Cunning'
    },
    { 
      id: 5, 
      text: 'Which quality is most associated with the fox in Japan?',
      options: ['Cunning', 'Bravery', 'Sacredness', 'Mischief'],
      correctAnswer: 'Sacredness'
    }
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
    alert(`You answered ${correctCount} out of ${questions.length} questions correctly.`);
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
    </div>
  );
};

export default ReadingTest;
