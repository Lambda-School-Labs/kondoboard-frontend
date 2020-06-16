export const dataSet = [];

// key words to use in search ['applies to all', 'first specific', 'second specific', etc...]
dataSet['Web'] = ['Software Engineer Developer Web', 'Full Stack', 'Front End', 'Back End', 'Dev Ops'];
dataSet['DS'] = ['Data Software', 'Engineer', 'Analyst', 'Python', 'Scientist'];
dataSet['UX'] = ['UX UI', 'Designer', 'Engineer', 'Content Strategist', 'Researcher Analyst'];
dataSet['iOS'] = ['iOS Mobile Application App', 'Developer'];

// suggested skills based on selected track *Incomplete*
dataSet['skills'] = [];
dataSet['skills']['Web'] = ['Javascript', 'Git'] /* applies to all web - do not overlap these into any other sub category */
dataSet['skills']['Full Stack Developer'] = ['HTML', 'CSS', 'LESS', 'SCSS', 'NodeJS', 'Ruby', 'ReactJS', 'Angular', 'Vue', '.NET', 'MySQL', 'Postgres', 'Python', 'jQuery', 'Apache', 'Nginx', 'Express', 'Deno', 'PHP']; /* applies to full stack developer, etc..*/
dataSet['skills']['Front End Developer'] = ['HTML', 'CSS', 'LESS', 'SCSS', 'ReactJS', 'Angular', 'Vue', 'PHP'];
dataSet['skills']['Back End Developer'] = ['NodeJS', 'Express', '.Net', 'Python', 'MySQL', 'Postgres', 'ArangoDB', 'MongoDB', 'SQL'];
dataSet['skills']['Dev Ops Engineer'] = ['AWS', 'Python', 'Linux Administration', 'Firebase', 'MySQL', 'NodeJS', '.Net', 'Ruby', 'Docker', 'Azure', 'Kubernetes']


// user track for display on page
dataSet['display'] = []; 
dataSet['display']['Web'] = ['', 'Full Stack Developer', 'Front End Developer', 'Back End Developer', 'Dev Ops Engineer'];
dataSet['display']['DS'] = ['', 'Data Engineer', 'Data Analyst', 'Python Engineer', 'Data Scientist'];
dataSet['display']['UX'] = ['', 'UX Designer', 'UX Engineer', 'Content Strategist', 'UX Reasearcher / Analyst'];
dataSet['display']['iOS'] = ['', 'iOS Developer'];
