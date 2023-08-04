// Simulated data
const candidates = [
    { name: 'John Doe', role: 'Software Engineer', location: 'Bangalore' },
    { name: 'Jane Smith', role: 'Product Manager', location: 'Mumbai' },
    { name: 'Alex Johnson', role: 'Data Scientist', location: 'Delhi' }
];

// Sample function to display candidates
function displayCandidates() {
    const candidatesList = document.getElementById('candidates-list');
    candidatesList.innerHTML = '';

    candidates.forEach(candidate => {
        const candidateItem = document.createElement('li');
        candidateItem.innerHTML = `<strong>${candidate.name}</strong><br>${candidate.role}, ${candidate.location}`;
        candidatesList.appendChild(candidateItem);
    });
}

// Sample function to create a new job posting
function createJobPosting() {
    const jobTitle = prompt('Enter Job Title:');
    const jobDescription = prompt('Enter Job Description:');

    if (jobTitle && jobDescription) {
        // Code to create a new job posting in the backend
        alert(`Job posting created: ${jobTitle}`);
    } else {
        alert('Job posting creation cancelled.');
    }
}

// Attach event listeners
document.getElementById('btnShowCandidates').addEventListener('click', displayCandidates);
document.getElementById('btnCreateJob').addEventListener('click', createJobPosting);

// Additional JavaScript for new features
const searchInput = document.getElementById('searchInput');
const candidatesList = document.getElementById('candidates-list');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    candidatesList.innerHTML = '';

    candidates.forEach(candidate => {
        if (candidate.name.toLowerCase().includes(query) || candidate.role.toLowerCase().includes(query)) {
            const candidateItem = document.createElement('li');
            candidateItem.textContent = `${candidate.name} - ${candidate.role}, ${candidate.location}`;
            candidatesList.appendChild(candidateItem);
        }
    });
});

const slider = document.querySelector('.slider');
let counter = 0;

function slideNext() {
    counter++;
    if (counter >= slider.children.length) {
        counter = 0;
    }
    slider.style.transform = `translateX(-${counter * 100}%)`;
}

setInterval(slideNext, 3000);

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
