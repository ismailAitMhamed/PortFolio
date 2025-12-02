import React, { useState } from 'react';
import Layout from './components/layout/Layout';

// Importer les composants sectionnels
import Profile from './components/sections/Profile';
import Education from './components/sections/Education';
import DeltaExperience from './components/sections/DeltaExperience';
import AddExperience from './components/sections/AddExperience';
import DeutschPrepa from './components/sections/DeutschPrepa';
import AllProjects from './components/sections/AllProjects';
import Contact from './components/sections/Contact';

function App() {
  const [activeNode, setActiveNode] = useState<string>('profile');

  const handleNavigate = (nodeId: string) => {
    setActiveNode(nodeId);
  };

  const renderContent = () => {
    switch (activeNode) {
      case 'formation':
        return <Education />;
      case 'profile':
        return <Profile />;
      case 'education':
        return <Education />;
      case 'delta':
        return <DeltaExperience />;
      case 'add':
        return <AddExperience />;
      case 'deutschprepa':
        return <DeutschPrepa />;
      case 'projects-all':
        return <AllProjects />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome</h1>
            <p>Select a file from the explorer to view its content.</p>
          </div>
        );
    }
  };

  return (
    <Layout onNavigate={handleNavigate} activeNode={activeNode}>
      {renderContent()}
    </Layout>
  );
}

export default App;
