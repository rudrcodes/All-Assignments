import './App.css'
import { useState } from 'react';
import { carJson } from './car.js'
import Page1 from './Pages/Page1';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [currPage, setCurrPage] = useState(1);
  const navigate = useNavigate();
  const goToPage = (pg) => {
    if (pg < 1 || pg > 10) alert("Extremes hit")
    if (pg >= 1 && pg <= 10) {
      setCurrPage(pg);
      navigate(`/page/${pg}`);
      // console.log(pg + 1)
    }
    else {
      console.log("Pg at index 1, can't go beyond")
    }
  }
  // const goToPrevPage = (pg) => {
  //   if (pg > 1) {
  //     setCurrPage(pg);
  //     navigate(`/page/${pg}`);
  //   }
  //   else {
  //     console.log("Pg at index 1, can't go beyond")
  //   }
  // }
  // const goToNextPage = (pg) => {
  //   if (pg > 1) {
  //     setCurrPage(pg);
  //     navigate(`/page/${pg}`);
  //   }
  //   else {
  //     console.log("Pg at index 1, can't go beyond")
  //   }
  // }

  const cars = carJson;
  const searchPlace = () => {

  }
  return (

    <div className='p-2'>

      <nav className='t-0 bg-yellow-800 flex  items-center p-2 my-2'>
        <input placeholder='Search' className='py-3 px-4 rounded-xl text-black' onChange={() => {
          searchPlace();
        }} />
      </nav>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page/1" element={<Page1 />} />
        <Route path="/page/2" element={<div>Page 2</div>} />
        <Route path="/page/3" element={<div>Page 3</div>} />
        <Route path="/page/4" element={<div>Page 4</div>} />
        <Route path="/page/5" element={<div>Page 5</div>} />
        <Route path="/page/6" element={<div>Page 6</div>} />
        <Route path="/page/7" element={<div>Page 7</div>} />
        <Route path="/page/8" element={<div>Page 8</div>} />
        <Route path="/page/9" element={<div>Page 9</div>} />
        <Route path="/page/10" element={<div>Page 10</div>} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>

      {/* <MyPagination/> */}
      <ul className='flex justify-center items-center gap-2 font-bold '>
        <li >
          {currPage > 1 && <button onClick={() => goToPage(currPage - 1)}>
            Prev {'<'}
          </button>}
          {currPage == 1 && <button disabled className='disabled:opacity-30 bg-gray-200 text-black font-bold'>
            Prev {'<'}
          </button>}

        </li>
        <li className={`${(currPage == 1 ? 'border-2 border-white rounded-lg' : '')}`} >
          {/* <li className='opacity-90'> */}
          <button onClick={() => goToPage(1)}>
            1
          </button>
        </li>
        <li className={`${(currPage == 2 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(2)}>
            2
          </button>
        </li>
        <li className={`${(currPage == 3 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(3)}>
            3
          </button>
        </li>
        <li className={`${(currPage == 4 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(4)}>
            4
          </button>
        </li>
        <li className={`${(currPage == 5 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(5)}>
            5
          </button>
        </li>
        <li className={`${(currPage == 6 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(6)}>
            6
          </button>
        </li>
        <li className={`${(currPage == 7 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(7)}>
            7
          </button>
        </li>
        <li className={`${(currPage == 8 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(8)}>
            8
          </button>
        </li>
        <li className={`${(currPage == 9 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(9)}>
            9
          </button>
        </li>
        <li className={`${(currPage == 10 ? 'border-2 border-white rounded-lg' : '')}`} >
          <button onClick={() => goToPage(10)}>
            10
          </button>
        </li>
        <li>
          {currPage < 10 && <button onClick={() => goToPage(currPage + 1)}>
            Next {'>'}
          </button>}
          {currPage == 10 && <button disabled className='disabled:opacity-30 bg-gray-200 text-black font-bold'>
            Next {'<'}
          </button>}
        </li>
      </ul>
      {/* <Page1 /> */}

    </div>

  )
}

export default App
