

const valueOption = {
	aps: "All departments",
	"alexa-skills": "Alexa skills",
	"video-instance": "Amazon video",
};

const select = document.querySelector("#nav-search-select");

Object.entries(valueOption).forEach((op) => {
	const option = document.createElement("option");
	option.innerText = op[1];
	option.value = op[0];
	select.appendChild(option);
});

// const options = ["All departments", "Alexa Skills", "Amazon video", "etc..."];
// const values = ["aps", "alexa-skills", "video-instance", "etc"];

// options.forEach((op, i) => {
// 	const option = document.createElement("option");
// 	option.innerText = op;
// 	option.value = values[i];
// 	select.appendChild(option);
// });
