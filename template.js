// 1. Define the Navigation Links (No <header> wrapper)
const myHeader = `
    <nav>
        <a href="index.html">Home</a>
        <a href="bio.html">Bio</a>
        <a href="research.html">Research</a>
        <a href="teaching.html">Teaching</a>
        <a href="index.html#news">News</a>
    </nav>
`;

// 2. Define the Sidebar Content (No <aside> wrapper)
const mySidebar = `
    <img src="profile-pic.jpg" alt="Prashant Photo" class="profile-photo">
    <div class="profile-header">
        <h1>Prashant Trivedi</h1>
        <p>Assistant Professor<br>
        BITS Pilani, Rajasthan
        </p>
    </div>
    
    <h3>Connect</h3>
    <p>6121-V New Academic Block<br>
    Department of Computer Science and Information System
    </p>
    <p><a href="mailto:prashant.trivedi@pilani.bits-pilani.ac.in">Email Me</a></p>
    <p><a href="https://www.linkedin.com/in/prashant-trivedi-59784a143/">My LinkedIn</a></p>
    <p><a href="https://scholar.google.com/citations?user=05_8-qUAAAAJ&hl=en">My Google Scholar</a></p>
`;

// 3. Inject them INSIDE the existing HTML skeleton
document.getElementById("main-header").innerHTML = myHeader;
document.getElementById("main-sidebar").innerHTML = mySidebar;
