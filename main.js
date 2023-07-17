console.log("hi I am linked correctly");

const blogPostData = [];

function createBlogPost(blogPost, index) {
	const postContainer = document.createElement("div");
	postContainer.classList.add("blog-post");

	const titleElement = document.createElement("h2");
	titleElement.textContent = blogPost.title;
	postContainer.appendChild(titleElement);

	const contentElement = document.createElement("p");
	contentElement.textContent = blogPost.content;
	postContainer.appendChild(contentElement);

	const authorElement = document.createElement("h3");
	authorElement.textContent = `by ${blogPost.author}`;
	postContainer.appendChild(authorElement);

	const blogContainer = document.querySelector(".blog-post-1");
	const blogContainer2 = document.querySelector(".blog-post-2");

	if (index % 2 === 0) {
		blogContainer.appendChild(postContainer);
	} else {
		blogContainer2.appendChild(postContainer);
	}
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

	createBlogPost(newBlogPost, blogPostData.length - 1);

	titleInput.value = "";
	contentInput.value = "";
	authorInput.value = "";
}

const form = document.querySelector(".input-container");
form.addEventListener("submit", handleFormSubmit);

function handleFormDisplay() {
	const header = document.querySelector(".header");
	const form = document.querySelector(".input-container");
	header.addEventListener("click", () => {
		form.classList.toggle("view");
	});
}
handleFormDisplay();
