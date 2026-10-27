
import './App.css'

function App() {
  return (
    <main className="container">
      <h1>React Deployment Demo</h1>
      <p>Welcome to my React application!</p>

      <section className="card">
        <h2>Experiment 20</h2>
        <p>Deployment of a React Application</p>

        <h3>Deployment Platforms</h3>
        <ul>
          <li>GitHub Pages</li>
          <li>Netlify</li>
          <li>Vercel</li>
        </ul>

        <p className="success">
          Application is running successfully!
        </p>
      </section>

      <footer>
        Developed using React and Vite
      </footer>
    </main>
  )
}

export default App
