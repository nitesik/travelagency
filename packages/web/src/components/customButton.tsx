export default function CustomButton({ children }: { children: string }) {
  return (
    <button className="hover:bg-primary font-semibold border-2 transition-colors  border-primary text-primary hover:text-black w-fit px-10 py-5 rounded-full">
      {children}
    </button>
  );
}
