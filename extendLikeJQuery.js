/**
 * 此方法用于扩展 likeJQuery.js
 * 添加常用的方法
 * 需要先引入<script src="likeJQuery.js"></script>
 *
 *
 */


(function (win, doc, $) {
    function _detect(ua) {
        var os = this.os = {},
            android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        if (android) {
            os.android = true;
            os.version = android[2];
        }
    }

    _detect.call($, navigator.userAgent);

    /**
     * 只能是一个 HTMLElement不支持字符串
     * @param {Element} $child
     * @param {Boolean} flag  true:要复制节点
     * @returns {append}
     */
    function append($child, flag) {
        var clone;
        // 只能是元素对象
        if (!($child instanceof HTMLElement)) return this;

        this.forEach(function ($element) {
            if (flag) clone = $child.cloneNode(true);
            $element.appendChild(clone || $child);
        });

        return this;
    }

    /**
     * 移除当前元素
     * @returns {remove}
     */
    function remove() {
        this.forEach(function ($element) {
            $element.parentNode.removeChild($element);
        });

        return this;
    }


    /**
     * 找出当前元素的孩子节点
     * @param selector
     * @returns {HTMLElement}
     */
    function find(selector) {
        return $(selector, this);
    }


    $.fn.append = append;
    $.fn.remove = remove;
    $.fn.remove = find;


})(window, document, $);

















