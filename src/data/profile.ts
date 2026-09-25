// Personal details and links used across the site.
// Edit here, and every section (hero, contact, SEO tags) picks it up.

export const profile = {
  name: 'Al-Muktadir Islam Mahit',
  givenName: 'Al-Muktadir Islam',
  familyName: 'Mahit',
  shortName: 'Mahit',
  // Other ways people search for the same person. Used in structured data only.
  alternateNames: ['Mahit', 'Al-Muktadir Mahit', 'Muktadir Mahit', 'AL-Muktadir-Islam-Mahit', 'Ethical_Mahit'],
  location: 'Dhaka, Bangladesh',
  university: 'United International University',
  universityUrl: 'https://www.uiu.ac.bd/',
  universityShort: 'UIU',
  degree: 'BSc in Computer Science & Engineering',
  graduation: 2027,
  email: 'muktadirmahit07@gmail.com',
  status: 'Open to software engineering roles',
  statusDetail: 'internship, part-time or full-time',
  // Swap public/cv.pdf for the real CV; set to true to drop the "coming soon" note.
  cv: { href: '/cv.pdf', ready: false },
  // Profiles that belong to this person. Search engines use these (schema.org sameAs)
  // to connect the site with the LinkedIn/GitHub/Codeforces results for the same name.
  links: {
    linkedin: 'https://www.linkedin.com/in/al-muktadir-mahit/',
    github: 'https://github.com/muktadirmahit',
    codeforces: 'https://codeforces.com/profile/Ethical_Mahit',
    facebook: 'https://www.facebook.com/al.muktadir.mahit',
  },
  codeforcesHandle: 'Ethical_Mahit',
  spokenLanguages: [
    { name: 'Bengali', level: 'Native' },
    { name: 'English', level: 'Fluent' },
  ],
} as const;

export const seo = {
  // Name first: this is what shows as the blue link in Google results.
  title: 'Al-Muktadir Islam Mahit | Developer & Competitive Programmer',
  description:
    'Al-Muktadir Islam Mahit (Mahit) is a final-year CSE student at United International University, Dhaka: 2× ICPC Asia Dhaka Regional contestant, 1,500+ problems solved, problem setter, and builder of networked Java software and embedded robots.',
  // Google Search Console verification code (HTML tag method). Leave empty to skip.
  googleSiteVerification: '-c98kxefULve5foiS3Y3BGtDL4wf6HO31m1lz4hq3TU',
};
