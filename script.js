<script src="script.js"></script>
document.querySelectionAll('a[href^=="#').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.gettAttribute('href')).scrollIntoView({

        });
    });
});