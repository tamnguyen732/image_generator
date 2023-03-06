import { surpriseMePrompts } from '../constants/surpriseMe';

export function getRandomPrompt() {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  return surpriseMePrompts[randomIndex];
}
