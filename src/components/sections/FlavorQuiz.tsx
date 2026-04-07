import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { quizQuestions } from "@/src/lib/quiz";
import { QuizCard } from "../ui/QuizCard";
import { Button } from "../ui/Button";
import { getQuizResult } from "@/src/lib/gemini";
import { cn } from "@/src/lib/utils";

export function FlavorQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [quizQuestions[currentStep].id]: option }));
  };

  const handleNext = async () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsLoading(true);
      const quizResult = await getQuizResult(answers);
      setResult(quizResult);
      setIsLoading(false);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section id="quiz" className="bg-[#1a0505] py-32 text-[#F5F0E8]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-anton text-5xl uppercase sm:text-6xl">
            WHAT'S YOUR PEPPER PERSONALITY?
          </h2>
          <p className="mt-4 text-xl text-[#F5F0E8]/60">
            Answer 5 questions. Get your perfect match.
          </p>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mb-8 h-32 w-16 rounded-xl bg-gradient-to-b from-[#6B1A1A] to-[#C0392B]"
                />
                <p className="font-anton text-2xl uppercase tracking-widest">
                  Mixing your flavor profile...
                </p>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-3xl bg-[#F5F0E8] p-12 text-[#6B1A1A] shadow-2xl"
              >
                <div className="mb-8 text-center">
                  <span className="mb-2 inline-block rounded-full bg-[#6B1A1A] px-4 py-1 text-xs font-bold text-white uppercase tracking-widest">
                    YOUR MATCH
                  </span>
                  <h3 className="font-anton text-5xl uppercase leading-none">
                    {result.personalityName}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                    <p className="text-xl leading-relaxed">{result.personalityDescription}</p>
                    <div className="mt-8 rounded-2xl bg-[#6B1A1A]/5 p-6 border border-[#6B1A1A]/10">
                      <h4 className="mb-2 font-bold uppercase tracking-widest opacity-50">Why it works:</h4>
                      <p>{result.recommendedReason}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-inner">
                    <div className="mb-4 h-48 w-24 rounded-lg bg-gradient-to-b from-[#6B1A1A] to-black shadow-xl" />
                    <span className="font-anton text-2xl uppercase">{result.recommendedFlavor}</span>
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6">
                  <Button size="lg" className="w-full sm:w-auto" disabled showLock>
                    Shop Your Match
                  </Button>
                  <button
                    onClick={resetQuiz}
                    className="text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="flex flex-col"
              >
                <div className="mb-12">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C0392B]">
                    Question {currentStep + 1} of 5
                  </span>
                  <h3 className="mt-2 font-anton text-4xl uppercase sm:text-5xl">
                    {quizQuestions[currentStep].question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {quizQuestions[currentStep].options.map((option) => (
                    <QuizCard
                      key={option}
                      option={option}
                      isSelected={answers[quizQuestions[currentStep].id] === option}
                      onClick={() => handleSelect(option)}
                    />
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between">
                  <div className="flex h-2 w-48 gap-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-full flex-1 rounded-full transition-colors duration-500",
                          i <= currentStep ? "bg-[#C0392B]" : "bg-white/10"
                        )}
                      />
                    ))}
                  </div>
                  
                  {answers[quizQuestions[currentStep].id] && (
                    <Button variant="secondary" onClick={handleNext}>
                      {currentStep === quizQuestions.length - 1 ? "Get Results" : "Next"}
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
