export const Footer = () => {
  return (
    <div className="w-full min-h-[150px] flex justify-center items-center bg-slate-500">
      <h3>&copy; {new Date().getFullYear()}</h3>
    </div>
  );
};
