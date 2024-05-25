const form = document.querySelector('#searchform')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchterm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
    // console.log(res.data[0].show.image.medium)
    makeImages(res.data);
    if (res.data == 0) {
        document.body.append("No result")
    }
})
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
