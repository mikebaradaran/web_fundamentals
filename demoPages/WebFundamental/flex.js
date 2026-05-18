function init() {
    const boxes = document.querySelectorAll('.demo');
    const out = document.getElementById('output');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            boxes.forEach(b => b.style.borderColor = 'transparent');
            box.style.borderColor = 'black';

            const s = getComputedStyle(box);

            const flexProps = [...s]
                .filter(p =>
                    p.startsWith("flex") ||
                    p.includes("justify") ||
                    p.includes("align") ||
                    p === "display" ||
                    p === "gap"
                )
                .map(p => `${p}: ${s.getPropertyValue(p)}`)
                .join("\n");

            out.textContent = flexProps;
        });
    });
}
