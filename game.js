const trump = document.getElementById("trump");
const wall = document.getElementById("wall");
const trajectoryInput = document.getElementById("trajectory");
const forceInput = document.getElementById("force");
const puntButton = document.getElementById("punt");

puntButton.addEventListener("click", () => {
    const trajectory = parseInt(trajectoryInput.value);
    const force = parseInt(forceInput.value);
    const radians = (Math.PI / 180) * trajectory;

    const xVelocity = force * Math.cos(radians);
    const yVelocity = force * Math.sin(radians);

    trump.style.transition = "all 2s ease-out";
    trump.style.transform = `translate(${xVelocity}px, ${-yVelocity}px)`;

    setTimeout(() => {
        trump.style.transition = "";
        trump.style.transform = "";
    }, 2000);
});
