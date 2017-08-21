// Form Submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

// Saving Bookmarks
function saveBookmark(e){
	var siteName = document.getElementById('siteName').value;
	var siteURL = document.getElementById('siteURL').value;

	var bookmark = {
		name: siteName,
		url: siteURL
	};

	if (localStorage.getItem('bookmarks') === null){
		var bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}else{
		var bookmarks = localStorage.getItem('bookmarks');
	}

	e.preventDefault();
}
