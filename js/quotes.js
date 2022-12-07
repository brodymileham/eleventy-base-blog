var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '253a90f145mshb230b379e680b33p124a9ajsna09707af3c27',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	},
    fetchJoke: function () {
        fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=1', options)
	    .then(response => response.json())
	    .then(data => this.displayJoke(data))
	    .catch(err => console.error(err));
    },
    displayJoke: function(data) {
        const {joke} = data[0];
		document.getElementById("jokebtn").dataset.bsContent = joke;
		console.log(joke);
    },
};

options.fetchJoke();

let jokeButton = document.getElementById("jokebtn");
	jokeButton.addEventListener('click', function(){
	options.fetchJoke();
});

