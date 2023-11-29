const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ exercise, part }) => (
  <p>
    {part} {exercise}
  </p>
)

const Content = ({ exercises, parts }) => (
  <div>
    <Part exercise={exercises.exercises1} part={parts.part1} />
    <Part exercise={exercises.exercises2} part={parts.part2} />
    <Part exercise={exercises.exercises3} part={parts.part3} />
  </div>
)

const Total = ({ exercises }) => <p>Number of exercises {exercises.exercises1 + exercises.exercises2 + exercises.exercises3}</p>

export default function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const data = {
    exercises: {
      exercises1,
      exercises2,
      exercises3,
    },
    parts: {
      part1,
      part2,
      part3
    }
  }

  return (
    <div>
      <Header course={course} />

      <Content {...data} />

      <Total exercises={data.exercises} />
    </div>
  )
}
