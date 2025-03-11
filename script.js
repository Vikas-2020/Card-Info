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

  // Display info
  fname.innerText = userInfo.firstName;
  lname.innerText = userInfo.lastName;
  country.innerText = userInfo.country;
  phone.innerText = userInfo.phoneNumber;
  state.innerText = userInfo.state;
  city.innerText = userInfo.city;
  village.innerText = userInfo.village;

  // Add a Clear Data button to delete stored data
  const clearBtn = document.createElement("button");
  clearBtn.innerText = "Clear Data";
  clearBtn.classList.add("clear-btn");
  wrapper.appendChild(clearBtn);

  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("userInformation");
    location.reload(); // Refresh page to clear displayed data
  });

} else {
  // Create an "Enter Your Details" button
  const btn = document.createElement("button");
  btn.innerText = "Enter Your Details";
  btn.classList.add("enter-btn");
  wrapper.appendChild(btn);

  btn.addEventListener("click", storeUserInfo);
}

// Function to store information in local storage
function storeUserInfo() {
  const firstName = prompt("Enter your first name:");
  const lastName = prompt("Enter your last name:");
  const userCountry = prompt("Enter your country:");
  const phoneNumber = prompt("Enter your phone number:");
  const userState = prompt("Enter your state:");
  const userCity = prompt("Enter your city:");
  const userVillage = prompt("Enter your village:");

  if (!firstName || !lastName || !userCountry || !phoneNumber || !userState || !userCity || !userVillage) {
    alert("All fields are required!");
    return;
  }

  const userInfo = {
    firstName,
    lastName,
    country: userCountry,
    phoneNumber,
    state: userState,
    city: userCity,
    village: userVillage,
  };

  localStorage.setItem("userInformation", JSON.stringify(userInfo));
  location.reload(); // Refresh page to update UI
}
