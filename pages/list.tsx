import { NextPage } from "next";
import ListEmployees from "src/components/ListEmployees/ListEmployees";

const List: NextPage = () => {
  return (
    <main className="font-body h-screen">
      <ListEmployees />
    </main>
  );
};
export default List;
