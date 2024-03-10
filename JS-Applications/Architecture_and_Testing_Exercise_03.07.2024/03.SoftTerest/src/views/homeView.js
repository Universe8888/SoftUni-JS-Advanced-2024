function setupHome() {
    const homeSection = document.getElementById('home-view');
    if (!homeSection) return; // Safety check if the home section doesn't exist in the current view

    const updateHomeContent = () => {
        const welcomeMessage = session.isAuthenticated ? `Welcome back, ${session.user}!` : 'Welcome to Our Idea Platform!';
        const dynamicContentElement = homeSection.querySelector('.dynamic-content');
        if (dynamicContentElement) {
            dynamicContentElement.innerHTML = `<h2>${welcomeMessage}</h2>
                                               <p>Explore the site to see what's new or share your own ideas!</p>`;
        }
    };

    // Call this function to update the content whenever the home view is set up.
    updateHomeContent();
}

// Call setupHome when the script loads
setupHome();