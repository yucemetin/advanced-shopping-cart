import { Offcanvas, Stack } from "react-bootstrap";
import { useFilter } from "../context/FilterContext";

type FilterProps = {
    isOpen: boolean
}

export default function Filter({ isOpen }: FilterProps) {
    const { closeFilter } = useFilter()
    return (
        <Offcanvas show={isOpen} onHide={closeFilter}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack>
                    <div>
                        asd
                    </div>
                    <button onClick={closeFilter}>ss</button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
