import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, LogOut, Menu, Bell, Building2, Plus, UserPlus } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar (Vacío según requerimientos, pero dejamos la estructura lista) */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              E
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">EMA</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 bg-primary/10 text-primary rounded-xl font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Inicio
          </Link>
          {/* Módulos futuros irían aquí */}
          <div className="px-3 py-2.5 text-slate-400 flex items-center gap-3 font-medium text-sm cursor-not-allowed">
            <Users className="w-5 h-5" />
            Usuarios (Próximamente)
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <button className="md:hidden p-2 text-slate-500 hover:text-slate-700">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-white cursor-pointer">
              JP
            </div>
          </div>
        </header>

        {/* Zona de contenido */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-slate-50/50">
          <div className="text-center animate-fade-in-up max-w-2xl w-full">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-primary/20">
              <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Aún no perteneces a ninguna empresa
            </h1>
            <p className="text-slate-500 mb-10 max-w-lg mx-auto">
              Para comenzar a utilizar EMA, necesitas crear el entorno de tu empresa o unirte a una existente mediante un código de invitación.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <button className="flex flex-col items-center justify-center p-8 border-2 border-slate-200 rounded-2xl hover:border-primary hover:bg-slate-50 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Crear Empresa</h3>
                <p className="text-sm text-slate-500 text-center">Configura un nuevo espacio de trabajo desde cero</p>
              </button>

              <button className="flex flex-col items-center justify-center p-8 border-2 border-slate-200 rounded-2xl hover:border-primary hover:bg-slate-50 transition-all group cursor-pointer shadow-sm hover:shadow-md">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UserPlus className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Unirse a Empresa</h3>
                <p className="text-sm text-slate-500 text-center">Ingresa con una invitación de tu equipo</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
