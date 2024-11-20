export default function Card({ children, className }) {
  return (
    <div
      className={`bg-white shadow-md shadow-gray-300 rounded-md p-4 mb-5 ${className}`}
    >
      {children}
    </div>
  );
}
