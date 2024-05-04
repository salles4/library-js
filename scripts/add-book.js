// import supabase from "./supabase.js";

$(function () {
    $("#add").on("click", () => {
        addBook()
    })
    $("#book-cover").on("change", event => {
        if (!event.target.files[0]){
            $("#preview-row").addClass("d-none")
            return;
        }else{
            $("#preview-row").removeClass("d-none")
        }
        const img = URL.createObjectURL(event.target.files[0])
        console.log(event.target.files[0]);
        $("#cover-preview").remove()
        const imgTag = `<img src="${img}" alt="Preview" id="cover-preview" height="150">`
        $("#preview-div").prepend(imgTag)
    })
    applyCSS()
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

function applyCSS(){
    $(".form-group").addClass(`col-sm-12 col-lg-6`)
    $(".form-row").addClass("my-3 row")
    $(".form-label").addClass("col-sm-4 col-md-3 col-form-label")
    $(".form-input").addClass("col-sm-8 col-md-9")
}