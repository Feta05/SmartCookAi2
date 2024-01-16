import ChatContainer from "./components/ChatContainer";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 gap-4 md:flex-col md:p-8"
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <div className="">
        <div className="">
          <Introduction />
        </div>
      </div>
      <div className="w-full max-w-xl mx-auto md:w-1/2 md:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="card bg-white p-6 shadow-lg rounded-lg h-[85vh]">
          <ChatContainer />
        </div>
        
      </div>
     
    </main>
  );
}
