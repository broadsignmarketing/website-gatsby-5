type ColorSwatch = { id: string; name: string; code: string }
type OverUnder = "under" | "over" | "exactly"
type StringType = "formID" | "sfCampaignID" | "youtubeID"
type SortBy = "name" | "timestamp"
type SortDir = "asc" | "desc"

interface formatDateProps {
	date: string
	lang: string
	time: string
	showDay: boolean
	showYear: boolean
	timezone: string
}

const annex = {
	blogPostSlug: (slug: string, lang: string = "en"): string => {
		if (!slug) {
			console.error(`blogPostSlug() : invalid slug "${slug}"`)
			return ""
		}

		let out = slug.replace(/\/$/, "")

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

			out = `/resources/${out.replace(/^\//, "")}`
		}

		return out
	},

	loopTo: (dir: string, currentIndex: number, maxIndex: number) => {
		if (dir === "next") {
			return (currentIndex + 1) % maxIndex
		}
		if (dir === "prev" || dir === "previous") {
			return (currentIndex - 1 + maxIndex) % maxIndex
		}
		return false
	},

	clamp: (
		_min: number | string,
		_num: number | string,
		_max: number | string
	): number => {
		const min: number = parseInt(_min as string)
		const num: number = parseInt(_num as string)
		const max: number = parseInt(_max as string)
		return Math.min(Math.max(min, num), max)
	},

	empty: (variable: unknown): boolean => {
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

	excerpt: (string: string, maxLength: number = 60): string => {
		const maxChars: number = string.indexOf(" ", maxLength)
		if (maxChars > 0 && maxChars < string.length) {
			string =
				string
					.slice(0, maxChars) // Strip down to max length
					.replace(/(.+)\.$/g, "$1") + // Remove trailing period, if any
				"..."
		}
		return string
	},

	formatDate: ({
		date,
		lang = "en",
		time = "00:00",
		showDay = false,
		showYear = true,
		timezone = "ET",
	}: formatDateProps): string => {
		if (!date.match(/(\d{4}-\d{2}-\d{2}|TBD)/)) {
			console.error(
				`Function formatDate(date, lang="en", time="00:00") : Argument 'date' should be a String in the form 'YYYY-MM-DD' or 'TBD' (received '${date}')`
			)
			return ""
		}

		if (!time.match(/\d{2}:\d{2}/)) {
			console.error(
				`Function formatDate(date, lang="en", time="00:00") : Argument 'time' should be a String in the form 'HH:MM' (received '${time}')`
			)
			return ""
		}

		if (String(date).toUpperCase() === "TBD") {
			return "TBD"
		}

		const tzoffset: number = new Date().getTimezoneOffset() * 60000
		const d: Date = new Date(new Date(date).getTime() + tzoffset)
		const day: string = String(d.getDate())
		const month: string = d.toLocaleString(lang, { month: "long" })
		const year: string = String(d.getFullYear())

		let dayOfWeek = ""
		if (showDay) {
			dayOfWeek = d.toLocaleString(lang, { weekday: "long" })
		}

		const t: string[] = time.match(/(\d{2}):(\d{2})/)
		let hours: number = parseInt(t[1])
		let minutes: number = parseInt(t[2])

		let ampm: string = hours >= 12 ? "PM" : "AM"
		hours = hours % 12 === 0 ? 12 : hours % 12

		let out = ""

		if (lang === "fr") {
			timezone = "HE"
		}
		switch (lang) {
			case "es":
				if (showDay) {
					out += `${dayOfWeek}, `
				}
				out += `${day} de ${month}`
				if (showYear) {
					out += ` de ${year}`
				}
				if (time !== "00:00") {
					out += ` a las ${hours}:${minutes}`
				}
				break
			case "fr":
				if (showDay) {
					out += `${dayOfWeek}, `
				}
				out += `${day} ${month}`
				if (showYear) {
					out += ` ${year}`
				}
				if (time !== "00:00") {
					out += ` à ${hours}:${minutes} ${timezone}`
				}
				break
			case "en":
			default:
				if (showDay) {
					out += `${dayOfWeek}, `
				}
				out += `${month} ${day}`
				if (showYear) {
					out += `, ${year}`
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

	/* getTranslations: (path: string): object => {
		if (path.match(/key\//)) {
			path = path.replace("key/", "en/");
			console.warn(`@annex : The path to translation file for ${path} had "key" as a language ; defaulting to "en"`);
		}

		try {
			return require(`../i18n/${path}.json`);
		} catch (e) {
			console.warn(`@annex : No translation file found for : ${path} ; resorting to global`);
			try {
				console.log(require(`../i18n/en/global.json`));
				return require(`../i18n/en/global.json`);
			} catch (e) {
				console.error(`@annex : No global translation file found for : ${path}`);
			}
		}

		return {};
	}, */

	hasCommonValue: (array1: string[], array2: string[]) => {
		for (let el of array1) {
			if (array2.includes(el)) {
				return true
			}
		}
		return false
	},

	htmlChars: (str: string) => {
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

	iMatch: (str1: string, str2: string): boolean => {
		// Normalization function taken from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
		const formattedStr1 = str1
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
		const formattedStr2 = str2
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

	isMobile: (): boolean => {
		// Formula from https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
		let hasTouchScreen: boolean = false

		if ("maxTouchPoints" in navigator) {
			hasTouchScreen = navigator.maxTouchPoints > 0
		} else if ("msMaxTouchPoints" in navigator) {
			hasTouchScreen = navigator["msMaxTouchPoints"] > 0
		} else {
			const mQ: MediaQueryList =
				window.matchMedia && matchMedia("(pointer:coarse)")
			if (mQ && mQ.media === "(pointer:coarse)") {
				hasTouchScreen = !!mQ.matches
			} else if ("orientation" in window) {
				hasTouchScreen = true // deprecated, but good fallback
			} else {
				// Only as a last resort, fall back to user agent sniffing
				const UA: string = navigator.userAgent
				hasTouchScreen =
					/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
					/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
			}
		}

		return hasTouchScreen
	},

	isScreenSize: (op: OverUnder, whatSize: string): boolean => {
		// Inclusively (for isScreenSizeOver("sm"), will return true on sm and under)
		const breakpoints = {
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

	palette: (): ColorSwatch[] => {
		let out = [
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

	pathRegExp: (path: string): RegExp => {
		return new RegExp(`^/?${path.replace(/^\/|\/$/g, "")}/?$`)
	},

	sanitizePath: (path: string): string => {
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
			const decomposePath: any = path.match(
				/(?<dPath>.+)(?<dSeparator>[#?])(?<dQuery>.+)/
			)
			const { dPath, dQuery, dSeparator } = decomposePath.groups

			if (dPath && dQuery && dSeparator) {
				return removeUnwantedSlashes(`/${dPath}`) + dSeparator + dQuery
			}
		}

		return removeUnwantedSlashes(`/${path}`)
	},

	screenSize: (): string => {
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

	slugify: (str: string, preferredChar: string = "-"): string => {
		return str.replace(/(\s|_|-)/g, preferredChar).toLowerCase()
	},

	shuffle: (arr: Array<unknown>): Array<unknown> => {
		let j: number, i: number, x: unknown
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1))
			x = arr[i]
			arr[i] = arr[j]
			arr[j] = x
		}
		return arr
	},

	sortBy(
		initialObject: object | Array<object>,
		sortBy: SortBy = "name",
		sortDir: SortDir = "asc"
	): Array<object> {
		let out: object[] = []

		if (typeof initialObject === "object") {
			out = Object.entries(initialObject).map(e => ({
				...e[1],
				key: e[0],
			}))
		} else {
			out = initialObject
		}

		if (out.length > 0) {
			out.sort(function (a, b): number {
				if (!a[sortBy]) {
					console.error(
						`Error : Trying to sort by ${sortBy} ; Object ${a} doesn't have a "${sortBy}" attribute.`
					)
					return 0
				}

				const nameA = `${a[sortBy]}`.toLowerCase(),
					nameB = `${b[sortBy]}`.toLowerCase()

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

	strIs(str: string, is: StringType): boolean {
		let regex = /./
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
