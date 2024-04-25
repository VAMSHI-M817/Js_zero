const POSTS = [
    { title: 'Post One ', body: 'This is the post one' },
    { title: 'Post Two ', body: 'This is the post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        POSTS.forEach((post, index) => {
            output = output + `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            POSTS.push(post)
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Something Went Wrong")
            }
        }, 2000)
    });
}
createPost({ title: 'Post One ', body: 'This is the post one' })
    .then(getPosts)
    .catch(err => console.log(err))


const promise1 = Promise.resolve("Hello World");
const promise2 = 10
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Hello'))
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


Promise.all([promise1, promise2, promise3,promise4]).then(values => console.log(values)).catch(err => console.log(err))
