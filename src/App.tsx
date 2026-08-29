import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar siempre visible */}

      {/* El contenido cambia según la ruta */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Footer siempre visible */}
    </div>
  );
}

export default App;
