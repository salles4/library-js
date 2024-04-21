let queryString = window.location.search;
let queryParams = new URLSearchParams(queryString.substring(1));
let BOOKID
if (queryParams.has("book")) {
    BOOKID = decodeURIComponent(queryParams.get("book"));
}

fetch("data/books.json")
.then(response => response.json())
.then(books => {
    books.forEach(row => {
        if (row.id == BOOKID){
            $("#book-title").html(row.title)
            $("#book-description").html(row.description)
        }
    });
})