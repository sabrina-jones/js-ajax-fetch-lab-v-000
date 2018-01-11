function getIssues() {
  fetch('https://api.github.com/repos/jingruzhang/javascript-fetch-lab/issues').then(res => res.json().then(data =>
        data.map(data => showIssues(data))))
}

function showIssues(json) {
  $('#results').append(`<li>Title: <a href="${json.url}">${json.title} </a><span> | Body: ${json.body}</span></li>`)
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
