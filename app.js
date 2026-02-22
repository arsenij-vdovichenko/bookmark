const inputRef = document.querySelector("#bookmarkInput")
const btnRef = document.querySelector("#addBookmarkBtn")
const listRef = document.querySelector("#bookmarkList")

const bookArray = []

btnRef.addEventListener("click", () =>{
    const urlValue = inputRef.value.trim();
    if(urlValue) {
        bookArray.push(urlValue)
        inputRef.value = ""
        renderArray()
    }
    

})

function renderArray () {
    const item = bookArray.map((url, index)  => {
        return `<li>
    <a href="${url}">${url}</a>
    <button type="button" data-action="${index}">Видалити</button>
</li>`
    }).join("")

    listRef.innerHTML = item;
}
listRef.addEventListener("click", (event)=> {
    console.log(event.target.nodeName);
    const index = event.target.dataset.action
    const target = event.target.nodeName
    if(target !== "BUTTON"){
        return
    }
    // console.log(target, index);
    bookArray.splice(index, 1);
    renderArray()
    
})