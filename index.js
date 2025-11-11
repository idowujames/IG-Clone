const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const template = document.getElementById("post-template")
const postListContainer = document.getElementById("post-list")

for (let i = 0; i < posts.length; i++){

    const postData = posts[i]

    // Making a copy of the template's content
    const postClone = template.content.cloneNode(true)

    // Filling in the blanks on the new copy
    const avatarImg = postClone.querySelector(".avatar")
    const postUserName = postClone.querySelector(".post-user-name")
    const postUserLocation = postClone.querySelector(".post-user-location")

    const postImg = postClone.querySelector(".post-image")

    const likeCount = postClone.querySelector(".likes-count")
    const commentUserName = postClone.querySelector(".comment-user-name")
    const commentText = postClone.querySelector(".comment-text")


    // Setting the content using our data
    avatarImg.src = postData.avatar
    avatarImg.alt = `Avatar of ${postData.name}`

    postUserName.textContent = postData.name
    postUserLocation.textContent = postData.location

    postImg.src = postData.post
    postImg.alt = `Post by ${postData.name}`

    likeCount.textContent = `${postData.likes.toLocaleString()} likes`
    commentUserName.textContent = postData.username
    commentText.textContent = postData.comment

    // Append posts to container
    postListContainer.appendChild(postClone)

}


