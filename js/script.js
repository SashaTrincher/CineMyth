const pagesList = ['oshi no ko', 'breaking bad', 'transcendence'];
const searchSubmitTrigger = document.getElementById('submit-search');

searchSubmitTrigger.addEventListener('click', () => {
    const searchBar = document.getElementById('search-bar').value;
    const searchTerm = searchBar.toLowerCase();

    if (pagesList.includes(searchTerm)) {
        console.log('found');

        switch (searchBar) {
            case 'oshi no ko': 

                setTimeout(() => {
                    window.location.href = '../html/oshi-no-ko.html';
                }, 1000);

                break;
            case 'breaking bad':

                setTimeout(() => {
                    window.location.href = '../html/breaking-bad';
                }, 1000);

                break;
            case 'transcendence':

                setTimeout(() => {
                    window.location.href = '../html/transcendence.html';
                }, 1000);

                break;
            default:
                break;
        }
    } else {
        alert('Could not find your request, please try again')
        console.log('error');
    }
});
