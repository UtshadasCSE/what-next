import Meals from "@/components/Meals";

const MealsPage = () => {
  return (
    <div>
      <div className="w-max mx-auto">
        <h2>Which meals you want?</h2>
        <div className="">
          <Meals />
        </div>
      </div>
    </div>
  );
};

export default MealsPage;
