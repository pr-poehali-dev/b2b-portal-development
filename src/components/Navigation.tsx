import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            next level IT
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`text-sm hover:text-gray-900 transition-colors ${
                isActive('/about') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              }`}
            >
              О компании
            </Link>
            <Link 
              to="/askona-proposal" 
              className={`text-sm hover:text-gray-900 transition-colors ${
                isActive('/askona-proposal') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              }`}
            >
              Askona
            </Link>
            <Link 
              to="/project-team" 
              className={`text-sm hover:text-gray-900 transition-colors ${
                isActive('/project-team') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              }`}
            >
              Команда проекта
            </Link>
            <Link 
              to="/cases" 
              className={`text-sm hover:text-gray-900 transition-colors ${
                isActive('/cases') ? 'text-gray-900 font-semibold' : 'text-gray-600'
              }`}
            >
              Кейсы
            </Link>
            <Link to="/contact">
              <Button size="sm" className="bg-black hover:bg-gray-800">
                Связаться
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;