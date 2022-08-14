const loginForm=document.getElementById("loginForm")
const loginID = document.querySelector("#loginForm input")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "usernameLS"
const greeting = document.querySelector ("#welcome")

function handleLogin (event) {
    event.preventDefault();
    loginForm.classList.add (HIDDEN_CLASSNAME);
    const username = loginID.value
    localStorage.setItem ( "usernameLS" , username )
    greetings (username)
}

function greetings (username){
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage.clear()
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLogin);
  } else {
    greetings(savedUsername);
  }