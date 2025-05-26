import { jobs } from './jobs.js';

const jobListEl = document.getElementById('job-list');

jobs.forEach(job => {
    const el = document.createElement('div');
    el.className = 'job';
    el.innerHTML = `<h3>${job.title}</h3><p>${job.desc}</p>`;
    jobListEl.appendChild(el);
});
