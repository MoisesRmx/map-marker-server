const phraseBox = document.getElementsByClassName('phrase')[0];
const changeButton = document.getElementsByClassName('changeButton')[0];

async function obtainPhrase(cb) {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  const json = await res.json();
  return cb(json);
}

obtainPhrase((data) => {
  phraseBox.innerText = `"${data.value}"`;
})

changeButton.onclick = () => {
  obtainPhrase((data) => {
    phraseBox.innerText = `"${data.value}"`;
  });
}
