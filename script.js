// Function to load and inject a view based on the URL hash
function loadViewFromHash() {
    const hash = window.location.hash.substring(1); // Remove the '#' symbol

    switch (hash) {
        case 'home':
            loadAndInjectView('home');
            break;
        case 'about':
            loadAndInjectView('about');
            break;
        case 'services':
            loadAndInjectView('services');
            break;
        case 'contact':
            loadAndInjectView('contact');
            break;
        case 'blog':
            loadAndInjectView('blog');
            break;
        default:
            // Handle unknown routes or errors
            loadAndInjectView('error');
    }
}

// Function to load and inject a view
function loadAndInjectView(viewName) {
    // Use fetch to load the HTML file
    fetch(viewName + '.html')
        .then(response => response.text())
        .then(viewHtml => {
            document.getElementById('content').innerHTML = viewHtml;
        })
        .catch(error => {
            console.error('Error loading view:', error);
            document.getElementById('content').innerHTML = '<p>Error loading view</p>';
        });
}

// Event listener for changes in the URL hash
window.addEventListener('hashchange', loadViewFromHash);

// Load the initial view based on the URL hash when the page loads
window.addEventListener('load', loadViewFromHash);
