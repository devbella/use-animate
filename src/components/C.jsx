import { useAnimate } from "../hooks";

const C = () => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <div
      ref={detectedRef}
      className="bg-yellow-100 min-h-screen flex flex-col justify-center items-center"
    >
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__bounce animate__infinite"
        } `}
        src="./images/unicorn.png"
        alt="unicorn2"
      />
    </div>
  );
};

export default C;
