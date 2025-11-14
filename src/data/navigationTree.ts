import type { TreeNode } from '../types/navigation.types';

export const treeData: TreeNode[] = [
  {
    id: "home",
    name: "HOME",
    children: [
      { 
        id: "profile", 
        name: "profil"
      }
    ]
  },
  {
    id: "formation",
    name: "FORMATION",
    children: [
    ]
  },
  {
    id: "experience",
    name: "EXPERIENCE",
    children: [
      { 
        id: "delta", 
        name: "delta-holding"
      },
      { 
        id: "add", 
        name: "add-stage"
      }
    ]
  },
  {
    id: "projects",
    name: "PROJECTS",
    children: [
      { 
        id: "deutschprepa", 
        name: "deutschprepa"
      },
      { 
        id: "repair", 
        name: "repair-app"
      }
    ]
  },
  {
    id: "skills",
    name: "SKILLS"
  },
  {
    id: "contact",
    name: "CONTACT"
  }
];