var Scribe = (function() {

	var Publisher = function() {
		this.subscribers = [];
	}

	Publisher.prototype = {
		
		publish: function(str, data) {

			var event = this._parse_event_string(str),
			    names = event.names,
			    target = event.target,
			    subs = (this.subscriptions[topic] || []).concat(this.subscriptions['*']),
			    sub, len, i = 0;	
	
			while (names[0]) subs.concat(this.subscriptions[names.shift()] || []);
			
			len = subs.length;
			for (; i < len; i++) {
				sub = subs[i];
				sub.call(sub.scope, data);
			}
		},

		subscribe: funcion(str, fn, scope) {
			
			var event = this._parse_event_string(str),
			    target = event.target,
			    names = event.names,
			    fns = target.subscriptions[name] || (target.subscriptions[name] = []);
      
			fn.scope = scope || this;
			fns.push(fn);
			return this;

		},

		unsubscribe: function(str, fn) {

		},

		_parse_event_string: function(str) {
			
			var path = str.split('.'),
			    names = path.pop().split(':'),
			    target = (path[0]) ? window : this;

			while (parts[0]) target = target[ parts.shift() ];
	
			return { names: names, target: target }
		}
	}

	return {
		
		decorate: function(src) {
			var pub = new Publisher(src);
			for (var key in pub) src[key] = pub[key];
			return src;
		}
	}
})();