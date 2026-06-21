
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
     alert('Button was clicked!');
});

///////////////////////
button.addEventListener('click',showAlert);

function showAlert() {
    alert('Button was clicked!');
}

const user = {
    name : "deneth",
    password : "#-fvkfsvojfv",
    address : "beruwala",
    age : 20
};

localStorage.setItem("USERS",JSON.stringify(user))

const userFormStorage = localStorage.getItem("USERS");

console.log(JSON.parse(userFormStorage));
