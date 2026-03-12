import {
  app,
  auth,
  db,
  // storage,
  //
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  //
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  serverTimestamp,
  //
  // ref,
  // uploadBytes,
  // getDownloadURL,
} from "./firebaseConfig.js";
const colRef = collection(db, "posts");

// READ /////////////////////////////////////////////////
// getDocs(colRef)
//   .then((snapshot) => {
//     let posts = [];
//     snapshot.docs.forEach((doc) => {
//       posts.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(posts);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function fetchPosts() {
//   try {
//     const snapshot = await getDocs(colRef);
//     let posts = [];
//     snapshot.docs.forEach((doc) => {
//       posts.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(posts);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchPosts();
async function fetchPosts() {
  try {
    const snapshot = await getDocs(colRef);

    let posts = [];

    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });

    displayPosts(posts);
  } catch (error) {
    console.log(error);
  }
}

function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  postList.innerHTML = "";

  posts.forEach((post) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.des}</p>
      <small>ID: ${post.id}</small>
    `;

    postList.appendChild(li);
  });
}

fetchPosts();
// CREATE //////////////////////////////////////////////////////
// const addPost = document.querySelector(".add");
// addPost &&
//   addPost.addEventListener("submit", (e) => {
//     e.preventDefault();
//     addDoc(colRef, {
//       name: addPost.name.value,
//       title: addPost.title.value,
//       des: addPost.des.value,
//       createAt: serverTimestamp(),
//     })
//       .then(() => {
//         addPost.reset();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });

addPost &&
  addPost.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await addDoc(colRef, {
        name: addPost.name.value,
        title: addPost.title.value,
        des: addPost.des.value,
        createAt: serverTimestamp(),
      });
      addPost.reset();
    } catch (error) {
      console.log(error);
    }
  });

// UPDATE //////////////////////////////////////////////////////////
const updatePost = document.querySelector(".update");
updatePost &&
  updatePost.addEventListener("submit", (e) => {
    e.preventDefault();
    let docRef = doc(db, "posts", deletePost.id.value);
    updateDoc(docRef, {
      name: updatePost.name.value,
      title: updatePost.title.value,
      des: updatePost.des.value,
      createAt: serverTimestamp(),
    })
      .then(() => {
        updatePost.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  });

updatePost &&
  updatePost.addEventListener("submit", async (e) => {
    e.preventDefault();
    let docRef = doc(db, "posts", updatePost.id.value);
    try {
      await updateDoc(docRef, {
        name: updatePost.name.value,
        title: updatePost.title.value,
        des: updatePost.des.value,
        createAt: serverTimestamp(),
      });
      updatePost.reset();
    } catch (error) {
      console.log(error);
    }
  });

// DELETE //////////////////////////////////////////////////////////
const deletePost = document.querySelector(".delete");
deletePost &&
  deletePost.addEventListener("submit", (e) => {
    e.preventDefault();
    let docRef = doc(db, "posts", deletePost.id.value);
    deleteDoc(docRef)
      .then(() => {
        updatePost.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  });

deletePost &&
  deletePost.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      let docRef = doc(db, "posts", deletePost.id.value);
      await deleteDoc(docRef);
      updatePost.reset();
    } catch (error) {
      console.log(error);
    }
  });

///////////////SEARCH/////////////////////////////
const searchItem = document.querySelector(".search");
const docSearch = doc(db, "posts", searchItem.search.value);
getDoc(docSearch)
  .then((doc) => {
    console.log(doc.data(), doc.id);
  })
  .catch((error) => {
    console.log(error);
  });
