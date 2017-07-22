function load_html() {
    var url = new URL(window.location.href);
    var html = url.searchParams.get("html");
    document.documentElement.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function(event) {
    load_html();
});
