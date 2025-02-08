import { trpc } from '../../lib/trpc'

export const InterviewQuestion = () => {
  const { data } = trpc.getInterviewQuestions.useQuery(undefined, {})
  return (
    <div>
      {data?.interviewQuestions.map((q) => (
        <div>
          <h1>{q.question}</h1>
          <p>{q.answer}</p>
        </div>
      ))}
    </div>
  )
}
