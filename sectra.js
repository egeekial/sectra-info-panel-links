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

// downtime mode: show elements only between data-show-from and data-show-until (ISO 8601)
var warned_schedule = new WeakSet();

function apply_show_schedule() {
    var now = Date.now();
    document.querySelectorAll("[data-show-from], [data-show-until]").forEach(el => {
        var from = el.dataset.showFrom ? Date.parse(el.dataset.showFrom) : -Infinity;
        var until = el.dataset.showUntil ? Date.parse(el.dataset.showUntil) : Infinity;
        if (isNaN(from) || isNaN(until)) {
            // fail closed: never show an element whose window can't be read
            if (!warned_schedule.has(el)) {
                console.warn("Invalid data-show-from/data-show-until; hiding element:", el);
                warned_schedule.add(el);
            }
            el.hidden = true;
            return;
        }
        el.hidden = !(now >= from && now < until);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // the global `lucide` is already available here as long as this is loaded after Lucide in the HTML
  lucide.createIcons();

  apply_show_schedule();
  setInterval(apply_show_schedule, 60 * 1000);
});