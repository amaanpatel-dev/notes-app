# Notes App

A simple **Notes App** built with HTML, CSS (using Tailwind), and JavaScript. The app allows users to create, edit, and delete notes, with all data being persistently stored in the browser's local storage. This ensures that notes remain available even after a page reload.

---

## Features

### 1. Create Notes
- Click on the "Create Note" button to add a new editable note.
- Each note is created dynamically and contains a contenteditable text area.

### 2. Edit Notes
- Notes are fully editable; users can click on the text area and type or modify content as needed.

### 3. Delete Notes
- Each note has a delete icon.
- Clicking on the delete icon removes the note from the DOM and updates local storage accordingly.

### 4. Persistent Storage
- Notes are stored in the browser's `localStorage`.
- On page reload, stored notes are automatically loaded back into the app.

### 5. Auto-Cleanup of Empty Notes
- If a user erases all content in a note, it is automatically removed from the app and `localStorage`.

---


## Future Updates

Here are some features planned for future releases:

1. **Dark Mode**: Add a toggle for switching between light and dark themes.
2. **Tagging System**: Allow users to add tags to notes for easier organization.
3. **Search Functionality**: Implement a search bar to quickly find notes by keywords.
4. **Export Notes**: Enable users to export notes as a text or PDF file.
5. **Sync Across Devices**: Integrate with a backend to sync notes across multiple devices.

---

## Contributing

Contributions are welcome! If you’d like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they work.
4. Submit a pull request with a clear description of your changes.
   
---

## License
This project is licensed under the [MIT License](LICENSE).

---
