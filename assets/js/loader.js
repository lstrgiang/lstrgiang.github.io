(function () {
    var Loader;

    Loader = (function () {
        function Loader() {
            this.$loader = $('.loader');
            this.$inc = $('.loader-increment');
            this.$percent = $('.loader-percent');
            this.$loader_text = $('.loader-text');
            this.loaded = 0;
            this.increments = $.makeArray(this.$inc);
            this.loader_length = this.increments.length;
            this.ratio = Math.round(100 / this.loader_length);
            this.current_inc = null;
            this._load();
        }

        Loader.prototype._load = function () {
            var loading;
            return loading = setInterval((function (_this) {
                return function () {
                    if (_this.loaded < 99.9) {
                        _this.loaded += .1;
                        return _this._update_display();
                    } else {
                        _this.$loader_text.text('Connected');
                        return _this.$percent.text('100.0%');
                    }
                };
            })(this), 10);
        };

        Loader.prototype._update_display = function () {
            var format_percent, new_inc, percent, prepend;
            percent = Math.round(this.loaded * 10) / 10;
            prepend = '';
            if (this.loaded < 10) {
                prepend = "  ";
            } else if (this.loaded < 100) {
                prepend = " ";
            } else {
                prepend = "";
            }
            format_percent = "" + prepend + percent + "%";
            this.$percent.text(format_percent);
            new_inc = Math.round(this.loaded / this.ratio);
            if (new_inc !== this.current_inc) {
                this.current_inc = new_inc;
                return $(this.increments[this.current_inc]).text("#");
            }
        };

        return Loader;

    })();

    $(function () {
        return window.Loader = new Loader;
    });

}).call(this);
