var socialData = require('js/social-data/social-data.js').default;

function objTpl(strings, ...values) {
  const data = values[0];
  let tpl = strings[0];

  for(let [key, value] of Object.entries(data)){
    tpl += `
      <span>|</span>
      <a href="${value.url}" target="_blank">${key}</a>
    `;
  }

  tpl += strings[1];

  return tpl;
}

const markup = objTpl`<p>&copy; 2017 伍酱${socialData}</p>`;

document.getElementById('wgt-footer').innerHTML = markup;
