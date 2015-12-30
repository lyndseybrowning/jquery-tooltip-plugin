$.fn.tooltip = function( options ) {

    //default settings
    var defaults = {
        theme: 'grey'
    };

    //extend defaults for custom-options
    var options = $.extend(defaults, options);
    //variables, these are the default theme options (grey), but can be changed accordingly
    var vars = {
        border: true, //does the tooltip need a border? if false, the next four variables will be ignored.
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#D8D8D8',
        borderRadius: 5,
        bgColor: '#F2F2F2',
        padding: 10
    };

    if(options.theme) {
        switch (options.theme) {
            case 'red':
                vars.borderColor = '#F78181',
                vars.bgColor = '#F5A9A9'
                break;
            case 'orange':
                vars.borderColor = '#FE9A2E',
                vars.bgColor = '#FA8258'
                break;
            case 'yellow':
                vars.borderColor = '##FFFF00',
                vars.bgColor = '#F3F781'
                break;
            case 'green':
                vars.borderColor = '#74DF00',
                vars.bgColor = '#82FA58'
                break;
            case 'blue':
                vars.borderColor = '#0080FF',
                vars.bgColor = '#58D3F7'
                break;
            case 'purple':
                vars.borderColor = '#D358F7',
                vars.bgColor = '#DA81F5'
                break;
            default:
                break;
        }
    };

    this.each(function() {
        var $el = $(this); //tooltip element
        var $elDiv = $('<div class="ramisTooltip-wrap" />'); //tooltip wrap

        //set CSS of $elDiv incase it's not set by the user
        $elDiv.css({
            display: 'none',
            position:'absolute',
            'background-color': vars.bgColor,
            padding: vars.padding
        });

        if(vars.border) {
           $elDiv.css({
               'border-radius': vars.borderRadius + 'px',
               'border-width': vars.borderWidth + 'px',
               'border-color': vars.borderColor,
               'border-style': vars.borderStyle
            });
        }

        //theme switcher

        $elDiv.insertAfter( $el ); //insert tooltip text wrap
        $el.hover(function() {

            var $elTitle = $(this).attr("title");
            $(this)
            .removeAttr('title') //remove default title
            .css({ //set css
                cursor:'pointer'
            });

            //show tooltip        
            $elDiv.fadeIn('fast').html( $elTitle );
        }, function() { //hide tooltip
            $elDiv.hide();
        });
    });
}; ( jQuery );
