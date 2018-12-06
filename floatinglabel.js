$(document).ready(function () {
    $.fn.floatingLabel = function () {
        this.each(function () {
            var input = $(this).find('input');
            var label = $(this).find('label');
            var div = $(this);
            initStyle(div, input, label)

            function initStyle(float, input, label) {
                float.css({
                    'margin-top': '50px',
                    'margin-left': '50px',
                    'position': 'relative'


                });
                label.css({
                    'left': '0px',
                    'position': 'absolute',
                    'bottom': '4px',
                    'font-family': 'Tahoma'
                });
                input.css({
                    'border': 'none',
                    'border-bottom': '1px solid teal',
                    'outline': '0px'
                })
            }
            input.focus(function () {
                applyStyleInFocus(input)
            });

            function applyStyleInFocus(input) {
                label.css({
                    'position': 'absolute',
                    'color': 'blueviolet',
                    'font-size': '12px',
                    'padding-top': '7px',
                    'padding-left': '0px'
                });
                label.animate({
                    bottom: '20px'
                }, 250, 'linear');
                input.css({

                    'border-bottom': '1px solid blueviolet',

                })
            }
            input.blur(function () {
                applyStyleInBlur()
            });

            function applyStyleInBlur() {
                label.css({
                    'position': 'absolute',
                    'color': 'inherit',
                    'font-size': 'inherit'
                });
                if (!input.val()) {
                    label.animate({
                        bottom: '4px'
                    }, 250, 'linear');
                    input.css({

                        'border-bottom': '1px solid teal',

                    })
                } else {
                    label.css({
                        'position': 'absolute',
                        'color': 'inherit',
                        'font-size': '12px'
                    });
                    input.css({

                        'border-bottom': '1px solid teal',

                    });
                    label.animate({
                        bottom: '20px'
                    }, 250, 'linear');
                }
            }
        });
    }
});