# 📋 **Contact Management Application** 📞
























## ***✨ Project Description :***
This project is a web-based contact management application that allows users to add, edit, delete, and search for contacts. It also provides a responsive design and uses local storage to persist data. The application is built using HTML, CSS, Bootstrap, and JavaScript.

## ***🔧 Features and Tools Used :***

### ****1. Add Contacts****

- **Functionality:** Users can add new contacts by providing a name and a valid phone number.

- **Tools Used :**
  - **HTML:** Input fields for name and phone number.
  - **JavaScript:** *submitContact()* function to validate and save the contact.
  - **CSS:** Styled form for a clean and user-friendly interface.

### ****2. Edit Contacts****

- **Functionality:** Users can edit existing contact details.

- **Tools Used :**
  - **JavaScript:** *showAddContactForm(contact)* function to populate the form with the contact's details for editing.
  - **Bootstrap:** Modal for editing contact details.

### ****3. Delete Contacts****

- **Functionality:** Users can delete a contact with a confirmation prompt.

- **Tools Used :**
  - **JavaScript:** *deleteContact(id)* function to show the confirmation modal and delete the contact.
  - **Bootstrap:** Modal for confirming deletion.

### ****4. Search Contacts****

- **Functionality:** Users can search for contacts by name using a search bar.

- **Tools Used :**
  - **JavaScript:** *renderContacts()* function to filter and display contacts based on the search term.
  - **HTML:** Search input field with an *oninput* event listener.

### ****5. View Contact Details****

- **Functionality:** Users can view detailed information about a contact in a modal.

- **Tools Used :**
  - **JavaScript:** *showContactDetails(contact)* function to display the contact's details in a modal.

### ****6. Validate Phone Numbers****

- **Functionality:** Ensures that phone numbers are valid (i.e., no two contacts can share the same number) and follow the required format (e.g., starting with 05, 06, or 07 and containing 10 digits).

- **Tools Used :**
  - **JavaScript:** *validatePhoneNumber(input)* function to validate the phone number and provide feedback.
  - **CSS:** Styled error messages for invalid phone numbers.

### ****7. Responsive Design****

- **Functionality:** The application is fully responsive and works seamlessly on different screen sizes.

- **Tools Used :**
  - **Bootstrap:**  Grid system and utility classes for responsiveness.
  - **CSS:** Custom styles for hover effects and transitions.

### ****8. Persistent Data****

- **Functionality:** Contacts are saved in the browser's local storage to persist across sessions.

- **Tools Used :**
  - **JavaScript:** *saveContacts()* function to save contacts to local storage and *localStorage* API to retrieve them.

### ****9. Delete Confirmation****

- **Functionality:** Displays a confirmation modal before deleting a contact.

- **Tools Used :**
  - **JavaScript:** *showDeleteConfirmation(contact)* function to show the confirmation modal.
  - **Bootstrap:** Modal for confirming deletion.

### ****10. JavaScript Data Display****

- **Functionality:** Displays the contact data in JSON format for debugging or exporting purposes.

- **Tools Used :**
  - **JavaScript:** *renderContacts()* function to dynamically display the contact list.

## ***📷 Screenshots :***

### Home Page
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/d4f9a1ba2ddbc448f715490c586c424e1b434930/images/home.png" alt="image alt"/>
  <br>
  <em>🏠 Home Page - The main page of the application displaying the contact list and a search bar.</em>
</p><br>

### Add Contact Form - Error
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/6cdd7099c65f424e858aa4f4b8c0310381f02128/images/add-error.png" alt="image alt" />
  <br>
  <em>⛔ Add Contact - The form shows an error message for invalid phone numbers.</em>
</p><br>

### Add Contact Form - Success
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/0207d103fe2c6614b81238f868670662d2dee75f/images/add-success.png" alt="image alt"/>
  <br>
  <em>✅ Add Contact - The form successfully validates the input and enables the 'Add' button.</em>
</p><br>

### Contact List with Search
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/d0a66898d4c7a1bd27bf6a3a36600921fa4e19e4/images/search.png" alt="image alt"/>
  <br>
  <em>🔍 Search Contacts - The contact list is filtered dynamically based on the search term entered in the search bar.</em>
</p><br>

### Contact Details
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/750b761bc8d99d7d0efe12d9498d0e8687912741/images/contact-details.png" alt="image alt"/>
  <br>
  <em>📄 Contact Details - A modal displays detailed information about the selected contact.</em>
</p><br>

### Edit Contact Form
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/3b646f6caeab75dfdf420894b20b35bba9a6377a/images/edit.png" alt="image alt"/>
  <br>
  <em>✏️ Edit Contact - The form is pre-filled with the selected contact's details for editing.</em>
</p><br>

### Delete Confirmation
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Contact-Management-Application/blob/4ef324b3e6e89845cab5ccfb7b119c6754ea9415/images/delete-confirmation.png" alt="image alt"/>
  <br>
  <em>❌ Confirm Deletion - A modal prompts the user to confirm the deletion of a contact.</em>
</p><br>


## **🛠️ Technologies Used :**

![HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white) 
![CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white) 
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-red?logo=Bootstrap&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-green?logo=javascript&logoColor=white)

## ***⚙️ Installation Steps :***

1. **📥 Clone the repository** to your machine or download the ZIP files:
   ```
   git clone https://github.com/<your-username>/<repo-name>.git
   ```
2. **📂 Navigate to the project folder** and open it in Visual Studio Code:
   ```
   cd <repo-name> && code .
   ```

3. **📦 Install the dependencies**:
   ```
   npm install
   ```

4. **🌐 Start a local server** to view the project:
   ```
   npm run dev
   ```
   The project will be accessible at: [Contact Management](https://bouglacemarouane.github.io/Contact-Management-Application/)

## ***🤝 Contribute :***

We welcome and appreciate all contributions! Whether you're fixing bugs, adding new features, or improving documentation, your input helps make this project better.

To contribute:

- Fork the repository and create your branch from **main**.

- Ensure your code follows the existing style and conventions.

- Submit a clear and descriptive pull request.

If you discover a bug or have a feature request, please open an issue with detailed information to help us understand and address it quickly.

## ***⭐ Support :***

If you find this project helpful, please consider giving it a ⭐ on GitHub — it really motivates me to keep improving and adding new features! Your support is truly appreciated! 🚀

## ***📬 Stay in Touch:***

- 📧 Email: bouglacemarouane@gmail.com  
- 🌐 GitHub: [Bouglace Marouane](https://github.com/BouglaceMarouane)
- 🌍 LinkedIn: [Marouane Bouglace Linkedin](https://www.linkedin.com/in/marouane-bouglace-68b17333b/)

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=60&section=footer"/>
</p>
