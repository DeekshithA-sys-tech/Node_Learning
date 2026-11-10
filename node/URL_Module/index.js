

const url = require('url')




// const local = new URL('http://deekshith:abcd1234@localhost:5000/users/data/me?moblie=dinga#age')

const myurl = new URL(`http://localhost:5000/?id=123`)

// console.log(local)
// console.log(local.password)
// console.log(local.host)
// console.log(local.hostname)
// console.log(local.href)
// console.log(local.pathname)
// console.log(local.searchParams)
// console.log(local.hash)


// local.pathname = '/hello'
// console.log(local.href)
// console.log(local.pathname)

// local.searchParams.set('moblie' , 'dingi')
// console.log(local.href)
// console.log(local.searchParams)

// console.log(local.searchParams.get('moblie'))


// local.searchParams.append('trainer','raja')
// console.log(local.searchParams)+
console.log(myurl.pathname.startsWith('?'))