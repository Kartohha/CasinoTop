import MainHeader from "./main/MainHeader";
const Main = ({ children }) => {
  return (
    <>
      <div className="">
        <MainHeader />
      </div>
      <>{children}</>
    </>
  );
};
export default Main;
