import { useState, useEffect } from "react";
import ChatBox from "./components/Chatbot";
import Login from "./components/Login";
import Resources from "./components/Resources";
import Support from "./components/Support";
import ConsultationBooking from "./components/ConsultationBooking";

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('chat');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return user ? (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-purple-700 text-white flex flex-col p-4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-0 transition-transform duration-300 ease-in-out`}>
        <h1 className="text-2xl font-bold mb-6">MindEase</h1>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => { setCurrentView('chat'); setSidebarOpen(false); }}
            className={`text-left hover:bg-purple-600 p-2 rounded ${currentView === 'chat' ? 'bg-purple-600' : ''}`}
          >
            💬 Chat
          </button>
          <button
            onClick={() => { setCurrentView('resources'); setSidebarOpen(false); }}
            className={`text-left hover:bg-purple-600 p-2 rounded ${currentView === 'resources' ? 'bg-purple-600' : ''}`}
          >
            📚 Resources
          </button>
          <button
            onClick={() => { setCurrentView('support'); setSidebarOpen(false); }}
            className={`text-left hover:bg-purple-600 p-2 rounded ${currentView === 'support' ? 'bg-purple-600' : ''}`}
          >
            🆘 Support
          </button>
          <button
            onClick={() => { setCurrentView('consultation'); setSidebarOpen(false); }}
            className={`text-left hover:bg-purple-600 p-2 rounded ${currentView === 'consultation' ? 'bg-purple-600' : ''}`}
          >
            📅 Book Consultation
          </button>
          <button className="text-left hover:bg-purple-600 p-2 rounded">👤 {user.name}</button>
          <button
            onClick={handleLogout}
            className="text-left hover:bg-purple-600 p-2 rounded"
          >
            🚪 Logout
          </button>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}></div>}

      {/* Main Section */}
      <div className="flex flex-col flex-1 md:ml-0">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden mr-4 p-2 bg-purple-600 text-white rounded"
            >
              ☰
            </button>
            <h2 className="text-xl font-semibold text-purple-700">
              {currentView === 'chat' ? 'Wellness Assistant 🤖' :
               currentView === 'resources' ? 'Resources' :
               currentView === 'support' ? 'Support' : 'Book Consultation'}
            </h2>
          </div>
          <p className="text-sm text-gray-600">Welcome, {user.name}</p>
        </header>
        <main className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          {currentView === 'chat' ? <ChatBox /> :
           currentView === 'resources' ? <Resources /> :
           currentView === 'support' ? <Support /> : <ConsultationBooking />}
        </main>
      </div>
    </div>
  ) : (
    <Login setUser={setUser} />
  );
}

export default App;
