// All news items, newest first. Add new items at the top of this list.
// The home page and the News page are both built from it.
const newsItems = [
    {
        date: "Sep 2026",
        text: `Served as Sponsorship Chair for the <a href="https://www.bits-pilani.ac.in/bda-26/" target="_blank">14th International Conference on Big Data and AI (BDA 2026)</a>, held 17&ndash;20 September 2026 at BITS Pilani, K K Birla Goa Campus.`
    },
    {
        date: "Aug 2026",
        text: `Co-organised the <a href="https://appcair-jaw-2026.github.io/" target="_blank">Joint APPCAIR Workshop 2026 (JAW 2026)</a>, held 14&ndash;15 August 2026 at BITS Pilani, Pilani Campus, as part of the Research Talks and Local Organisation committees.`
    },
    {
        date: "Apr 2026",
        text: `Paper titled "Improved Sample Complexity Bounds For Diffusion Model Training Without Empirical Risk Minimizer Access" accepted in Transactions on Machine Learning Research (TMLR).`
    },
    {
        date: "Mar 2026",
        text: `Panelist at IEOR Day, IIT Bombay, contributing to a discussion on "Ethical, Accountable, and Trustworthy Decision-Making in the Age of AI".`
    },
    {
        date: "Jan 2026",
        text: `Paper titled "Adaptive Multi-Scale Correlation Meta-Network for Few-Shot Remote Sensing Image Classification" accepted at IEEE ICASSP 2026.`
    },
    {
        date: "Jan 2026",
        text: `Joined BITS Pilani, Pilani Campus as an Assistant Professor in the Department of Computer Science and Information Systems (CS & IS).`
    },
    {
        date: "Dec 2025",
        text: `Delivered an invited talk on "Sample Complexity of Diffusion Model Training Without Empirical Risk Minimizer Access" at Ashoka University, Sonipat, Haryana.`
    },
    {
        date: "Dec 2025",
        text: `Paper titled "Regret Lower Bounds for Decentralized Multi-Agent Stochastic Shortest Path Problems" accepted at the Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS) 2025 (CORE A*).`
    },
    {
        date: "Nov 2025",
        text: `Presented "Regret Lower Bounds for Decentralized Multi-Agent Reinforcement Learning Algorithms" at ConfAI, Plaksha University, Mohali, Punjab.`
    },
    {
        date: "Feb 2025",
        text: `Paper titled "Align-Pro: A Principled Approach to Prompt Optimization for LLM Alignment" accepted at the 39th Annual AAAI Conference on Artificial Intelligence 2025 (CORE A*).`
    }
];

// News from this year shows on the home page and at the top of the News page.
// Anything older goes to the News page's archive.
const CURRENT_NEWS_YEAR = 2026;

function newsYear(item) {
    return parseInt(item.date.split(" ").pop(), 10);
}

function renderNews(containerId, filter) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = newsItems.filter(filter).map(item => `
        <div class="news-item">
            <p class="date">${item.date}</p>
            <p>${item.text}</p>
        </div>
    `).join("");
}

renderNews("news-current", item => newsYear(item) >= CURRENT_NEWS_YEAR);
renderNews("news-archive", item => newsYear(item) < CURRENT_NEWS_YEAR);
