document.getElementById("btn").addEventListener("click", function () {
    const flowersContainer = document.getElementById("flowers");
    const button = document.getElementById("btn");
    const heart = document.getElementById("heart");

    button.style.display = "none";

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
    const radius = Math.min(screenWidth, screenHeight) / 2.5;

    const flowers = ["🌹", "🌷", "🌻", "💐","💞"];
    let flowerCount = 50;
    let angleStep = (2 * Math.PI) / flowerCount;

    for (let i = 0; i < flowerCount; i++) {
        let angle = i * angleStep;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerHTML = flowers[i % flowers.length];
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;

        flowersContainer.appendChild(flower);

        setTimeout(() => {
            flower.style.opacity = 1;
        }, i * 200);
    }

    setTimeout(() => {
        heart.style.display = "block";
    }, flowerCount * 400);
});