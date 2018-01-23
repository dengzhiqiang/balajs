$ = (function (document, s_addEventListener, s_querySelectorAll) {
    function $(s, context, bala) {

        // 创建一个对象拥有数组的所有方法
        // Array.isArray(bala)
        // false 说明他不是数组，而是一个对象，这个对象拥有数组的所有方法

        // Array.isArray([])
        // true
        bala = Object.create($.fn); // 新创建对象的原型对象。bala的原型对象是数组
        // console.log(bala instanceof Array); // true bala的原型对象是数组，而原型的构造函数是一个数组
        // console.log(Array.isArray(bala));  // false

        // if s is truly then push the following  如果S是真的，那么推下面
        var arg;
        if (s) {
            if (s[s_addEventListener]) {
                // if arg is node or window
                // $(document.body)
                // 如果传入的是单个的节点对象，或者window对象
                arg = [s];
            } else {
                // else if arg is a string
                if ("" + s === s) {
                    // if the string contains "<" (if HTML code is passed)
                    // then parse it and return node.children
                    // use 'addEventListener' (HTMLUnknownElement) if content is not presented(如果内容不呈现)
                    if (/</.test(s)) {
                        // html解析模块
                        // context.children 是s的元素内容
                        // var div = $('<div><span class="yeah"></span></div>');
                        // div 就是创建的节点
                        arg = ((context = document.createElement(context || s_addEventListener)).innerHTML = s
                            , context.children)
                    } else {
                        if (context) {
                            arg = ((context = $(context)[0])
                                ? context[s_querySelectorAll](s)
                                : bala)
                        } else {
                            // 元素获取模块
                            // $('.button') 类名的时候走这一步
                            // $(".box button")
                            arg = document[s_querySelectorAll](s)
                        }
                    }
                } else {
                    if (typeof s == 'function') {
                        arg = document.readyState[7]
                            ? s()
                            : document[s_addEventListener]('DOMContentLoaded', s)
                    } else {
                        // $(document.querySelectorAll('.button'));如果传入的是直接的节点对象的话
                        // $(document.querySelector('.box').children);
                        // $([document.querySelector('.btn1'), document.querySelector('.btn2')]);
                        // $(jQuery('.button'))
                        // 直接传入数组
                        arg = s;
                    }
                }
            }


            bala.push.apply(bala, arg);
        }

        // console.log(bala);
        // console.log(typeof bala); // object
        // console.log(bala instanceof Array);// true
        return bala;


    }

    $.fn = [];

    $.one = function (s, context) {
        return $(s, context)[0] || null;
    };

    return $;
})(document, 'addEventListener', 'querySelectorAll');
