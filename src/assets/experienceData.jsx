import macquarie from './images/macquarie.jpg'
import unswcse from './images/unswcse.jpg'
import phocas from './images/phocas.jpg'

export const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Macquarie Group',
    duration: 'December 2025 - February 2026',
    description: '\n Summer intern in Corporate Operations Group as a full-stack engineer.\n\n- Aligned to the Commodity and Global Markets business group in eTrading and Digital Market Services Team working on eFX/eCMF services\n- Working on FX Option Integrations and webpages, including blotter and backend websocket service\n- Improved observability in STP service - using grafana/open telemetry to add deal processing lifecycle and server startup metrics and traces',
    tags: ['TypeScript', 'Scala', 'Grafana/LGTM'],
    image: macquarie,
    when: 'previous',
  },
  {
    title: 'Casual Academic',
    company: 'UNSW CSE',
    duration: 'September 2025 - May 2026',
    description: '\n Lab Assistant for COMP2511 - Software Design and Architecture - 25T3, 26T1\n\n- Help students learn OOP and software architecture concepts through in-person lab sessions\n- Mark weekly coding and theory work and assignments related to course content',
    tags: ['Java', 'OOP', 'Design Patterns'],
    image: unswcse,
    when: 'current',
  },
  {
    title: 'Student Work Experience',
    company: 'Phocas Software',
    duration: 'April 2022 - April 2022',
    description:
      'Week-long work experience opportunity in high school. Tasks included: shadowing developers, participating in pair programming, attending cross-team standups, rotations through full-stack, backend, frontend teams',
    tags: ['C#', 'Agile', 'Software Lifecycle'],
    image: phocas,
    when: 'previous',
  },
];