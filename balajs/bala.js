$ = (function (document, s_addEventListener, s_querySelectorAll) {
    function $(s, context, bala) {

        // 创建一个对象拥有数组的所有方法
        // Array.isArray(bala)
        // false 说明他不是数组，而是一个对象，这个对象拥有数组的所有方法

        // Array.isArray([])
        // true
        bala = Object.create($.fn);

        // if s is truly then push the following  如果S是真的，那么推下面
        if (s) {
            if (s[s_addEventListener]) {
                // if arg is node or window
                [s]
            } else {
                // else if arg is a string
                if ("" + s === s) {
                    // if the string contains "<" (if HTML code is passed)
                    // then parse it and return node.children
                    // use 'addEventListener' (HTMLUnknownElement) if content is not presented(如果内容不呈现)
                    if(/</.test(s)){
                        ((context = document.createElement(context || s_addEventListener)).innerHTML = s
                            , context.children)
                    }else{
                        if(context){
                            ((context = $(context)[0])
                                ? context[s_querySelectorAll](s)
                                : bala)
                        }else{
                            document[s_querySelectorAll](s)
                        }
                    }
                } else {
                    if (typeof s == 'function') {
                        document.readyState[7]
                            ? s()
                            : document[s_addEventListener]('DOMContentLoaded', s)
                    } else {
                        s
                    }
                }
            }


            bala.push.apply(bala);
        }

        s && bala.push.apply(bala, s[s_addEventListener] // if arg is node or window,
            ? [s] // then pass [s]
            : "" + s === s // else if arg is a string
                ? /</.test(s) // if the string contains "<" (if HTML code is passed)
                    // then parse it and return node.children
                    // use 'addEventListener' (HTMLUnknownElement) if content is not presented
                    ? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
                        , context.children)
                    : context // else if context is truly
                        ? ((context = $(context)[0]) // if context element is found
                            ? context[s_querySelectorAll](s) // then select element from context
                            : bala) // else pass [] (context isn't found)
                        : document[s_querySelectorAll](s) // else select elements globally
                : typeof s == 'function' // else if function is passed
                    // if DOM is ready
                    // readyState[7] means readyState value is "interactive" or "complete" (not "loading")
                    ? document.readyState[7]
                        ? s() // then run given function
                        : document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
                    : s); // else guessing that s variable is array-like Object

        return bala;


    }

    $.fn = [];

    $.one = function (s, context) {
        return $(s, context)[0] || null;
    };

    return $;
})(document, 'addEventListener', 'querySelectorAll');
