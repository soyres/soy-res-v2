// Central configuration for all site content
export const siteConfig = {
  name: 'Res Pizarro',
  nickname: 'Res',
  pronouns: 'they/them',
  title: 'Software Engineer & Marathon Runner',
  description: 'Full-stack developer specializing in React, Next.js, and TypeScript. Marathon runner based in Denver, Colorado.',
  
  // Contact
  email: 'respizarro3@gmail.com',
  location: {
    city: 'Denver',
    state: 'Colorado',
    country: 'US',
  },
  
  // Social Links (Replace with your actual usernames)
  social: {
    github: 'https://github.com/YOUR_GITHUB_USERNAME',
    linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    strava: 'https://www.strava.com/athletes/YOUR_STRAVA_ID', // Optional
    twitter: 'https://twitter.com/YOUR_TWITTER', // Optional
  },
  
  // Experience
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Your Current Company',
      location: 'Denver, CO',
      period: '2022 - Present',
      description: 'Building scalable web applications and leading frontend architecture decisions.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    {
      role: 'Software Engineer',
      company: 'Your Previous Company',
      location: 'Denver, CO',
      period: '2020 - 2022',
      description: 'Developed full-stack features and improved application performance by 40%.',
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS'],
    },
    {
      role: 'Junior Developer',
      company: 'Your First Company',
      location: 'Denver, CO',
      period: '2019 - 2020',
      description: 'Created responsive websites and collaborated with design teams.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
  ],
  
  // Stats
  stats: {
    experience: '5+',
    projects: '50+',
    technologies: '8',
    location: 'Denver',
  },
  
  // Running Stats (Update with your real data)
  running: {
    totalMiles: '2,847',
    marathons: '5',
    best5k: '18:42',
    bestMarathon: '3:24:15',
    thisMonth: '128mi',
  },
  
  // Tech Stack
  techStack: {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'Docker', 'Figma', 'VS Code'],
  },
  
  // SEO
  seo: {
    domain: 'https://soyres.com', // Update with your actual domain
    keywords: [
      'software engineer',
      'web developer',
      'React',
      'Next.js',
      'TypeScript',
      'marathon runner',
      'Denver',
      'full-stack developer',
      'Res Pizarro',
    ],
  },
}

// Navigation quarters for circular nav
export const navQuarters = [
  { 
    id: 1, 
    title: 'Projects',
    subtitle: 'Coding Portfolio',
    description: 'Full-stack applications and open source contributions',
    color: '#00f0ff',
    href: '/projects'
  },
  { 
    id: 2, 
    title: 'Running',
    subtitle: 'Marathon Training',
    description: 'Personal records and training insights',
    color: '#ff00ff',
    href: '/running'
  },
  { 
    id: 3, 
    title: 'Blog',
    subtitle: 'Tech & Life',
    description: 'Writing about code, running, and personal growth',
    color: '#00ff88',
    href: '/blog'
  },
  { 
    id: 4, 
    title: 'About',
    subtitle: 'My Story',
    description: 'Software engineer, runner, and lifelong learner',
    color: '#ffff00',
    href: '/about'
  }
]

export type NavQuarter = typeof navQuarters[number]