import "./index.css";
import coverImage from "./images/illustration-article.svg";
import avatar from "./images/image-avatar.webp";
function App() {
  return (
    <div className="App bg-[#F4D04E] w-screen h-screen flex justify-center items-center">
      <div
        id="main-container"
        className="bg-white max-w-[330px] rounded-2xl border-solid border-[1px] border-black p-4 drop-shadow"
      >
        <div id="image-container" className="fit-">
          <img className="rounded-2xl" src={coverImage} alt="image" />
        </div>
        <div id="text-container" className="py-5">
          <button className="bg-[#F4D04E] px-4 py-1 rounded-md font-bold">
            Learning
          </button>
          <p className="py-3">Published 21 Dec 2023</p>
          <h1 className="font-bold text-xl">HTML & CSS foundations</h1>
          <p className="text-wrap py-2">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div id="profile-container" className="flex items-center gap-3">
          <img src={avatar} alt="avatar" width={35} />
          <p className="font-bold text-sm ">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default App;
