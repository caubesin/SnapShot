export const getUrlImg = (img) => {
    return `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;
}