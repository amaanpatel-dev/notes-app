document.addEventListener("DOMContentLoaded", () => {
    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".btn");
  
    // Function to show notes
    function showNotes() {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.forEach((noteContent) => {
        createNoteElement(noteContent);
      });
    }
  
    // Function to create and display a new note element
    function createNoteElement(content = "") {
      let noteContainer = document.createElement("div");
      noteContainer.className = "note-container relative w-full max-w-[500px] my-5";
  
      let inputBox = document.createElement("p");
      inputBox.className = "input-box w-full min-h-[150px] bg-white text-[#333] p-5 my-5 outline-none rounded-xl";
      inputBox.setAttribute("contenteditable", "true");
      inputBox.innerHTML = content; // Set the content (either empty or from localStorage)
  
      let img = document.createElement("img");
      img.src = "images/delete.png";
      img.className = "delete-icon w-6 cursor-pointer absolute top-4 right-4 opacity-80 hover:opacity-100";
  
      img.addEventListener("click", () => {
        noteContainer.remove(); // Removes the entire note container
        updateStorage(); // Update localStorage after deletion
      });
  
      noteContainer.appendChild(inputBox);
      noteContainer.appendChild(img);
      notesContainer.appendChild(noteContainer);
  
      // Track the original content to check for changes
      let originalContent = inputBox.innerHTML.trim();
  
      // Update localStorage whenever the user types or erases text
      inputBox.addEventListener("keyup", () => {
        if (inputBox.innerHTML.trim() === "" && originalContent === "") {
          noteContainer.remove(); // Remove empty note from DOM if untouched
        }
        updateStorage(); // Update localStorage with current notes
      });
    }
  
    // Function to update the local storage
    function updateStorage() {
      const notes = [];
      const noteElements = document.querySelectorAll(".input-box");
  
      noteElements.forEach((note) => {
        // Clean up content by removing unwanted <br> and trimming
        let cleanedContent = note.textContent.trim();  // Use textContent to avoid <br> tags and whitespace
  
        if (cleanedContent !== "") {
          notes.push(cleanedContent); // Only save non-empty notes
        }
      });
  
      // Store the notes in localStorage
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  
    // Event listener for creating a new note
    createBtn.addEventListener("click", () => {
      createNoteElement(); // Create a new empty note
    });
  
    // Show the notes when the page is loaded
    showNotes();
  });
  