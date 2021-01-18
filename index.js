const input = document.getElementById("input")
const ul = document.getElementById("states")


let states = ['Alabama','Alaska', 'American Samoa', 'Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


for (let i=0; i<states.length; i++) {
    var li = document.createElement("li")
    li.classList.add("state")
    li.textContent = states[i]
    ul.append(li)
}

const state = document.getElementsByClassName("state")


input.addEventListener("keyup", function(e) {
    let findState = e.target.value.toLowerCase()

    for (let i=0; i<state.length; i++) {
        let currentState = state[i].textContent.toLowerCase();

        if (currentState.includes(findState)) {
            state[i].style.display = "block"
        } else {
            state[i].style.display = "none"
        }
    }
})
