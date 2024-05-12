
import './App.css';
import TanstackTable from './components/TanstackTable';
import { USERS } from './data';

function App() {
  return (
    <div className="pt-4 min-h-screen bg-gray-900">
      {/* {
        JSON.stringify(USERS)
      } */}
      <TanstackTable />
    </div>
  );
}

export default App;
