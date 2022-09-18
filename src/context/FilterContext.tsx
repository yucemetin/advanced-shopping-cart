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
    setMaxPrice: any
    storeItems: any
    search: string
    maxPrice: number
}

const FilterContext = createContext({} as FilterContext)

export function useFilter() {
    return useContext(FilterContext)
}

export function FilterProvider({ children }: FilterProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [storeItems, setStoreItems] = useState(Items)
    const [maxPrice, setMaxPrice] = useState(0)

    const openFilter = () => setIsOpen(true)

    const closeFilter = () => setIsOpen(false)

    useEffect(() => {
        if (search) {
            setStoreItems(Items.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
        } else {
            setStoreItems(Items)
        }
    }, [search])

    useEffect(() => {
        if (maxPrice > 0) {
            setStoreItems(Items.filter(item => item.price <= maxPrice))
        } else {
            setStoreItems(Items)
        }
    }, [maxPrice])

    return (
        <FilterContext.Provider value={{ openFilter, closeFilter, setSearch, setStoreItems, setMaxPrice, storeItems, search, maxPrice }}>
            {children}
            <Filter isOpen={isOpen} />
        </FilterContext.Provider>
    )
}