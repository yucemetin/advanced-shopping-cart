import { createContext, ReactNode, useContext, useState } from "react";
import Filter from "../components/Filter";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FilterProviderProps = {
    children: ReactNode
}

type FilterContext = {
    openFilter: () => void
    closeFilter: () => void
}


const FilterContext = createContext({} as FilterContext)

export function useFilter() {
    return useContext(FilterContext)
}

export function FilterProvider({ children }: FilterProviderProps) {
    const [isOpen, setIsOpen] = useState(false)

    const openFilter = () => setIsOpen(true)

    const closeFilter = () => setIsOpen(false)

    return (
        <FilterContext.Provider value={{ openFilter, closeFilter }}>
            {children}
            <Filter isOpen={isOpen} />
        </FilterContext.Provider>
    )
}