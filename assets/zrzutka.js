if (sessionStorage.getItem('zrzutka already skipped') !== 'true') {
    setTimeout(function () {
        const z = document.createElement('dialog');
        z.classList.add('eUp');
        z.id = 'zrzutka-dialog';
        z.style.width = '100%';
        z.style.maxWidth = '400px';
        z.style.boxSizing = 'border-box';
        z.innerHTML = `<form method="dialog">
                <button class="e-delete"><i aria-hidden="true">&times;</i></button>
            </form>
            <div style="position: relative; width: 100%; max-width: 400px; height: 450px; overflow: hidden;"><iframe style="position: absolute; top:0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;" src="https://zrzutka.pl/8csrtk/widget/13" frameborder="0" scrolling="no"></iframe></div>`;
        document.body.appendChild(z);
        z.showModal();
        sessionStorage.setItem('zrzutka already skipped', 'true');
    }, 5_000);
}
