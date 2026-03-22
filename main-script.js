const video1 = document.getElementById('toolvideo1');
const video2 = document.getElementById('toolvideo2');
const video3 = document.getElementById('toolvideo3');
const video4 = document.getElementById('toolvideo4');
const video5 = document.getElementById('toolvideo5');

const videolist = [video1,video2,video3,video4,video5];

videolist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
    })
    video.addEventListener('mouseout',function(){
        video.pause()
    })
})

// chatbot 
document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const sendBtn = document.getElementById("send-btn");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  const chatbotIcon = document.getElementById("chatbot-icon");
  const closeButton = document.getElementById("close-btn");

 
  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none"; 
  });

  closeButton.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex";
  });

  sendBtn.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.textContent = message;
      chatbotMessages.appendChild(messageElement);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  });

// signin
const signinButton = document.getElementById('signinButton');
const signinPage = document.getElementById('signinPage');
const closeIcon = document.getElementById('closeIcon');

signinButton.addEventListener("click", function(){
  signinPage.classList.remove("closeSignin");
  document.body.classList.add("no-scroll");
  signinPage.classList.add("openSignin")
})

closeIcon.addEventListener("click", function(){
  signinPage.classList.remove("openSignin");
  document.body.classList.remove("no-scroll");
  signinPage.classList.add("closeSignin")
})


// parallax 
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX / window.innerWidth - 0.5;
  mouseY = event.clientY / window.innerHeight - 0.5;
});

function animate() {
  // smooth delay (lerp)
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  document.querySelectorAll(".parallax").forEach((element) => {
    const speed = element.getAttribute("data-speed");
    element.style.transform = `translate(${currentX * speed * 20}px, ${currentY * speed * 20}px)`;
  });

  requestAnimationFrame(animate);
}

animate();