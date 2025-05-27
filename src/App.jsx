import DashboardMainContent from "./Components/DashboardMainContent"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import './App.css'
function App() {
  return (
    <main className="dashboard-container">
      <Header />
      <Sidebar />
      <DashboardMainContent />
    </main>
  )
}

export default App
