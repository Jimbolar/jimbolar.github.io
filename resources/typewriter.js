// typing

function Typewriter(element, strings) {
    var CHAR = 0, WAIT = 1, DEL = 2;
    this.element = element;
    this.strings = strings;
    this.state = CHAR;
    this.char_index = 0;
    this.string_index = 0;
    this.char_delay = 200;
    this.string_delay = 3000;

    this.tick = function() {
        var delay;
        switch (this.state) {
            case CHAR:
                if (this.char_index == 0) {
                    this.element.innerHTML = "";
                }
                this.element.innerHTML += this.strings[this.string_index].charAt(this.char_index);
                this.char_index++;
                if (this.char_index == this.strings[this.string_index].length) {
                    this.char_index = 0;
                    this.string_index += 1;
                    if (this.string_index == this.strings.length) {
                        this.string_index = 0;
                    }
                    this.state = WAIT;
                }
                delay = this.char_delay;
                break;
            case WAIT:
                this.state = DEL;
                delay = this.string_delay;
                break;
            case DEL:
                this.element.innerHTML = this.element.innerHTML.substring(0, this.element.innerHTML.length - 1);
                if (this.element.innerHTML.length == 0) {
                    this.state = CHAR;
                    delay = 500;
                } else {
                    delay = 50;
                }
                break;
        }
        setTimeout(this.tick.bind(this), delay);
    }

    this.tick();

}
