// gitprofile.config.js

const config = {
  github: {
    username: 'qrowned', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'luca-bartmann-2b7783285',
    twitter: 'qrownedev',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://qrowned.dev',
    phone: '',
    email: 'admin@qrowned.dev',
  },
  resume: {
    fileUrl: 'mailto:admin@qrowned.dev', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'SpringBoot',
    'MongoDB',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Check24',
      position: 'Stundent Scholarship Holder',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://check24.de',
    },
    {
      company: 'Allianz Technology',
      position: 'Intern',
      from: 'July 2023',
      to: 'August 2023',
      companyLink: 'https://tech.allianz.com',
    },
  ],
  certifications: [
    {
      name: 'Best Position Paper Award',
      body: 'Award for the best Position Paper at the DSS MUN 2023.',
      year: 'October 2023',
      link: 'https://mymun.com/conferences/dss-mun-2023',
    },
  ],
  education: [
    {
      institution: 'Otto-von-Taube-Gymnasium',
      degree: 'Abitur',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Günter-Stöhr-Gymnasium',
      degree: 'Abitur',
      from: '2016',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    /*
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    */
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'qrowned', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,
};

export default config;
