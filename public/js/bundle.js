(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddCharacterActions = function () {
  function AddCharacterActions() {
    _classCallCheck(this, AddCharacterActions);

    this.generateActions('addCharacterSuccess', 'addCharacterFail', 'updateName', 'updateGender', 'invalidName', 'invalidGender');
  }

  _createClass(AddCharacterActions, [{
    key: 'addCharacter',
    value: function addCharacter(name, gender) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/characters',
        data: { name: name, gender: gender }
      }).done(function (data) {
        _this.actions.addCharacterSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addCharacterFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddCharacterActions;
}();

exports.default = _alt2.default.createActions(AddCharacterActions);

},{"../alt":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterActions = function () {
  function CharacterActions() {
    _classCallCheck(this, CharacterActions);

    this.generateActions('reportSuccess', 'reportFail', 'getCharacterSuccess', 'getCharacterFail');
  }

  _createClass(CharacterActions, [{
    key: 'getCharacter',
    value: function getCharacter(characterId) {
      var _this = this;

      $.ajax({ url: '/api/characters/' + characterId }).done(function (data) {
        _this.actions.getCharacterSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getCharacterFail(jqXhr);
      });
    }
  }, {
    key: 'report',
    value: function report(characterId) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/report',
        data: { characterId: characterId }
      }).done(function () {
        _this2.actions.reportSuccess();
      }).fail(function (jqXhr) {
        _this2.actions.reportFail(jqXhr);
      });
    }
  }]);

  return CharacterActions;
}();

exports.default = _alt2.default.createActions(CharacterActions);

},{"../alt":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
	function FooterActions() {
		_classCallCheck(this, FooterActions);

		this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
	}

	_createClass(FooterActions, [{
		key: 'getTopCharacters',
		value: function getTopCharacters() {
			var _this = this;

			$.ajax({ url: '/api/characters/top' }).done(function (data) {
				_this.actions.getTopCharactersSuccess(data);
			}).fail(function (jqXhr) {
				_this.actions.getTopCharactersFail(jqXhr);
			});
		}
	}]);

	return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function () {
	function HomeActions() {
		_classCallCheck(this, HomeActions);

		this.generateActions('getTwoCharactersSuccess', 'getTwoCharactersFail', 'voteFail');
	}

	_createClass(HomeActions, [{
		key: 'getTwoCharacters',
		value: function getTwoCharacters() {
			var _this = this;

			$.ajax({ url: '/api/characters' }).done(function (data) {
				_this.actions.getTwoCharactersSuccess(data);
			}).fail(function (jqXhr) {
				_this.actions.getTwoCharactersFail(jqXhr.responseJSON.message);
			});
		}
	}, {
		key: 'vote',
		value: function vote(winner, loser) {
			var _this2 = this;

			$.ajax({
				type: 'PUT',
				url: '/api/characters',
				data: { winner: winner, loser: loser }
			}).done(function () {
				_this2.actions.getTwoCharacters();
			}).fail(function (jqXhr) {
				_this2.actions.voteFail(jqXhr.responseJSON.message);
			});
		}
	}]);

	return HomeActions;
}();

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
  }

  _createClass(NavbarActions, [{
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api/characters/search',
        data: { name: payload.searchQuery }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }, {
    key: 'getCharacterCount',
    value: function getCharacterCount() {
      var _this2 = this;

      $.ajax({ url: '/api/characters/count' }).done(function (data) {
        _this2.actions.getCharacterCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getCharacterCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":6,"underscore":"underscore"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddCharacterStore = require('../stores/AddCharacterStore');

var _AddCharacterStore2 = _interopRequireDefault(_AddCharacterStore);

var _AddCharacterActions = require('../actions/AddCharacterActions');

var _AddCharacterActions2 = _interopRequireDefault(_AddCharacterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCharacter = function (_React$Component) {
  _inherits(AddCharacter, _React$Component);

  function AddCharacter(props) {
    _classCallCheck(this, AddCharacter);

    var _this = _possibleConstructorReturn(this, (AddCharacter.__proto__ || Object.getPrototypeOf(AddCharacter)).call(this, props));

    _this.state = _AddCharacterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddCharacter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddCharacterStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddCharacterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var gender = this.state.gender;

      if (!name) {
        _AddCharacterActions2.default.invalidName();
        this.refs.nameTextField.getDOMNode().focus();
      }

      if (!gender) {
        _AddCharacterActions2.default.invalidGender();
      }

      if (name && gender) {
        _AddCharacterActions2.default.addCharacter(name, gender);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row flipInX animated' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add Character'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.nameValidationState },
                    _react2.default.createElement(
                      'label',
                      { className: 'control-label' },
                      'Character Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                      onChange: _AddCharacterActions2.default.updateName, autoFocus: true }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group ' + this.state.genderValidationState },
                    _react2.default.createElement(
                      'div',
                      { className: 'radio radio-inline' },
                      _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'female', value: 'Female', checked: this.state.gender === 'Female',
                        onChange: _AddCharacterActions2.default.updateGender }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'female' },
                        'Female'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'radio radio-inline' },
                      _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'male', value: 'Male', checked: this.state.gender === 'Male',
                        onChange: _AddCharacterActions2.default.updateGender }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'male' },
                        'Male'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddCharacter;
}(_react2.default.Component);

exports.default = AddCharacter;

},{"../actions/AddCharacterActions":1,"../stores/AddCharacterStore":15,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":10,"./Navbar":12,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CharacterStore = require('../stores/CharacterStore');

var _CharacterStore2 = _interopRequireDefault(_CharacterStore);

var _CharacterActions = require('../actions/CharacterActions');

var _CharacterActions2 = _interopRequireDefault(_CharacterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Character = function (_React$Component) {
  _inherits(Character, _React$Component);

  function Character(props) {
    _classCallCheck(this, Character);

    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, props));

    _this.state = _CharacterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Character, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _CharacterStore2.default.listen(this.onChange);
      _CharacterActions2.default.getCharacter(this.props.params.id);

      $('.magnific-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-zoom-in',
        closeOnContentClick: true,
        midClick: true,
        zoom: {
          enabled: true,
          duration: 300
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _CharacterStore2.default.unlisten(this.onChange);
      $(document.body).removeClass();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Fetch new charachter data when URL path changes
      if (prevProps.params.id !== this.props.params.id) {
        _CharacterActions2.default.getCharacter(this.props.params.id);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'profile-img' },
          _react2.default.createElement(
            'a',
            { className: 'magnific-popup', href: 'https://image.eveonline.com/Character/' + this.state.characterId + '_1024.jpg' },
            _react2.default.createElement('img', { src: 'https://image.eveonline.com/Character/' + this.state.characterId + '_256.jpg' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'profile-info clearfix' },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.state.name
            )
          ),
          _react2.default.createElement(
            'h4',
            { className: 'lead' },
            'Race: ',
            _react2.default.createElement(
              'strong',
              null,
              this.state.race
            )
          ),
          _react2.default.createElement(
            'h4',
            { className: 'lead' },
            'Bloodline: ',
            _react2.default.createElement(
              'strong',
              null,
              this.state.bloodline
            )
          ),
          _react2.default.createElement(
            'h4',
            { className: 'lead' },
            'Gender: ',
            _react2.default.createElement(
              'strong',
              null,
              this.state.gender
            )
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-transparent',
              onClick: _CharacterActions2.default.report.bind(this, this.state.characterId),
              disabled: this.state.isReported },
            this.state.isReported ? 'Reported' : 'Report Character'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'profile-stats clearfix' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'stats-number' },
                this.state.winLossRatio
              ),
              'Winning Percentage'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'stats-number' },
                this.state.wins
              ),
              ' Wins'
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'stats-number' },
                this.state.losses
              ),
              ' Losses'
            )
          )
        )
      );
    }
  }]);

  return Character;
}(_react2.default.Component);

exports.default = Character;

},{"../actions/CharacterActions":2,"../stores/CharacterStore":16,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
      _FooterActions2.default.getTopCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      var leaderboardCharacters = this.state.characters.map(function (character) {
        return _react2.default.createElement(
          'li',
          { key: character.characterId },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/characters/' + character.characterId },
            _react2.default.createElement('img', { className: 'thumb-md', src: 'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg' })
          )
        );
      });

      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-5' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Information'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Copyright'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                'Powered by ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Node.js'
                ),
                ', ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'MongoDB'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'React'
                ),
                ' with Flux architecture and server-side rendering.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'You may view the ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://github.com/sahat/newedenfaces-react' },
                  'Source Code'
                ),
                ' behind this project on GitHub.'
              ),
              _react2.default.createElement(
                'p',
                null,
                '\xA9 2015 Sahat Yalkabov.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-7 hidden-xs' },
              _react2.default.createElement(
                'h3',
                { className: 'lead' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Leaderboard'
                ),
                ' Top 5 Characters'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'list-inline' },
                leaderboardCharacters
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":3,"../stores/FooterStore":17,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = _HomeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _HomeStore2.default.listen(this.onChange);
      _HomeActions2.default.getTwoCharacters();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _HomeStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(character) {
      var winner = character.characterId;
      var loser = (0, _underscore.first)((0, _underscore.without)(this.state.characters, (0, _underscore.findWhere)(this.state.characters, { characterId: winner }))).characterId;
      _HomeActions2.default.vote(winner, loser);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var characterNodes = this.state.characters.map(function (character, index) {
        return _react2.default.createElement(
          'div',
          { key: character.characterId, className: index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5' },
          _react2.default.createElement(
            'div',
            { className: 'thumbnail fadeInUp animated' },
            _react2.default.createElement('img', { onClick: _this2.handleClick.bind(_this2, character), src: 'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg' }),
            _react2.default.createElement(
              'div',
              { className: 'caption text-center' },
              _react2.default.createElement(
                'ul',
                { className: 'list-inline' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Race:'
                  ),
                  ' ',
                  character.race
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Bloodline:'
                  ),
                  ' ',
                  character.bloodline
                )
              ),
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/characters/' + character.characterId },
                  _react2.default.createElement(
                    'strong',
                    null,
                    character.name
                  )
                )
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h3',
          { className: 'text-center' },
          'Click on the portrait. Select your favorite.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          characterNodes
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":4,"../stores/HomeStore":18,"react":"react","react-router":"react-router","underscore":"underscore"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      _NavbarActions2.default.getCharacterCount();
      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeOut(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();
      if (searchQuery) {
        _NavbarActions2.default.findCharacters({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            _react2.default.createElement(
              'span',
              { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' })
            ),
            'Harsha',
            _react2.default.createElement(
              'span',
              { className: 'badge badge-up badge-danger' },
              this.state.onlineUsers
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'form',
            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalCharacters + ' characters', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
              _react2.default.createElement(
                'span',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/stats' },
                'Stats'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Top 100 ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top' },
                    'Top Overall'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/barcelona' },
                    'Barcelona'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/barcelona/achura' },
                        'Neymar'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/barcelona/civire' },
                        'Suarez'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/barcelona/deteis' },
                        'Inesta'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/gallente' },
                    'Ronaldo'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/gallente' },
                        'Bale'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/intaki' },
                        'Benzema'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/gallente/jin-mei' },
                        'James'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/Formula1' },
                    'Formula1'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/Formula1/brutor' },
                        'Sebastian'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/Formula1/sebiestor' },
                        'Fernando'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/Formula1/vherokior' },
                        'Checo'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/top/Cricket' },
                    'Cricket'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/Cricket/Cricket' },
                        'Cricket'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/Cricket/ni-kunni' },
                        'Ni-Kunni'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/top/Cricket/khanid' },
                        'Khanid'
                      )
                    )
                  )
                ),
                _react2.default.createElement('li', { className: 'divider' }),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/shame' },
                    'Hall of Shame'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Female ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female' },
                    'All'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/barcelona' },
                    'Barcelona'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/barcelona/achura' },
                        'Achura'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/barcelona/civire/' },
                        'Civire'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/barcelona/deteis' },
                        'Deteis'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/gallente' },
                    'Gallente'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/gallente/gallente' },
                        'Gallente'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/gallente/intaki' },
                        'Intaki'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/gallente/jin-mei' },
                        'Jin-Mei'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/Formula1' },
                    'Formula1'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/Formula1/brutor' },
                        'Brutor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/Formula1/sebiestor' },
                        'Sebiestor'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/Formula1/vherokior' },
                        'Vherokior'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/female/Cricket' },
                    'Cricket'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/Cricket/Cricket' },
                        'Cricket'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/Cricket/smith' },
                        'Steve Smith'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/female/Cricket/kohli' },
                        'Kohli'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                'Male ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male' },
                    'All'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/barcelona' },
                    'Barcelona'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/barcelona/achura' },
                        'Leo Messi'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/barcelona/civire' },
                        'Neymar'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/barcelona/deteis' },
                        'Suarez'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/gallente' },
                    'Gallente'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/gallente/gallente' },
                        'Gallente'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/gallente/intaki' },
                        'Intaki'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/gallente/jin-mei' },
                        'Jin-Mei'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/Formula1' },
                    'Formula1'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/Formula1/brutor' },
                        'Sebastian'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/Formula1/sebiestor' },
                        'Fernando'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/Formula1/vherokior' },
                        'Checo'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/male/Cricket' },
                    'Cricket'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/Cricket/Cricket' },
                        'Cricket'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/Cricket/ni-kunni' },
                        'Ni-Kunni'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/male/Cricket/khanid' },
                        'Khanid'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/add' },
                'Add'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":5,"../stores/NavbarStore":19,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();
_reactDom2.default.render(_react2.default.createElement(
	_reactRouter2.default,
	{ history: history },
	_routes2.default
), document.getElementById('app'));

},{"./routes":14,"history/lib/createBrowserHistory":28,"react":"react","react-dom":"react-dom","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _AddCharacter = require('./components/AddCharacter');

var _AddCharacter2 = _interopRequireDefault(_AddCharacter);

var _Character = require('./components/Character');

var _Character2 = _interopRequireDefault(_Character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
	_reactRouter.Route,
	{ component: _App2.default },
	_react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/add', component: _AddCharacter2.default }),
	_react2.default.createElement(_reactRouter.Route, { path: '/characters/:id', component: _Character2.default })
);

},{"./components/AddCharacter":7,"./components/App":8,"./components/Character":9,"./components/Home":11,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddCharacterActions = require('../actions/AddCharacterActions');

var _AddCharacterActions2 = _interopRequireDefault(_AddCharacterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddCharacterStore = function () {
  function AddCharacterStore() {
    _classCallCheck(this, AddCharacterStore);

    this.bindActions(_AddCharacterActions2.default);
    this.name = '';
    this.gender = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
  }

  _createClass(AddCharacterStore, [{
    key: 'onAddCharacterSuccess',
    value: function onAddCharacterSuccess(successMessage) {
      this.nameValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddCharacterFail',
    value: function onAddCharacterFail(errorMessage) {
      this.nameValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateGender',
    value: function onUpdateGender(event) {
      this.gender = event.target.value;
      this.genderValidationState = '';
    }
  }, {
    key: 'onInvalidName',
    value: function onInvalidName() {
      this.nameValidationState = 'has-error';
      this.helpBlock = 'Please enter a character name.';
    }
  }, {
    key: 'onInvalidGender',
    value: function onInvalidGender() {
      this.genderValidationState = 'has-error';
    }
  }]);

  return AddCharacterStore;
}();

exports.default = _alt2.default.createStore(AddCharacterStore);

},{"../actions/AddCharacterActions":1,"../alt":6}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _CharacterActions = require('../actions/CharacterActions');

var _CharacterActions2 = _interopRequireDefault(_CharacterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CharacterStore = function () {
  function CharacterStore() {
    _classCallCheck(this, CharacterStore);

    this.bindActions(_CharacterActions2.default);
    this.characterId = 0;
    this.name = 'TBD';
    this.race = 'TBD';
    this.bloodline = 'TBD';
    this.gender = 'TBD';
    this.wins = 0;
    this.losses = 0;
    this.winLossRatio = 0;
    this.isReported = false;
  }

  _createClass(CharacterStore, [{
    key: 'onGetCharacterSuccess',
    value: function onGetCharacterSuccess(data) {
      (0, _underscore.assign)(this, data);
      $(document.body).attr('class', 'profile ' + this.race.toLowerCase());
      var localData = localStorage.getItem('NEF') ? JSON.parse(localStorage.getItem('NEF')) : {};
      var reports = localData.reports || [];
      this.isReported = (0, _underscore.contains)(reports, this.characterId);
      // If is NaN (from division by zero) then set it to "0"
      this.winLossRatio = (this.wins / (this.wins + this.losses) * 100 || 0).toFixed(1);
    }
  }, {
    key: 'onGetCharacterFail',
    value: function onGetCharacterFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onReportSuccess',
    value: function onReportSuccess() {
      this.isReported = true;
      var localData = localStorage.getItem('NEF') ? JSON.parse(localStorage.getItem('NEF')) : {};
      localData.reports = localData.reports || [];
      localData.reports.push(this.characterId);
      localStorage.setItem('NEF', JSON.stringify(localData));
      toastr.warning('Character has been reported.');
    }
  }, {
    key: 'onReportFail',
    value: function onReportFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return CharacterStore;
}();

exports.default = _alt2.default.createStore(CharacterStore);

},{"../actions/CharacterActions":2,"../alt":6,"underscore":"underscore"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
	function FooterStore() {
		_classCallCheck(this, FooterStore);

		this.bindActions(_FooterActions2.default);
		this.characters = [];
	}

	_createClass(FooterStore, [{
		key: 'onGetTopCharactersSuccess',
		value: function onGetTopCharactersSuccess(data) {
			this.characters = data.slice(0, 5);
		}
	}, {
		key: 'onGetTopCharactersFail',
		value: function onGetTopCharactersFail(jqXhr) {
			toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
		}
	}]);

	return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":3,"../alt":6}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_HomeActions2.default);
    this.characters = [];
  }

  _createClass(HomeStore, [{
    key: 'onGetTwoCharactersSuccess',
    value: function onGetTwoCharactersSuccess(data) {
      this.characters = data;
    }
  }, {
    key: 'onGetTwoCharactersFail',
    value: function onGetTwoCharactersFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }, {
    key: 'onVoteFail',
    value: function onVoteFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }]);

  return HomeStore;
}();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":4,"../alt":6}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindCharacterSuccess',
    value: function onFindCharacterSuccess(payload) {
      payload.history.pushState(null, '/characters/' + payload.characterId);
    }
  }, {
    key: 'onFindCharacterFail',
    value: function onFindCharacterFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetCharacterCountSuccess',
    value: function onGetCharacterCountSuccess(data) {
      this.totalCharacters = data.count;
    }
  }, {
    key: 'onGetCharacterCountFail',
    value: function onGetCharacterCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":5,"../alt":6}],20:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":21,"./lib/keys.js":22}],21:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],22:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],23:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],25:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":37,"warning":38}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],28:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":23,"./DOMStateStorage":25,"./DOMUtils":26,"./ExecutionEnvironment":27,"./createDOMHistory":29,"./parsePath":34,"_process":37,"invariant":36}],29:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":26,"./ExecutionEnvironment":27,"./createHistory":30,"_process":37,"invariant":36}],30:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":23,"./AsyncUtils":24,"./createLocation":31,"./deprecate":32,"./parsePath":34,"./runTransitionHook":35,"deep-equal":20}],31:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":23,"./parsePath":34}],32:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],33:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],34:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":33,"_process":37,"warning":38}],35:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":37,"warning":38}],36:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":37}],37:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],38:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":37}]},{},[13])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BZGRDaGFyYWN0ZXJBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvQ2hhcmFjdGVyQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL0Zvb3RlckFjdGlvbnMuanMiLCJhcHAvYWN0aW9ucy9Ib21lQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL05hdmJhckFjdGlvbnMuanMiLCJhcHAvYWx0LmpzIiwiYXBwL2NvbXBvbmVudHMvQWRkQ2hhcmFjdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvQXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQ2hhcmFjdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsImFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsImFwcC9tYWluLmpzIiwiYXBwL3JvdXRlcy5qcyIsImFwcC9zdG9yZXMvQWRkQ2hhcmFjdGVyU3RvcmUuanMiLCJhcHAvc3RvcmVzL0NoYXJhY3RlclN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Gb290ZXJTdG9yZS5qcyIsImFwcC9zdG9yZXMvSG9tZVN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9OYXZiYXJTdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2lzX2FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0FjdGlvbnMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01TdGF0ZVN0b3JhZ2UuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRE9NVXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlRE9NSGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVIaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2RlcHJlY2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9leHRyYWN0UGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9wYXJzZVBhdGguanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvcnVuVHJhbnNpdGlvbkhvb2suanMiLCJub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0lBRU0sbUI7QUFDSixpQ0FBYztBQUFBOztBQUNaLFNBQUssZUFBTCxDQUNFLHFCQURGLEVBRUUsa0JBRkYsRUFHRSxZQUhGLEVBSUUsY0FKRixFQUtFLGFBTEYsRUFNRSxlQU5GO0FBUUQ7Ozs7aUNBRVksSSxFQUFNLE0sRUFBUTtBQUFBOztBQUN6QixRQUFFLElBQUYsQ0FBTztBQUNMLGNBQU0sTUFERDtBQUVMLGFBQUssaUJBRkE7QUFHTCxjQUFNLEVBQUUsTUFBTSxJQUFSLEVBQWMsUUFBUSxNQUF0QjtBQUhELE9BQVAsRUFLRyxJQUxILENBS1EsVUFBQyxJQUFELEVBQVU7QUFDZCxjQUFLLE9BQUwsQ0FBYSxtQkFBYixDQUFpQyxLQUFLLE9BQXRDO0FBQ0QsT0FQSCxFQVFHLElBUkgsQ0FRUSxVQUFDLEtBQUQsRUFBVztBQUNmLGNBQUssT0FBTCxDQUFhLGdC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBBZGRDaGFyYWN0ZXJBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAnYWRkQ2hhcmFjdGVyU3VjY2VzcycsXG4gICAgICAnYWRkQ2hhcmFjdGVyRmFpbCcsXG4gICAgICAndXBkYXRlTmFtZScsXG4gICAgICAndXBkYXRlR2VuZGVyJyxcbiAgICAgICdpbnZhbGlkTmFtZScsXG4gICAgICAnaW52YWxpZEdlbmRlcidcbiAgICApO1xuICB9XG5cbiAgYWRkQ2hhcmFjdGVyKG5hbWUsIGdlbmRlcikge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvYXBpL2NoYXJhY3RlcnMnLFxuICAgICAgZGF0YTogeyBuYW1lOiBuYW1lLCBnZW5kZXI6IGdlbmRlciB9XG4gICAgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5hZGRDaGFyYWN0ZXJTdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5hZGRDaGFyYWN0ZXJGYWlsKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEFkZENoYXJhY3RlckFjdGlvbnMpO1xuIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuXG5jbGFzcyBDaGFyYWN0ZXJBY3Rpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG4gICAgICAncmVwb3J0U3VjY2VzcycsXG4gICAgICAncmVwb3J0RmFpbCcsXG4gICAgICAnZ2V0Q2hhcmFjdGVyU3VjY2VzcycsXG4gICAgICAnZ2V0Q2hhcmFjdGVyRmFpbCdcbiAgICApO1xuICB9XG5cbiAgZ2V0Q2hhcmFjdGVyKGNoYXJhY3RlcklkKSB7XG4gICAgJC5hamF4KHsgdXJsOiAnL2FwaS9jaGFyYWN0ZXJzLycgKyBjaGFyYWN0ZXJJZCB9KVxuICAgICAgLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmdldENoYXJhY3RlclN1Y2Nlc3MoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRDaGFyYWN0ZXJGYWlsKGpxWGhyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVwb3J0KGNoYXJhY3RlcklkKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hcGkvcmVwb3J0JyxcbiAgICAgIGRhdGE6IHsgY2hhcmFjdGVySWQ6IGNoYXJhY3RlcklkIH1cbiAgICB9KVxuICAgICAgLmRvbmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMucmVwb3J0U3VjY2VzcygpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMucmVwb3J0RmFpbChqcVhocik7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhDaGFyYWN0ZXJBY3Rpb25zKTtcbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcblxuY2xhc3MgRm9vdGVyQWN0aW9ucyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZ2VuZXJhdGVBY3Rpb25zIChcblx0XHRcdCdnZXRUb3BDaGFyYWN0ZXJzU3VjY2VzcycsXG5cdFx0XHQnZ2V0VG9wQ2hhcmFjdGVyc0ZhaWwnXG5cblx0XHRcdCk7XG5cdH1cblxuXHRnZXRUb3BDaGFyYWN0ZXJzKCkge1xuXHRcdCQuYWpheCh7dXJsOiAnL2FwaS9jaGFyYWN0ZXJzL3RvcCd9KVxuXHRcdC5kb25lKChkYXRhKT0+IHtcblx0XHRcdHRoaXMuYWN0aW9ucy5nZXRUb3BDaGFyYWN0ZXJzU3VjY2VzcyhkYXRhKVxuXHRcdH0pXG5cdFx0LmZhaWwoKGpxWGhyKT0+IHtcblx0XHRcdHRoaXMuYWN0aW9ucy5nZXRUb3BDaGFyYWN0ZXJzRmFpbChqcVhocilcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhGb290ZXJBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEhvbWVBY3Rpb25zIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5nZW5lcmF0ZUFjdGlvbnMoXG5cdFx0XHQnZ2V0VHdvQ2hhcmFjdGVyc1N1Y2Nlc3MnICxcblx0XHRcdCdnZXRUd29DaGFyYWN0ZXJzRmFpbCcgLFxuXHRcdFx0J3ZvdGVGYWlsJ1xuXHRcdFx0KTtcblx0fVxuXG5cdGdldFR3b0NoYXJhY3RlcnMoKSB7XG5cdFx0JC5hamF4KHt1cmw6ICcvYXBpL2NoYXJhY3RlcnMnfSlcblx0XHQuZG9uZShkYXRhPT57XG5cdFx0XHR0aGlzLmFjdGlvbnMuZ2V0VHdvQ2hhcmFjdGVyc1N1Y2Nlc3MoZGF0YSk7XG5cdFx0fSlcblx0XHQuZmFpbChqcVhociA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRUd29DaGFyYWN0ZXJzRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICB9KTtcblx0fVxuXG5cdHZvdGUod2lubmVyLGxvc2VyKSB7XG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6ICdQVVQnLFxuXHRcdFx0dXJsOiAnL2FwaS9jaGFyYWN0ZXJzJyxcblx0XHRcdGRhdGEgOiB7d2lubmVyOiB3aW5uZXIgLCBsb3NlcjogbG9zZXJ9XG5cdFx0fSlcblx0XHQuZG9uZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRUd29DaGFyYWN0ZXJzKCk7XG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy52b3RlRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gICAgICB9KTtcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEhvbWVBY3Rpb25zKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQge2Fzc2lnbn0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNsYXNzIE5hdmJhckFjdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucyhcbiAgICAgICd1cGRhdGVPbmxpbmVVc2VycycsXG4gICAgICAndXBkYXRlQWpheEFuaW1hdGlvbicsXG4gICAgICAndXBkYXRlU2VhcmNoUXVlcnknLFxuICAgICAgJ2dldENoYXJhY3RlckNvdW50U3VjY2VzcycsXG4gICAgICAnZ2V0Q2hhcmFjdGVyQ291bnRGYWlsJyxcbiAgICAgICdmaW5kQ2hhcmFjdGVyU3VjY2VzcycsXG4gICAgICAnZmluZENoYXJhY3RlckZhaWwnXG4gICAgKTtcbiAgfVxuXG4gIGZpbmRDaGFyYWN0ZXIocGF5bG9hZCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvYXBpL2NoYXJhY3RlcnMvc2VhcmNoJyxcbiAgICAgIGRhdGE6IHsgbmFtZTogcGF5bG9hZC5zZWFyY2hRdWVyeSB9XG4gICAgfSlcbiAgICAgIC5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIGFzc2lnbihwYXlsb2FkLCBkYXRhKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRDaGFyYWN0ZXJTdWNjZXNzKHBheWxvYWQpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRDaGFyYWN0ZXJGYWlsKHBheWxvYWQpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRDaGFyYWN0ZXJDb3VudCgpIHtcbiAgICAkLmFqYXgoeyB1cmw6ICcvYXBpL2NoYXJhY3RlcnMvY291bnQnIH0pXG4gICAgICAuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Q2hhcmFjdGVyQ291bnRTdWNjZXNzKGRhdGEpXG4gICAgICB9KVxuICAgICAgLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5nZXRDaGFyYWN0ZXJDb3VudEZhaWwoanFYaHIpXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhOYXZiYXJBY3Rpb25zKTsiLCJpbXBvcnQgQWx0IGZyb20gJ2FsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBbHQoKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZENoYXJhY3RlclN0b3JlIGZyb20gJy4uL3N0b3Jlcy9BZGRDaGFyYWN0ZXJTdG9yZSc7XG5pbXBvcnQgQWRkQ2hhcmFjdGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FkZENoYXJhY3RlckFjdGlvbnMnO1xuXG5jbGFzcyBBZGRDaGFyYWN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gQWRkQ2hhcmFjdGVyU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQWRkQ2hhcmFjdGVyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQWRkQ2hhcmFjdGVyU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5uYW1lLnRyaW0oKTtcbiAgICB2YXIgZ2VuZGVyID0gdGhpcy5zdGF0ZS5nZW5kZXI7XG5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIEFkZENoYXJhY3RlckFjdGlvbnMuaW52YWxpZE5hbWUoKTtcbiAgICAgIHRoaXMucmVmcy5uYW1lVGV4dEZpZWxkLmdldERPTU5vZGUoKS5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICghZ2VuZGVyKSB7XG4gICAgICBBZGRDaGFyYWN0ZXJBY3Rpb25zLmludmFsaWRHZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSAmJiBnZW5kZXIpIHtcbiAgICAgIEFkZENoYXJhY3RlckFjdGlvbnMuYWRkQ2hhcmFjdGVyKG5hbWUsIGdlbmRlcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmbGlwSW5YIGFuaW1hdGVkJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhbmVsIHBhbmVsLWRlZmF1bHQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtaGVhZGluZyc+QWRkIENoYXJhY3RlcjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtYm9keSc+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLWdyb3VwICcgKyB0aGlzLnN0YXRlLm5hbWVWYWxpZGF0aW9uU3RhdGV9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb250cm9sLWxhYmVsJz5DaGFyYWN0ZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSduYW1lVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0FkZENoYXJhY3RlckFjdGlvbnMudXBkYXRlTmFtZX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoZWxwLWJsb2NrJz57dGhpcy5zdGF0ZS5oZWxwQmxvY2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2Zvcm0tZ3JvdXAgJyArIHRoaXMuc3RhdGUuZ2VuZGVyVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvIHJhZGlvLWlubGluZSc+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdnZW5kZXInIGlkPSdmZW1hbGUnIHZhbHVlPSdGZW1hbGUnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnRmVtYWxlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e0FkZENoYXJhY3RlckFjdGlvbnMudXBkYXRlR2VuZGVyfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2ZlbWFsZSc+RmVtYWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpbyByYWRpby1pbmxpbmUnPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nZ2VuZGVyJyBpZD0nbWFsZScgdmFsdWU9J01hbGUnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2VuZGVyID09PSAnTWFsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtBZGRDaGFyYWN0ZXJBY3Rpb25zLnVwZGF0ZUdlbmRlcn0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtYWxlJz5NYWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeSc+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8TmF2YmFyIGhpc3Rvcnk9IHt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGFyYWN0ZXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvQ2hhcmFjdGVyU3RvcmUnO1xuaW1wb3J0IENoYXJhY3RlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9DaGFyYWN0ZXJBY3Rpb25zJ1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gQ2hhcmFjdGVyU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgQ2hhcmFjdGVyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIENoYXJhY3RlckFjdGlvbnMuZ2V0Q2hhcmFjdGVyKHRoaXMucHJvcHMucGFyYW1zLmlkKTtcblxuICAgICQoJy5tYWduaWZpYy1wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIG1haW5DbGFzczogJ21mcC16b29tLWluJyxcbiAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICBtaWRDbGljazogdHJ1ZSxcbiAgICAgIHpvb206IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgQ2hhcmFjdGVyU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIC8vIEZldGNoIG5ldyBjaGFyYWNodGVyIGRhdGEgd2hlbiBVUkwgcGF0aCBjaGFuZ2VzXG4gICAgaWYgKHByZXZQcm9wcy5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMucGFyYW1zLmlkKSB7XG4gICAgICBDaGFyYWN0ZXJBY3Rpb25zLmdldENoYXJhY3Rlcih0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWltZyc+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdtYWduaWZpYy1wb3B1cCcgaHJlZj17J2h0dHBzOi8vaW1hZ2UuZXZlb25saW5lLmNvbS9DaGFyYWN0ZXIvJyArIHRoaXMuc3RhdGUuY2hhcmFjdGVySWQgKyAnXzEwMjQuanBnJ30+XG4gICAgICAgICAgICA8aW1nIHNyYz17J2h0dHBzOi8vaW1hZ2UuZXZlb25saW5lLmNvbS9DaGFyYWN0ZXIvJyArIHRoaXMuc3RhdGUuY2hhcmFjdGVySWQgKyAnXzI1Ni5qcGcnfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWluZm8gY2xlYXJmaXgnPlxuICAgICAgICAgIDxoMj48c3Ryb25nPnt0aGlzLnN0YXRlLm5hbWV9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdsZWFkJz5SYWNlOiA8c3Ryb25nPnt0aGlzLnN0YXRlLnJhY2V9PC9zdHJvbmc+PC9oND5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdsZWFkJz5CbG9vZGxpbmU6IDxzdHJvbmc+e3RoaXMuc3RhdGUuYmxvb2RsaW5lfTwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbGVhZCc+R2VuZGVyOiA8c3Ryb25nPnt0aGlzLnN0YXRlLmdlbmRlcn08L3N0cm9uZz48L2g0PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXRyYW5zcGFyZW50J1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17Q2hhcmFjdGVyQWN0aW9ucy5yZXBvcnQuYmluZCh0aGlzLCB0aGlzLnN0YXRlLmNoYXJhY3RlcklkKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzUmVwb3J0ZWR9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNSZXBvcnRlZCA/ICdSZXBvcnRlZCcgOiAnUmVwb3J0IENoYXJhY3Rlcid9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZS1zdGF0cyBjbGVhcmZpeCc+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT0nc3RhdHMtbnVtYmVyJz57dGhpcy5zdGF0ZS53aW5Mb3NzUmF0aW99PC9zcGFuPldpbm5pbmcgUGVyY2VudGFnZTwvbGk+XG4gICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPSdzdGF0cy1udW1iZXInPnt0aGlzLnN0YXRlLndpbnN9PC9zcGFuPiBXaW5zPC9saT5cbiAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9J3N0YXRzLW51bWJlcic+e3RoaXMuc3RhdGUubG9zc2VzfTwvc3Bhbj4gTG9zc2VzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBGb290ZXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvRm9vdGVyU3RvcmUnXG5pbXBvcnQgRm9vdGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0Zvb3RlckFjdGlvbnMnO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gRm9vdGVyU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgRm9vdGVyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIEZvb3RlckFjdGlvbnMuZ2V0VG9wQ2hhcmFjdGVycygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgRm9vdGVyU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gIH1cblxuICBvbkNoYW5nZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsZWFkZXJib2FyZENoYXJhY3RlcnMgPSB0aGlzLnN0YXRlLmNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2NoYXJhY3Rlci5jaGFyYWN0ZXJJZH0+XG4gICAgICAgICAgPExpbmsgdG89eycvY2hhcmFjdGVycy8nICsgY2hhcmFjdGVyLmNoYXJhY3RlcklkfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd0aHVtYi1tZCcgc3JjPXsnaHR0cDovL2ltYWdlLmV2ZW9ubGluZS5jb20vQ2hhcmFjdGVyLycgKyBjaGFyYWN0ZXIuY2hhcmFjdGVySWQgKyAnXzEyOC5qcGcnfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tNSc+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2xlYWQnPjxzdHJvbmc+SW5mb3JtYXRpb248L3N0cm9uZz4gYW5kIDxzdHJvbmc+Q29weXJpZ2h0PC9zdHJvbmc+PC9oMz5cbiAgICAgICAgICAgICAgPHA+UG93ZXJlZCBieSA8c3Ryb25nPk5vZGUuanM8L3N0cm9uZz4sIDxzdHJvbmc+TW9uZ29EQjwvc3Ryb25nPiBhbmQgPHN0cm9uZz5SZWFjdDwvc3Ryb25nPiB3aXRoIEZsdXggYXJjaGl0ZWN0dXJlIGFuZCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuPC9wPlxuICAgICAgICAgICAgICA8cD5Zb3UgbWF5IHZpZXcgdGhlIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9zYWhhdC9uZXdlZGVuZmFjZXMtcmVhY3QnPlNvdXJjZSBDb2RlPC9hPiBiZWhpbmQgdGhpcyBwcm9qZWN0IG9uIEdpdEh1Yi48L3A+XG4gICAgICAgICAgICAgIDxwPsKpIDIwMTUgU2FoYXQgWWFsa2Fib3YuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTcgaGlkZGVuLXhzJz5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbGVhZCc+PHN0cm9uZz5MZWFkZXJib2FyZDwvc3Ryb25nPiBUb3AgNSBDaGFyYWN0ZXJzPC9oMz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdC1pbmxpbmUnPlxuICAgICAgICAgICAgICAgIHtsZWFkZXJib2FyZENoYXJhY3RlcnN9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEhvbWVTdG9yZSBmcm9tICcuLi9zdG9yZXMvSG9tZVN0b3JlJ1xuaW1wb3J0IEhvbWVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvSG9tZUFjdGlvbnMnO1xuaW1wb3J0IHtmaXJzdCwgd2l0aG91dCwgZmluZFdoZXJlfSBmcm9tICd1bmRlcnNjb3JlJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IEhvbWVTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBIb21lU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIEhvbWVBY3Rpb25zLmdldFR3b0NoYXJhY3RlcnMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIEhvbWVTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhjaGFyYWN0ZXIpIHtcbiAgICB2YXIgd2lubmVyID0gY2hhcmFjdGVyLmNoYXJhY3RlcklkO1xuICAgIHZhciBsb3NlciA9IGZpcnN0KHdpdGhvdXQodGhpcy5zdGF0ZS5jaGFyYWN0ZXJzLCBmaW5kV2hlcmUodGhpcy5zdGF0ZS5jaGFyYWN0ZXJzLCB7IGNoYXJhY3RlcklkOiB3aW5uZXIgfSkpKS5jaGFyYWN0ZXJJZDtcbiAgICBIb21lQWN0aW9ucy52b3RlKHdpbm5lciwgbG9zZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBjaGFyYWN0ZXJOb2RlcyA9IHRoaXMuc3RhdGUuY2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtjaGFyYWN0ZXIuY2hhcmFjdGVySWR9IGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyAnY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTUgY29sLW1kLW9mZnNldC0xJyA6ICdjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNSd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aHVtYm5haWwgZmFkZUluVXAgYW5pbWF0ZWQnPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcywgY2hhcmFjdGVyKX0gc3JjPXsnaHR0cDovL2ltYWdlLmV2ZW9ubGluZS5jb20vQ2hhcmFjdGVyLycgKyBjaGFyYWN0ZXIuY2hhcmFjdGVySWQgKyAnXzUxMi5qcGcnfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FwdGlvbiB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtaW5saW5lJz5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5SYWNlOjwvc3Ryb25nPiB7Y2hhcmFjdGVyLnJhY2V9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5CbG9vZGxpbmU6PC9zdHJvbmc+IHtjaGFyYWN0ZXIuYmxvb2RsaW5lfTwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9jaGFyYWN0ZXJzLycgKyBjaGFyYWN0ZXIuY2hhcmFjdGVySWR9PjxzdHJvbmc+e2NoYXJhY3Rlci5uYW1lfTwvc3Ryb25nPjwvTGluaz5cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5DbGljayBvbiB0aGUgcG9ydHJhaXQuIFNlbGVjdCB5b3VyIGZhdm9yaXRlLjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIHtjaGFyYWN0ZXJOb2Rlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IE5hdmJhclN0b3JlIGZyb20gJy4uL3N0b3Jlcy9OYXZiYXJTdG9yZSc7XG5pbXBvcnQgTmF2YmFyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL05hdmJhckFjdGlvbnMnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0gTmF2YmFyU3RvcmUuZ2V0U3RhdGUoKTtcblx0XHR0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0TmF2YmFyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuXHRcdE5hdmJhckFjdGlvbnMuZ2V0Q2hhcmFjdGVyQ291bnQoKTtcblx0XHRsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuXG5cdFx0c29ja2V0Lm9uKCdvbmxpbmVVc2VycycsIChkYXRhKT0+IHtcblx0XHRcdE5hdmJhckFjdGlvbnMudXBkYXRlT25saW5lVXNlcnMoZGF0YSk7XG5cdFx0fSk7XG5cblx0XHQkKGRvY3VtZW50KS5hamF4U3RhcnQoKCk9PiB7XG5cdFx0XHROYXZiYXJBY3Rpb25zLnVwZGF0ZUFqYXhBbmltYXRpb24oJ2ZhZGVJbicpO1xuXHRcdH0pO1xuXG5cdFx0JChkb2N1bWVudCkuYWpheENvbXBsZXRlKCgpPT4ge1xuXHRcdFx0c2V0VGltZU91dCgoKT0+IHtcblx0XHRcdFx0TmF2YmFyQWN0aW9ucy51cGRhdGVBamF4QW5pbWF0aW9uKCdmYWRlT3V0Jyk7XG5cdFx0XHR9LDc1MCk7XG5cblx0XHR9KTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdE5hdmJhclN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuXHR9XG5cdG9uQ2hhbmdlKHN0YXRlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblx0aGFuZGxlU3VibWl0KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGxldCBzZWFyY2hRdWVyeSA9IHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkudHJpbSgpO1xuXHRcdGlmIChzZWFyY2hRdWVyeSkge1xuXHRcdFx0TmF2YmFyQWN0aW9ucy5maW5kQ2hhcmFjdGVycyh7XG5cdFx0XHRcdHNlYXJjaFF1ZXJ5OiBzZWFyY2hRdWVyeSxcblx0XHRcdFx0c2VhcmNoRm9ybTogdGhpcy5yZWZzLnNlYXJjaEZvcm0sXG5cdFx0XHRcdGhpc3Rvcnk6IHRoaXMucHJvcHMuaGlzdG9yeVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nbmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWQnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9JyNuYXZiYXInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbi1iYXInPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPlxuICAgICAgICAgICAgPHNwYW4gcmVmPSd0cmlhbmdsZXMnIGNsYXNzTmFtZT17J3RyaWFuZ2xlcyBhbmltYXRlZCAnICsgdGhpcy5zdGF0ZS5hamF4QW5pbWF0aW9uQ2xhc3N9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgSGFyc2hhXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXVwIGJhZGdlLWRhbmdlcic+e3RoaXMuc3RhdGUub25saW5lVXNlcnN9PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J25hdmJhcicgY2xhc3NOYW1lPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxuICAgICAgICAgIDxmb3JtIHJlZj0nc2VhcmNoRm9ybScgY2xhc3NOYW1lPSduYXZiYXItZm9ybSBuYXZiYXItbGVmdCBhbmltYXRlZCcgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj17dGhpcy5zdGF0ZS50b3RhbENoYXJhY3RlcnMgKyAnIGNoYXJhY3RlcnMnfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX0gb25DaGFuZ2U9e05hdmJhckFjdGlvbnMudXBkYXRlU2VhcmNoUXVlcnl9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAtYnRuJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0JyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9J2dseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoJz48L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89Jy8nPkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3N0YXRzJz5TdGF0czwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2Ryb3Bkb3duLXRvZ2dsZScgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJz5Ub3AgMTAwIDxzcGFuIGNsYXNzTmFtZT0nY2FyZXQnPjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3RvcCc+VG9wIE92ZXJhbGw8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdG9wL2JhcmNlbG9uYSc+QmFyY2Vsb25hPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3RvcC9iYXJjZWxvbmEvYWNodXJhJz5OZXltYXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL2JhcmNlbG9uYS9jaXZpcmUnPlN1YXJlejwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvYmFyY2Vsb25hL2RldGVpcyc+SW5lc3RhPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3RvcC9nYWxsZW50ZSc+Um9uYWxkbzwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvZ2FsbGVudGUvZ2FsbGVudGUnPkJhbGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL2dhbGxlbnRlL2ludGFraSc+QmVuemVtYTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvZ2FsbGVudGUvamluLW1laSc+SmFtZXM8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdG9wL0Zvcm11bGExJz5Gb3JtdWxhMTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvRm9ybXVsYTEvYnJ1dG9yJz5TZWJhc3RpYW48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL0Zvcm11bGExL3NlYmllc3Rvcic+RmVybmFuZG88L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL0Zvcm11bGExL3ZoZXJva2lvcic+Q2hlY288L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvdG9wL0NyaWNrZXQnPkNyaWNrZXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL0NyaWNrZXQvQ3JpY2tldCc+Q3JpY2tldDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy90b3AvQ3JpY2tldC9uaS1rdW5uaSc+TmktS3Vubmk8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvdG9wL0NyaWNrZXQva2hhbmlkJz5LaGFuaWQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkaXZpZGVyJz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL3NoYW1lJz5IYWxsIG9mIFNoYW1lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2Ryb3Bkb3duLXRvZ2dsZScgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJz5GZW1hbGUgPHNwYW4gY2xhc3NOYW1lPSdjYXJldCc+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlJz5BbGw8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvZmVtYWxlL2JhcmNlbG9uYSc+QmFyY2Vsb25hPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9iYXJjZWxvbmEvYWNodXJhJz5BY2h1cmE8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL2JhcmNlbG9uYS9jaXZpcmUvJz5DaXZpcmU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL2JhcmNlbG9uYS9kZXRlaXMnPkRldGVpczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1Ym1lbnUnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9mZW1hbGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9nYWxsZW50ZS9nYWxsZW50ZSc+R2FsbGVudGU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL2dhbGxlbnRlL2ludGFraSc+SW50YWtpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9nYWxsZW50ZS9qaW4tbWVpJz5KaW4tTWVpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2ZlbWFsZS9Gb3JtdWxhMSc+Rm9ybXVsYTE8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL0Zvcm11bGExL2JydXRvcic+QnJ1dG9yPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL2ZlbWFsZS9Gb3JtdWxhMS9zZWJpZXN0b3InPlNlYmllc3RvcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvRm9ybXVsYTEvdmhlcm9raW9yJz5WaGVyb2tpb3I8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdkcm9wZG93bi1zdWJtZW51Jz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvZmVtYWxlL0NyaWNrZXQnPkNyaWNrZXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL0NyaWNrZXQvQ3JpY2tldCc+Q3JpY2tldDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9mZW1hbGUvQ3JpY2tldC9zbWl0aCc+U3RldmUgU21pdGg8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvZmVtYWxlL0NyaWNrZXQva29obGknPktvaGxpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2Ryb3Bkb3duLXRvZ2dsZScgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJz5NYWxlIDxzcGFuIGNsYXNzTmFtZT0nY2FyZXQnPjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUnPkFsbDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1Ym1lbnUnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9tYWxlL2JhcmNlbG9uYSc+QmFyY2Vsb25hPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvYmFyY2Vsb25hL2FjaHVyYSc+TGVvIE1lc3NpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvYmFyY2Vsb25hL2NpdmlyZSc+TmV5bWFyPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvYmFyY2Vsb25hL2RldGVpcyc+U3VhcmV6PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL21hbGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvZ2FsbGVudGUvZ2FsbGVudGUnPkdhbGxlbnRlPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvZ2FsbGVudGUvaW50YWtpJz5JbnRha2k8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9nYWxsZW50ZS9qaW4tbWVpJz5KaW4tTWVpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24tc3VibWVudSc+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz0nL21hbGUvRm9ybXVsYTEnPkZvcm11bGExPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvRm9ybXVsYTEvYnJ1dG9yJz5TZWJhc3RpYW48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9Gb3JtdWxhMS9zZWJpZXN0b3InPkZlcm5hbmRvPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz0nL21hbGUvRm9ybXVsYTEvdmhlcm9raW9yJz5DaGVjbzwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duLXN1Ym1lbnUnPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9tYWxlL0NyaWNrZXQnPkNyaWNrZXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdkcm9wZG93bi1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9Dcmlja2V0L0NyaWNrZXQnPkNyaWNrZXQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPScvbWFsZS9Dcmlja2V0L25pLWt1bm5pJz5OaS1LdW5uaTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9tYWxlL0NyaWNrZXQva2hhbmlkJz5LaGFuaWQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89Jy9hZGQnPkFkZDwvTGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKTtcbn1cblxufVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxubGV0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgQWRkQ2hhcmFjdGVyIGZyb20gJy4vY29tcG9uZW50cy9BZGRDaGFyYWN0ZXInO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL2NvbXBvbmVudHMvQ2hhcmFjdGVyJztcbmV4cG9ydCBkZWZhdWx0KFxuXHQ8Um91dGUgY29tcG9uZW50PXtBcHB9PlxuXHQ8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfSAvPlxuXHQ8Um91dGUgcGF0aD0gJy9hZGQnIGNvbXBvbmVudD17QWRkQ2hhcmFjdGVyfSAvPlxuXHQgPFJvdXRlIHBhdGg9Jy9jaGFyYWN0ZXJzLzppZCcgY29tcG9uZW50PXtDaGFyYWN0ZXJ9IC8+XG5cdDwvUm91dGU+XG5cdCk7XG5cbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0JztcbmltcG9ydCBBZGRDaGFyYWN0ZXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvQWRkQ2hhcmFjdGVyQWN0aW9ucyc7XG5cbmNsYXNzIEFkZENoYXJhY3RlclN0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iaW5kQWN0aW9ucyhBZGRDaGFyYWN0ZXJBY3Rpb25zKTtcbiAgICB0aGlzLm5hbWUgPSAnJztcbiAgICB0aGlzLmdlbmRlciA9ICcnO1xuICAgIHRoaXMuaGVscEJsb2NrID0gJyc7XG4gICAgdGhpcy5uYW1lVmFsaWRhdGlvblN0YXRlID0gJyc7XG4gICAgdGhpcy5nZW5kZXJWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgfVxuXG4gIG9uQWRkQ2hhcmFjdGVyU3VjY2VzcyhzdWNjZXNzTWVzc2FnZSkge1xuICAgIHRoaXMubmFtZVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtc3VjY2Vzcyc7XG4gICAgdGhpcy5oZWxwQmxvY2sgPSBzdWNjZXNzTWVzc2FnZTtcbiAgfVxuXG4gIG9uQWRkQ2hhcmFjdGVyRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0aGlzLm5hbWVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9IGVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIG9uVXBkYXRlTmFtZShldmVudCkge1xuICAgIHRoaXMubmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLm5hbWVWYWxpZGF0aW9uU3RhdGUgPSAnJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICcnO1xuICB9XG5cbiAgb25VcGRhdGVHZW5kZXIoZXZlbnQpIHtcbiAgICB0aGlzLmdlbmRlciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmdlbmRlclZhbGlkYXRpb25TdGF0ZSA9ICcnO1xuICB9XG5cbiAgb25JbnZhbGlkTmFtZSgpIHtcbiAgICB0aGlzLm5hbWVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJztcbiAgICB0aGlzLmhlbHBCbG9jayA9ICdQbGVhc2UgZW50ZXIgYSBjaGFyYWN0ZXIgbmFtZS4nO1xuICB9XG5cbiAgb25JbnZhbGlkR2VuZGVyKCkge1xuICAgIHRoaXMuZ2VuZGVyVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1lcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEFkZENoYXJhY3RlclN0b3JlKTtcbiIsImltcG9ydCB7YXNzaWduLCBjb250YWluc30gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgQ2hhcmFjdGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0NoYXJhY3RlckFjdGlvbnMnO1xuXG5jbGFzcyBDaGFyYWN0ZXJTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoQ2hhcmFjdGVyQWN0aW9ucyk7XG4gICAgdGhpcy5jaGFyYWN0ZXJJZCA9IDA7XG4gICAgdGhpcy5uYW1lID0gJ1RCRCc7XG4gICAgdGhpcy5yYWNlID0gJ1RCRCc7XG4gICAgdGhpcy5ibG9vZGxpbmUgPSAnVEJEJztcbiAgICB0aGlzLmdlbmRlciA9ICdUQkQnO1xuICAgIHRoaXMud2lucyA9IDA7XG4gICAgdGhpcy5sb3NzZXMgPSAwO1xuICAgIHRoaXMud2luTG9zc1JhdGlvID0gMDtcbiAgICB0aGlzLmlzUmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uR2V0Q2hhcmFjdGVyU3VjY2VzcyhkYXRhKSB7XG4gICAgYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgICQoZG9jdW1lbnQuYm9keSkuYXR0cignY2xhc3MnLCAncHJvZmlsZSAnICsgdGhpcy5yYWNlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGxldCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTkVGJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdORUYnKSkgOiB7fTtcbiAgICBsZXQgcmVwb3J0cyA9IGxvY2FsRGF0YS5yZXBvcnRzIHx8IFtdO1xuICAgIHRoaXMuaXNSZXBvcnRlZCA9IGNvbnRhaW5zKHJlcG9ydHMsIHRoaXMuY2hhcmFjdGVySWQpO1xuICAgIC8vIElmIGlzIE5hTiAoZnJvbSBkaXZpc2lvbiBieSB6ZXJvKSB0aGVuIHNldCBpdCB0byBcIjBcIlxuICAgIHRoaXMud2luTG9zc1JhdGlvID0gKCh0aGlzLndpbnMgLyAodGhpcy53aW5zICsgdGhpcy5sb3NzZXMpICogMTAwKSB8fCAwKS50b0ZpeGVkKDEpO1xuICB9XG5cbiAgb25HZXRDaGFyYWN0ZXJGYWlsKGpxWGhyKSB7XG4gICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKTtcbiAgfVxuXG4gIG9uUmVwb3J0U3VjY2VzcygpIHtcbiAgICB0aGlzLmlzUmVwb3J0ZWQgPSB0cnVlO1xuICAgIGxldCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTkVGJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdORUYnKSkgOiB7fTtcbiAgICBsb2NhbERhdGEucmVwb3J0cyA9IGxvY2FsRGF0YS5yZXBvcnRzIHx8IFtdO1xuICAgIGxvY2FsRGF0YS5yZXBvcnRzLnB1c2godGhpcy5jaGFyYWN0ZXJJZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05FRicsIEpTT04uc3RyaW5naWZ5KGxvY2FsRGF0YSkpO1xuICAgIHRvYXN0ci53YXJuaW5nKCdDaGFyYWN0ZXIgaGFzIGJlZW4gcmVwb3J0ZWQuJyk7XG4gIH1cblxuICBvblJlcG9ydEZhaWwoanFYaHIpIHtcbiAgICB0b2FzdHIuZXJyb3IoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShDaGFyYWN0ZXJTdG9yZSk7IiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEZvb3RlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Gb290ZXJBY3Rpb25zJztcblxuY2xhc3MgRm9vdGVyU3RvcmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmJpbmRBY3Rpb25zKEZvb3RlckFjdGlvbnMpO1xuXHRcdHRoaXMuY2hhcmFjdGVycyA9IFtdO1xuXHR9XG5cdG9uR2V0VG9wQ2hhcmFjdGVyc1N1Y2Nlc3MoZGF0YSkge1xuXHRcdHRoaXMuY2hhcmFjdGVycyA9IGRhdGEuc2xpY2UoMCw1KTtcblx0fVxuXHRvbkdldFRvcENoYXJhY3RlcnNGYWlsKGpxWGhyKSB7XG5cdFx0dG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTiAmJiBqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSB8fCBqcVhoci5yZXNwb25zZVRleHQgfHwganFYaHIuc3RhdHVzVGV4dCk7XG5cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoRm9vdGVyU3RvcmUpO1xuIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnO1xuaW1wb3J0IEhvbWVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvSG9tZUFjdGlvbnMnO1xuXG5jbGFzcyBIb21lU3RvcmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJpbmRBY3Rpb25zKEhvbWVBY3Rpb25zKTtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgfVxuXG4gIG9uR2V0VHdvQ2hhcmFjdGVyc1N1Y2Nlc3MoZGF0YSkge1xuICAgIHRoaXMuY2hhcmFjdGVycyA9IGRhdGE7XG4gIH1cblxuICBvbkdldFR3b0NoYXJhY3RlcnNGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgIHRvYXN0ci5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgb25Wb3RlRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICB0b2FzdHIuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoSG9tZVN0b3JlKTsiLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgTmF2YmFyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL05hdmJhckFjdGlvbnMnO1xuXG5jbGFzcyBOYXZiYXJTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmluZEFjdGlvbnMoTmF2YmFyQWN0aW9ucyk7XG4gICAgdGhpcy50b3RhbENoYXJhY3RlcnMgPSAwO1xuICAgIHRoaXMub25saW5lVXNlcnMgPSAwO1xuICAgIHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcbiAgICB0aGlzLmFqYXhBbmltYXRpb25DbGFzcyA9ICcnO1xuICB9XG5cbiAgb25GaW5kQ2hhcmFjdGVyU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcGF5bG9hZC5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnL2NoYXJhY3RlcnMvJyArIHBheWxvYWQuY2hhcmFjdGVySWQpO1xuICB9XG5cbiAgb25GaW5kQ2hhcmFjdGVyRmFpbChwYXlsb2FkKSB7XG4gICAgcGF5bG9hZC5zZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ3NoYWtlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwYXlsb2FkLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIG9uVXBkYXRlT25saW5lVXNlcnMoZGF0YSkge1xuICAgIHRoaXMub25saW5lVXNlcnMgPSBkYXRhLm9ubGluZVVzZXJzO1xuICB9XG5cbiAgb25VcGRhdGVBamF4QW5pbWF0aW9uKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuYWpheEFuaW1hdGlvbkNsYXNzID0gY2xhc3NOYW1lOyAvL2ZhZGVpbiBvciBmYWRlb3V0XG4gIH1cblxuICBvblVwZGF0ZVNlYXJjaFF1ZXJ5KGV2ZW50KSB7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIG9uR2V0Q2hhcmFjdGVyQ291bnRTdWNjZXNzKGRhdGEpIHtcbiAgICB0aGlzLnRvdGFsQ2hhcmFjdGVycyA9IGRhdGEuY291bnQ7XG4gIH1cblxuICBvbkdldENoYXJhY3RlckNvdW50RmFpbChqcVhocikge1xuICAgIHRvYXN0ci5lcnJvcihqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKE5hdmJhclN0b3JlKTsiLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuIiwidmFyIHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHMpXG59KSgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID8gc3VwcG9ydGVkIDogdW5zdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuZnVuY3Rpb24gc3VwcG9ydGVkKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG5leHBvcnRzLnVuc3VwcG9ydGVkID0gdW5zdXBwb3J0ZWQ7XG5mdW5jdGlvbiB1bnN1cHBvcnRlZChvYmplY3Qpe1xuICByZXR1cm4gb2JqZWN0ICYmXG4gICAgdHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBvYmplY3QubGVuZ3RoID09ICdudW1iZXInICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsICdjYWxsZWUnKSB8fFxuICAgIGZhbHNlO1xufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUFVTSCA9ICdQVVNIJztcblxuZXhwb3J0cy5QVVNIID0gUFVTSDtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gKi9cbnZhciBSRVBMQUNFID0gJ1JFUExBQ0UnO1xuXG5leHBvcnRzLlJFUExBQ0UgPSBSRVBMQUNFO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICogYXMgdXNpbmcgYSBicm93c2VyJ3MgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYW5kL29yIG1hbnVhbGx5IG1hbmlwdWxhdGluZ1xuICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dFdmVudEhhbmRsZXJzL29ucG9wc3RhdGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgUE9QID0gJ1BPUCc7XG5cbmV4cG9ydHMuUE9QID0gUE9QO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBQVVNIOiBQVVNILFxuICBSRVBMQUNFOiBSRVBMQUNFLFxuICBQT1A6IFBPUFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9vcEFzeW5jID0gbG9vcEFzeW5jO1xuXG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDA7XG4gIHZhciBpc0RvbmUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGN1cnJlbnRUdXJuIDwgdHVybnMpIHtcbiAgICAgIHdvcmsuY2FsbCh0aGlzLCBjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn0iLCIvKmVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbmV4cG9ydHMucmVhZFN0YXRlID0gcmVhZFN0YXRlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgS2V5UHJlZml4ID0gJ0BASGlzdG9yeS8nO1xudmFyIFF1b3RhRXhjZWVkZWRFcnJvciA9ICdRdW90YUV4Y2VlZGVkRXJyb3InO1xudmFyIFNlY3VyaXR5RXJyb3IgPSAnU2VjdXJpdHlFcnJvcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIEtleVByZWZpeCArIGtleTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKGtleSwgc3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVhdGVLZXkoa2V5KSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gUXVvdGFFeGNlZWRlZEVycm9yICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFNhZmFyaSBcInByaXZhdGUgbW9kZVwiIHRocm93cyBRdW90YUV4Y2VlZGVkRXJyb3IuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgaW4gU2FmYXJpIHByaXZhdGUgbW9kZScpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZFN0YXRlKGtleSkge1xuICB2YXIganNvbiA9IHVuZGVmaW5lZDtcbiAgdHJ5IHtcbiAgICBqc29uID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlYXRlS2V5KGtleSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gcmVhZCBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBpbnZhbGlkIEpTT04uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdvID0gZ287XG5leHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBnZXRVc2VyQ29uZmlybWF0aW9uO1xuZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBzdXBwb3J0c0hpc3Rvcnk7XG5leHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2g7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBGSVhNRTogV29yayBhcm91bmQgb3VyIGJyb3dzZXIgaGlzdG9yeSBub3Qgd29ya2luZyBjb3JyZWN0bHkgb24gQ2hyb21lXG4gIC8vIGlPUzogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvMjU2NVxuICBpZiAodWEuaW5kZXhPZignQ3JpT1MnKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHVhLmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5leHBvcnRzLmNhblVzZURPTSA9IGNhblVzZURPTTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRE9NU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9ET01TdGF0ZVN0b3JhZ2UnKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVET01IaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVET01IaXN0b3J5KTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgSFRNTDUncyBoaXN0b3J5IEFQSVxuICogKHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50KSB0byBtYW5hZ2UgaGlzdG9yeS5cbiAqIFRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIG1ldGhvZCBvZiBtYW5hZ2luZyBoaXN0b3J5IGluIGJyb3dzZXJzIGJlY2F1c2VcbiAqIGl0IHByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICpcbiAqIE5vdGU6IEluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGZ1bGxcbiAqIHBhZ2UgcmVsb2FkcyB3aWxsIGJlIHVzZWQgdG8gcHJlc2VydmUgVVJMcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGZvcmNlUmVmcmVzaCA9IG9wdGlvbnMuZm9yY2VSZWZyZXNoO1xuXG4gIHZhciBpc1N1cHBvcnRlZCA9IF9ET01VdGlscy5zdXBwb3J0c0hpc3RvcnkoKTtcbiAgdmFyIHVzZVJlZnJlc2ggPSAhaXNTdXBwb3J0ZWQgfHwgZm9yY2VSZWZyZXNoO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGUgfHwgd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG5cbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRXaW5kb3dQYXRoKCk7XG4gICAgdmFyIF9oaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGU7XG4gICAgdmFyIGtleSA9IF9oaXN0b3J5U3RhdGUua2V5O1xuXG4gICAgdmFyIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHN0YXRlID0gX0RPTVN0YXRlU3RvcmFnZS5yZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGhpc3RvcnlTdGF0ZSwgeyBrZXk6IGtleSB9KSwgbnVsbCwgcGF0aCk7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihfcmVmKSB7XG4gICAgdmFyIHRyYW5zaXRpb25UbyA9IF9yZWYudHJhbnNpdGlvblRvO1xuXG4gICAgZnVuY3Rpb24gcG9wU3RhdGVMaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICAgICAgdHJhbnNpdGlvblRvKGdldEN1cnJlbnRMb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICAgIH1cblxuICAgIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3BvcHN0YXRlJywgcG9wU3RhdGVMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoVHJhbnNpdGlvbihsb2NhdGlvbikge1xuICAgIHZhciBiYXNlbmFtZSA9IGxvY2F0aW9uLmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuICAgIHZhciBhY3Rpb24gPSBsb2NhdGlvbi5hY3Rpb247XG4gICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGUoa2V5LCBzdGF0ZSk7XG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG4gICAgdmFyIGhpc3RvcnlTdGF0ZSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGlmICh1c2VSZWZyZXNoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aDtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUkVQTEFDRVxuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBsb2NhdGlvbiB1cGRhdGUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIG51bGwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlRE9NSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZVxuICB9KSk7XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwLFxuICAgICAgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZShsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIGhpc3RvcnkucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBoaXN0b3J5LnVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcblxuICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiByZWdpc3RlclRyYW5zaXRpb25Ib29rLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdET00gaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKCdkZWVwLWVxdWFsJyk7XG5cbnZhciBfZGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBFcXVhbCk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24yKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxudmFyIF9kZXByZWNhdGUgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZScpO1xuXG52YXIgX2RlcHJlY2F0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21LZXkobGVuZ3RoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiZcbiAgLy9hLmFjdGlvbiA9PT0gYi5hY3Rpb24gJiYgLy8gRGlmZmVyZW50IGFjdGlvbiAhPT0gbG9jYXRpb24gY2hhbmdlLlxuICBhLmtleSA9PT0gYi5rZXkgJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShhLnN0YXRlLCBiLnN0YXRlKTtcbn1cblxudmFyIERlZmF1bHRLZXlMZW5ndGggPSA2O1xuXG5mdW5jdGlvbiBjcmVhdGVIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgZ2V0Q3VycmVudExvY2F0aW9uID0gb3B0aW9ucy5nZXRDdXJyZW50TG9jYXRpb247XG4gIHZhciBmaW5pc2hUcmFuc2l0aW9uID0gb3B0aW9ucy5maW5pc2hUcmFuc2l0aW9uO1xuICB2YXIgc2F2ZVN0YXRlID0gb3B0aW9ucy5zYXZlU3RhdGU7XG4gIHZhciBnbyA9IG9wdGlvbnMuZ287XG4gIHZhciBrZXlMZW5ndGggPSBvcHRpb25zLmtleUxlbmd0aDtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBvcHRpb25zLmdldFVzZXJDb25maXJtYXRpb247XG5cbiAgaWYgKHR5cGVvZiBrZXlMZW5ndGggIT09ICdudW1iZXInKSBrZXlMZW5ndGggPSBEZWZhdWx0S2V5TGVuZ3RoO1xuXG4gIHZhciB0cmFuc2l0aW9uSG9va3MgPSBbXTtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgIHRyYW5zaXRpb25Ib29rcy5wdXNoKGhvb2spO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyYW5zaXRpb25Ib29rcyA9IHRyYW5zaXRpb25Ib29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFsbEtleXMgPSBbXTtcbiAgdmFyIGNoYW5nZUxpc3RlbmVycyA9IFtdO1xuICB2YXIgbG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgICBpZiAocGVuZGluZ0xvY2F0aW9uICYmIHBlbmRpbmdMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihwZW5kaW5nTG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKGxvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihuZXdMb2NhdGlvbikge1xuICAgIHZhciBjdXJyZW50ID0gZ2V0Q3VycmVudCgpO1xuXG4gICAgbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcblxuICAgIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGFsbEtleXMgPSBbXS5jb25jYXQoYWxsS2V5cy5zbGljZSgwLCBjdXJyZW50ICsgMSksIFtsb2NhdGlvbi5rZXldKTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUkVQTEFDRSkge1xuICAgICAgYWxsS2V5c1tjdXJyZW50XSA9IGxvY2F0aW9uLmtleTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGNoYW5nZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2xvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICBhbGxLZXlzID0gW19sb2NhdGlvbi5rZXldO1xuICAgICAgdXBkYXRlTG9jYXRpb24oX2xvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlTGlzdGVuZXJzID0gY2hhbmdlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBfQXN5bmNVdGlscy5sb29wQXN5bmModHJhbnNpdGlvbkhvb2tzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICBfcnVuVHJhbnNpdGlvbkhvb2syWydkZWZhdWx0J10odHJhbnNpdGlvbkhvb2tzW2luZGV4XSwgbG9jYXRpb24sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgZG9uZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGlmIChnZXRVc2VyQ29uZmlybWF0aW9uICYmIHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGZ1bmN0aW9uIChvaykge1xuICAgICAgICAgIGNhbGxiYWNrKG9rICE9PSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZSAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBlbmRpbmdMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uVG8obmV4dExvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uc0FyZUVxdWFsKGxvY2F0aW9uLCBuZXh0TG9jYXRpb24pKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBwZW5kaW5nTG9jYXRpb24gPSBuZXh0TG9jYXRpb247XG5cbiAgICBjb25maXJtVHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAocGVuZGluZ0xvY2F0aW9uICE9PSBuZXh0TG9jYXRpb24pIHJldHVybjsgLy8gVHJhbnNpdGlvbiB3YXMgaW50ZXJydXB0ZWQuXG5cbiAgICAgIGlmIChvaykge1xuICAgICAgICAvLyB0cmVhdCBQVVNIIHRvIGN1cnJlbnQgcGF0aCBsaWtlIFJFUExBQ0UgdG8gYmUgY29uc2lzdGVudCB3aXRoIGJyb3dzZXJzXG4gICAgICAgIGlmIChuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICAgICAgdmFyIHByZXZQYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICAgICAgdmFyIG5leHRQYXRoID0gY3JlYXRlUGF0aChuZXh0TG9jYXRpb24pO1xuXG4gICAgICAgICAgaWYgKG5leHRQYXRoID09PSBwcmV2UGF0aCkgbmV4dExvY2F0aW9uLmFjdGlvbiA9IF9BY3Rpb25zLlJFUExBQ0U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pICE9PSBmYWxzZSkgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJhbmRvbUtleShrZXlMZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiBsb2NhdGlvbjtcblxuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gICAgdmFyIHJlc3VsdCA9IHBhdGhuYW1lO1xuXG4gICAgaWYgKHNlYXJjaCkgcmVzdWx0ICs9IHNlYXJjaDtcblxuICAgIGlmIChoYXNoKSByZXN1bHQgKz0gaGFzaDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgLy93YXJuaW5nKFxuICAgICAgLy8gIGZhbHNlLFxuICAgICAgLy8gICdUaGUgc3RhdGUgKDJuZCkgYXJndW1lbnQgdG8gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICtcbiAgICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgICAgLy8pXG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10obG9jYXRpb24pO1xuXG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgICBhY3Rpb24gPSBrZXk7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbM10gfHwgY3JlYXRlS2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjNbJ2RlZmF1bHQnXShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpO1xuICAgICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGdldEN1cnJlbnRMb2NhdGlvbigpLCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpIHtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbi5zdGF0ZSwgc3RhdGUpO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Ib29rcy5pbmRleE9mKGhvb2spID09PSAtMSkgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcHVzaChfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmVwbGFjZShfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHRyYW5zaXRpb25UbzogdHJhbnNpdGlvblRvLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY3JlYXRlS2V5OiBjcmVhdGVLZXksXG4gICAgY3JlYXRlUGF0aDogY3JlYXRlUGF0aCxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIGNyZWF0ZUxvY2F0aW9uOiBjcmVhdGVMb2NhdGlvbixcblxuICAgIHNldFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHNldFN0YXRlLCAnc2V0U3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIGxvY2F0aW9uLmtleSB0byBzYXZlIHN0YXRlIGluc3RlYWQnKSxcbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICdyZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXSh1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICd1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgcHVzaFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHB1c2hTdGF0ZSwgJ3B1c2hTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcHVzaCBpbnN0ZWFkJyksXG4gICAgcmVwbGFjZVN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlcGxhY2VTdGF0ZSwgJ3JlcGxhY2VTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcmVwbGFjZSBpbnN0ZWFkJylcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgdmFyIGxvY2F0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzFdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgX2ZvdXJ0aEFyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgLy93YXJuaW5nKFxuICAgIC8vICBmYWxzZSxcbiAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBjcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICtcbiAgICAvLyAgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCdcbiAgICAvLylcblxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICBhY3Rpb24gPSBrZXkgfHwgX0FjdGlvbnMuUE9QO1xuICAgIGtleSA9IF9mb3VydGhBcmc7XG4gIH1cblxuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2ggfHwgJyc7XG4gIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaCB8fCAnJztcbiAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGUgfHwgbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBrZXk6IGtleVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVMb2NhdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBkZXByZWNhdGUoZm4pIHtcbiAgcmV0dXJuIGZuO1xuICAvL3JldHVybiBmdW5jdGlvbiAoKSB7XG4gIC8vICB3YXJuaW5nKGZhbHNlLCAnW2hpc3RvcnldICcgKyBtZXNzYWdlKVxuICAvLyAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgLy99XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZGVwcmVjYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL15odHRwcz86XFwvXFwvW15cXC9dKi8pO1xuXG4gIGlmIChtYXRjaCA9PSBudWxsKSByZXR1cm4gc3RyaW5nO1xuXG4gIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXh0cmFjdFBhdGg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9leHRyYWN0UGF0aCA9IHJlcXVpcmUoJy4vZXh0cmFjdFBhdGgnKTtcblxudmFyIF9leHRyYWN0UGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRyYWN0UGF0aCk7XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IF9leHRyYWN0UGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShwYXRoID09PSBwYXRobmFtZSwgJ0EgcGF0aCBtdXN0IGJlIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCBvbmx5LCBub3QgYSBmdWxseSBxdWFsaWZpZWQgVVJMIGxpa2UgXCIlc1wiJywgcGF0aCkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgaWYgKHBhdGhuYW1lID09PSAnJykgcGF0aG5hbWUgPSAnLyc7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaFxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBwYXJzZVBhdGg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rKGhvb2ssIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gIGlmIChob29rLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBBc3N1bWUgdGhlIGhvb2sgcnVucyBzeW5jaHJvbm91c2x5IGFuZCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHJlc3VsdCA9PT0gdW5kZWZpbmVkLCAnWW91IHNob3VsZCBub3QgXCJyZXR1cm5cIiBpbiBhIHRyYW5zaXRpb24gaG9vayB3aXRoIGEgY2FsbGJhY2sgYXJndW1lbnQ7IGNhbGwgdGhlIGNhbGxiYWNrIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBydW5UcmFuc2l0aW9uSG9vaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iXX0=