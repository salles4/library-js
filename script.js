import supabase from "./scripts/supabase.js"

// SELECT b.id, b.title, a.name 
// FROM books b 
// JOIN author a 
// ON b.author_id = a.id;

supabase.from("books").select("id, title, author(name)")

.then(response => {
    response.data.forEach(row => {
        $("#book-list").append(`
            <div class="card col-lg-3 col-6" data-book-id="${row.id}">
                <img src="img/${row.id}.jpg">
                <div class="card-body">
                    <h5 class="card-title">${row.title}</h5> 
                    <a href="book.html?id=${row.id}" class="btn btn-primary btn-sm">Details</a>
                    <a class="btn btn-danger btn-sm"><i class="bi bi-heart"></i></a>
                </div>
            </div>
        `)
    })
    $(".card").on("click", event => {
        if (["A", "I"].includes(event.target.tagName)){
            return;
        }
        const id = event.target.closest("div[data-book-id]").getAttribute("data-book-id");
        window.location = `book.html?id=${id}`
    })
    $("#book-loading").remove()
})
.catch(error => {
    $("#book-loading").html(`
        <div class="d-flex align-items-center justify-content-center my-3">
            <div class="text-center">
                <h2>Error</h2>
                <p>${error.code}: ${error.message}</p>
                <a href="index.html" class="fw-bold">Reload</a> 
            </div>
        </div>
    `)
})
