const IBM_BLUE = '#124596';
const IBM_GRAY = "#7a7a7a";
const MAIN_PURPLE = "#d84dff";
const BUTTON_PURPLE = "#b907eb";
const LIGHT_PURPLE = "#dd6afc"
const MAIN_GRAY = "#333333";
const LIGHT_GRAY = "#ccc";
const MENU_BAR_GRAY = "#dbdbdb";
const OFF_WHITE = "#eee";
const CONSOLE_GREEN = "#46be0f";
const CONSOLE_ORANGE = "#be870f";
const CONSOLE_ERROR = "#ff3037";
const LIGHT_TEAL = "#4fd3d3";


export const theme = {
	main_purple: MAIN_PURPLE,
	button_purple: BUTTON_PURPLE,
	light_purple: LIGHT_PURPLE,
	main_gray: MAIN_GRAY,
	console_green: CONSOLE_GREEN,
	console_orange: CONSOLE_ORANGE,
	console_error: CONSOLE_ERROR,
	light_teal: LIGHT_TEAL,
};

export const gameLight = {
	name: "game-light",
	colors: {
		loading_screen_text: OFF_WHITE,
		loading_screen_color: IBM_BLUE,
		screen_color: OFF_WHITE,
		menu_bar_color: IBM_BLUE,
		menu_items_color: "white",
		drop_down_text: "white",
		text_color: "black",
		status_color: IBM_BLUE,
		options_color: "white",
		options_highlight: IBM_GRAY,
		input_text_color: "white",
		input_highlight: IBM_BLUE,
		error_color: CONSOLE_ERROR,
		error_highlight: "none",
		modal_bg_color: LIGHT_GRAY,
		modal_dismiss_btn: IBM_BLUE,
		modal_dismiss_text_color: "white",
	}
}
export const gameDark = {
	name: "game-dark",
	colors: {
		loading_screen_text: CONSOLE_GREEN,
		loading_screen_color: "black",
		screen_color: "black",
		menu_bar_color: MENU_BAR_GRAY,
		menu_items_color: "black",
		drop_down_text: "black",
		text_color: "white",
		status_color: CONSOLE_GREEN,
		options_color: CONSOLE_GREEN,
		options_highlight: "none",
		input_text_color: "black",
		input_highlight: CONSOLE_GREEN,
		error_color: "white",
		error_highlight: CONSOLE_ERROR,
		modal_bg_color: MAIN_GRAY,
		modal_dismiss_btn: CONSOLE_GREEN,
		modal_dismiss_text_color: "black",
	}
}
