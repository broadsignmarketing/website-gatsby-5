import React, { useEffect, useRef, useState } from "react";
const classnames = require("classnames");

import "@sass/components/Autocomplete.scss";

type AutocompleteOption = {
	label: string;
	value: string;
	default?: boolean;
};

interface AutocompleteProps {
	className?: string;
	clearable?: boolean;
	data: AutocompleteOption[];
	icon?: string;
	id?: string;
	initialValue?: string;
	onChange: Function;
	placeholder?: string;
}

const Autocomplete = ({
	id = "",
	className = "",
	clearable = false,
	data = [],
	icon = "",
	initialValue = "",
	onChange,
	placeholder = "",
}: AutocompleteProps): React.ReactElement => {
	const [currentValue, setCurrentValue] = useState("");
	const [isListVisible, setIsListVisible] = useState(false);
	const [isQueryFieldFocused, setIsQueryFieldFocused] = useState(false);
	const [filteredOptions, setFilteredOptions] = useState(false);

	const queryFieldRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

	useEffect(() => {
		setIsListVisible(isQueryFieldFocused);
	}, [isQueryFieldFocused]);

	useEffect(() => {
		if (initialValue) {
			setCurrentValue(initialValue);
			(queryFieldRef.current as HTMLInputElement).value = initialValue;
		}
	}, [initialValue]);

	useEffect(() => {
		onChange(currentValue);
	}, [currentValue]);

	function handleSelectOption(event: React.MouseEvent, val: string) {
		event.preventDefault();
		setCurrentValue(val);
		(queryFieldRef.current as HTMLInputElement).value = val;
	}

	return (
		<div id={id} className={classnames("Autocomplete", isQueryFieldFocused ? "focused" : "", className)}>
			<div className={classnames("Autocomplete__query_field_wrapper")}>
				<img src={icon} className="Autocomplete__query_field_icon input_field_icon" />
				<input
					ref={queryFieldRef}
					type="text"
					defaultValue={initialValue}
					placeholder={placeholder}
					className={classnames("Autocomplete__query_field", icon === "" ? "" : "with_icon", clearable ? "clearable" : "")}
					onKeyUp={(evt: React.KeyboardEvent) => setCurrentValue((evt.target as HTMLInputElement).value)}
					onFocus={() => setIsQueryFieldFocused(true)}
					onBlur={() => setTimeout(() => setIsQueryFieldFocused(false), 100)}
				/>
				{clearable && currentValue !== "" && (
					<button className="Autocomplete__clear" onClick={(evt: React.MouseEvent) => handleSelectOption(evt, "")}>
						&times;
					</button>
				)}
			</div>
			<div className={classnames("Autocomplete__values_list", isListVisible ? "active" : "")}>
				<div className="inner">
					{data.map((option) => {
						if (option.label.toLowerCase().includes(currentValue.toLowerCase())) {
							return (
								<button
									className="Autocomplete__option"
									key={`option_${option.value}`}
									onClick={(evt: React.MouseEvent) => {
										handleSelectOption(evt, option.label);
									}}>
									{option.label}
								</button>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Autocomplete;
