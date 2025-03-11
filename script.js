const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const country = document.getElementById("country");
const phone = document.getElementById("phone-number");
const state = document.getElementById("state");
const city = document.getElementById("city");
const village = document.getElementById("village");

const wrapper = document.getElementById("wrapper");

const storedInfo = localStorage.getItem("userInformation");

if (storedInfo) {
  const userInfo = JSON.parse(storedInfo);

  // Display stored user information
  fname.innerText = userInfo.firstName;
  lname.innerText = userInfo.lastName;
  country.innerText = userInfo.country;
  phone.innerText = userInfo.phoneNumber;
  state.innerText = userInfo.state;
  city.innerText = userInfo.city;
  village.innerText = userInfo.village;

  // Add Clear Data button
  const clearBtn = document.createElement("button");
  clearBtn.innerText = "Clear Data";
  clearBtn.classList.add("clear-btn");
  wrapper.appendChild(clearBtn);

  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("userInformation");
    location.reload(); // Refresh to remove displayed data
  });
} else {
  // Create "Enter Your Details" button
  const btn = document.createElement("button");
  btn.innerText = "Enter Your Details";
  btn.classList.add("enter-btn");
  wrapper.appendChild(btn);

  btn.addEventListener("click", () => {
    btn.remove(); // Remove the button when input fields are displayed
    showInputFields();
  });
}

// Function to create input fields dynamically
function showInputFields() {
  const fields = [
    { id: "first-name", label: "First Name" },
    { id: "last-name", label: "Last Name" },
    { id: "country", label: "Country" },
    { id: "phone-number", label: "Phone Number" },
    { id: "state", label: "State" },
    { id: "city", label: "City" },
    { id: "village", label: "Village" },
  ];

  fields.forEach(field => {
    const span = document.getElementById(field.id);
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Enter ${field.label}`;
    input.classList.add("input-field");
    input.setAttribute("id", `input-${field.id}`);
    span.replaceWith(input); // Replace span with input field
  });

  // Add Save button
  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save Details";
  saveBtn.classList.add("save-btn");
  wrapper.appendChild(saveBtn);

  saveBtn.addEventListener("click", saveUserInfo);
}

// Function to save user data
function saveUserInfo() {
  const userInfo = {
    firstName: document.getElementById("input-first-name").value.trim(),
    lastName: document.getElementById("input-last-name").value.trim(),
    country: document.getElementById("input-country").value.trim(),
    phoneNumber: document.getElementById("input-phone-number").value.trim(),
    state: document.getElementById("input-state").value.trim(),
    city: document.getElementById("input-city").value.trim(),
    village: document.getElementById("input-village").value.trim(),
  };

  // Check if all fields are filled
  if (Object.values(userInfo).some(value => value === "")) {
    alert("All fields are required!");
    return;
  }

  localStorage.setItem("userInformation", JSON.stringify(userInfo));
  location.reload(); // Refresh page to display saved data
}
