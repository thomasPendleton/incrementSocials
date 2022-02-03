const counters = document.querySelectorAll('.counter')

counters.forEach((num) => {
  num.innerText = '0'
  const updateCounter = () => {
    const target = num.getAttribute('data-target')
    const c = +num.innerText

    const increment = target / 1000

    if (c < target) {
      num.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      num.innerText = target
    }
  }
  updateCounter()
})
// add a refresh button to recalculate the totals. Maybe adding a random
// number of followers to each