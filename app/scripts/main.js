// custom transformation: scale header's title
var title = document.querySelector('.title:not(.no-scaling)'),
    hideableTitle = document.querySelector('.hideable-title'),
    portfolioBar = document.querySelector('paper-toolbar.portfolio'),
    header = document.getElementById('header');

function colorHeader() {
    if (portfolioBar) {
        if (header.headerHeight + header.header.getBoundingClientRect().top <= header.condensedHeaderHeight + 10 || header.headerState === 2) {
            portfolioBar.style.backgroundColor = '#03a9f4';
        }
        else {
            portfolioBar.style.backgroundColor = 'transparent';
        }
    }
}

function fixFooter() {
    var footer = document.querySelector('contactpage-footer');
    if (typeof footer != 'undefined') {
        footer.style.marginTop = '0';
        var diff = parseInt(window.innerHeight - (footer.offsetTop + parseInt(getComputedStyle(footer).height)));
        if (diff > 0) {
            footer.style.marginTop = (diff - 8) + 'px';
        }
    }
}

addEventListener('paper-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);

    if (d.height - d.y > d.condensedHeight) {
        Polymer.Base.transform('scale(' + scale + ') translateZ(0)', title);
    }
    
    if (hideableTitle) {
        if (d.height - d.y <= d.condensedHeight) {
            hideableTitle.style.opacity = '1';
        }
        else {
            hideableTitle.style.opacity = '0';
        }
    }
    colorHeader();
});

addEventListener('content-scroll', function() {
    colorHeader();
});

window.addEventListener("resize", function(e){
    fixFooter();
});
fixFooter();


/*document.body.onfocus = function (event) {
    var target = event.target || event.toElement;

    if (target.nodeName.toLowerCase() == "input") {
       target.scrollIntoView();
    };
};*/