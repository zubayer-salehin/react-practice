import { useEffect, useState } from "react";
import axios from "axios";


const InfinityScrolling = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
      .then(({ data }) => {
        if (page === 1) {
          setData(data);
        } else {
          setData((prevData) => [...prevData, ...data]);
        }
      })
      .catch(err => console.log(err))
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">
        Infinite Scrolling Example
      </h1>
      <div className="mx-10 grid grid-cols-3 gap-16">
        {data?.map(({ id, body, title }, i) => (
          <div key={i} className="p-10 shadow-xl bg-black text-white">
            <h4 className="w-10 h-10 flex justify-center items-center rounded-full bg-white text-black">
              {id}
            </h4>
            <p className="mt-5">{title}</p>
            <p className="mt-5">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfinityScrolling;