import type { NextPage } from "next";
import AddEmployeeForm from "src/components/NewEmployeeForm/NewEmployeeForm";

const Home: NextPage = () => {
  return (
    <main className="font-body h-screen">
      <AddEmployeeForm />
    </main>
  );
};

export default Home;
