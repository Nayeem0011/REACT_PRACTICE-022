import './App.css'
import AccessibleForm from './components/AccessibleForm'
import Button from './components/Button'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {

  return (
    <div className='max-w-4xl mx-auto'>
      <Card title="Component DESign Principles">
        <p>Components should be small reuable and follow single page application</p>
        <Button onClick={()=>alert("Clicked")}>Submit</Button>
      </Card>
      <Card title="Managing Application State">
        <p>Using local state with <code>useState</code></p>
        <Counter/>
      </Card>
      <Card title="Accessibility in react Apps">
        <AccessibleForm/>
      </Card>
    </div>
  )
}

export default App
