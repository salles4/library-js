import supabase from "./scripts/supabase.js"

// SELECT b.id, b.title, a.name 
// FROM books b 
// JOIN author a 
// ON b.author_id = a.id;

supabase.from("books").select("id, title, author(name)")

.then(response => {
    response.data.forEach(row => {
        $("#book-list").append(`
            <li>
                <a href="book.html?book=${row.id}">
                    ${row.title} (${row.author.name})
                </a>
            </li>
        `)
    })
})

