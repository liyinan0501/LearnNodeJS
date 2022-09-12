// Async Request
function originFetch(url) {
  return new Promise((resolve, reject) => {
    console.log('fetch', url)
    setTimeout(() => {
      resolve(url)
    }, 1000)
  })
}

function fetchTwo(url) {
  if (!fetchTwo.arr) {
    fetchTwo.arr = []
  }
  fetchTwo.arr.push(url)
  setTimeout(() => {
    let temp = []
    // temp = arr.length >= 2 ? arr.splice(0, 2) : arr.splice(0, 1)
    temp = fetchTwo.arr.splice(0, 2)
    if (!fetchTwo.chain) {
      fetchTwo.chain = Promise.all(temp.map((url) => originFetch(url)))
    } else {
      fetchTwo.chain = fetchTwo.chain.then(() =>
        Promise.all(temp.map((url) => originFetch(url)))
      )
    }
  }, 0)
}

fetchTwo(1)
fetchTwo(2)
fetchTwo(3)
fetchTwo(4)
fetchTwo(5)
fetchTwo(6)
fetchTwo(7)
fetchTwo(8)
fetchTwo(9)
