
import './App.css';
import Aside from './components/layout/aside/Aside';
import Main from './components/layout/main/Main';
import Sidebar from './components/layout/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      
      <Sidebar/>
      <Main/>
      <Aside/>
    </div>
  );
}

export default App;
