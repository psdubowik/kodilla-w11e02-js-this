function Button(text) {
    this.text = text || "Hello"; //Hello is in this case a default value of the property
}

Button.prototype = {
    create: function(){
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.on("click",function(){
            alert(self.text);
        });
        this.$element.appendTo($("body"));
    }
};

var btn1 = new Button("Hello, it's working!");
var btn2 = new Button("Double check");
btn1.create();
btn2.create();
