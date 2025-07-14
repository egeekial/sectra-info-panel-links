// toggle arrows
function collapse_expand(element) {
    var icon = element.previousElementSibling;
    if (icon && icon.classList.contains('toggle')) {
        if (icon.classList.contains("bi-chevron-right")) {
            icon.classList.remove("bi-chevron-right");
            icon.classList.add("bi-chevron-down");
        } else {
            icon.classList.remove("bi-chevron-down");
            icon.classList.add("bi-chevron-right");
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
  // the global `lucide` is already available here as long as this is loaded after Lucide in the HTML
  lucide.createIcons();
});