function loadPage(pageUrl) {
  fetch(pageUrl)
    .then(r => r.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(e => console.error('Ошибка загрузки:', e));
}

function loadPageAndScroll(pageUrl, elementId) {
  fetch(pageUrl)
    .then(r => r.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    })
    .catch(e => console.error('Ошибка загрузки:', e));
}
