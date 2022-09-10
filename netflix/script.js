// $(function () {
// 	var tabs = $("#features > nav a");
// 	var tabsContent = $(" article > section");

// 	tabs.click(function (e) {
// e.preventDefault();
// e.stopPropagation();

// 		var that = $(this);

// 		tabs.removeClass("is-selected");
// 		that.addClass("is-selected");
// 		tabsContent.removeClass("is-selected");

// 		console.log(tabsContent);

// 		tabsContent
// 			.filter((i, tab) => {
// 				console.log($(this).attr("id"));
// 				return $(tab).data("id") === $(this).attr("id");
// 			})
// 			.addClass("is-selected");
// 	});
// });

const tabsContentMine = document.querySelectorAll(
	"#features > article > section"
);

const sections = document.querySelectorAll("article > section");

const links = document.querySelectorAll(".center a");

let sectionAttr = [];

for (let section of sections) {
	section.style.display = "none";
}

for (let link of links) {
	console.log(link.getAttribute("id"));
	link.addEventListener("click", (event) => {
		event.preventDefault();

		for (let section of sections) {
			if (section.getAttribute("data-id") === link.getAttribute("id")) {
				section.style.display = "block";
				link.classList.add("is-selected");
			} else {
				section.style.display = "none";
			}
		}
	});
}
