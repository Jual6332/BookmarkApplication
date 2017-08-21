// Form Submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
	var siteName = document.getElementById('inputone');
	var siteURL = document.getElementById('inputtwo');

	var bookmark = {
		name = siteName,
		url = siteURL
	}

	console.log(bookmark);

	e.preventDefault();
}
