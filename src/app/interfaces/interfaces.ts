export interface ResLogin {
  ok: boolean;
  usuario: Usuario;
  token: string;
  menu: Menu[];
}

export interface Menu {
  titulo: string;
  icono: string;
  submenu: Submenu[];
}

export interface Submenu {
  titulo: string;
  url: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  email: string;
  password: string;
  confirmPassword: string;
  rol: string;
}

