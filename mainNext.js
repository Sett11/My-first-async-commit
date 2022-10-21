async function checkingPosts() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        throw new Error(error)
    }

}
export {
    checkingPosts
}