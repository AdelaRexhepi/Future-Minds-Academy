const userMgnBTN = document.querySelector('#userMgnBTN');
const learningPlanBTN = document.querySelector('#learningPlanBTN');
const reportsBTN = document.querySelector('#reportsBTN');
const settingsBTN = document.querySelector('#settingsBTN');

const pageFeed = document.querySelector('#page-feed');

userMgnBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<h2>${feePages[0].title}</h2>
                          <p>${feePages[0].desc}</p>`;
});

learningPlanBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<h2>${feePages[1].title}</h2>
                          <p>${feePages[1].desc}</p>`;
});

reportsBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<h2>${feePages[2].title}</h2>
                          <p>${feePages[2].desc}</p>`;
});

settingsBTN.addEventListener('click', function () {
    pageFeed.innerHTML = `<h2>${feePages[3].title}</h2>
                          <p>${feePages[3].desc}</p>`;
});
