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
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/2bdb82f8231f1e152ee651f76e4042b0ab8b230d/images/home.png" alt="image alt"/>
  <br>
  <em>🏠 Home Page - The main page of the application where you can manage trainees.</em>
</p><br>

### Form Display
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/91efc072ab5fe111a5038efc4ca3ba2c7eab2e29/images/add.png" alt="image alt" />
  <br>
  <em>➕ Add Trainee - The form is displayed to input trainee details (name and grades).</em>
</p><br>

### Trainee List
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/794a22a6960947ff2820e81a71a0f4451fa93730/images/TABLE.png" alt="image alt"/>
  <br>
  <em>📋 Trainee List - The table shows the list of trainees with their grades, averages, and validation status.</em>
</p><br>

### Delete Trainee
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/ad51d0ac97dc6bc8219d774e0cf521554f6f7605/images/DELETE.png" alt="image alt"/>
  <br>
  <em>❌ Delete Trainee - A confirmation prompt is shown to remove a trainee from the list.</em>
</p><br>

### Print Page
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/3ce63c11526748ce1b837da2717fd255c2c5e768/images/PRINT.png" alt="image alt"/>
  <br>
  <em>🖨️ Print Page - The print preview of the trainee list is ready for printing.</em>
</p><br>

### JavaScript Data
<p align="center">
  <img src="https://github.com/BouglaceMarouane/Trainee-Management/blob/3ce63c11526748ce1b837da2717fd255c2c5e768/images/JSON.png" alt="image alt"/>
  <br>
  <em>📄 JavaScript Data - The trainee data is displayed in JSON format for debugging or exporting.</em>
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
   The project will be accessible at: [Trainee Management](https://bouglacemarouane.github.io/Trainee-Management/)

## ***🤝 Contribute :***

Contributions to this project are welcome! If you have suggestions, improvements, or bug fixes, please submit a pull request. Make sure to follow coding conventions and maintain consistent styles.

If you encounter issues or want to request a new feature, please open an issue in the repository with as many details as possible.

## ***⭐ Support :***

If you find this project helpful, please consider giving it a ⭐ on GitHub — it really motivates me to keep improving and adding new features! Your support is truly appreciated! 🚀

## ***📬 Stay in Touch:***

- 📧 Email: bouglacemarouane@gmail.com  
- 🌐 GitHub: [Bouglace Marouane](https://github.com/BouglaceMarouane)
- 🌍 LinkedIn: [Marouane Bouglace Linkedin](https://www.linkedin.com/in/marouane-bouglace-68b17333b/)
