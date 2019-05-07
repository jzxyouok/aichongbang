export const fetchPost = async (url, data) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }).then(response => response.json()).then(res => {
        console.log(res);
    })
}