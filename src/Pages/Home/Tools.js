import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  // const [tools, setTools] = useState();

  const { data: tools, isLoading } = useQuery("tool", () =>
    fetch("http://localhost:5000/tool").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/tool")
  //     .then((res) => res.json())
  //     .then((data) => setTools(data));
  // }, []);
  return (
    <div className="px-28 my-12">
      <h3 className="text-2xl text-center my-12 font-bold">Our Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {tools?.map((tool) => (
          <ToolsCard key={tool._id} tool={tool}></ToolsCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
