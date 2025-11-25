const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const dateObj = new Date();
ageInput.max = dateObj.getFullYear();
ageInput.min = 1970;

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const name = formData.get("name") ?? null;
    const age = Number(formData.get("age")) ?? null;
    const year = new Date().getFullYear();
    const res = year - age;

    if (!name || !age) {
        window.alert("Campos vacios, llene el formulario");
        return;
    }

    if (isNaN(age) || isNaN(res)) {
        window.alert("Edad invalida, ingrese otra vez");
        return;
    }

    window.alert(`Bienvenido ${name}!`);
    window.alert(`Tu edad es de ${res} años.`)
})