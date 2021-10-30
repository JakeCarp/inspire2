

export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get Template() {
        return `
        <div class="row card" >
          <div class="col ">
            <h6>${this.content}</h6>
          </div>
          <div class="col text-center reveal d-flextext-wrap">
            <p id="author">${this.author}</p>
          </div>
        </div>
        `
    }
}