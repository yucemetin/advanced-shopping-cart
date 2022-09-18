import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Filter from "../components/Filter";
import Items from "../data/items.json"

type FilterProviderProps = {
    children: ReactNode
}

type FilterContext = {
    openFilter: () => void
    closeFilter: () => void
    setSearch: any
    setStoreItems: any
    storeItems: any
    search: string
}

const FilterContext = createContext({} as FilterContext)

export function useFilter() {
    return useContext(FilterContext)
}

export function FilterProvider({ children }: FilterProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [storeItems, setStoreItems] = useState(Items)

    const openFilter = () => setIsOpen(true)

    const closeFilter = () => setIsOpen(false)

    useEffect(() => {
        if (search) {

            setStoreItems(Items.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        } else {
            setStoreItems(Items)
        }
    }, [search])

    return (
        <FilterContext.Provider value={{ openFilter, closeFilter, setSearch, setStoreItems, storeItems, search }}>
            {children}
            <Filter isOpen={isOpen} />
        </FilterContext.Provider>
    )
}