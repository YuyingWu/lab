const body = document.body;

document.getElementById('add-block').addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = 'append box';
  body.append(div);
});