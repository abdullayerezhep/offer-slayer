import { initTRPC } from '@trpc/server'

const interviewQuestions = [
  {
    question: 'What is the difference between "==" and "==="?',
    answer:
      'The "==" operator compares by checking if the values are equal, while the "===" operator compares by checking if the values are equal and the types are equal.',
  },
  {
    question: 'What is the difference between "let" and "const"?',
    answer:
      'The "let" keyword is used to declare a variable that can be reassigned, while the "const" keyword is used to declare a variable that cannot be reassigned.',
  },
  {
    question: 'What is the difference between "null" and "undefined"?',
    answer:
      'The "null" value represents the intentional absence of any value, while the "undefined" value represents the absence of a value that has not been assigned.',
  },
]
const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getInterviewQuestions: trpc.procedure.query(() => {
    return { interviewQuestions }
  }),
})

export type TrpcRouter = typeof trpcRouter
