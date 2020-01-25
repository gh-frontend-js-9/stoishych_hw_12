export class HTMLRender {
    constructor(options) {
        this.tag = options.tag;
        this.class = options.class;
        this.src = options.src;
        this.href = options.href;
        this.text = options.text;
        this.id = options.id;
        this.parent = options.parent;
        this.method = options.method;
        this.action = options.action;
        this.type = options.type;
        this.placeholder = options.placeholder;
        this.for = options.for;
        this.value = options.value;
    }

    createElement () {
        let element = document.createElement(this.tag);
        if(this.type) {
            element.setAttribute("type", this.type);
        }

        if (this.placeholder) {
            element.setAttribute("placeholder", this.placeholder);
        }

        if(this.for) {
            element.setAttribute("for", this.for);
        }

        if(this.value) {
            element.setAttribute("value", this.value);
        }

        if(this.method) {
            element.setAttribute("method", this.method);
        }

        if(this.action) {
            element.setAttribute("action", this.action);
        }

        if(this.class) {
            element.setAttribute("class", this.class);
        }

        if(this.src) {
            element.setAttribute("src", this.src);
        }

        if(this.href) {
            element.setAttribute("href", this.href);
        }

        if (this.text) {
            element.innerHTML = this.text;
        }

        if(this.id) {
            element.setAttribute("id", this.id);
        }
        return element;
    }
}