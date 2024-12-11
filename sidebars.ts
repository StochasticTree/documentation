import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Installation',
      items: [
        {
          type: 'doc',
          label: 'Python',
          id: 'python-installation'
        },
        {
          type: 'doc',
          label: 'R',
          id: 'r-installation'
        },
      ],
      collapsed: true,
    },
  ],
};

export default sidebars;
