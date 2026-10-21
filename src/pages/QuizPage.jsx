import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, CheckCircle2, XCircle, RotateCcw, 
  Award, Sparkles, ArrowRight, ShieldCheck, BookOpen 
} from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';

export const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      triggerConfetti();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C59B4B', '#781A2C', '#C75313', '#FAF6ED']
    });
  };

  // Determine badge level based on score
  const getBadgeTitle = (finalScore) => {
    const percentage = (finalScore / totalQuestions) * 100;
    if (percentage >= 90) return { title: 'Grand Curator of Indian Heritage', desc: 'Flawless mastery across five millennia of subcontinental art history!', color: '#781A2C' };
    if (percentage >= 70) return { title: 'Senior Archaeological Scholar', desc: 'Profound appreciation and knowledge of Indian classical and folk traditions.', color: '#C75313' };
    if (percentage >= 50) return { title: 'Discerning Museum Connoisseur', desc: 'Good grasp of major historical periods and iconic monuments.', color: '#C59B4B' };
    return { title: 'Aspiring Cultural Explorer', desc: 'An inspiring first step into India\'s rich artistic tapestry. Keep exploring!', color: '#6E6157' };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6ED] border border-[#C59B4B] text-xs sm:text-sm font-semibold text-[#781A2C]">
          <HelpCircle className="w-4 h-4 text-[#C59B4B]" />
          <span>Interactive Art History Assessment</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#1C1714]">
          Test Your Indian Art History
        </h1>

        <p className="text-sm sm:text-base text-[#4A3E38] max-w-2xl mx-auto leading-relaxed">
          Challenge your intellect across twelve curated questions spanning Mohenjo-daro bronzes, Sanchi toranas, Chola metallurgy, and the Bengal Renaissance.
        </p>
      </div>

      {/* Main Quiz Box or Completion Screen */}
      {!isQuizCompleted ? (
        <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-10 border border-[#E2D6C0] shadow-museum-lg space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm font-semibold text-[#6E6157]">
              <span className="text-[#781A2C] font-serif uppercase tracking-wider text-sm sm:text-base font-bold">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm sm:text-base">Score: <strong className="text-[#781A2C] font-bold">{score}</strong> / {totalQuestions}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-[#EFE8D8] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#C59B4B] to-[#781A2C] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Period Tag & Text */}
          <div className="space-y-3 pt-2">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#F3EBDD] text-[#781A2C] border border-[#C59B4B]/30 font-serif">
              {currentQuestion.period}
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1714] leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="space-y-3.5 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctAnswer;
              
              let optionStyle = 'bg-[#FAF6ED] border-[#E2D6C0] hover:bg-[#F3EBDD] text-[#1C1714]';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-2 ring-emerald-400/40';
                } else if (isSelected && !isCorrect) {
                  optionStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-semibold ring-2 ring-rose-400/40';
                } else {
                  optionStyle = 'bg-[#FAF6ED]/50 border-[#E2D6C0] text-[#8C7E74] opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-[#781A2C] border-[#781A2C] text-[#FAF6ED] font-semibold shadow-sm';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border text-left text-base sm:text-lg transition-all duration-200 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border shrink-0 ${
                      isSelected && !isAnswerSubmitted
                        ? 'bg-[#FAF6ED] text-[#781A2C] border-[#FAF6ED]'
                        : 'border-current'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Card (Appears after submission) */}
          {isAnswerSubmitted && (
            <div className={`p-5 rounded-2xl border text-sm sm:text-base leading-relaxed animate-in fade-in duration-300 ${
              selectedOption === currentQuestion.correctAnswer
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                : 'bg-rose-50/70 border-rose-200 text-rose-950'
            }`}>
              <div className="font-serif font-bold text-base mb-1.5 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C59B4B]" />
                <span>Historical Context & Curatorial Explanation</span>
              </div>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#E2D6C0] flex items-center justify-between">
            <span className="text-xs text-[#8C7E74]">
              {isAnswerSubmitted ? 'Review explanation then continue' : 'Select an answer to proceed'}
            </span>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedOption !== null
                    ? 'bg-[#781A2C] text-[#FAF6ED] hover:bg-[#5C1221] shadow-sm'
                    : 'bg-[#EFE8D8] text-[#8C7E74] cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#781A2C] text-[#FAF6ED] hover:bg-[#5C1221] shadow-sm transition-all"
              >
                <span>{currentIndex === totalQuestions - 1 ? 'View Final Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className="bg-[#FAF6ED] rounded-3xl p-8 sm:p-12 border-2 border-[#C59B4B] shadow-museum-lg text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-full bg-[#781A2C] text-[#E2C78A] mx-auto flex items-center justify-center shadow-lg border-2 border-[#C59B4B]">
            <Award className="w-10 h-10" />
          </div>

          {/* Score Announcement */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C75313]">
              Assessment Completed
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#1C1714]">
              You Scored {score} out of {totalQuestions}!
            </h2>
            <div className="text-sm font-semibold text-[#6E6157]">
              Overall Accuracy: {Math.round((score / totalQuestions) * 100)}%
            </div>
          </div>

          {/* Certificate Card */}
          <div className="bg-[#FAF6ED] p-6 rounded-2xl border border-[#C59B4B] max-w-lg mx-auto shadow-sm space-y-2 relative overflow-hidden">
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#781A2C]">
              Official Digital Credential
            </div>
            <h3 className="text-xl font-serif font-bold text-[#781A2C]">
              {getBadgeTitle(score).title}
            </h3>
            <p className="text-xs text-[#4A3E38] leading-relaxed">
              {getBadgeTitle(score).desc}
            </p>
            <div className="pt-2 text-[11px] text-[#8C7E74] italic">
              Verified by KalaYatra Museum Educational Division • 2026
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#781A2C] text-[#FAF6ED] hover:bg-[#5C1221] text-xs font-semibold shadow transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
            <button
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF6ED] text-[#781A2C] border border-[#C59B4B] text-xs font-semibold hover:bg-[#F3EBDD] transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#C59B4B]" />
              <span>Celebrate!</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
