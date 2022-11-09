var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i]
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p))
							t[p] = s[p]
				}
				return t
			}
		return __assign.apply(this, arguments)
	}
var annex = {
	blogPostSlug: function (slug, lang) {
		if (lang === void 0) {
			lang = "en"
		}
		if (!slug) {
			console.error('blogPostSlug() : invalid slug "'.concat(slug, '"'))
			return ""
		}
		var out = slug.replace(/\/$/, "")
		if (slug.match("resources.broadsign.com")) {
			out = slug.replace(/^\/?resources\/?/, "")
		} else if (
			slug.match(/^https:\/\/broadsign.com\/resources/) ||
			slug.match("broadsign.uberflip.com")
		) {
			out = slug.replace(
				/(https?:\/\/broadsign.com\/|https?:\/\/broadsign.uberflip.com\/)/,
				"https://resources.broadsign.com/"
			)
		} else {
			if (lang.length > 2) {
				lang = lang.slice(0, 2)
			}
			out = "/resources/".concat(out.replace(/^\//, ""))
		}
		return out
	},
	loopTo: function (dir, currentIndex, maxIndex) {
		if (dir === "next") {
			return (currentIndex + 1) % maxIndex
		}
		if (dir === "prev" || dir === "previous") {
			return (currentIndex - 1 + maxIndex) % maxIndex
		}
		return false
	},
	clamp: function (_min, _num, _max) {
		var min = parseInt(_min)
		var num = parseInt(_num)
		var max = parseInt(_max)
		return Math.min(Math.max(min, num), max)
	},
	empty: function (variable) {
		// Checks if a variable is "falsy" : null, undefined, empty string, empty array. Boolean "false" doesn't count as "empty" here.
		if (typeof variable === "boolean") {
			return false
		} else if (variable) {
			if (typeof variable === "undefined") {
				return true
			}
			if (
				(typeof variable === "object" &&
					Object.values(variable).length === 0) ||
				(variable instanceof Array && variable.length === 0)
			) {
				return true
			}
			if (variable === "") {
				return true
			}
		}
		return false
	},
	excerpt: function (string, maxLength) {
		if (maxLength === void 0) {
			maxLength = 60
		}
		var maxChars = string.indexOf(" ", maxLength)
		if (maxChars > 0 && maxChars < string.length) {
			string =
				string
					.slice(0, maxChars) // Strip down to max length
					.replace(/(.+)\.$/g, "$1") + // Remove trailing period, if any
				"..."
		}
		return string
	},
	formatDate: function (_a) {
		var date = _a.date,
			_b = _a.lang,
			lang = _b === void 0 ? "en" : _b,
			_c = _a.time,
			time = _c === void 0 ? "00:00" : _c,
			_d = _a.showDay,
			showDay = _d === void 0 ? false : _d,
			_e = _a.showYear,
			showYear = _e === void 0 ? true : _e,
			_f = _a.timezone,
			timezone = _f === void 0 ? "ET" : _f
		if (!date.match(/(\d{4}-\d{2}-\d{2}|TBD)/)) {
			console.error(
				"Function formatDate(date, lang=\"en\", time=\"00:00\") : Argument 'date' should be a String in the form 'YYYY-MM-DD' or 'TBD' (received '".concat(
					date,
					"')"
				)
			)
			return ""
		}
		if (!time.match(/\d{2}:\d{2}/)) {
			console.error(
				"Function formatDate(date, lang=\"en\", time=\"00:00\") : Argument 'time' should be a String in the form 'HH:MM' (received '".concat(
					time,
					"')"
				)
			)
			return ""
		}
		if (String(date).toUpperCase() === "TBD") {
			return "TBD"
		}
		var tzoffset = new Date().getTimezoneOffset() * 60000
		var d = new Date(new Date(date).getTime() + tzoffset)
		var day = String(d.getDate())
		var month = d.toLocaleString(lang, { month: "long" })
		var year = String(d.getFullYear())
		var dayOfWeek = ""
		if (showDay) {
			dayOfWeek = d.toLocaleString(lang, { weekday: "long" })
		}
		var t = time.match(/(\d{2}):(\d{2})/)
		var hours = parseInt(t[1])
		var minutes = parseInt(t[2])
		var ampm = hours >= 12 ? "PM" : "AM"
		hours = hours % 12 === 0 ? 12 : hours % 12
		var out = ""
		if (lang === "fr") {
			timezone = "HE"
		}
		switch (lang) {
			case "es":
				if (showDay) {
					out += "".concat(dayOfWeek, ", ")
				}
				out += "".concat(day, " de ").concat(month)
				if (showYear) {
					out += " de ".concat(year)
				}
				if (time !== "00:00") {
					out += " a las ".concat(hours, ":").concat(minutes)
				}
				break
			case "fr":
				if (showDay) {
					out += "".concat(dayOfWeek, ", ")
				}
				out += "".concat(day, " ").concat(month)
				if (showYear) {
					out += " ".concat(year)
				}
				if (time !== "00:00") {
					out += " \u00E0 "
						.concat(hours, ":")
						.concat(minutes, " ")
						.concat(timezone)
				}
				break
			case "en":
			default:
				if (showDay) {
					out += "".concat(dayOfWeek, ", ")
				}
				out += "".concat(month, " ").concat(day)
				if (showYear) {
					out += ", ".concat(year)
				}
				if (time !== "00:00") {
					out += " at "
					if (minutes !== 0) {
						out +=
							hours +
							":" +
							String(minutes).padStart(2, "0") +
							ampm +
							" " +
							timezone
					} else {
						out += hours + ampm + " " + timezone
					}
				}
		}
		return out
	},
	/* getTranslations: function (path) {
        if (path.match(/key\//)) {
            path = path.replace("key/", "en/");
            console.warn("@annex : The path to translation file for ".concat(path, " had \"key\" as a language ; defaulting to \"en\""));
        }
        try {
            return require("../i18n/".concat(path, ".json"));
        }
        catch (e) {
            console.warn("@annex : No translation file found for : ".concat(path, " ; resorting to global"));
            try {
                console.log(require("../i18n/en/global.json"));
                return require("../i18n/en/global.json");
            }
            catch (e) {
                console.error("@annex : No global translation file found for : ".concat(path));
            }
        }
        return {};
    }, */
	hasCommonValue: function (array1, array2) {
		for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
			var el = array1_1[_i]
			if (array2.includes(el)) {
				return true
			}
		}
		return false
	},
	htmlChars: function (str) {
		if (str) {
			str = str.replace(/&#8217;/g, "'")
			str = str.replace(/&#8211;/g, "-")
			str = str.replace(/&#038;/g, "&")
			str = str.replace(/&#039;/g, "'")
			str = str.replace(/&amp;/gi, "&")
			str = str.replace(/&#160;/gi, " ")
			return str
		}
		return ""
	},
	iMatch: function (str1, str2) {
		// Normalization function taken from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
		var formattedStr1 = str1
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
		var formattedStr2 = str2
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
		if (formattedStr1 === formattedStr2) {
			return true
		} else {
			if (formattedStr1 && formattedStr2) {
				if (
					formattedStr1.includes(formattedStr2) ||
					formattedStr2.includes(formattedStr1)
				) {
					return true
				}
			}
		}
		return false
	},
	isMobile: function () {
		// Formula from https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
		var hasTouchScreen = false
		if ("maxTouchPoints" in navigator) {
			hasTouchScreen = navigator.maxTouchPoints > 0
		} else if ("msMaxTouchPoints" in navigator) {
			hasTouchScreen = navigator["msMaxTouchPoints"] > 0
		} else {
			var mQ = window.matchMedia && matchMedia("(pointer:coarse)")
			if (mQ && mQ.media === "(pointer:coarse)") {
				hasTouchScreen = !!mQ.matches
			} else if ("orientation" in window) {
				hasTouchScreen = true // deprecated, but good fallback
			} else {
				// Only as a last resort, fall back to user agent sniffing
				var UA = navigator.userAgent
				hasTouchScreen =
					/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
					/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
			}
		}
		return hasTouchScreen
	},
	isScreenSize: function (op, whatSize) {
		// Inclusively (for isScreenSizeOver("sm"), will return true on sm and under)
		var breakpoints = {
			xs: { min: 0, max: 600 },
			sm: { min: 600, max: 900 },
			md: { min: 900, max: 1088 },
			lg: { min: 1088, max: 1440 },
		}
		if (typeof window !== "undefined") {
			if (
				(op === "under" &&
					window.innerWidth < breakpoints[whatSize].max) ||
				(op === "over" &&
					window.innerWidth >= breakpoints[whatSize].min) ||
				(op === "exactly" &&
					window.innerWidth < breakpoints[whatSize].max &&
					window.innerWidth >= breakpoints[whatSize].min)
			) {
				return true
			}
		}
		return false
	},
	palette: function () {
		var out = [
			{ id: "reflex", name: "Reflex Blue", code: "#001464" },
			{ id: "cerulean", name: "Cerulean", code: "#1056FB" },
			{ id: "scarlet", name: "Scarlet Red", code: "#FF3F3F" },
			{ id: "ash", name: "Ash Grey", code: "#505969" },
			{ id: "soft", name: "Soft Grey", code: "#ECECEC" },
			{ id: "ultra", name: "Ultra-Light Cyan", code: "#E3F7FA" },
			{ id: "light", name: "Light Cyan", code: "#C8F0F5" },
			{ id: "medium", name: "Cyan", code: "#9BE0EB" },
			{ id: "primary", name: "Primary", code: "#001464" },
			{ id: "secondary", name: "Secondary", code: "#1056FB" },
		]
		return out
	},
	pathRegExp: function (path) {
		return new RegExp("^/?".concat(path.replace(/^\/|\/$/g, ""), "/?$"))
	},
	sanitizePath: function (path) {
		function removeUnwantedSlashes(str) {
			return str
				.replace(/\/{2,}/g, "/")
				.replace(/\/$/, "")
				.replace(/^\/http/, "http")
				.replace(/^http:\/([^/])/, "http://$1")
				.replace(/^https:\/([^/])/, "https://$1")
		}
		if (path === "/") {
			return path
		}
		if (path && path.match(/^(#.+|\?.+=.+)/)) {
			return path
		}
		if (path && path.match(/(.+)([#?])(.+)/)) {
			var decomposePath = path.match(
				/(?<dPath>.+)(?<dSeparator>[#?])(?<dQuery>.+)/
			)
			var _a = decomposePath.groups,
				dPath = _a.dPath,
				dQuery = _a.dQuery,
				dSeparator = _a.dSeparator
			if (dPath && dQuery && dSeparator) {
				return (
					removeUnwantedSlashes("/".concat(dPath)) +
					dSeparator +
					dQuery
				)
			}
		}
		return removeUnwantedSlashes("/".concat(path))
	},
	screenSize: function () {
		if (typeof window !== "undefined") {
			if (window.innerWidth < 600) {
				return "xs"
			}
			if (window.innerWidth < 900) {
				return "sm"
			}
			if (window.innerWidth < 1088) {
				return "md"
			}
			if (window.innerWidth < 1440) {
				return "lg"
			}
		}
		return "xl"
	},
	slugify: function (str, preferredChar) {
		if (preferredChar === void 0) {
			preferredChar = "-"
		}
		return str.replace(/(\s|_|-)/g, preferredChar).toLowerCase()
	},
	shuffle: function (arr) {
		var j, i, x
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1))
			x = arr[i]
			arr[i] = arr[j]
			arr[j] = x
		}
		return arr
	},
	sortBy: function (initialObject, sortBy, sortDir) {
		if (sortBy === void 0) {
			sortBy = "name"
		}
		if (sortDir === void 0) {
			sortDir = "asc"
		}
		var out = []
		if (typeof initialObject === "object") {
			out = Object.entries(initialObject).map(function (e) {
				return __assign(__assign({}, e[1]), { key: e[0] })
			})
		} else {
			out = initialObject
		}
		if (out.length > 0) {
			out.sort(function (a, b) {
				if (!a[sortBy]) {
					console.error(
						"Error : Trying to sort by "
							.concat(sortBy, " ; Object ")
							.concat(a, " doesn't have a \"")
							.concat(sortBy, '" attribute.')
					)
					return 0
				}
				var nameA = "".concat(a[sortBy]).toLowerCase(),
					nameB = "".concat(b[sortBy]).toLowerCase()
				if (nameA > nameB) {
					return sortDir === "asc" ? 1 : -1
				}
				if (nameA < nameB) {
					return sortDir === "asc" ? -1 : 1
				}
				return 0
			})
		}
		return out
	},
	strIs: function (str, is) {
		var regex = /./
		if (str && is) {
			switch (is) {
				case "formID":
					regex =
						/^[\w\d]{8}-[\w\d]{4}-[\w\d]{4}-[\w\d]{4}-[\w\d]{12}$/
					break
				case "sfCampaignID":
					regex = /^[\w\d]{18}$/
					break
				case "youtubeID":
					regex = /^[\w\d-_]{11}$/
					break
			}
			if (str.match(regex)) {
				return true
			}
		}
		return false
	},
}
module.exports = annex
