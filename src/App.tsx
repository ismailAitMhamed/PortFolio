import React, { useState } from 'react';
import Layout from './components/layout/Layout';

function App() {
  const [activeNode, setActiveNode] = useState<string>('profile');

  const handleNavigate = (nodeId: string) => {
    setActiveNode(nodeId);
  };

  const renderContent = () => {
    switch (activeNode) {
      case 'profile':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <p>Profile content goes here...</p>
          </div>
        );
      case 'education':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Education</h1>
            <p>Education content goes here...</p>
          </div>
        );
      case 'delta':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Delta Experience</h1>
            <p>Delta experience content goes here...</p>
          </div>
        );
      case 'add':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">ADD Experience</h1>
            <p>ADD experience content goes here...</p>
          </div>
        );
      case 'experience-all':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">All Experience</h1>
            <p>All experience content goes here...</p>
          </div>
        );
      case 'deutschprepa':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Deutsch Prepa Project</h1>
            <p>Deutsch Prepa project content goes here...</p>
          </div>
        );
      case 'repair':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Repair Project</h1>
            <p>Repair project content goes here...</p>
          </div>
        );
      case 'projects-all':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">All Projects</h1>
            <p>All projects content goes here...</p>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <p>Contact content goes here...</p>
          </div>
        );
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