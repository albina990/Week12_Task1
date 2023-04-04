let member = document.querySelector("input#name");
let avatar = document.querySelector("input#avatar");
let chat = document.querySelector(".chat");
let comment = document.querySelector("textarea#comment");
let submit = document.querySelector("input#submit");

submit.addEventListener("click", sendPost);

function checkSpam(str) {
    let str1 = str.replace(/viagra/gi, "***");
    let str2 = str1.replace(/виагра/gi, "***");
    let str3 = str2.replace(/XXX/gi, "***");
    return str3;
}
function checkMember(str) {
    let memberNameLow = str.value.toLowerCase().trim();
    let firstSpacePosition = memberNameLow.indexOf(" ");
    let lastSpacePosition = memberNameLow.lastIndexOf(" ");

    let memberNameSpace = memberNameLow.slice(firstSpacePosition + 1, lastSpacePosition);
    let memberName;
    let memberSirname;
    let memberLastname;
    let memberSirnameLow;

    if (
        firstSpacePosition !== -1 &&
        lastSpacePosition !== -1 &&
        lastSpacePosition !== firstSpacePosition &&
        !memberNameSpace.includes(' ')
    ) {
        memberName =
            memberNameLow[0].toUpperCase() +
            memberNameLow.slice(1, firstSpacePosition);
        memberSirnameLow = memberNameLow
            .slice(firstSpacePosition + 1, lastSpacePosition)
            .trim();
        memberSirname =
            memberSirnameLow[0].toUpperCase() +
            memberSirnameLow.slice(1, lastSpacePosition).trim();
        let memberLastnameLow = memberNameLow.slice(lastSpacePosition + 1);
        memberLastname =
            memberLastnameLow[0].toUpperCase() + memberLastnameLow.slice(1);
    } else if (
        lastSpacePosition == firstSpacePosition &&
        firstSpacePosition !== -1
    ) {
        memberName =
            memberNameLow[0].toUpperCase() +
            memberNameLow.slice(1, firstSpacePosition);
        memberSirnameLow = memberNameLow.slice(firstSpacePosition + 1);
        memberSirname =
            memberSirnameLow[0].toUpperCase() + memberSirnameLow.slice(1).trim();
        memberLastname = "";
    } else {
        memberName = memberNameLow[0].toUpperCase() + memberNameLow.slice(1);
        memberSirname = "";
        memberLastname = "";
    }
    return `${memberName} ${memberSirname} ${memberLastname}`;
}
function sendPost(event) {
    event.preventDefault()
    let vullName = checkMember(member);
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
    <p class="name">${vullName}</p>
</div>
<p class="comment">${commentContent}</p>
</div>`;
}
