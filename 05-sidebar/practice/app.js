const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function () {
  console.log(sidebar.classList.contains('show-sidebar'));
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
  console.log(sidebar.classList.contains('show-sidebar'));
  sidebar.classList.remove('show-sidebar');
});
