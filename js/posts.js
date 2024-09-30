function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPosts(data))
}

/*
* 01. Get The Container Elements Where You Want To Add The New Elements 
* 02. Create Child Element 
* 03. Set innerText or innerHTML
* 04. appendChild
*/
function displayPosts(posts) {
    const postsContainer = document.getElementById("posts-container");
    for (const post of posts) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post")
        console.log(post);
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}

loadPosts();