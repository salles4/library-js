import supabase from "./supabase.js";

let queryString = window.location.search;
let queryParams = new URLSearchParams(queryString.substring(1));
let BOOKID
if (queryParams.has("book")) {
    BOOKID = decodeURIComponent(queryParams.get("book"));
}

// SELECT title, description, a.name author, p.name publisher 
// FROM books 
// JOIN author a ON books.author_id = a.id 
// JOIN publisher p ON books.id = p.id
// WHERE books.id = ${BOOKID};

supabase.from("books").select("title, description, author(name), publisher(name)").eq("id", BOOKID)
.then(response => {
    console.log(response)
    let row = response.data[0]
    $("#book-title").html(row.title)
    $("#book-description").html(row.description)
    $("#book-author").html(row.author.name)
    $("#book-publisher").html(row.publisher.name)
    
    $("#loading").remove()
})
