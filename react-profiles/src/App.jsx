import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Perfiles del equipo</h1>

      <Profile nombre="Ana Torres" role="Frontend" />
      <Profile nombre="David Ponte" role="Backend" />
      <Profile nombre="Lucía Gómez" role="Fullstack" />
    </div>
  );
}

export default App;
