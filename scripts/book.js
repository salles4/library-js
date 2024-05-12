import supabase from "./supabase.js";

let queryString = window.location.search;
let queryParams = new URLSearchParams(queryString.substring(1));
let BOOKID
if (queryParams.has("id")) {
    BOOKID = decodeURIComponent(queryParams.get("id"));
}

// SELECT title, description, a.name author, p.name publisher 
// FROM books 
// JOIN author a ON books.author_id = a.id 
// JOIN publisher p ON books.id = p.id
// WHERE books.id = ${BOOKID};

supabase.from("books").select("title, description, author(id, name), publisher(id, name)").eq("id", BOOKID)
.then(response => {
    console.log(response)
    if (response.error){
        throw response.error;
    }
    let row = response.data[0]
    
    $("#book-cover").append(`<img src="img/${BOOKID}.jpg" alt="book cover" height="300" width="300" style="object-fit:contain;">`)
    $("#book-title").html(row.title)
    $("#book-description").html(row.description)

    $("#book-author").html(row.author.name)
    $("#book-author").attr("href", `author.html?id=${row.author.id}`)

    $("#book-publisher").html(row.publisher.name)
    $("#book-publisher").attr("href", `publishers.html?id=${row.publisher.id}`)

    $("#loading").remove()
})
.catch(error => {
    $("#loading").html(`
        <div class="d-flex align-items-center justify-content-center" style="height:80vh;">
            <div class="text-center">
                <h2>Invalid Link</h2>
                <p>${error.code}: ${error.message}</p>
                <a href="index.html" class="fw-bold">Return Home</a> 
            </div>
        </div>
    `)
})