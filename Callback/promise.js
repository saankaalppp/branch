var posts = [
    { title: 'post one', body: 'This is post one' },
    { title: 'post two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output

    }, 1000)
}
function create_post(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject('error:Something went Wrong :-(');
            }
        }, 2000);
    });
}
// create_post({ title:'post three',body:'This is Post three'})
// .then(getPosts)
// .catch(err=> console.log(err));

function delete_post() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop())
            }
            else {
                reject('Array is empty')
            }
        }, 1000)
    })
}
create_post({ title: 'post three', body: 'This is Post three' })
    .then(() => {
        getPosts();
        delete_post().then(() => {
            getPosts();
        delete_post().then(() => {
                getPosts();
                delete_post().then(() => {
                    getPosts()
                    delete_post().then(() => { })
                        .catch((err) => {
                            console.log('inside catch block', err)
                        })
                })
            })
        })
    })
//
create_post({ title: 'post four', body: 'This is Post four' })
delete_post().then(() => {
    getPosts()
})


const promise1=Promise.resolve("hello")
const promise2= 10
const promise3= new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye'))
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())


Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values))