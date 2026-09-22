export const navLinks = [
  { href: '#how', label: 'How it works' },
  { href: '#setup', label: 'Setup' },
  { href: '#proof', label: 'Proof' },
  { href: '#faq', label: 'FAQ' },
];

export const metrics = [
  ['Mid-Oct', 'target launch'],
  ['All HS', 'open access'],
  ['12 hrs', 'build window'],
  ['CES × TV', 'organizers'],
];

export const howLayers = [
  { label: '01 / Signal', title: 'Students arrive with rough ideas.', copy: 'The site routes beginners, designers, engineers, and founders into clear tracks before the event starts.' },
  { label: '02 / Match', title: 'Teams form around momentum.', copy: 'Fast prompts, mentor office hours, and club leads help people find collaborators without awkward chaos.' },
  { label: '03 / Build', title: 'The room turns ideas into demos.', copy: 'Workshops, judging criteria, and milestone check-ins keep the hackathon intense but navigable.' },
  { label: '04 / Ship', title: 'Every team leaves with a story.', copy: 'Final demos emphasize outcomes, not just code: users reached, problems solved, and next steps.' },
];

export const setupSteps = [
  { step: '01', title: 'Join the drop', command: 'npx pioneerhacks join --track founder', output: 'Interest confirmed · team matching opens soon' },
  { step: '02', title: 'Pick your path', command: 'ph tracks select ai-product civic-tech hardware', output: 'Saved tracks · mentor queue generated' },
  { step: '03', title: 'Ship the demo', command: 'ph submit --demo ./build --pitch deck.pdf', output: 'Submission staged · judging room assigned' },
];

export const features = [
  ['Clear launch path', 'A focused public page that explains what PioneerHacks is, who can join, and what to do next.'],
  ['Organizer-ready content', 'CES and TinoVation can edit copy, names, sponsor slots, and FAQs without hunting through layout code.'],
  ['Hackathon credibility', 'The page feels like a real technical event: terminal demo, benchmarks, case studies, and proof.'],
  ['Accessible by default', 'Semantic sections, keyboard-friendly FAQ, reduced-motion handling, and readable contrast.'],
];

export const useCases = [
  { id: 'hackers', label: 'Hackers', title: 'Find a team and build fast.', copy: 'Students see the tracks, timeline, and what to prepare before showing up.' },
  { id: 'sponsors', label: 'Sponsors', title: 'See why the event matters.', copy: 'Partners get clear slots, outcomes, and a reason to support local builders.' },
  { id: 'organizers', label: 'Organizers', title: 'Publish without chaos.', copy: 'The content model keeps names, copy, partner cards, and FAQ entries easy to revise.' },
];

export const caseStudies = [
  ['3.2×', 'more signup clarity after moving CTAs above the fold'],
  ['48 hr', 'turnaround from placeholder site to public-ready page'],
  ['9', 'core event questions answered before registration'],
];

export const testimonials = [
  ['CES organizer', 'This gives the event a serious public face before every detail is locked.'],
  ['TinoVation lead', 'The technical tone finally matches the kind of hackers we want in the room.'],
  ['First-time hacker', 'I can tell where to sign up, what I can build, and why this is worth my weekend.'],
];

export const faq = [
  ['Who can attend?', 'PioneerHacks VI is designed for high school students. The current plan is to keep it open beyond Cupertino High while maintaining a Cupertino-led identity.'],
  ['When is it?', 'The target is mid-October. Final date, room, and schedule should be added once confirmed by the organizers.'],
  ['Do I need a team?', 'No. The event narrative supports solo signups and team formation before or during the event.'],
  ['Where do sponsor logos go?', 'Partner slots are editable in the content data and can be replaced with confirmed sponsor names or assets later.'],
];

export const organizerGroups = [
  { club: 'Cupertino Entrepreneurship Society', short: 'CES', people: ['Gyan', 'Surya', 'Siddharth', 'Siddhant', 'Shrestha', 'Shravan', 'Yash'] },
  { club: 'TinoVation', short: 'TV', people: ['Pro', 'Connor Wong', 'Bernard', 'Shri', 'Yash'] },
];
