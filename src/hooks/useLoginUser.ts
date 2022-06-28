import { useContext } from "react";
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserProvider";

export const useLoginUser= ():LoginUserContextType => 
    useContext(LoginUserContext); //contextの値を参照