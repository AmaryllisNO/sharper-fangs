const bordersContainer = document.getElementById('borders');

const borderClasses = [
  'borders__horizontal--top',
  'borders__horizontal--bottom',
  'borders__vertical--left',
  'borders__vertical--right',
  'borders__corners--top-left',
  'borders__corners--top-right',
  'borders__corners--bottom-right',
  'borders__corners--bottom-left',
];

console.log('borders renderer');

borderClasses.forEach((className) => {
  const div = document.createElement('div');

  if (className.startsWith('borders__corners')) {
    // Ensure corners are nested inside the corners container
    let cornersContainer = document.querySelector('.borders__corners');
    if (!cornersContainer) {
      cornersContainer = document.createElement('div');
      cornersContainer.classList.add('borders__corners');
      bordersContainer.appendChild(cornersContainer);
    }
    div.className = className;
    cornersContainer.appendChild(div);
  } else {
    div.className = className;
    bordersContainer.appendChild(div);
  }
});
