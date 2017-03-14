var socialData = require('social-data/social-data.js').default;

function objTpl(strings, ...values) {
  const data = values[0];
  let tpl = strings[0];

  for(let k of Object.keys(data)){
      tpl += `
        <span>|</span>
        <a href="${data[k].url}" target="_blank">${k}</a>
      `;
  }

  tpl += strings[1];

  return tpl;
}

const markup = objTpl`<p>&copy; 2017 伍酱${socialData}</p>`;

document.getElementById('wgt-footer').innerHTML = markup;
