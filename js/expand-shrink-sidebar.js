const menuButton = document.querySelector(".menu-sidebar-icon");
const sidebar = document.querySelector(".sidebar");

function toggleSidebarState() {
    sidebar.dataset.viewstate = (sidebar.dataset.viewstate == "shrink") ? "expand" : "shrink";
}

menuButton.addEventListener("click", toggleSidebarState);