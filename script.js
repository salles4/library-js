const supabaseUrl = "https://gozyrsxpmeapfcaofwmr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvenlyc3hwbWVhcGZjYW9md21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNzI4NjcsImV4cCI6MjAxNDc0ODg2N30._T9n9L6aHet903zVYMHWOSYbnJGDfrlZloMDohJNli8"

// const _supabase = supabase.createClient(supabaseUrl, supabaseKey)

// _supabase.from('customers').select("fname, lname, contact, transactions(*)")
//     .then(response => {
        
//         response.data.forEach(row => {
//             $("#list").append(`<li>${row.fname} ${row.lname} - ${row.contact}</li>`)
//         });
//     }
// )

let booktitles = [{title:"Book 1",id:12}, {title:"Book 2",id:45}, {title:"Book 3", id:13}, {title:"Book 4",id:51}]

$(function(){
    let toAppend = ""
    fetch("books.json")
    .then(response => response.json())
    .then(books => {
        console.log(books)
        books.forEach(row => {
            console.log(row)
            toAppend += `
            <li>
                <a href="book.html?book=${row.id}">
                    ${row.title}
                </a>
            </li>
            `
        });
        $("#book-list").append(toAppend)
    })
})