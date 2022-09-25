const tabsContentMine = document.querySelectorAll(
	"#features > article > section"
);

const sections = document.querySelectorAll("article > section");

const links = document.querySelectorAll(".center a");

// for (let section of sections) {
// 	section.style.display = "none";
// }
// sections[0].style.display = "block";
// links[0].classList.add("is-selected");

for (let link of links) {
	console.log(link.getAttribute("id"));
	link.addEventListener("click", (event) => {
		event.preventDefault();

		for (let section of sections) {
			if (section.getAttribute("data-id") === link.getAttribute("id")) {
				section.style.display = "block";
				event.target.classList.add("is-selected");
			} else {
				section.style.display = "none";
			}
		}
	});
}
// $(function () {
// 	var tabs = $("#features > nav a");
// 	var tabsContent = $("#features > article > section");

// 	tabs.click(function (e) {
// 		e.preventDefault();

// 		var that = $(this);

// 		tabs.removeClass("is-selected");
// 		that.addClass("is-selected");
// 		tabsContent.removeClass("is-selected");

// 		tabsContent
// 			.filter((i, tab) => $(tab).data("id") === that.data("id"))
// 			.addClass("is-selected");
// 	});
// });
