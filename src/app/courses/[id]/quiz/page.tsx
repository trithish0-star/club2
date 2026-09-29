import { COURSES } from '@/data/courses';
import QuizClient from './QuizClient';

export function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
}

export default function QuizPage() {
  return <QuizClient />;
}
const handleSubmitQuiz = () => {
  const totalQuestions = quizQuestions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  setScore(percentage);
  setIsSubmitted(true);
};
