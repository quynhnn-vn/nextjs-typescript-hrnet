import type { NextPage } from "next";
import NewEmployeeForm from "src/components/NewEmployeeForm/NewEmployeeForm";

const Home: NextPage = () => {
  return (
    <main className="font-body h-screen">
      <NewEmployeeForm />
    </main>
  );
};

export default Home;
