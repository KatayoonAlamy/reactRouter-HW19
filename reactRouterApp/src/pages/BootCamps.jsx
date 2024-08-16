import SingleBootcamp from "../components/SingleBootcamp";
import { useQuery } from "react-query";
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("http://localhost:3000/bootcamps");
  console.log(data);
  return data;
};

export default function BootCamps() {
  const { data, error, isLoading } = useQuery("dataKey", fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* <input
        type="text"
        placeholder="search here..."
        className="p-2 mb-2 border w-1/2"
        onChange={(e) =>
          setSearchParams((prev) => {
            if (e.target.value) {
              prev.set("name", e.target.value);
            } else {
              prev.delete("name");
            }
            return prev;
          })
        }
      /> */}
      <div className="grid grid-cols-4 gap-5 px-20 mt-10">
        {data.map((p) =>
          <SingleBootcamp key={p.id} product={p} data={data} />
        )}
      </div>
    </>
  );
}
