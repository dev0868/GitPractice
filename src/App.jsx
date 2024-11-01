import { useFilterSidebarData } from "./hooks/useFilterSidebarData";
const App = () => {
  const { Package_Type, Destination, Activities, Days } =
    useFilterSidebarData();
  console.log(Package_Type);
  return <div>hii</div>;
};
export default App;
