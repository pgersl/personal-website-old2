const tooltip = document.querySelector('.tooltip');
const currentLink = window.location.pathname

function langTooltip() {
    tooltip.setAttribute('data-content', 'Copy link');
    if (currentLink.includes("/cs")) {
        tooltip.setAttribute('data-content', 'Kopírovat odkaz');
    };
    if (currentLink.includes("/fr")) {
        tooltip.setAttribute('data-content', 'Copier le lien');
    };
}

langTooltip()

document.addEventListener("DOMContentLoaded", function() {
    const copyLinkButton = document.querySelector(".copy-link-btn");
    copyLinkButton.addEventListener("click", function() {
        copyLinkToClipboard();
    });
});
function copyLinkToClipboard() {
    const url = window.location.href;
    const tempInput = document.createElement("input");
    const copyIcon = document.querySelector('.copy-link-btn-icon')

    tempInput.style.position = "absolute";
    tempInput.style.left = "-1000px";
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    copyIcon.classList.toggle('fa-link')
    copyIcon.classList.toggle('fa-check')
    tooltip.setAttribute('data-content', 'Link copied!');
    if (currentLink.includes("/cs")) {
        tooltip.setAttribute('data-content', 'Odkaz zkopírován!');
    };
    if (currentLink.includes("/fr")) {
        tooltip.setAttribute('data-content', 'Lien copié!');
    };

    setTimeout(function() {
        copyIcon.classList.toggle('fa-check')
        copyIcon.classList.toggle('fa-link')
        langTooltip()
    }, 1000);
}