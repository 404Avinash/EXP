// Helpers
const storageKey = "my_notes_v1";

function loadNotes() {
  const raw = localStorage.getItem(storageKey);
  return raw ? JSON.parse(raw) : [];
}

function saveNotes(notes) {
  localStorage.setItem(storageKey, JSON.stringify(notes));
}

// Render
function renderNotes() {
  const notes = loadNotes();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach((n, idx) => {
    const el = document.createElement("article");
    el.className = "note";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = new Date(n.time).toLocaleString();

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = () => {
      deleteNote(idx);
    };

    const content = document.createElement("div");
    content.className = "content";
    content.textContent = n.text;

    el.appendChild(meta);
    el.appendChild(del);
    el.appendChild(content);
    list.appendChild(el);
  });
}

// Actions
function addNote(text) {
  if (!text || !text.trim()) return;
  const notes = loadNotes();
  notes.unshift({ text: text.trim(), time: Date.now() });
  saveNotes(notes);
  renderNotes();
}

function deleteNote(index) {
  const notes = loadNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  renderNotes();
}

function clearAll() {
  localStorage.removeItem(storageKey);
  renderNotes();
}

// Event wiring
document.getElementById("saveBtn").addEventListener("click", () => {
  const input = document.getElementById("noteInput");
  addNote(input.value);
  input.value = "";
});

document.getElementById("clearBtn").addEventListener("click", clearAll);

// initial render
renderNotes();
// Helpers
const storageKey = "my_notes_v1";

function loadNotes() {
  const raw = localStorage.getItem(storageKey);
  return raw ? JSON.parse(raw) : [];
}

function saveNotes(notes) {
  localStorage.setItem(storageKey, JSON.stringify(notes));
}

// Render
function renderNotes() {
  const notes = loadNotes();
  const list = document.getElementById("notesList");
  list.innerHTML = "";
  notes.forEach((n, idx) => {
    const el = document.createElement("article");
    el.className = "note";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = new Date(n.time).toLocaleString();

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = () => {
      deleteNote(idx);
    };

    const content = document.createElement("div");
    content.className = "content";
    content.textContent = n.text;

    el.appendChild(meta);
    el.appendChild(del);
    el.appendChild(content);
    list.appendChild(el);
  });
}

// Actions
function addNote(text) {
  if (!text || !text.trim()) return;
  const notes = loadNotes();
  notes.unshift({ text: text.trim(), time: Date.now() });
  saveNotes(notes);
  renderNotes();
}

function deleteNote(index) {
  const notes = loadNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  renderNotes();
}

function clearAll() {
  localStorage.removeItem(storageKey);
  renderNotes();
}

// Event wiring
document.getElementById("saveBtn").addEventListener("click", () => {
  const input = document.getElementById("noteInput");
  addNote(input.value);
  input.value = "";
});

document.getElementById("clearBtn").addEventListener("click", clearAll);

// initial render
renderNotes();
