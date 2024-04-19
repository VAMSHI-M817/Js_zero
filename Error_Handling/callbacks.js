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

function createPosts(post, callback) {
    setTimeout(() => {
        POSTS.push(post)
        callback();
        console.log(POSTS)
    }, 2000)
}
createPosts({title:'Post Three' , body:'This is Post Three'},getPosts)

