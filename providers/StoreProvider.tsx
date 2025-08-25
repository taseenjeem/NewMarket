"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import DefaultLoadingScreen from "@/components/global/loadings/DefaultLoadingScreen";

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<DefaultLoadingScreen />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
