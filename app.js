// const inputRef = document.querySelector("#bookmarkInput")
// const btnRef = document.querySelector("#addBookmarkBtn")
// const listRef = document.querySelector("#bookmarkList")

// const bookArray =JSON.parse(localStorage.getItem("key") ) || []
// console.log(bookArray);


// btnRef.addEventListener("click", () =>{
//     const urlValue = inputRef.value.trim();
//     if(urlValue) {
//         bookArray.push(urlValue)
//         inputRef.value = ""
//         savedStorage()
//     }
    

// })

// function renderArray () {
//     const item = bookArray.map((url, index)  => {
//         return `<li>
//     <a href="${url}">${url}</a>
//     <button type="button" data-action="${index}">Видалити</button>
// </li>`
//     }).join("")

//     listRef.innerHTML = item;
// }
// listRef.addEventListener("click", (event)=> {
//     console.log(event.target.nodeName);
//     const index = event.target.dataset.action
//     const target = event.target.nodeName
//     if(target !== "BUTTON"){
//         return
//     }
//     // console.log(target, index);
//     bookArray.splice(index, 1);
//     savedStorage()
    
// })

// function savedStorage(){
//     localStorage.setItem("key", JSON.stringify(bookArray))
//     renderArray()
// }

// renderArray()


 

// nameRef.addEventListener("input", (event)=>{
//     const inputName = event.target.value.trim()
//     console.log(inputName);
//     localStorage.setItem("name",inputRef);
    
// })

// passwordRef.addEventListener("input", (event)=>{
//     const inputpassword = event.target.value.trim()
   
//     localStorage.setItem("pasword",passwordRef);
    
// })

// localStorage.setItem("name",nameRef.value);
// localStorage.setItem("password", passwordRef.value);

// function checkStorage(){
//     const getName = localStorage.getItem("name")
//     const getPassword = localStorage.getItem("password") 
//     nameRef.value = getName
//     passwordRef.value = getPassword
// }

// checkStorage()


const inputRef = document.querySelector("#bookmarkInput");
const btnRef = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

let bookArray = JSON.parse(localStorage.getItem("bookmarks")) || [];

btnRef.addEventListener("click", () => {
    const urlValue = inputRef.value.trim();
    if (!urlValue) return;
    bookArray.push(urlValue);
    inputRef.value = "";
    saveBookmarks();
});
listRef.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") return;

    const index = Number(event.target.dataset.index);
    bookArray.splice(index, 1);

    saveBookmarks();
});
function renderBookmarks() {
    const markup = bookArray
        .map((url, index) => {
            return `
                <li>
                    <a href="${url}" target="_blank">${url}</a>
                    <button type="button" data-index="${index}">Видалити</button>
                </li>
            `;
        })
        .join("");

    listRef.innerHTML = markup;
}
function saveBookmarks() {
    localStorage.setItem("bookmarks", JSON.stringify(bookArray));
    renderBookmarks();
}
renderBookmarks();

const nameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");
const saveRef = document.querySelector("#saveBtn");

function loadFormData() {
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");

    if (savedName) nameRef.value = savedName;
    if (savedPassword) passwordRef.value = savedPassword;
}

loadFormData();

nameRef.addEventListener("input", (event) => {
    const value = event.target.value.trim();
    localStorage.setItem("name", value);
});

passwordRef.addEventListener("input", (event) => {
    const value = event.target.value.trim();
    localStorage.setItem("password", value);
});

saveRef.addEventListener("click", (event) => {
    event.preventDefault();

    nameRef.value = "";
    passwordRef.value = "";

    localStorage.removeItem("name");
    localStorage.removeItem("password");
});