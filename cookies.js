// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// console.log(document.cookie);

// setCookie("email", "Sponge@gmail.com", 365);

// console.log(document.cookie);

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookiesBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstName.value, 365);
    setCookie("lastName", lastName.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstName.value = getCookie("firstName");
    lastName.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 *60 * 60 * 1000);
    date.toUTCString();
    let expires = "expire=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}