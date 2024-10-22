const firstname = prompt("Zadejte své jméno bez diakritiky")
const lastname = prompt("Zadejte své příjmení bez diakritiky")
const domain = "@fit.cvut.cz"
const name = firstname.trim() + lastname.trim()
const emailZkratka = lastname.slice(0, 5) + firstname.slice(0, 3)
const email = emailZkratka.toLowerCase() + domain


document.body.innerHTML +=  `<h2>Výsledný email: ${email} </h2>`
