const menuButton = document.querySelector(".menu-sidebar-icon");
const sidebar = document.querySelector(".sidebar");

function toggleSidebarState() {
    sidebar.classList.toggle("active");
}

menuButton.addEventListener("click", toggleSidebarState);