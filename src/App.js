import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import Footer from "./components/Footer";
import Main from "./images/mainBg.svg";
import Info from "./components/Info";


function App() {
  return (
    <div>
      <Navbar />
      <div className="relative isolate heder">
      {/* <img
        src={Main}
        alt=""
        className="absolute inset-0 -z-10 h-auto w-full object-cover object-right md:object-center"
      /> */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-300 ring-1 ring-slate-300 hover:ring-gray-900">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-6xl">
                Data to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                BoQ providing a detailed fact of quantities, specifications, and
                costs of materials needed for a project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's Begin
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-slate-300"
                >
                  More Info <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
      <Info/>
      <Services/>
      <Footer />
    </div>

    // <div >
    //   <div className="heder">
    //     <NavBar />
    //     <div className="heder_cont">
    //       <div className="hederText">
    //         <h2>PUTTING YOU & YOURS TOGETHER</h2>
    //         <h1 className="maintext">
    //           BEFORE YOU <br />
    //           BUILD
    //         </h1>
    //         <p>
    //           BoQ providing a detailed fact of quantities, specifications, and
    //           costs of materials needed for a project.
    //         </p>
    //         <a href="./features" className="main__button__link">
    //           <button type="button" className="heder__button">
    //             Let's Begin{" "}
    //           </button>
    //         </a>
    //       </div>
    //       <div className="heder-image">
    //         <img src={headerImage} alt={"heder"} />
    //       </div>
    //     </div>
    //     <FooterText
    //       leftText="Copyrigh © 2023 | All Right Reseved."
    //       rightText="DEVELOPED BY GROUP 09"
    //     />
    //   </div>
    //   {/* <img src={headerImage} alt={'heder'}/> */}
    //   <Footer />
    // </div>
  );
}

export default App;
