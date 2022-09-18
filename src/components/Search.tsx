import { Button, FormControl } from "react-bootstrap"
import { useFilter } from "../context/FilterContext"

export default function Search() {
    const { openFilter, setSearch, search } = useFilter()
    return (
        <div className="d-flex w-100 justify-content-center ">
            <FormControl value={search} onChange={(e) => setSearch(e.target.value)} className="mb-2 bg bg-dark text-light" placeholder="Search a Product" style={{ maxWidth: "400px", border: "none" }} />
            <Button onClick={openFilter} variant="outline-dark" className="btn-sm" style={{ height: "36px", marginLeft: "5px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                </svg>
            </Button>
        </div>
    )
}
