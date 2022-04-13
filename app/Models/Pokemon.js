

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.other['official-artwork'].front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types

    }

    get Template() {
        return `<div id="">
<img src="${this.img}" alt="${this.name}">
<h2>${this.name}</h2>
<h4>Weight: ${this.weight}lbs - Height: ${this.height} feet </h4>
<h4>${this.types[0].type.name}  ${this.types[1] ? "& "+ this.types[1].type.name: ""} </h4>
</div>`

    }
}



