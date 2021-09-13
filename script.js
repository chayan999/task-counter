

const counter = document.querySelectorAll('.count');

counter.forEach((counter) => {
    // console.log(countr)
    counter.innerHTML = 0

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof (targetCount));
        const startingCount = Number(counter.innerHTML);
        const inr = targetCount / 100;
        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + inr)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerHTML = targetCount
        }
    }
    updateCounter()
})