/* -------------------------
   PAGE NAVIGATION
------------------------- */

function goTo(page) {

    window.location.href = page;

}


/* -------------------------
   FLOATING HEARTS
------------------------- */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "♡"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 700);


/* -------------------------
   NO BUTTON
------------------------- */

const noButton = document.getElementById("noButton");

if (noButton) {

    noButton.addEventListener("mouseover", moveNoButton);

    noButton.addEventListener("touchstart", moveNoButton);

}


function moveNoButton() {

    const x =
        Math.random() * 250 - 125;

    const y =
        Math.random() * 150 - 75;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* -------------------------
   YES BUTTON
------------------------- */

function yesClicked() {

    const response =
        document.getElementById("response");

    response.innerHTML =
        "hehe i lovee you soo muchhh jaanuu💖😘";

    createHeart();

    setTimeout(() => {

        window.location.href = "story.html";

    }, 1500);

}


/* -------------------------
   STORY TYPEWRITER
------------------------- */

const storyText =
    document.getElementById("storyText");

if (storyText) {

    const text =
        `hiee jaanuu , let's relive voh di jab ham ne baat ki , tera msg aaya th raat ko 10 bje ki are you there maine 12 baje khola tha vaise with no energy no hope kuch nahii , sach batau toh mei janta bhi nahi th ki kya bolu mujhe laga kya timepass he hoga kuch lekin fir nxt the tune jis energy se baat ki i was impressed bohot he accha laga th ki koi itni acche se same intrest se vahi energy se baat kar raha , fir apni baate badhii calls msgs all time , baate share karna ek dusre ko batanaa ek bohot he pyara start tha jaanu apna mere liye bohot he pyaara start.`;


    let index = 0;


    function typeStory() {

        if (index < text.length) {

            storyText.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typeStory, 20);

        }

    }


    typeStory();

}


/* -------------------------
   FINAL QUESTION
------------------------- */

function finalYes() {

    const message =
        document.getElementById("finalMessage");

    message.innerHTML =
        "Then come with me... I have one last thing for you. 💌";

    for (let i = 0; i < 15; i++) {

        setTimeout(createHeart, i * 100);

    }

    setTimeout(() => {

        window.location.href =
            "letter.html";

    }, 2200);

}


/* -------------------------
   OPEN LETTER
------------------------- */

function openLetter() {

    const envelope =
        document.querySelector(".envelope");

    const letter =
        document.getElementById("letter");


    envelope.style.display = "none";

    letter.classList.remove("hidden");


    for (let i = 0; i < 20; i++) {

        setTimeout(createHeart, i * 100);

    }

}