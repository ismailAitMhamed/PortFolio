import React from 'react';
import { Tree } from 'react-arborist';
import FileNode from './FileNode';
import type { TreeNode } from '../../types/navigation.types';

interface FileExplorerProps {
  onNavigate: (nodeId: string) => void;
  activeNode: string;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ onNavigate, activeNode }) => {
  const treeData: TreeNode[] = [
    {
      id: 'profile',
      name: 'profile.tsx',
    },
    {
      id: 'formation',
      name: 'formation',
      children: [
        { id: 'education', name: 'education.tsx' }
      ]
    },
    {
      id: 'experience',
      name: 'experience',
      children: [
        { id: 'delta', name: 'delta.tsx' },
        { id: 'add', name: 'add.tsx' },
        { id: 'experience-all', name: 'all.tsx' }
      ]
    },
    {
      id: 'projects',
      name: 'projects',
      children: [
        { id: 'deutschprepa', name: 'deutschprepa.tsx' },
        { id: 'repair', name: 'repair.tsx' },
        { id: 'projects-all', name: 'all.tsx' }
      ]
    },
    {
      id: 'contact',
      name: 'contact.tsx',
    }
  ];

  return (
    <div className="h-full w-full bg-gray-900 overflow-hidden">
      {/* File Tree */}
      <div className="p-2">
        <Tree
          data={treeData}
          openByDefault={false}
          width="100%"
          height={600}
          indent={20}
          rowHeight={28}
          overscanCount={1}
          padding={8}
          onSelect={(nodes) => {
            if (nodes.length > 0) {
              onNavigate(nodes[0].data.id);
            }
          }}
          className="focus:outline-none"
        >
          {FileNode}
        </Tree>
      </div>
    </div>
  );
};

export default FileExplorer;