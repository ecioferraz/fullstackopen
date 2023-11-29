const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ exercise, part }) => (
  <p>
    {part} {exercise}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {
      parts.map(({ exercises, name }) => (
        <Part exercise={exercises} part={name} key={name} />
      ))
    }
  </div>
)

const Total = ({ parts }) => (
  <p>
    Number of exercises {
      parts.reduce((acc, { exercises }) => {
        acc += exercises
        return acc
      }, 0)
    }
  </p>
)

export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        exercises: 10,
        name: 'Fundamentals of React'
      },
      {
        exercises: 7,
        name: 'Using props to pass data'
      },
      {
        exercises: 14,
        name: 'State of a component'
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}
