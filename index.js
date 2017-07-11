var $form = document.getElementById('search-form')
var $input = document.getElementById('search-input')
var $submit = document.getElementById('submit-search')
var $results = document.getElementById('search-results')

var headers = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

function updateResults(response) {
  console.log(response)
  $results.innerHTML = response
}

function getSongs(input) {
  var formData = new FormData($form)
  axios.post(
    'https://www.karaokeboho.com/website/parts/songsearch.ajax.php',
    formData,
    headers
  ).then((response) => {
    console.log(response)
    updateResults(response.data)
  }).catch(error => {
    console.log(error)
  })
}

$submit.addEventListener('click', function(e) {
  e.preventDefault()
  var input = $input.value
  getSongs(input)
})
