const imageContainer = document.querySelector('.image');
const h1 = document.querySelector('h1');

const text = document.querySelector('.text');
const bottom = document.querySelector('.bottom');

const updateContent = () => {
	imageContainer.innerHTML = `<img
    src="https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    alt=""
/>`;
	h1.innerHTML = 'Lorem ipsum dolor sit amet';
	text.innerHTML =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.';
	bottom.innerHTML = `<div class="portrait-image">
        <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt=""
        />
    </div>
    <div class="text-div">
        <h2>Jane Doe</h2>
        <p class="date"><time datetime="2023-07-15">July 15, 2023</time></p>
    </div>`;
};

setTimeout(() => {
	// Your function code here
	updateContent();
}, 2000);
