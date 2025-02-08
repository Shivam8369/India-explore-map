import { MapPin } from 'lucide-react';
import IndiaMap from './components/IndiaMap';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 justify-center ">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h1 className="text-3xl font-bold  text-gray-800">
              India Map Explorer
            </h1>
          </div>
        </div>

        <div className="h-[600px] w-full">
          <IndiaMap />
        </div>

        <div className="mt-6">
          <p className="text-sm text-center text-gray-500">
            Data source: Census of India, 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
