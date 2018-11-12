if (!Promise.prototype.es_finally) {
  Object.defineProperty(Promise.prototype, 'es_finally', {
    value: function(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      this.then(() => {
        console.log(` POLYFILL THEN`);
        if (predicate.call(o)) {
          return;
        }
      }).catch(() => {
        console.log(` POLYFILL CATCH`);
        if (predicate.call(o)) {
          return;
        }
      });

      // 7. Return undefined.
      return undefined;
    },
  });
}
