import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}
interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
 }
 
export const UsuarioLogadoContext = createContext({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Matheus'}}>
        {children}
    </UsuarioLogadoContext.Provider>
  );

};
