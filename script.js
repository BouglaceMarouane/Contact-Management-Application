let contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
let selectedContactId = null;
let contactModal = null;
let deleteConfirmModal = null;
let contactToDelete = null;
let editingContact = null; // NEW

document.addEventListener("DOMContentLoaded", () => {
    contactModal = new bootstrap.Modal(
        document.getElementById("contactDetailsModal")
    );
    deleteConfirmModal = new bootstrap.Modal(
        document.getElementById("deleteConfirmModal")
    );

    document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
        if (contactToDelete) {
            contacts = contacts.filter(
                (contact) => contact.id !== contactToDelete.id
            );
            saveContacts();
            renderContacts();
            deleteConfirmModal.hide();
            contactModal.hide();
            contactToDelete = null;
        }
    });
});

function validatePhoneNumber(input) {
    const phoneRegex = /^(05|06|07)[0-9]{8}$/;
    const isValid = phoneRegex.test(input.value);
    const errorElement = document.getElementById("phoneError");
    const addButton = document.getElementById("addButton");
    const nameInput = document.getElementById("newName");

    errorElement.classList.toggle("hidden", isValid || !input.value);
    input.classList.toggle("is-invalid", !isValid && input.value);
    input.classList.toggle("is-valid", isValid);

    // Enable add button only if both name and phone are valid
    addButton.disabled = !(isValid && nameInput.value.trim());
}

function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function showAddContactForm(contact = null) {
    document.getElementById("contactSection").classList.add("hidden");
    document.getElementById("addContactSection").classList.remove("hidden");

    const nameInput = document.getElementById("newName");
    const phoneInput = document.getElementById("newPhone");
    const addButton = document.getElementById("addButton");
    const errorElement = document.getElementById("phoneError");
    const formTitle = document.getElementById("formTitle");

    errorElement.classList.add("hidden");
    phoneInput.classList.remove("is-valid", "is-invalid");

    if (contact) {
        editingContact = contact;
        formTitle.textContent = "Edit Contact";
        nameInput.value = contact.name;
        phoneInput.value = contact.phone;
        addButton.textContent = "Update";
        addButton.disabled = false;
    } else {
        editingContact = null;
        formTitle.textContent = "New Contact";
        nameInput.value = "";
        phoneInput.value = "";
        addButton.textContent = "Add";
        addButton.disabled = true;
    }
}

function showContactList() {
    document.getElementById("contactSection").classList.remove("hidden");
    document.getElementById("addContactSection").classList.add("hidden");
}

function showContactDetails(contact) {
    selectedContactId = contact.id;
    document.getElementById("detailsName").textContent = contact.name;
    document.getElementById("detailsPhone").textContent = contact.phone;

    document.getElementById("deleteContactButton").onclick = () => {
        showDeleteConfirmation(contact);
    };

    document.getElementById("editContactButton").onclick = () => {
        showAddContactForm(contact); // Pass contact to edit
        contactModal.hide();
    };

    contactModal.show();
}

function showDeleteConfirmation(contact) {
    contactToDelete = contact;
    document.getElementById("deleteConfirmName").textContent = contact.name;
    deleteConfirmModal.show();
}

function closeContactDetails() {
    selectedContactId = null;
    contactModal.hide();
}

function submitContact() {
    const nameInput = document.getElementById("newName");
    const phoneInput = document.getElementById("newPhone");
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const phoneRegex = /^(05|06|07)[0-9]{8}$/;
    const errorElement = document.getElementById("phoneError");

    if (!name || !phoneRegex.test(phone)) return;

    const phoneExists = contacts.some(contact => {
        // If editing, exclude the current contact from the check
        if (editingContact) {
            return contact.phone === phone && contact.id !== editingContact.id;
        }
        return contact.phone === phone;
    });

    if (phoneExists) {
        errorElement.textContent = "This phone number already exists.";
        errorElement.classList.remove("hidden");
        phoneInput.classList.add("is-invalid");
        return;
    }

    if (editingContact) {
        editingContact.name = name;
        editingContact.phone = phone;
    } else {
        const newContact = {
            id: Date.now().toString(),
            name,
            phone,
        };
        contacts.push(newContact);
    }

    saveContacts();
    showContactList();
    renderContacts();
}

function deleteContact(id) {
    const contact = contacts.find((c) => c.id === id);
    if (contact) {
        showDeleteConfirmation(contact);
    }
}

function renderContacts() {
    const list = document.getElementById("contactList");
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    list.innerHTML = "";

    contacts
        .filter((contact) => contact.name.toLowerCase().includes(searchTerm))
        .forEach((contact) => {
            const item = document.createElement("div");
            item.className = "contact-item card shadow-sm";
            item.innerHTML = `
        <div class="card-body d-flex justify-content-between align-items-center py-2">
          <div class="d-flex align-items-center gap-3">
            <div class="contact-avatar rounded-circle d-flex align-items-center justify-content-center">
              <i class="bi bi-person-fill"></i>
            </div>
            <span class="fw-medium">${contact.name}</span>
          </div>
          <button class="btn btn-link text-danger p-2" onclick="event.stopPropagation(); deleteContact('${contact.id}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      `;
            item.onclick = () => showContactDetails(contact);
            list.appendChild(item);
        });
}

// Initial render
renderContacts();

// Add input event listener for name field
document.getElementById("newName").addEventListener("input", function () {
    const phoneInput = document.getElementById("newPhone");
    const addButton = document.getElementById("addButton");
    const phoneRegex = /^(05|06|07)[0-9]{8}$/;

    // Enable add button only if both name and phone are valid
    addButton.disabled = !(
        this.value.trim() && phoneRegex.test(phoneInput.value)
    );
});
