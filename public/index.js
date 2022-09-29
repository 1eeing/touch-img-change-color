(() => {
    const imgs = [
        './assets/img1.webp',
        './assets/img2.webp',
        './assets/img3.webp',
        './assets/img4.webp',
        './assets/img5.webp',
    ]

    imgs.forEach(item => {
        const img = document.createElement('img')
        img.className = 'img gray'
        img.src = item

        const handler = (e) => {
            img.className = 'img'
        }
        img.ontouchend = handler
        img.onclick = handler

        document.body.appendChild(img)
    })
})()