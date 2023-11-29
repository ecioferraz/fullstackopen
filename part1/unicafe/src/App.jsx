import { useState } from "react"

const Title = ({ title }) => <h1>{title}</h1>

const Button = ({ name, setState }) => <button onClick={() => setState((prev) => ++prev)}>{name}</button>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value} {text === 'positive' && '%'}</td>
  </tr>
)

const Statistics = ({ bad, good, neutral }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const percentage = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average || 0} />
        <StatisticLine text="positive" value={percentage || 0} />
      </tbody>
    </table>
  )
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title="give feedback" />

      <div>
        <Button name='good' setState={setGood} />
        <Button name='neutral' setState={setNeutral} />
        <Button name='bad' setState={setBad} />
      </div>

      <Title title="statistics" />

      {
        good <= 0 && neutral <= 0 && bad <= 0
        ? <p>No feedbacks given</p>
        : <Statistics bad={bad} good={good} neutral={neutral} />
      }
    </div>
  )
}
