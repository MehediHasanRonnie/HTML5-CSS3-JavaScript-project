//dummy data
const posts = [
  {
    title: "this is title 1",
    body: "this is body 1",
  },
  {
    title: "this is title 2",
    body: "this is body 2",
  },
  {
    title: "this is title 3",
    body: "this is body 3",
  },
  {
    title: "this is title 4",
    body: "this is body 4",
  },
];


 //selection

const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
  posts.map((post) => {
    const postElements = document.createElement("div");
    postElements.classList.add("post");
    postElements.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElements);
  });
};
loadAllData();


/* <div class="post">
<h4 class="post-title">post title 1</h4>
<p class="post-body">post description1</p>
</div> */

//fetch data fro api
// const fecthData = async (config) => {
//   try {
//     const res = await axios(config);
//     return res.data;
//   } catch (error) {
//     throw Error("data is not fetched");
//   }
// };
