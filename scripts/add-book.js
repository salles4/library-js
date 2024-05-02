import supabase from "./supabase.js";

$(function () {
    $("#add").on("click", () => {
        addBook()
    })
})

async function addBook() {
    console.log("clicked")
    await getAuthorPublisherID()
        .then(data => {
            console.log(data.author)
            console.log(data.publisher);
        })
        .catch(error => console.error(error))
        console.log("get");
}

async function getAuthorPublisherID() {
    const { data: authorData, error: authorError } = await supabase
        .from('author')
        .select(("id"))
        .eq("name", $("#author").val())
        .maybeSingle()

    const { data: publisherData, error: publisherError } = await supabase
        .from('publisher')
        .select(("id"))
        .eq("name", $("#publisher").val())
        .maybeSingle()

    if (authorError) { throw new Error(authorError) }
    if (publisherError) { throw new Error(publisherError) }
    return { author: authorData.id, publisher: publisherData.id }
}
