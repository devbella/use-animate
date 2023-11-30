import ImageComp from "./ImageComp";

const B = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col justify-center items-center gap-20">
      <ImageComp animateName="animate__bounce" image="unicorn.png" />
      <ImageComp animateName="animate__rotateIn" image="unicorn2.png" />
    </div>
  );
};

export default B;
