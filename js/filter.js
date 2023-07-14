const filterCategory = document.querySelectorAll('.cards__sample');

document.querySelector('.services').addEventListener('click', e => {
  if (e.target.type !== 'button') return false;

  let filterCard = e.target.dataset['f'];

  filterCategory.forEach(e => {
    e.classList.remove('hide');
    if (!e.classList.contains(filterCard) && filterCard !== 'all') {
      e.classList.add('hide');
    }
  });
});
