export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center py-12">
          {children}
        </div>
      </div>
    </div>
  );
}