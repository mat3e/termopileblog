setTimeout(function () {
    const img = new Image();
    img.src = 'https://polskietermopile.pl/projekty/400/400.png';
}, 10_000);
if (sessionStorage.getItem('buy already skipped') !== 'true' && !location.pathname.includes('/projekty/400/')) {
    setTimeout(function () {
        const z = document.createElement('dialog');
        z.classList.add('eUp');
        z.id = 'buy-dialog';
        z.style.width = '100%';
        z.style.maxWidth = '400px';
        z.innerHTML = `<form method="dialog">
                <button class="e-delete"><i aria-hidden="true">&times;</i></button>
            </form>
            <div class="e-card white" style="max-width: 90%;margin: 0 auto">
                <h2 style="text-align: center;margin-bottom: 0;margin-top:.5em;color: black">KOMIKS</h2>
                <img src="https://polskietermopile.pl/projekty/400/400.png" alt="Logo 400"/>
                <div class="card-body" style="text-align: center">
                    <a class="e-btn success" href="https://polskietermopile.pl/projekty/400/kup/index.html">Kup teraz</a>
                    <a style="margin-left: 0;color:black !important;border-color: black"
                       class="e-btn outlined transparent" href="https://polskietermopile.pl/projekty/400/index.html">
                        Zobacz więcej
                    </a>
                </div>
            </div>`;
        document.body.appendChild(z);
        z.showModal();
        sessionStorage.setItem('buy already skipped', 'true');
    }, 5_000);
}
