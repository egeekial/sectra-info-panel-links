/* ---------- pop-up settings ---------- */
const POPUP_URL  = 'link-request.html';     // path to your form page
const POPUP_NAME = 'linkRequestWin';        // reuse if already open
const POPUP_FEAT = 'width=480,height=640,menubar=no,toolbar=no,' +
                    'location=no,status=no,resizable=no,scrollbars=yes';

/* Intercept the normal navigation so we can open a true pop-up */
document.getElementById('openFormLink').addEventListener('click', evt => {
    evt.preventDefault();                     // stay on parent page
    const win = window.open(POPUP_URL, POPUP_NAME, POPUP_FEAT);
    if (!win) {
    alert('Please allow pop-ups for this site to send a request.');
    }
});