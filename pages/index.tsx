import type { NextPage } from "next";
import NewEmployeeForm from "src/components/NewEmployeeForm/NewEmployeeForm";

const Home: NextPage = () => {
  return (
    <main className="font-body flex-grow">
      <NewEmployeeForm />
    </main>
  );
};

export default Home;
