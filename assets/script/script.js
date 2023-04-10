let member = document.getElementById("name");
let avatar = document.getElementById("avatar");
let chat = document.querySelector(".chat");
let comment = document.getElementById("comment");
let submit = document.getElementById("submit");

submit.addEventListener("click", sendPost);

function checkSpam(str) {
    let newStr = str.replace(/viagra/gi, "***").replace(/виагра/gi, "***").replace(/XXX/gi, "***");
    return newStr;
}
function checkMember(str) {
    let fullName = str.value.toLowerCase().trim().split(/\s+/).map(val => val[0].toUpperCase() + val.substring(1)).join(' ');
    return fullName;
}

function sendPost(event) {
    event.preventDefault()
    let fullName = checkMember(member);
    let avatarLink = avatar.value;

    let commentContent = checkSpam(comment.value);
    chat.innerHTML =
        chat.innerHTML +
        `<div class="chat__item">
<div class="chat__member">
    <img
        src="${avatarLink}"
        alt="avatar"
    />
    <p class="name">${fullName}</p>
</div>
<p class="comment">${commentContent}</p>
</div>`;
}
