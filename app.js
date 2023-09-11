// // // document.querySelector('.shopping-btn').addEventListener('Click' , validation)
// // // document.querySelector('.shopping-btn1').addEventListener('Click' , validation)
// // // document.querySelector('.shopping-btn2').addEventListener('Click' , validation)
// // // document.querySelector('.shopping-btn3').addEventListener('Click' , validation)
// // // function validation(e){
// // //   if(e.target.Click){
// // //     alert("you have to select product");
// // //   }
// // // }
// // // JOBS
// // // اضافه کردن نوت جدید به لیست نوت ها
// // // ذخیره کردن نوت جدید در حافظه
// // // حذف کردن نوت مورد نظر از لیست
// // // حذف کردن نوت مورد نظر از حافظه
// // // لود کردن نوت ها در زمان باز شدن صفحه

const note = document.querySelector('.shopping-btn')
const note1 = document.querySelector('.shopping-btn1')
const note2 = document.querySelector('.shopping-btn2')
const note3 = document.querySelector('.shopping-btn3')
const newNoteForm = document.querySelector('.dropdown')
const noteList = document.querySelector('.basket')
const removeBtns = document.querySelector('.removeBtn')

// events
// Submit New note event
newNoteForm.addEventListener('submit', addNewNote)

// remove Note event
noteList.addEventListener('click', removeNote)

// load all notes
document.addEventListener('DOMContentLoaded', loadNotesInPage)


// Templates
// note Template
function noteTemplate(noteText, noteID) {
    return `
        <li data-id='${noteID}'>
            <span>${noteText}</span>
            <span class='removeBtn'>❌</span>
        </li>
    `
}

// functions
// Load Notes on Page Load 
function loadNotesInPage() {
    // STEP 1 :  Load All Notes from LS
    let LSNotes = loadOfLS()

    // STEP 2 : Add Notes on Page
    LSNotes.forEach(
        function (eachNote) {
            addNoteInList(eachNote.noteText, eachNote.noteID)
        }
    )
}

// add note in noteList
function addNoteInList(noteText, noteID) {
    noteList
        .insertAdjacentHTML
        (
            'afterbegin',
            noteTemplate(noteText, noteID)
        )
}


// add new note and add in noteList
function addNewNote(event) {
    // Add new note to noteList 
    event.preventDefault()
    let noteText = note.value
    let noteID = Math.random().toFixed(5)

    // Add note in NoteList
    addNoteInList(noteText, noteID)

    // save new note in LocalStorage
    addNoteinLS(noteText, noteID)

    // clear form
    newNoteForm.reset()
}


// Remove note function
function removeNote(event) {
    // STEP1: remove note from note List
    if (event.target.classList.contains('removeBtn')) {
        event.target.parentElement.remove()


        // STEP2: remove note from Local Storage
        let noteRID = event.target.parentElement.getAttribute('data-id')

        removeNoteFromLS(noteRID)
    }
}

function removeNoteFromLS(noteRID) {
    // 1. Load LS NOTES
    let LSNotes = loadOfLS()

    // 2. Hazf az Araayehe Load SHode
    LSNotes.forEach(
        function (eachNote, eachIndex) {
            if (noteRID == eachNote.noteID) {
                LSNotes.splice(eachIndex, 1)
            }
        })

    // 3. Zakhire Kardane Araye Jadid dar Local Storage
    saveNotesInLS(LSNotes)
}


// save note in local storage
function addNoteinLS(note, noteID) {
    // 1. Load LS NOTES
    let LSNotes = loadOfLS()

    // 2. Add new Note 
    LSNotes.push({ noteText: note, noteID: noteID })

    // 3. Save NOTES in LS
    saveNotesInLS(LSNotes)
}


// load notes from localstorage
function loadOfLS() {
    // 1. Load LS NOTES
    let LSNotes = JSON.parse(localStorage.getItem('notes'))

    if (LSNotes == null) {
        localStorage.setItem('notes', '[]')
        LSNotes = JSON.parse(localStorage.getItem('notes'))
    }

    return LSNotes
}

// save all Notes in Local storage
function saveNotesInLS(notes) {
    // 3. Save NOTES in LS
    let LSNotes = notes

    LSNotes = JSON.stringify(LSNotes)
    localStorage.setItem('notes', LSNotes)
}


// document.querySelector('.shopping-btn').onclick = function(){
//     if(document.querySelector('.dropdown-content').value.length == 0){
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <li>
//                     ${document.querySelector('.dropdown-content').value}
//                 </li>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }