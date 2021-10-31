

export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get Template() {
    return `
        <div class="row card bg-primary text-white quote-hover" >
          <div class="col text-center">
            <h6>${this.content}</h6>
          </div>
          <div class="col text-center reveal text-wrap d-none">
            <p id="author">-${this.author}</p>
          </div>
        </div>
        `
  }
}