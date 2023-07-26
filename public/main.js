

console.log("hi I am linked correctly");

const blogPostData = [];
let blogPostCounter = 0;

// Hide initial blog post containers
const initialContainers = document.querySelectorAll(
	".blog-post-container, .blog-post-container-2"
);
initialContainers.forEach((container) => {
	container.style.display = "none";
});

function createBlogPost(blogPost) {
	const postContainer = document.createElement("div");
	postContainer.classList.add(
		blogPostCounter % 2 === 0 ? "blog-post-1" : "blog-post-2"
	);

	const titleElement = document.createElement("h2");
	titleElement.textContent = blogPost.title;
	postContainer.appendChild(titleElement);

	const contentElement = document.createElement("p");
	contentElement.textContent = blogPost.content;
	postContainer.appendChild(contentElement);

	const authorElement = document.createElement("h3");
	authorElement.textContent = `by ${blogPost.author}`;
	postContainer.appendChild(authorElement);

	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add('button-container')
	postContainer.appendChild(buttonContainer);
	

	const editPostElement = document.createElement("button");
	editPostElement.textContent = `✍️`;
	buttonContainer.appendChild(editPostElement);

	const deleteElement = document.createElement("button");
	deleteElement.textContent = `🗑️`;
	buttonContainer.appendChild(deleteElement);

	const blogContainer = document.createElement("div");
	blogContainer.classList.add(
		blogPostCounter % 2 === 0 ? "blog-post-container" : "blog-post-container-2"
	);

	const blogBorder = document.createElement("div");
	blogBorder.classList.add(
		blogPostCounter % 2 === 0 ? "blog-post-border" : "blog-post-border-2"
	);
	blogContainer.appendChild(blogBorder);

	blogContainer.appendChild(postContainer);

	const blogContainers = document.querySelectorAll(".blog-container");
	const lastBlogContainer = blogContainers[blogContainers.length - 1];
	lastBlogContainer.appendChild(blogContainer);

	blogPostCounter++;
}

function handleFormSubmit(event) {
	event.preventDefault();

	const titleInput = document.getElementById("post-title");
	const contentInput = document.getElementById("post-content");
	const authorInput = document.getElementById("username");

	const newBlogPost = {
		title: titleInput.value,
		content: contentInput.value,
		author: authorInput.value,
	};

	blogPostData.push(newBlogPost);

	createBlogPost(newBlogPost);

	titleInput.value = "";
	contentInput.value = "";
	authorInput.value = "";
}

const form = document.querySelector(".input-container");
form.addEventListener("submit", handleFormSubmit);

function handleFormDisplay() {
	const header = document.querySelector(".header");
	const submit = document.querySelector(".button");
	const form = document.querySelector(".input-container");
	submit.addEventListener("click", () => {
		form.classList.toggle("hide-view");
	});
	header.addEventListener("click", () => {
		form.classList.toggle("hide-view");
	});
}
handleFormDisplay();
