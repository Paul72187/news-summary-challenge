const webNews = document.querySelector('.news');
const apiNews = "https://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test";
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal-bg');
const fullImg = document.querySelector('.full-img');
const sumText = document.querySelector('.sum-text')
const sumText = document.querySelector('.sum-text');
const sumTitle = document.querySelector('.sum-title');
const link = document.querySelector('.modal-a')

async function getNews() {
    const response = await fetch(apiNews);
    const data = await response.json();
    return data;
}



(async() => {
        for (let i = 0; i < 10; i++) {

            @ @ - 27, 11 + 27, 10 @ @ async function getNews() {
                const title = document.createElement('h2');
                title.innerText = data.webTitle;
                webNews.appendChild(title);

                const url = document.createElement('a')
                url.href = data.webUrl;

                const url = document.createElement('a');
                url.href = data.webUrl;
                url.innerText = 'Original article';
                webNews.appendChild(url);

                const newUrl = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${data.webUrl}`

                @ @ - 40, 18 + 39, 12 @ @ async function getNews() {
                    const data = await response.json();
                    return data;
                }

                // (async () => {
                // 	data = await getSum();
                // 	text = data.sentences.join();
                // })()

                // adding a modal window with summary and img

                title.addEventListener('click', function() {
                        modalBg.classList.add('bg-active');
                        fullImg.src = img.src;

                        sumTitle.innerText = title.innerText;
                        link.href = url.href;

                        (async() => {
                            data = await getSum();
                            @ @ - 66, 9 + 59, 6 @ @ async function getNews() {
                                modalBg.classList.remove('bg-active');
                            }
                        });



                    }
                })()